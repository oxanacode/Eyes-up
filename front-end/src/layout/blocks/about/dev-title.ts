import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';

class DevTitle {
  public static createDevTitle(text: string): HTMLElement {
    const title = CreateElement.createElement(Tag.h5, [{ name: 'class', value: 'about-dev-title' }]);

    title.textContent = text;

    return title;
  }
}

export default DevTitle;
