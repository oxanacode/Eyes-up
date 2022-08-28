import CreateElement from '../../../elements/create-element';
import AvatarBtn from './avatar-btn';

import { Avatar, Tag } from '../../../../types/enums';
import { User } from '../../../../types/interfaces';

class ProfileAvatars {
  public static createProfileAvatars(user: User, dataBlock: HTMLElement, saveChangesBtn: HTMLElement): HTMLElement {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-avatars-wrapper' }]);

    for (let i = Avatar.default; i <= Avatar.amount; i += 1) {
      const avatarBtn = AvatarBtn.createAvatarBtn(wrapper, i, user, dataBlock, saveChangesBtn);

      wrapper.append(avatarBtn);
    }

    return wrapper;
  }
}

export default ProfileAvatars;
