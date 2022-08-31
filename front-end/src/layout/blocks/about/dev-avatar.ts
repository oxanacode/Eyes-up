import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';

class DevAvatar {
  public static createDevAvatar(avatarPath: string): HTMLElement {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'about-dev-avatar-wrapper' }]);
    const avatar = CreateElement.createElement(Tag.img, [
      { name: 'class', value: 'about-dev-avatar-image' },
      { name: 'src', value: avatarPath },
      { name: 'alt', value: 'Developer avatar' },
    ]);

    wrapper.append(avatar);

    return wrapper;
  }
}

export default DevAvatar;
