import GameState from './game-state';
import Modal from './overal-func.ts/create-modal';
import ApiHandler from './api-handler';

class Reset {
  static state() {
    GameState.firstAppearance = true;
    GameState.firstFieldAppearance = true;
    GameState.userLvl = 1;
    GameState.userHp = 100;
    GameState.userSpells = [];
    GameState.currentGameBeasts = [];
  }

  static resetMethod(callback: () => void) {
    const { overlay, modal, modalText, button } = Modal.modalElements('reset-state');

    modalText.textContent = GameState.lib.resetModalInfo as string;
    button.textContent = GameState.lib.resetButton as string;

    button.addEventListener('click', () => {
      Reset.state();
      overlay.remove();
      callback();
      Modal.createStartModal();
      ApiHandler.setData();
    });

    modal.append(modalText, button);
    overlay.append(modal);
    GameState.gameWrapper.append(overlay);
  }
}

export default Reset;
