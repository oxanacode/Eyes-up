import CreateElement from '../../../elements/create-element';
import ParseBadges from '../../../../scripts/parsing/parse-badges';
import BadgeImage from './badge-image';
import badgesDescription from '../../../../data/badges-description';

import { Data, Tag } from '../../../../types/enums';
import { User } from '../../../../types/interfaces';

class ProfileEarnedBadges {
  public static createProfileEarnedBadges(user: User): HTMLElement {
    const EARNED_BADGES_AMOUNT = 5;
    const userBadges = user.badges === Data.noData ? Data.noData : ParseBadges.getBadges(user.badges);
    const badgesList = [...Object.keys(badgesDescription)];
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-earned-badges' }]);

    if (userBadges === Data.noData) {
      for (let i = 0; i < EARNED_BADGES_AMOUNT; i += 1) {
        const img = BadgeImage.createBadgeImage(
          'earned-badges-image not-earned-badge',
          BadgeImage.createBadgeImagePath(badgesList[i])
        );
        wrapper.append(img);
      }
    }

    if (userBadges !== Data.noData) {
      if (userBadges.length === EARNED_BADGES_AMOUNT) {
        for (let i = 0; i < EARNED_BADGES_AMOUNT; i += 1) {
          const img = BadgeImage.createBadgeImage(
            'earned-badges-image',
            BadgeImage.createBadgeImagePath(`${userBadges[i]}`)
          );
          wrapper.append(img);
        }
      }

      if (userBadges.length > EARNED_BADGES_AMOUNT) {
        for (let i = userBadges.length - EARNED_BADGES_AMOUNT; i < userBadges.length; i += 1) {
          const img = BadgeImage.createBadgeImage(
            'earned-badges-image',
            BadgeImage.createBadgeImagePath(`${userBadges[i]}`)
          );
          wrapper.append(img);
        }
      }

      if (userBadges.length < EARNED_BADGES_AMOUNT) {
        for (let i = 0; i < userBadges.length; i += 1) {
          const img = BadgeImage.createBadgeImage(
            'earned-badges-image',
            BadgeImage.createBadgeImagePath(`${userBadges[i]}`)
          );
          wrapper.append(img);
        }
        for (let i = 0; i < EARNED_BADGES_AMOUNT - userBadges.length; i += 1) {
          const img = BadgeImage.createBadgeImage(
            'earned-badges-image not-earned-badge',
            BadgeImage.createBadgeImagePath(badgesList[i])
          );
          wrapper.append(img);
        }
      }
    }

    return wrapper;
  }
}

export default ProfileEarnedBadges;
