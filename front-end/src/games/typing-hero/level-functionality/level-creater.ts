import CreateElement from '../app-scripts/app-create-element';
import GameState from '../game-state';
import LevelState from './level-state';
import LevelPoints from './level-points';
import { levelValues, levelMaxScore } from './levels-values';
import UserData from '../data-handler';
import Modal from '../modal';

import { Tag, GameValues } from '../game-types/enums';

class Level {
  static createLvlButton(lvlNum: string, menuCallback: () => void) {
    const button = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'lvl-section-button' }]);
    const lvlTitle = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'lvl-section-title' }]);
    const userScore = UserData.levels[lvlNum].score;

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

    if (userScore === GameValues.startScore) {
      button.classList.add('basic');
      button.append(lvlTitle);
    } else {
      const buttonContent = Level.createButtonContent(lvlNum, button);

      button.append(lvlTitle, buttonContent);
    }

    return button;
  }

  static createButtonContent(lvlNum: string, currenButton: HTMLElement) {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lvl-button-content' }]);
    const userScore = UserData.levels[lvlNum].score;
    const userAccuracy = UserData.levels[lvlNum].accuracy;

    const scoreTitle = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'lvl-button-score-title' }]);
    const accuracyTitle = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'lvl-button-accuracy-title' }]);
    const score = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'lvl-button-score' }]);
    const accuracy = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'lvl-button-accuracy' }]);
    const scoreWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lvl-button-score-wrapper' }]);
    const accuracyWrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'lvl-button-accuracy-wrapper' },
    ]);

    scoreTitle.textContent = `${GameState.lib.score.slice(0, -1)}`;
    accuracyTitle.textContent = `${GameState.lib.accuracy.slice(0, -1)}`;
    score.textContent = `${userScore}/${levelMaxScore[lvlNum]}`;
    accuracy.textContent = `${userAccuracy}%`;
    currenButton.classList.add('completed');

    scoreWrapper.append(scoreTitle, score);
    accuracyWrapper.append(accuracyTitle, accuracy);
    wrapper.append(scoreWrapper, accuracyWrapper);

    return wrapper;
  }

  static createLvl(lvlNum: string, columns: number, lvlSpeed: number, lvlDuration: number, menuCallback: () => void) {
    const lvlWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lvl-wrapper' }]);
    const lvlField = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lvl-field' }]);
    const currentPointsWrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'current-points-wrapper' },
    ]);
    const userPointsWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'user-points-wrapper' }]);
    const allPointsWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'field-points-wrapper' }]);
    const { score, accuracy } = LevelPoints.createScoreAccuracyWrappers();
    const { userScore, userAccuracy } = LevelPoints.createUserPointsWrappers(lvlNum);
    const menuButton = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'field-menu-button' }]);
    const menuButtonWrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'field-menu-button-wrapper' },
    ]);
    const saveResultTime = lvlSpeed * GameValues.resultTimeMultiplier;
    const fieldColumns: HTMLElement[] = [];

    menuButton.textContent = GameState.lib.levelButton;

    for (let i = 0; i < columns; i += 1) {
      const column = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lvl-field-column' }]);
      fieldColumns.push(column);
    }

    LevelState.lvlColumns = fieldColumns;

    const intervalLvl = setInterval(() => {
      Level.createKeys(lvlSpeed, LevelState.lvlColumns);
    }, lvlSpeed);

    window.addEventListener('keypress', Level.keyChecker);

    const timeoutLvl = setTimeout(() => {
      clearInterval(intervalLvl);
      setTimeout(() => {
        LevelPoints.saveResult(lvlNum);
        Modal.lvlStartCompleted(GameState.lib.levelCompleted, GameValues.completeModal);
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
    menuButtonWrapper.append(menuButton);
    currentPointsWrapper.append(score, accuracy);
    userPointsWrapper.append(userScore, userAccuracy);
    allPointsWrapper.append(userPointsWrapper, currentPointsWrapper);
    lvlWrapper.append(menuButtonWrapper, allPointsWrapper, lvlField);
    LevelState.lvlWrapper = lvlWrapper;
    Modal.lvlStartCompleted(GameState.lib.preparationContent, lvlSpeed);

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
          key.style.margin = `${GameValues.marginRoad}rem auto`;
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
    let keyCounter = GameValues.keyCounterStep;

    LevelState.currentPressKeys.push(currentKey);

    LevelState.currentFieldKeys.forEach((key, index) => {
      if (key === null) return;

      if (key.classList.contains(currentKey) || key.classList.contains(currentUpperKey)) {
        if (keyCounter === GameValues.keyCounterStep) {
          key.classList.add('select');

          LevelState.matchedKeys.push(currentKey);
          LevelPoints.scoreHandler();
          LevelState.currentFieldKeys.splice(index, GameValues.keyCounterStep);

          keyCounter += GameValues.keyCounterStep;
        }
      }
    });

    LevelPoints.accuracyHandler();
  }
}

export default Level;
