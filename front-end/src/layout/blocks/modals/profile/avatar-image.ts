import CreateElement from '../../../elements/create-element';

import { Tag } from '../../../../types/enums';

class AvatarImage {
  public static path = './assets/images/avatars/';

  public static createAvatarImagePath(avatar: number): string {
    return `${AvatarImage.path}avatar-${avatar}.png`;
  }

  public static createAvatarImage(className: string, imgPath: string): HTMLElement {
    const avatar = CreateElement.createElement(Tag.img, [{ name: 'class', value: className }]);

    avatar.setAttribute('src', imgPath);
    avatar.setAttribute('alt', 'Avatar image');

    return avatar;
  }
}

export default AvatarImage;
