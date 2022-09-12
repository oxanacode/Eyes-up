import CreateElement from './app-scripts/app-create-element';
import UserData from './data-handler';
import GameState from './game-state';
import Modal from './modal';
import Achievements from './achievements';

import { Tag, PointsType, GameValues } from './game-types/enums';

class Reset {
  static state() {
    GameState.firstAppearance = true;
    UserData.lvlsDone = GameValues.initialValue;
    UserData.bestLvlScore = PointsType.basePointsContent;
    UserData.bestLvlAccuracy = PointsType.basePointsContent;
    UserData.totalScore = PointsType.basePointsContent;
    UserData.averageAccuracy = PointsType.basePointsContent;
  }

  static resetLvlsPoints() {
    const lvls = Object.keys(UserData.levels);

    lvls.forEach((lvl) => {
      UserData.levels[lvl].score = GameValues.initialValue;
      UserData.levels[lvl].accuracy = GameValues.initialValue;
    });
  }

  static achievementClear() {
    const names = Object.keys(Achievements.current);

    names.forEach((name) => {
      Achievements.current[name] = false;
    });
  }

  static resetMethod(callback: () => void) {
    const overlay = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'hero-reset-overlay' }]);
    const modal = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'hero-reset-modal' }]);
    const content = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'hero-reset-content' }]);
    const buttonsWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'hero-reset-buttons' }]);
    const button = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'hero-reset-button' }]);
    const closeButton = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'hero-reset-close-button' }]);

    content.textContent = GameState.lib.resetModalInfo;
    button.textContent = GameState.lib.resetButton;
    closeButton.textContent = GameState.lib.closeModal;

    button.addEventListener('click', () => {
      Reset.state();
      Reset.resetLvlsPoints();
      Reset.achievementClear();
      overlay.remove();
      callback();
      Modal.startModal();
      UserData.setData();
    });

    closeButton.addEventListener('click', () => {
      overlay.remove();
    });

    buttonsWrapper.append(button, closeButton);
    modal.append(content, buttonsWrapper);
    overlay.append(modal);
    GameState.gameWrapper.append(overlay);
  }
}

export default Reset;
