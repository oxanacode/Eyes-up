import CreateElement from './create-element';

import { Tag } from '../../types/enums';

class SmallBtn {
  public static createSmallBtn(className: string, text?: string): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: className },
    ]);

    if (text) {
      btn.textContent = text;
    }

    return btn;
  }
}

export default SmallBtn;
