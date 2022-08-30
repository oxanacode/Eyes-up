import CreateElement from '../../../elements/create-element';
import ManageModal from '../../../../scripts/layout/manage-modal';
import EditProfileModal from './edit-profile-modal';
import SwitchPasswordVisibility from '../../../../scripts/layout/switch-password-visibility';
import ManageConfirmation from '../../../../scripts/layout/manage-confirmation';

import { Tag } from '../../../../types/enums';
import { User } from '../../../../types/interfaces';
import { RenderHandler } from '../../../../types/types';

class EditProfileBtn {
  public static createEditProfileBtn(
    dataBlock: HTMLElement,
    condirmationWrapper: HTMLElement,
    editProfile: HTMLElement,
    user: User,
    render: RenderHandler,
    modalToHide: HTMLElement
  ): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'small-btn edit-btn profile-btn' }]);

    btn.textContent = 'Edit profile';
    btn.addEventListener('click', () => {
      SwitchPasswordVisibility.hidePassword(dataBlock);
      ManageConfirmation.hideConfirmation(condirmationWrapper);
      EditProfileModal.createEditProfileModal(editProfile, user, render);
      ManageModal.switchModal(modalToHide);
    });

    return btn;
  }
}

export default EditProfileBtn;
