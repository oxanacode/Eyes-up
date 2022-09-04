import CreateElement from '../../../elements/create-element';
import ProfileBadgeTitle from './profile-badge-title';
import ProfileBadgeText from './profile-badge-texts';

import { Tag } from '../../../../types/enums';

class ProfileBadgeDesc {
  public static createProfileBadgeDesc(titleContent: string, textContent: string): HTMLElement {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-badge-desc' }]);
    const title = ProfileBadgeTitle.createProfileBadgeTitle(titleContent);
    const text = ProfileBadgeText.createProfileBadgeText(textContent);

    wrapper.append(title, text);

    return wrapper;
  }
}

export default ProfileBadgeDesc;
