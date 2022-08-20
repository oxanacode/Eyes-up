import CreateElement from '../../elements/create-element';
import ChangePage from '../../../scripts/layout/change-page';
import ManageState from '../../../scripts/state/manage-state';
import State from '../../../scripts/state/state';

import { Tag, Page } from '../../../types/enums';
import { RenderHandler } from '../../../types/types';

class MenuBtn {
  public static createMenuBtn(
    text: string,
    page: Page,
    render: RenderHandler
  ): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: 'menu-btn' },
    ]);

    if (State.currentPage === page) {
      btn.classList.add('menu-btn-active');
    }

    btn.textContent = text;
    btn.addEventListener('click', () => {
      ChangePage.changePage(page);
      ManageState.saveState();
      render();
    });

    return btn;
  }
}

export default MenuBtn;
