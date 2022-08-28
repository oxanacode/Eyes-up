import CreateElement from '../../../elements/create-element';

import { Tag } from '../../../../types/enums';

class ProfileSubtitle {
  public static createProfileSubtitle(text: string): HTMLElement {
    const title = CreateElement.createElement(Tag.h4, [{ name: 'class', value: 'profile-subtitle' }]);

    title.textContent = text;

    return title;
  }
}

export default ProfileSubtitle;
