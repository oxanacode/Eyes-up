import CreateElement from '../../../elements/create-element';
import ViewProfileHeader from './view-profile-header';
import ProfileData from './profile-data';
import LogoutBtn from './logout-btn';
import ManageProfileState from '../../../../scripts/profile/manage-profile-state';
import ConfirmationContent from '../confirmation/confirmation-content';
import Subtitle from '../../../elements/subtitle';
import ProfileStats from './profile-stats';
import ProfileBadgesTitle from './profile-badges-title';
import State from '../../../../scripts/state/state';
import translation from '../../../../data/translation';

import { Confirmation, Profile, Tag } from '../../../../types/enums';
import { RenderHandler } from '../../../../types/types';
import { User } from '../../../../types/interfaces';

class ViewProfileModal {
  public static createViewProfileModal(
    editProfile: HTMLElement,
    profileBadges: HTMLElement,
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
    const statsTitle = Subtitle.createSubtitle('subtitle profile-subtitle', translation.statsTitle[State.currentLang]);
    const statsData = ProfileStats.createProfileStats(user);
    const badgesTitle = ProfileBadgesTitle.createProfileBadgesTitle(data, logoutWrapper, profileBadges, modal, user);

    logoutWrapper.append(logoutConfirmation, logoutBtn);
    modal.append(header, data, statsTitle, statsData, badgesTitle, logoutWrapper);

    return modal;
  }
}

export default ViewProfileModal;
