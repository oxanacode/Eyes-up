import CreateElement from '../../elements/create-element';
import AppLogo from './app-logo';

import { Tag } from '../../../types/enums';

class AppBtn {
  public static createAppBtn(): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: 'app-btn' },
    ]);
    const logo = AppLogo.createAppLogo();

    btn.append(logo);

    return btn;
  }
}

export default AppBtn;
