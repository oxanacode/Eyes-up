import CreateElement from '../../elements/create-element';
import AppLogo from './app-logo';
import ChangePage from '../../../scripts/layout/change-page';
import ManageState from '../../../scripts/state/manage-state';

import { Page, Tag } from '../../../types/enums';
import { RenderHandler } from '../../../types/types';

class AppBtn {
  public static createAppBtn(page: Page, render: RenderHandler): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: 'app-btn' },
    ]);
    const logo = AppLogo.createAppLogo();

    btn.append(logo);
    btn.addEventListener('click', () => {
      ChangePage.changePage(page);
      ManageState.saveState();
      render();
    });

    return btn;
  }
}

export default AppBtn;
