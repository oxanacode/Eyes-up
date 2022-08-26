import State from '../../../../scripts/state/state';
import CreateElement from '../../../elements/create-element';
import ViewProfileHeader from './view-profile-header';
import ViewProfileData from './view-profile-data';
import ApiService from '../../../../scripts/api/api-service';

import { Tag } from '../../../../types/enums';
import { RenderHandler } from '../../../../types/types';
import { User } from '../../../../types/interfaces';

class ViewProfileModal {
  public static createViewProfileModal(modalToClose: HTMLElement, render: RenderHandler): HTMLElement {
    const modal = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-modal-content' }]);
    const header = ViewProfileHeader.createViewProfileHeader(modalToClose, modal);

    ApiService.getUser(State.currentUser.login).then((user: User) => {
      const data = ViewProfileData.createViewProfileData(user);

      if (State.currentUser.login === '42') {
        render();
      }

      modal.append(header, data);
    });

    return modal;
  }
}

export default ViewProfileModal;
