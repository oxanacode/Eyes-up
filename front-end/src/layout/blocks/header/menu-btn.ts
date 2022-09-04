import CreateElement from '../../elements/create-element';
import ManagePage from '../../../scripts/layout/manage-page';
import SwitchPage from '../../../scripts/layout/switch-page';
import State from '../../../scripts/state/state';

import { Tag, Page } from '../../../types/enums';
import { RenderHandler } from '../../../types/types';

class MenuBtn {
  public static createMenuBtn(text: string, page: Page, render: RenderHandler): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'menu-btn' }]);

    if (State.currentPage === page) {
      btn.classList.add('menu-btn-active');
    }

    btn.textContent = text;
    btn.addEventListener('click', () => {
      ManagePage.showPageScrollbar();
      SwitchPage.applyPage(page, render);
    });

    return btn;
  }
}

export default MenuBtn;
