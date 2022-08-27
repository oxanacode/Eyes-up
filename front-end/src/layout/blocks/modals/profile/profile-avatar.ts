import AvatarImage from '../../../elements/avatar-image';
import CreateElement from '../../../elements/create-element';

import { Tag } from '../../../../types/enums';

class ProfileAvatar {
  public static createProfileAvatar(avatar: number): HTMLElement {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-avatar-wrapper' }]);
    const image = AvatarImage.createAvatarImage(
      'default-avatar profile-avatar-image selected-avatar',
      AvatarImage.createAvatarImagePath(avatar)
    );

    wrapper.append(image);

    return wrapper;
  }
}

export default ProfileAvatar;
