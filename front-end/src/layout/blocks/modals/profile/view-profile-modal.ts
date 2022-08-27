import CreateElement from '../../../elements/create-element';
import ViewProfileHeader from './view-profile-header';
import ProfileData from './profile-data';
import LogoutBtn from './logout-btn';

import { Profile, Tag } from '../../../../types/enums';
import { RenderHandler } from '../../../../types/types';
import { User } from '../../../../types/interfaces';

class ViewProfileModal {
  public static createViewProfileModal(modalToClose: HTMLElement, user: User, render: RenderHandler): HTMLElement {
    const modal = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-modal-content' }]);
    const header = ViewProfileHeader.createViewProfileHeader(modalToClose, modal);
    const data = ProfileData.createViewProfileData(user, Profile.view);
    const logoutBtn = LogoutBtn.createLogoutBtn(render);

    modal.append(header, data, logoutBtn);

    return modal;
  }
}

export default ViewProfileModal;
