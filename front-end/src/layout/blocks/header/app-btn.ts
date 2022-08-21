import CreateElement from '../../elements/create-element';
import AppLogo from './app-logo';
import SwitchPage from '../../../scripts/layout/switch-page';

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
      SwitchPage.applyPage(page, render);
    });

    return btn;
  }
}

export default AppBtn;
