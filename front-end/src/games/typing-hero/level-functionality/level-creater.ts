import CreateElement from '../app-scripts/app-create-element';
import GameState from '../game-state';
import LevelState from './level-state';
import LevelPoints from './level-points';
import { levelValues, levelMaxScore } from './levels-values';

import { Tag, GameValues } from '../game-types/enums';
import UserData from '../data-handler';
import Modal from '../modal';

class Level {
  static createLvlButton(lvlNum: string, menuCallback: () => void) {
    const button = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'lvl-section-button' }]);
    const lvlTitle = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'lvl-section-title' }]);
    const buttonContent = Level.createButtonContent(lvlNum);

    lvlTitle.textContent = `${GameState.lib.level} ${lvlNum}`;

    button.addEventListener('click', () => {
      GameState.gameWrapper.innerHTML = '';
      GameState.gameWrapper.append(
        Level.createLvl(
          lvlNum,
          levelValues[lvlNum].columns,
          levelValues[lvlNum].speed,
          levelValues[lvlNum].duration,
          menuCallback
        )
      );
    });

    button.append(lvlTitle, buttonContent);
    return button;
  }

  static createButtonContent(lvlNum: string) {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lvl-button-content' }]);

    const userScore = UserData.levels[lvlNum].score;
    const userAccuracy = UserData.levels[lvlNum].accuracy;

    if (userScore === 0) {
      const baseTitle = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'lvl-button-base-title' }]);

      baseTitle.textContent = GameState.lib.baseLvlContent;

      wrapper.append(baseTitle);
    } else {
      const score = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'lvl-button-score' }]);
      const accuracy = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'lvl-button-accuracy' }]);

      score.textContent = `${GameState.lib.score}: ${userScore}/${levelMaxScore[lvlNum]}`;
      accuracy.textContent = `${GameState.lib.accuracy}: ${userAccuracy}%`;

      wrapper.append(score, accuracy);
    }

    return wrapper;
  }

  static createLvl(lvlNum: string, columns: number, lvlSpeed: number, lvlDuration: number, menuCallback: () => void) {
    const lvlWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lvl-wrapper' }]);
    const lvlField = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lvl-field' }]);
    const pointsWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'current-points-wrapper' }]);
    const userPointsWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'user-points-wrapper' }]);
    const fieldContentWrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'field-content-wrapper' },
    ]);
    const { score, accuracy } = LevelPoints.createScoreAccuracyWrappers();
    const { userScore, userAccuracy } = LevelPoints.createUserPointsWrappers(lvlNum);
    const menuButton = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'field-menu-button' }]);
    menuButton.textContent = GameState.lib.levelButton;

    const fieldColumns: HTMLElement[] = [];

    for (let i = 0; i < columns; i += 1) {
      const column = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lvl-field-column' }]);
      fieldColumns.push(column);
    }

    LevelState.lvlColumns = fieldColumns;

    const intervalLvl = setInterval(() => {
      Level.createKeys(lvlSpeed, LevelState.lvlColumns);
    }, lvlSpeed);

    window.addEventListener('keypress', Level.keyChecker);

    const saveResultTime = lvlSpeed * GameValues.resultTimeMultiplier;
    const timeoutLvl = setTimeout(() => {
      clearInterval(intervalLvl);
      setTimeout(() => {
        LevelPoints.saveResult(lvlNum);
        Modal.lvlComplete();
      }, saveResultTime);
    }, lvlDuration);

    menuButton.addEventListener('click', () => {
      clearInterval(intervalLvl);
      clearTimeout(timeoutLvl);
      window.removeEventListener('keypress', Level.keyChecker);
      menuCallback();
      LevelPoints.clearPointsAndState();
    });

    lvlField.append(...fieldColumns);
    pointsWrapper.append(score, accuracy);
    userPointsWrapper.append(userScore, userAccuracy);
    fieldContentWrapper.append(userPointsWrapper, lvlField, pointsWrapper);
    lvlWrapper.append(menuButton, fieldContentWrapper);
    LevelState.lvlWrapper = lvlWrapper;

    return lvlWrapper;
  }

  static createKeys(lvlSpeed: number, columns: HTMLElement[]) {
    columns.forEach((column) => {
      setTimeout(() => {
        const key = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'column-key' }]);
        const keyValue = Level.getKeyValue();
        const finishKeyTime = lvlSpeed + 500;

        key.textContent = keyValue;
        key.classList.add(keyValue);
        LevelState.currentFieldKeys.push(key);

        setTimeout(() => {
          key.style.transition = `margin ${lvlSpeed}ms linear, background-color 500ms`;
          key.style.margin = `${GameValues.marginRoad}px auto`;
        }, GameValues.keysStep);

        key.addEventListener('transitionend', () => key.remove());

        setTimeout(() => {
          LevelState.currentFieldKeys = LevelState.currentFieldKeys.map((arrKey) => {
            if (arrKey === key) return null;
            return arrKey;
          });

          key.remove();
        }, finishKeyTime);

        column.append(key);
      }, Level.randomValue(lvlSpeed));
    });
  }

  static randomValue(num: number) {
    const randomMs = Math.random() * num;
    const result = Math.trunc(randomMs);

    return result;
  }

  static getKeyValue() {
    const keysLength = GameState.keys.length;
    const randomKeyNum = Level.randomValue(keysLength);
    const randomKey = GameState.keys[randomKeyNum];

    return randomKey;
  }

  static keyChecker(event: KeyboardEvent) {
    const currentKey = event.key;
    const currentUpperKey = event.key.toUpperCase();
    let keyCounter = 1;

    LevelState.currentPressKeys.push(currentKey);

    LevelState.currentFieldKeys.forEach((key, index) => {
      if (key === null) return;

      if (key.classList.contains(currentKey) || key.classList.contains(currentUpperKey)) {
        if (keyCounter === 1) {
          key.classList.add('select');

          LevelState.matchedKeys.push(currentKey);
          LevelPoints.scoreHandler();
          LevelState.currentFieldKeys.splice(index, 1);

          keyCounter += 1;
        }
      }
    });

    LevelPoints.accuracyHandler();
  }
}

export default Level;
