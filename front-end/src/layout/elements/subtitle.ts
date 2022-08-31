import CreateElement from './create-element';

import { Tag } from '../../types/enums';

class Subtitle {
  public static createSubtitle(text: string): HTMLElement {
    const title = CreateElement.createElement(Tag.h4, [{ name: 'class', value: 'subtitle' }]);

    title.textContent = text;

    return title;
  }
}

export default Subtitle;
