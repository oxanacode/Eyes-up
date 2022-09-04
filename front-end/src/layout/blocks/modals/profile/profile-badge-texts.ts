import CreateElement from '../../../elements/create-element';

import { Tag } from '../../../../types/enums';

class ProfileBadgeText {
  public static createProfileBadgeText(textContent: string): HTMLElement {
    const text = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'profile-badge-text' }]);

    text.textContent = textContent;

    return text;
  }
}

export default ProfileBadgeText;
