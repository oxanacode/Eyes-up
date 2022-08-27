import CreateElement from '../../../elements/create-element';
import ViewProfileModal from './view-profile-modal';
import EditProfileModal from './edit-profile-modal';
import ApiService from '../../../../scripts/api/api-service';
import State from '../../../../scripts/state/state';
import ManageProfileState from '../../../../scripts/profile/manage-profile-state';

import { Tag } from '../../../../types/enums';
import { RenderHandler } from '../../../../types/types';
import { User } from '../../../../types/interfaces';

class ProfileModal {
  public static createProfileModal(modalToClose: HTMLElement, render: RenderHandler): HTMLElement {
    const modal = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-modal' }]);
    ApiService.getUser(State.currentUser.login).then((user: User) => {
      const viewProfile = ViewProfileModal.createViewProfileModal(modalToClose, user, render);
      const editProfile = EditProfileModal.createEditProfileModal(user, render);

      ManageProfileState.updateProfileState(user);
      modal.append(viewProfile, editProfile);
    });

    return modal;
  }
}

export default ProfileModal;
