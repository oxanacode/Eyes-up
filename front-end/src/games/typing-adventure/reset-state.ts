import GameState from './game-state';
import Modal from './overal-func.ts/create-modal';
import ApiHandler from './api-handler';
import CreateElement from './overal-func.ts/create-element';
import Achievements from './achievements';

import { Tag } from './game-types/enums';

class Reset {
  static state() {
    GameState.firstAppearance = true;
    GameState.firstFieldAppearance = true;
    GameState.userLvl = 1;
    GameState.userHp = 100;
    GameState.userSpells = [];
    GameState.currentGameBeasts = [];
  }

  static achievementClear() {
    const names = Object.keys(Achievements.current);

    names.forEach((name) => {
      Achievements.current[name] = false;
    });
  }

  static resetMethod(callback: () => void) {
    const { overlay, modal, modalText, button } = Modal.modalElements('reset-state');
    const buttonsWrapper = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: 'adventure-reset-buttons-wrapper' },
    ]);
    const resetCloseButton = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: 'adventure-reset-close-button' },
    ]);

    resetCloseButton.textContent = GameState.lib.layoutButton as string;
    modalText.textContent = GameState.lib.resetModalInfo as string;
    button.textContent = GameState.lib.resetButton as string;

    resetCloseButton.addEventListener('click', () => {
      overlay.remove();
    });
    button.addEventListener('click', () => {
      Reset.state();
      Reset.achievementClear();
      overlay.remove();
      callback();
      Modal.createWelcomeModal(ApiHandler.setData);
    });

    buttonsWrapper.append(resetCloseButton, button);
    modal.append(modalText, buttonsWrapper);
    overlay.append(modal);
    GameState.gameWrapper.append(overlay);
  }
}

export default Reset;
