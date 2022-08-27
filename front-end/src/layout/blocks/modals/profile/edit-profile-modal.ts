import State from '../../../../scripts/state/state';
import CreateElement from '../../../elements/create-element';
import EditProfileHeader from './edit-profile-header';

import { Tag } from '../../../../types/enums';
import { RenderHandler } from '../../../../types/types';

class EditProfileModal {
  public static createEditProfileModal(render: RenderHandler): HTMLElement {
    const modal = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-modal-content hidden' }]);
    const header = EditProfileHeader.createEditProfileHeader(modal);

    if (State.currentUser.login === '42') {
      render();
    }

    modal.append(header);

    return modal;
  }
}

export default EditProfileModal;
