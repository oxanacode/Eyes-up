import CreateElement from '../../../elements/create-element';
import ManageModal from '../../../../scripts/layout/manage-modal';

import { Tag } from '../../../../types/enums';

class EditProfileBtn {
  public static createEditProfileBtn(modalToHide: HTMLElement): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'small-btn edit-btn profile-btn' }]);

    btn.textContent = 'Edit profile';
    btn.addEventListener('click', () => {
      ManageModal.switchModal(modalToHide);
    });

    return btn;
  }
}

export default EditProfileBtn;
