import CreateElement from '../../../elements/create-element';
import ViewProfileHeader from './view-profile-header';
import ProfileData from './profile-data';
import LogoutBtn from './logout-btn';
import ManageProfileState from '../../../../scripts/profile/manage-profile-state';

import { Profile, Tag } from '../../../../types/enums';
import { RenderHandler } from '../../../../types/types';
import { User } from '../../../../types/interfaces';

class ViewProfileModal {
  public static createViewProfileModal(
    editProfile: HTMLElement,
    modalToClose: HTMLElement,
    user: User,
    render: RenderHandler
  ): HTMLElement {
    ManageProfileState.updateProfileState(user);

    const modal = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-modal-content' }]);
    const header = ViewProfileHeader.createViewProfileHeader(editProfile, user, render, modalToClose, modal);
    const data = ProfileData.createViewProfileData(user, Profile.view);
    const logoutBtn = LogoutBtn.createLogoutBtn(render);

    modal.append(header, data, logoutBtn);

    return modal;
  }
}

export default ViewProfileModal;
