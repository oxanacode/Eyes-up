import BadgesProfileHeader from './profile-badges-header';
import ManageModal from '../../../../scripts/layout/manage-modal';
import ProfileBadgesList from './profile-badges-list';

import { User } from '../../../../types/interfaces';

class ProfileBadgesModal {
  public static createProfileBadgesModal(
    profileBadges: HTMLElement,
    viewProfile: HTMLElement,
    user: User
  ): HTMLElement {
    ManageModal.clearModalContent(profileBadges);

    const header = BadgesProfileHeader.createBadgesProfileHeader(profileBadges, viewProfile);
    const badges = ProfileBadgesList.createProfileBadgesList(user);

    profileBadges.append(header, badges);

    return profileBadges;
  }
}

export default ProfileBadgesModal;
