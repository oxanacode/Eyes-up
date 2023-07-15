import CreateElement from '../../../elements/create-element';

import { Tag } from '../../../../types/enums';

class BadgeImage {
  public static path = './assets/images/badges/';

  public static createBadgeImagePath(badge: string): string {
    return `${BadgeImage.path}badge-${badge}.png`;
  }

  public static createBadgeImage(className: string, imgPath: string): HTMLElement {
    const badge = CreateElement.createElement(Tag.img, [
      { name: 'class', value: className },
      { name: 'src', value: imgPath },
      { name: 'alt', value: 'Badge image' },
    ]);

    return badge;
  }
}

export default BadgeImage;
