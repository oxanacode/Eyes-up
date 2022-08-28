import State from '../../../../scripts/state/state';
import CreateElement from '../../../elements/create-element';
import EditProfileHeader from './edit-profile-header';
import ProfileData from './profile-data';
import SaveChangesBtn from './save-changes-btn';
import ProfileAvatars from './profile-avatars';
import DeleteAccountBtn from './delete-account-btn';
import ProfileSubtitle from './profile-subtitle';
import translation from '../../../../data/translation';

import { Profile, Tag } from '../../../../types/enums';
import { RenderHandler } from '../../../../types/types';
import { User } from '../../../../types/interfaces';

class EditProfileModal {
  public static createEditProfileModal(user: User, render: RenderHandler): HTMLElement {
    const modal = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-modal-content hidden' }]);
    const header = EditProfileHeader.createEditProfileHeader(modal);
    const saveChangesBtn = SaveChangesBtn.createSaveChangesBtn(render);
    const data = ProfileData.createViewProfileData(user, Profile.edit, saveChangesBtn);
    const avatarsTitle = ProfileSubtitle.createProfileSubtitle(translation.profileAvatarsTitle[State.currentLang]);
    const avatars = ProfileAvatars.createProfileAvatars(user, data, saveChangesBtn);
    const deleteAccountBtn = DeleteAccountBtn.createDeleteAccountBtn(user, render);

    modal.append(header, data, avatarsTitle, avatars, deleteAccountBtn, saveChangesBtn);

    return modal;
  }
}

export default EditProfileModal;
