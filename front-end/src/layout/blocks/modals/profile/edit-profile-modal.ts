import State from '../../../../scripts/state/state';
import CreateElement from '../../../elements/create-element';
import EditProfileHeader from './edit-profile-header';
import ProfileData from './profile-data';
import SaveChangesBtn from './save-changes-btn';
import ProfileAvatars from './profile-avatars';
import DeleteAccountBtn from './delete-account-btn';
import ProfileSubtitle from './profile-subtitle';
import ManageProfileState from '../../../../scripts/profile/manage-profile-state';
import ManageModal from '../../../../scripts/layout/manage-modal';
import ConfirmationContent from '../confirmation/confirmation-content';
import translation from '../../../../data/translation';

import { Confirmation, Profile, Tag } from '../../../../types/enums';
import { RenderHandler } from '../../../../types/types';
import { User } from '../../../../types/interfaces';

class EditProfileModal {
  public static createEditProfileModal(editProfile: HTMLElement, user: User, render: RenderHandler): void {
    ManageProfileState.updateProfileState(user);
    ManageModal.clearModalContent(editProfile);

    const header = EditProfileHeader.createEditProfileHeader(editProfile);
    const errorBlock = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'error-block profile-error-block' },
    ]);
    const saveChangesBtn = SaveChangesBtn.createSaveChangesBtn(user, errorBlock, render);
    const data = ProfileData.createViewProfileData(user, Profile.edit, saveChangesBtn);
    const avatarsTitle = ProfileSubtitle.createProfileSubtitle(translation.profileAvatarsTitle[State.currentLang]);
    const avatars = ProfileAvatars.createProfileAvatars(user, data, saveChangesBtn);
    const deleteAccountWrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'delete-account-confirmation-wrapper' },
    ]);
    const deleteAccountConfirmation = ConfirmationContent.createConfirmationContent(
      deleteAccountWrapper,
      'delete-account-confirmation-content hidden',
      render,
      Confirmation.delete,
      user
    );
    const deleteAccountBtn = DeleteAccountBtn.createDeleteAccountBtn(deleteAccountWrapper);

    deleteAccountWrapper.append(deleteAccountConfirmation, deleteAccountBtn);
    editProfile.append(header, data, errorBlock, avatarsTitle, avatars, deleteAccountWrapper, saveChangesBtn);
  }
}

export default EditProfileModal;
