import CreateElement from './create-element';

import { Tag } from '../../types/enums';

class SectionTitle {
  public static createSectionTitle(text: string): HTMLElement {
    const title = CreateElement.createElement(Tag.h4, [{ name: 'class', value: 'section-title' }]);

    title.textContent = text;

    return title;
  }
}

export default SectionTitle;
