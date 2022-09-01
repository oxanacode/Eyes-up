import CreateElement from './create-element';

import { Tag } from '../../types/enums';

class Subtitle {
  public static createSubtitle(className: string, text: string): HTMLElement {
    const title = CreateElement.createElement(Tag.h4, [{ name: 'class', value: className }]);

    title.textContent = text;

    return title;
  }
}

export default Subtitle;
