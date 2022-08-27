import State from '../../../../scripts/state/state';
import CreateElement from '../../../elements/create-element';
import EditProfileHeader from './edit-profile-header';
import ProfileData from './profile-data';

import { Profile, Tag } from '../../../../types/enums';
import { RenderHandler } from '../../../../types/types';
import { User } from '../../../../types/interfaces';
import SaveChangesBtn from './save-changes-btn';
import ProfileAvatars from './profile-avatars';
import DeleteAccountBtn from './delete-account-btn';

class EditProfileModal {
  public static createEditProfileModal(user: User, render: RenderHandler): HTMLElement {
    const modal = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-modal-content hidden' }]);
    const header = EditProfileHeader.createEditProfileHeader(modal);
    const saveChangesBtn = SaveChangesBtn.createSaveChangesBtn();
    const data = ProfileData.createViewProfileData(user, Profile.edit, saveChangesBtn);
    const avatars = ProfileAvatars.createProfileAvatars(data);
    const deleteAccountBtn = DeleteAccountBtn.createDeleteAccountBtn(user);

    modal.append(header, data, avatars, deleteAccountBtn, saveChangesBtn);

    if (State.currentUser.login === '42') {
      render();
    }

    return modal;
  }
}

export default EditProfileModal;
