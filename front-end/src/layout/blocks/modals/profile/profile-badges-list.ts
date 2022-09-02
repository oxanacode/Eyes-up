import CreateElement from '../../../elements/create-element';
import ParseBadges from '../../../../scripts/parsing/parse-badges';
import ProfileBadgeItem from './profile-badge-item';
import badgesDescription from '../../../../data/badges-description';

import { Data, Tag } from '../../../../types/enums';
import { User } from '../../../../types/interfaces';

class ProfileBadgesList {
  public static createProfileBadgesList(user: User): HTMLElement {
    const userBadges = user.badges === Data.noData ? Data.noData : ParseBadges.getBadges(user.badges);
    const badgesList = [...Object.keys(badgesDescription)];
    const wrapper = CreateElement.createElement(Tag.list, [{ name: 'class', value: 'profile-badges-list' }]);
    let badgeItem;

    for (let i = 0; i < badgesList.length; i += 1) {
      if (userBadges === Data.noData) {
        badgeItem = ProfileBadgeItem.createProfileBadgeItem('all-badges-image not-earned-badge', badgesList[i]);
      } else {
        if (!userBadges.includes(parseInt(badgesList[i], 10))) {
          badgeItem = ProfileBadgeItem.createProfileBadgeItem('all-badges-image not-earned-badge', badgesList[i]);
        }

        badgeItem = ProfileBadgeItem.createProfileBadgeItem('all-badges-image', badgesList[i]);
      }

      wrapper.append(badgeItem);
    }

    return wrapper;
  }
}

export default ProfileBadgesList;
