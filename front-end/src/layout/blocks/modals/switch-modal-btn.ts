import CreateElement from '../../elements/create-element';
import ManageModal from '../../../scripts/layout/manage-modal';

import { Tag } from '../../../types/enums';

class SwitchModalBtn {
  public static createSwitchModalBtn(
    btnText: string,
    btnAction: string,
    modalToHide: HTMLElement
  ): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: 'switch-modal-btn' },
    ]);
    const text = CreateElement.createElement(Tag.par, [
      { name: 'class', value: 'switch-modal-text' },
    ]);
    const action = CreateElement.createElement(Tag.par, [
      { name: 'class', value: 'switch-modal-action' },
    ]);

    text.textContent = btnText;
    action.textContent = btnAction;
    btn.append(text, action);
    btn.addEventListener('click', () => {
      ManageModal.switchModal(modalToHide);
    });

    return btn;
  }
}

export default SwitchModalBtn;
