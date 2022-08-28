import CreateElement from '../overal-func.ts/create-element';
import GameState from '../game-state';
import FieldState from './field-state';
import Modal from '../overal-func.ts/create-modal';

import { Tag } from '../game-types/enums';

class FieldTutorial {
  static actionFunc: () => void;

  static tutorialOverlay: HTMLElement;

  static startModal(callback: () => void) {
    const { overlay, modal, modalText, button } = Modal.modalElements('field-tutorial');
    const title = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'field-tutorial-title' }]);
    const warning = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'field-tutorial-warning' }]);
    const escButton = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'field-tutorial-button' }]);
    const buttonsWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'field-tutorial-buttons' }]);

    title.textContent = GameState.lib.fieldTutorialModalParagOne as string;
    modalText.textContent = GameState.lib.fieldTutorialModalParagTwo as string;
    warning.textContent = GameState.lib.fieldTutorialModalParagThree as string;
    button.textContent = GameState.lib.fieldTutorialModalParagButtonStart as string;
    escButton.textContent = GameState.lib.fieldTutorialModalParagButtonEsc as string;

    FieldTutorial.tutorialOverlay = overlay;

    button.addEventListener('click', () => {
      FieldTutorial.createHintOne();
      modal.remove();
    });
    escButton.addEventListener('click', () => {
      overlay.remove();
      callback();
    });

    buttonsWrapper.append(button, escButton);
    modal.append(title, modalText, warning, buttonsWrapper);
    overlay.append(modal);

    FieldTutorial.actionFunc = callback;
    GameState.gameWrapper.append(overlay);
  }

  static tutorialHint(
    hintCount: string,
    textContent: string,
    parentElement: HTMLElement,
    callback: () => void,
    buttonContent?: string,
    finalHint?: boolean
  ) {
    const { modal, modalText, button } = Modal.modalElements(hintCount);

    modalText.textContent = textContent;
    if (buttonContent) {
      button.textContent = buttonContent;
    } else {
      button.textContent = GameState.lib.fieldTutorialButtonNext as string;
    }

    button.addEventListener('click', () => {
      callback();
      modal.remove();
      if (finalHint) FieldTutorial.tutorialOverlay.remove();
    });

    modal.append(modalText, button);
    parentElement.append(modal);
  }

  static createHintOne() {
    const textContent = GameState.lib.fieldTutorialHintOne as string;

    FieldTutorial.tutorialHint('hint-one', textContent, FieldState.actionTotal, FieldTutorial.createHintTwo);
  }

  static createHintTwo() {
    const textContent = GameState.lib.fieldTutorialHintTwo as string;

    FieldTutorial.tutorialHint('hint-two', textContent, FieldState.spellsPanel, FieldTutorial.createHintThree);
  }

  static createHintThree() {
    const textContent = GameState.lib.fieldTutorialHintThree as string;

    FieldTutorial.tutorialHint('hint-three', textContent, FieldState.heroPanel, FieldTutorial.createHintFour);
  }

  static createHintFour() {
    const textContent = GameState.lib.fieldTutorialHintFour as string;

    FieldTutorial.tutorialHint('hint-four', textContent, FieldState.beastPanel, FieldTutorial.createFinalHint);
  }

  static createFinalHint() {
    const textContent = GameState.lib.fieldTutorialHintFive as string;
    const buttonContent = GameState.lib.fieldTutorialButtonDone as string;

    FieldTutorial.tutorialHint(
      'hint-five',
      textContent,
      FieldState.actionTotal,
      FieldTutorial.actionFunc,
      buttonContent,
      true
    );
  }
}

export default FieldTutorial;
