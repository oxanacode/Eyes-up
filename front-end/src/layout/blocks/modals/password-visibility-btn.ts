import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';
import SwitchPasswordVisibility from '../../../scripts/layout/switch-password-visibility';

class PasswordVisibilityBtn {
  public static createPasswordVisibilityBtn(input: HTMLElement): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: 'password-visibility-btn password-close' },
    ]);

    btn.addEventListener('click', () => {
      SwitchPasswordVisibility.switchPasswordVisibility(btn, input);
    });

    return btn;
  }
}

export default PasswordVisibilityBtn;
