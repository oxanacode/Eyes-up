import CreateElement from '../../../elements/create-element';
import ViewProfileModal from './view-profile-modal';
import EditProfileModal from './edit-profile-modal';

import { Tag } from '../../../../types/enums';
import { RenderHandler } from '../../../../types/types';

class ProfileModal {
  public static createProfileModal(modalToClose: HTMLElement, render: RenderHandler): HTMLElement {
    const modal = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-modal' }]);
    const viewProfile = ViewProfileModal.createViewProfileModal(modalToClose, render);
    const editProfile = EditProfileModal.createEditProfileModal(render);

    modal.append(viewProfile, editProfile);

    return modal;
  }
}

export default ProfileModal;
