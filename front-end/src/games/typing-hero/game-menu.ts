import CreateElement from './app-scripts/app-create-element';
import Level from './level-functionality/level-creater';
import GameState from './game-state';
import LevelPoints from './level-functionality/level-points';
import Achievements from './achievements';
import Modal from './modal';
import UserData from './data-handler';
import Reset from './reset-state';

import { Tag, PointsType, GameName } from './game-types/enums';

class Menu {
  static createMenu() {
    const menuWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'hero-menu-wrapper' }]);
    const headerWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'hero-menu-header' }]);
    const gameTitle = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'hero-menu-title-wrapper' }]);
    const typingTitle = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'hero-menu-typing-title' }]);
    const heroTitle = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'hero-menu-hero-title' }]);
    const pointsWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'hero-menu-points-wrapper' }]);
    const bestPoints = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'hero-menu-best-points-wrapper' },
    ]);
    const overallPoints = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'hero-menu-overall-points-wrapper' },
    ]);
    const sandboxWrapper = CreateElement.createElement(Tag.section, [
      { name: 'class', value: 'hero-menu-sandbox-wrapper' },
    ]);
    const lvlsWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'hero-menu-lvls-wrapper' }]);
    const bestScore = Menu.createMenuPointsView(PointsType.best, PointsType.score);
    const bestAccuracy = Menu.createMenuPointsView(PointsType.best, PointsType.accuracy);
    const totalScore = Menu.createMenuPointsView(PointsType.total, PointsType.score);
    const averageAccuracy = Menu.createMenuPointsView(PointsType.average, PointsType.accuracy);
    const appButton = Menu.createMenuButton();
    const sandboxMenuTitle = CreateElement.createElement(Tag.h4, [{ name: 'class', value: 'hero-menu-sandbox-title' }]);
    const sandboxButton = Menu.sandboxButton();
    const resetButton = Menu.resetButton();
    const levelsNames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const testLvl = levelsNames.map((name) => Level.createLvlButton(name, Menu.updateMenu));

    typingTitle.textContent = GameName.typingPart;
    heroTitle.textContent = GameName.heroPart;
    sandboxMenuTitle.textContent = GameState.lib.sandboxMenuTitle;
    gameTitle.append(typingTitle, heroTitle);
    headerWrapper.append(appButton, gameTitle, resetButton);
    bestPoints.append(bestScore, bestAccuracy);
    overallPoints.append(totalScore, averageAccuracy);
    pointsWrapper.append(bestPoints, overallPoints);
    lvlsWrapper.append(...testLvl);
    sandboxWrapper.append(sandboxMenuTitle, sandboxButton);
    menuWrapper.append(headerWrapper, pointsWrapper, lvlsWrapper, sandboxWrapper);

    return menuWrapper;
  }

  static createMenuButton() {
    const button = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'hero-menu-app-button' }]);

    button.textContent = GameState.lib.appButton;
    button.addEventListener('click', () => {
      GameState.appCallbacks.switchPage(GameState.appCallbacks.page, GameState.appCallbacks.render);
      GameState.gameWrapper.remove();
    });

    return button;
  }

  static createMenuPointsView(wrapperType: string, pointsType: string) {
    const { wrapper, title, points } = LevelPoints.createPointsWrapper(`${wrapperType}-${pointsType}`);

    if (wrapperType === PointsType.best && pointsType === PointsType.score) {
      title.textContent = `${GameState.lib.bestScore} ${GameState.lib.score}`;
    }

    if (wrapperType === PointsType.best && pointsType === PointsType.accuracy) {
      title.textContent = `${GameState.lib.bestAccuracy} ${GameState.lib.accuracy}`;
    }

    if (wrapperType === PointsType.total && pointsType === PointsType.score) {
      title.textContent = `${GameState.lib.total} ${GameState.lib.totalScore}`;
    }

    if (wrapperType === PointsType.average && pointsType === PointsType.accuracy) {
      title.textContent = `${GameState.lib.average} ${GameState.lib.accuracy}`;
    }

    if (pointsType === PointsType.score) {
      GameState.bestScore = points;
      points.textContent = UserData.bestLvlScore.toString();
    }

    if (pointsType === PointsType.accuracy) {
      GameState.bestAccuracy = points;
      if (UserData.bestLvlAccuracy === PointsType.basePointsContent) {
        points.textContent = UserData.bestLvlAccuracy;
      } else {
        points.textContent = `${UserData.bestLvlAccuracy.toString()}%`;
      }
    }

    if (wrapperType === PointsType.total && pointsType === PointsType.score) {
      GameState.totalScore = points;
      points.textContent = UserData.totalScore.toString();
    }

    if (wrapperType === PointsType.average && pointsType === PointsType.accuracy) {
      GameState.totalScore = points;
      if (UserData.averageAccuracy === PointsType.basePointsContent) {
        points.textContent = UserData.averageAccuracy;
      } else {
        points.textContent = `${UserData.averageAccuracy}%`;
      }
    }

    wrapper.append(title, points);

    return wrapper;
  }

  static updateMenu() {
    const newMenu = Menu.createMenu();

    GameState.gameWrapper.innerHTML = '';
    GameState.gameWrapper.append(newMenu);
    Achievements.achievementChecker();
    console.log(GameState.firstAppearance);
    UserData.setData();
  }

  static sandboxButton() {
    const button = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'hero-menu-sandbox-button' }]);

    button.textContent = GameState.lib.sandboxButton;
    button.addEventListener('click', () => {
      Modal.sandboxModal(Level.createLvl, Menu.updateMenu);
    });

    return button;
  }

  static resetButton() {
    const button = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'hero-menu-reset-button' }]);

    button.textContent = GameState.lib.resetButton;
    button.addEventListener('click', () => {
      Reset.resetMethod(Menu.updateMenu);
    });

    return button;
  }
}

export default Menu;
