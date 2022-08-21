import CreateElement from './create-element';
import SwitchPage from '../../scripts/layout/switch-page';

import { Tag, Page } from '../../types/enums';
import { RenderHandler } from '../../types/types';

class BigBtn {
  public static createBigBtn(
    text: string,
    page: Page,
    render: RenderHandler
  ): HTMLElement {
    const button = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: 'big-btn' },
    ]);

    button.textContent = text;
    button.addEventListener('click', () => {
      SwitchPage.applyPage(page, render);
    });

    return button;
  }
}

export default BigBtn;
