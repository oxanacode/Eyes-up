import CreateElement from '../../../elements/create-element';
import AvatarImage from './avatar-image';

import { Tag } from '../../../../types/enums';
import ProfileState from '../../../../scripts/profile/profile-state';

class AvatarBtn {
  public static createAvatarBtn(avatar: number, dataBlock: HTMLElement): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'avatar-btn' }]);
    const imgClass =
      avatar === ProfileState.avatar
        ? 'avatar-btn-img default-avatar selected-avatar'
        : 'avatar-btn-img default-avatar not-selected-avatar';
    const img = AvatarImage.createAvatarImage(imgClass, AvatarImage.createAvatarImagePath(avatar));

    btn.append(img);

    return btn;
  }
}

export default AvatarBtn;
