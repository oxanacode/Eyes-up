import CreateElement from '../../../elements/create-element';

import { Tag } from '../../../../types/enums';

class ProfileBadgeTitle {
  public static createProfileBadgeTitle(textContent: string): HTMLElement {
    const title = CreateElement.createElement(Tag.h5, [{ name: 'class', value: 'profile-badge-title' }]);

    title.textContent = textContent;

    return title;
  }
}

export default ProfileBadgeTitle;
