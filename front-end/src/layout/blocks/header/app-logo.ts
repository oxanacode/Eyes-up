import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';

class AppLogo {
  public static createAppLogo(): HTMLElement {
    const text = CreateElement.createElement(Tag.h1, [{ name: 'class', value: 'app-logo' }]);

    text.textContent = 'EyesUp logo';

    return text;
  }
}

export default AppLogo;
