import CreateElement from './create-element';
import FieldState from '../game-field/field-state';
import GameState from '../game-state';

import { Tag } from '../game-types/enums';

class Modal {
  static modalElements(modalType: string) {
    const overlay = CreateElement.createElement(Tag.div, [{ name: 'class', value: `${modalType}-modal-overlay` }]);
    const modal = CreateElement.createElement(Tag.div, [{ name: 'class', value: `${modalType}-modal-window` }]);
    const modalText = CreateElement.createElement(Tag.par, [{ name: 'class', value: `${modalType}-modal-content` }]);
    const button = CreateElement.createElement(Tag.btn, [{ name: 'class', value: `${modalType}-modal-button` }]);

    return { overlay, modal, modalText, button };
  }

  static createFieldModal(message: string, messageInfo?: string) {
    const { overlay, modal, modalText, button } = Modal.modalElements('field');

    modalText.textContent = message;
    button.textContent = GameState.lib.toMap as string;

    button.addEventListener('click', () => {
      overlay.remove();
      FieldState.beastInstance.renderCallback();
    });

    if (messageInfo) {
      const modalInfo = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'field-modal-content-info' }]);

      modalInfo.textContent = messageInfo;
      modal.append(modalText, button);
    } else {
      modal.append(modalText, button);
    }

    overlay.append(modal);
    GameState.gameWrapper.append(overlay);
  }

  static createWelcomeModal(apiCallback: () => void) {
    const { overlay, modal, modalText, button } = Modal.modalElements('welcome');

    const title = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'welcome-modal-text' }]);
    const warning = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'welcome-modal-warning' }]);
    const buttonsWrapper = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'welcome-modal-buttons' }]);
    const layoutButton = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'welcome-layout-button' }]);

    title.textContent = GameState.lib.welcomeModalTitle as string;
    modalText.textContent = GameState.lib.welcomeModalMessage as string;
    warning.textContent = GameState.lib.welcomeModalWarning as string;
    layoutButton.textContent = GameState.lib.welcomeModalToLayoutBtn as string;
    button.textContent = GameState.lib.welcomeModalСontinue as string;

    layoutButton.addEventListener('click', () => {
      GameState.appCallbacks.switchPage(GameState.appCallbacks.page, GameState.appCallbacks.render);
    });
    button.addEventListener('click', () => {
      Modal.createStartModal();
      overlay.remove();
    });

    buttonsWrapper.append(layoutButton, button);
    modal.append(title, modalText, warning, buttonsWrapper);
    overlay.append(modal);

    GameState.firstAppearance = false;
    apiCallback();
    GameState.gameWrapper.append(overlay);
  }

  static createStartModal() {
    const { overlay, modal, modalText, button } = Modal.modalElements('start');

    const textContent = [
      'startModalParagOne',
      'startModalMap',
      'startModalParagTwo',
      'startModalField',
      'startModalParagThree',
      'startModalParagFour',
    ].map((text) => {
      if (text === 'startModalMap') {
        return CreateElement.createElement(Tag.img, [
          { name: 'class', value: 'start-modal-img' },
          { name: 'alt', value: 'game-map' },
          { name: 'src', value: './assets/typing-adventure/map.png' },
        ]);
      }
      if (text === 'startModalField') {
        return CreateElement.createElement(Tag.img, [
          { name: 'class', value: 'start-modal-img' },
          { name: 'alt', value: 'game-map' },
          { name: 'src', value: './assets/typing-adventure/basic-field.png' },
        ]);
      }

      const newText = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'start-modal-text' }]);
      newText.textContent = GameState.lib[text] as string;

      return newText;
    });

    modalText.textContent = GameState.lib.startModalParagFive as string;
    button.textContent = GameState.lib.startModalButton as string;

    button.addEventListener('click', () => {
      overlay.remove();
    });

    modal.append(...textContent, modalText, button);
    overlay.append(modal);

    GameState.gameWrapper.append(overlay);
  }
}

export default Modal;
