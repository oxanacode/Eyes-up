import CreateElement from '../../elements/create-element';
import ChangePage from '../../../scripts/layout/change-page';
import ManageState from '../../../scripts/state/manage-state';
import State from '../../../scripts/state/state';

import { Tag, Page } from '../../../types/enums';

class MenuBtn {
  public static createMenuBtn(text: string, page: Page): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: 'menu-btn' },
    ]);

    if (State.currentPage === page) {
      btn.classList.add('menu-btn-active');
    }

    btn.textContent = text;
    btn.addEventListener('click', () => {
      ChangePage.changePage(page);
      ManageState.applyState();
    });

    return btn;
  }
}

export default MenuBtn;
