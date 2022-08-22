import CreateElement from './create-element';

import { Tag } from '../../types/enums';

class BigBtn {
  public static createBigBtn(text: string): HTMLElement {
    const button = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: 'big-btn' },
    ]);

    button.textContent = text;

    return button;
  }
}

export default BigBtn;
