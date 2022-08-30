import CreateElement from '../../../elements/create-element';
import ViewProfileHeader from './view-profile-header';
import ProfileData from './profile-data';
import LogoutBtn from './logout-btn';
import ManageProfileState from '../../../../scripts/profile/manage-profile-state';
import ConfirmationContent from '../confirmation/confirmation-content';

import { Confirmation, Profile, Tag } from '../../../../types/enums';
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
    const data = ProfileData.createViewProfileData(user, Profile.view);
    const logoutWrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'logout-confirmation-wrapper' },
    ]);
    const logoutConfirmation = ConfirmationContent.createConfirmationContent(
      logoutWrapper,
      'logout-confirmation-content hidden',
      render,
      Confirmation.logout
    );
    const logoutBtn = LogoutBtn.createLogoutBtn(logoutWrapper);
    const header = ViewProfileHeader.createViewProfileHeader(
      data,
      logoutWrapper,
      editProfile,
      user,
      render,
      modalToClose,
      modal
    );

    logoutWrapper.append(logoutConfirmation, logoutBtn);
    modal.append(header, data, logoutWrapper);

    return modal;
  }
}

export default ViewProfileModal;
