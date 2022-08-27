import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';
import SwitchPasswordVisibility from '../../../scripts/layout/switch-password-visibility';

class PasswordVisibilityBtn {
  public static createPasswordVisibilityBtn(className: string, input: HTMLElement): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: className }]);

    btn.addEventListener('click', () => {
      SwitchPasswordVisibility.switchPasswordVisibility(btn, input);
    });

    return btn;
  }
}

export default PasswordVisibilityBtn;
