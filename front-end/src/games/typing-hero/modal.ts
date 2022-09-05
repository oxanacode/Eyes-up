import CreateElement from './app-scripts/app-create-element';
import GameState from './game-state';
import LevelState from './level-functionality/level-state';

import LvlCreate from './game-types/types';
import { Tag, GameValues, SandboxVadilValues } from './game-types/enums';

class Modal {
  static lvlStartCompleted(textContent: string, duration: number) {
    const modal = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lvl-start-completed-modal' }]);
    const content = CreateElement.createElement(Tag.par, [
      { name: 'class', value: 'lvl-start-completed-modal-content' },
    ]);

    content.textContent = textContent;
    setTimeout(() => {
      modal.remove();
    }, duration);
    modal.append(content);
    LevelState.lvlWrapper.append(modal);
  }

  static lvlComplete() {
    const modal = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lvl-complete-modal' }]);
    const content = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'lvl-complete-modal-content' }]);

    content.textContent = GameState.lib.levelCompleted;
    setTimeout(() => {
      content.remove();
    }, GameValues.completeModal);
    modal.append(content);
    LevelState.lvlWrapper.append(modal);
  }

  static preparationModal(lvlSpeed: number) {
    const modal = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lvl-complete-modal' }]);
    const content = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'lvl-complete-modal-content' }]);

    content.textContent = GameState.lib.preparation;
    setTimeout(() => {
      content.remove();
    }, lvlSpeed);
    modal.append(content);
    LevelState.lvlWrapper.append(modal);
  }

  static startModal() {
    const overlay = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'hero-start-menu-overlay' }]);
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'hero-start-menu-modal' }]);
    const title = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'hero-start-menu-title' }]);
    const textOne = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'hero-start-menu-text' }]);
    const textTwo = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'hero-start-menu-text' }]);
    const textThree = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'hero-start-menu-text' }]);
    const btnsImg = CreateElement.createElement(Tag.img, [
      { name: 'class', value: 'hero-start-menu-image' },
      { name: 'alt', value: 'buttons-image' },
      { name: 'src', value: './assets/games/typing-hero/letters-view.png' },
    ]);
    const completedImg = CreateElement.createElement(Tag.img, [
      { name: 'class', value: 'hero-start-menu-image' },
      { name: 'alt', value: 'completed-image' },
      { name: 'src', value: './assets/games/typing-hero/lvl-completed.png' },
    ]);
    const button = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'start-menu-button' }]);

    title.textContent = GameState.lib.startModalTitle;
    textOne.textContent = GameState.lib.startModalParagOne;
    textTwo.textContent = GameState.lib.startModalParagTwo;
    textThree.textContent = GameState.lib.startModalParagThree;
    button.textContent = GameState.lib.startModalButton;

    button.addEventListener('click', () => {
      overlay.remove();
    });

    wrapper.append(title, textOne, btnsImg, textTwo, completedImg, textThree, button);
    overlay.append(wrapper);
    GameState.firstAppearance = false;

    GameState.gameWrapper.append(overlay);
  }

  static sandboxModal(createSandbox: LvlCreate, menuCallback: () => void) {
    const overlay = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'sandbox-menu-overlay' }]);
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'sandbox-menu-modal' }]);
    const content = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'sandbox-modal-content' }]);
    const buttonsWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'sandbox-modal-buttons' }]);
    const title = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'sandbox-menu-title' }]);
    const closeButton = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'sandbox-close-modal-button' }]);
    const inputDescSpeed = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'sandbox-menu-title' }]);
    const inputDescDuration = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'sandbox-menu-title' }]);
    const inputDescColumns = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'sandbox-menu-title' }]);
    let speed: number;
    let duration: number;
    let columns: number;

    const inputSpeed = CreateElement.createElement(Tag.input, [
      { name: 'class', value: 'sandbox-input' },
    ]) as HTMLInputElement;
    const inputDuration = CreateElement.createElement(Tag.input, [
      { name: 'class', value: 'sandbox-input' },
    ]) as HTMLInputElement;
    const inputColumns = CreateElement.createElement(Tag.input, [
      { name: 'class', value: 'sandbox-input' },
    ]) as HTMLInputElement;
    const buttonStart = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: 'sandbox-start-button' },
    ]) as HTMLButtonElement;
    buttonStart.disabled = true;

    title.textContent = GameState.lib.sandboxModalText;
    inputDescSpeed.textContent = GameState.lib.sandboxInputSpeed;
    inputDescDuration.textContent = GameState.lib.sandboxInputDuration;
    inputDescColumns.textContent = GameState.lib.sandboxInputColumns;
    buttonStart.textContent = GameState.lib.sandboxButtonStart;
    closeButton.textContent = GameState.lib.closeModal;

    inputSpeed.addEventListener('input', () => {
      speed = +inputSpeed.value * GameValues.msMultiplier;
      buttonStart.disabled = Modal.sandboxValidChecker(speed, duration, columns);
    });
    inputDuration.addEventListener('input', () => {
      duration = +inputDuration.value * GameValues.msMultiplier;
      buttonStart.disabled = Modal.sandboxValidChecker(speed, duration, columns);
    });
    inputColumns.addEventListener('input', () => {
      columns = +inputColumns.value;
      buttonStart.disabled = Modal.sandboxValidChecker(speed, duration, columns);
    });
    buttonStart.addEventListener('click', () => {
      const sandboxWrapper = createSandbox('sandbox', columns, speed, duration, menuCallback);
      GameState.gameWrapper.innerHTML = '';
      GameState.gameWrapper.append(sandboxWrapper);
    });
    closeButton.addEventListener('click', () => overlay.remove());

    buttonsWrapper.append(closeButton, buttonStart);
    content.append(title, inputDescSpeed, inputSpeed, inputDescDuration, inputDuration, inputDescColumns, inputColumns);
    wrapper.append(content, buttonsWrapper);
    overlay.append(wrapper);
    GameState.gameWrapper.append(overlay);
  }

  static sandboxValidChecker(speed: number, duration: number, columns: number) {
    if (
      speed >= SandboxVadilValues.speedMin &&
      speed <= SandboxVadilValues.speedMax &&
      duration >= SandboxVadilValues.durationMin &&
      duration <= SandboxVadilValues.durationMax &&
      columns >= SandboxVadilValues.columnsMin &&
      columns <= SandboxVadilValues.columnsMax
    ) {
      return false;
    }

    return true;
  }
}

export default Modal;
