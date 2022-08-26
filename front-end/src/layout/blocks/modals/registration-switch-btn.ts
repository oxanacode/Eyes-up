import CreateElement from '../../elements/create-element';
import ManageModal from '../../../scripts/layout/manage-modal';

import { Tag } from '../../../types/enums';

class RegistrationSwitchBtn {
  public static createRegistrationSwitchBtn(btnText: string, btnAction: string, modalToHide: HTMLElement): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'registration-switch-btn' }]);
    const text = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'registration-switch-text' }]);
    const action = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'registration-switch-action' }]);

    text.textContent = btnText;
    action.textContent = btnAction;
    btn.append(text, action);
    btn.addEventListener('click', () => {
      ManageModal.switchModal(modalToHide);
    });

    return btn;
  }
}

export default RegistrationSwitchBtn;
