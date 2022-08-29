import CreateElement from '../../../elements/create-element';
import ViewProfileModal from './view-profile-modal';
import ApiService from '../../../../scripts/api/api-service';
import State from '../../../../scripts/state/state';

import { Tag } from '../../../../types/enums';
import { RenderHandler } from '../../../../types/types';
import { User } from '../../../../types/interfaces';

class ProfileModal {
  public static createProfileModal(modalToClose: HTMLElement, render: RenderHandler): HTMLElement {
    const modal = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-modal' }]);
    ApiService.getUser(State.currentUser.login).then((user: User) => {
      const editProfile = CreateElement.createElement(Tag.div, [
        { name: 'class', value: 'profile-modal-content hidden' },
      ]);
      const viewProfile = ViewProfileModal.createViewProfileModal(editProfile, modalToClose, user, render);

      modal.append(viewProfile, editProfile);
    });

    return modal;
  }
}

export default ProfileModal;
