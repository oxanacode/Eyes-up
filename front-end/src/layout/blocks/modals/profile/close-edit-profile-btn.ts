import ManageModal from '../../../../scripts/layout/manage-modal';
import CreateElement from '../../../elements/create-element';

import { Tag } from '../../../../types/enums';

class CloseEditProfileBtn {
  public static createCloseEditProfileBtn(modalToHide: HTMLElement): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'small-btn close-btn profile-btn' }]);

    btn.addEventListener('click', () => {
      ManageModal.switchModal(modalToHide);
    });

    return btn;
  }
}

export default CloseEditProfileBtn;
