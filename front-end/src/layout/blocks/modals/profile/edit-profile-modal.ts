import State from '../../../../scripts/state/state';
import CreateElement from '../../../elements/create-element';
import EditProfileHeader from './edit-profile-header';
import ProfileData from './profile-data';

import { Profile, Tag } from '../../../../types/enums';
import { RenderHandler } from '../../../../types/types';
import { User } from '../../../../types/interfaces';

class EditProfileModal {
  public static createEditProfileModal(user: User, render: RenderHandler): HTMLElement {
    const modal = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-modal-content hidden' }]);
    const header = EditProfileHeader.createEditProfileHeader(modal);
    const data = ProfileData.createViewProfileData(user, Profile.edit, modal);

    modal.append(header, data);

    if (State.currentUser.login === '42') {
      render();
    }

    return modal;
  }
}

export default EditProfileModal;
