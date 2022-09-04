import BadgeImage from './badge-image';
import ProfileBadgeDesc from './profile-badge-desc';
import CreateElement from '../../../elements/create-element';
import State from '../../../../scripts/state/state';
import badgesDescription from '../../../../data/badges-description';

import { Tag } from '../../../../types/enums';

class ProfileBadgeItem {
  public static createProfileBadgeItem(imgClass: string, badge: string): HTMLElement {
    const wrapper = CreateElement.createElement(Tag.listItem, [{ name: 'class', value: 'profile-badge-item' }]);
    const img = BadgeImage.createBadgeImage(imgClass, BadgeImage.createBadgeImagePath(badge));
    const desc = ProfileBadgeDesc.createProfileBadgeDesc(
      badgesDescription[badge][State.currentLang].title,
      badgesDescription[badge][State.currentLang].text
    );

    wrapper.append(img, desc);

    return wrapper;
  }
}

export default ProfileBadgeItem;
