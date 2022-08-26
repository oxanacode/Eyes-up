import CreateElement from './create-element';

import { Tag } from '../../types/enums';

class MainTitle {
  public static createMainTitle(text: string) {
    const title = CreateElement.createElement(Tag.h3, [{ name: 'class', value: 'main-title' }]);

    title.textContent = text;

    return title;
  }
}

export default MainTitle;
