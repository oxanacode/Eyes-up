import CreateElement from '../../../elements/create-element';
import AvatarImage from './avatar-image';
import ProfileState from '../../../../scripts/profile/profile-state';
import ManageAvatar from '../../../../scripts/layout/manage-avatar';
import ManageProfileState from '../../../../scripts/profile/manage-profile-state';

import { Tag } from '../../../../types/enums';

class AvatarBtn {
  public static createAvatarBtn(parent: HTMLElement, avatar: number, dataBlock: HTMLElement): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'avatar-btn' }]);
    const imgClass =
      avatar === ProfileState.avatar
        ? 'avatar-btn-img default-avatar selected-avatar'
        : 'avatar-btn-img default-avatar not-selected-avatar';
    const img = AvatarImage.createAvatarImage(imgClass, AvatarImage.createAvatarImagePath(avatar));

    btn.append(img);
    btn.addEventListener('click', () => {
      ManageProfileState.changeAvatarState(avatar);
      ManageAvatar.changeAvatarImage(dataBlock);
      ManageAvatar.changeSelectedAvatar(parent, btn);
    });

    return btn;
  }
}

export default AvatarBtn;
