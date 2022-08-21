import CreateElement from '../../elements/create-element';
import InputLabel from './input-label';
import PasswordVisibilityBtn from './password-visibility-btn';

import { InputType, Tag } from '../../../types/enums';

class PasswordInput {
  public static createPasswordInput(): HTMLElement {
    const label = InputLabel.createInputLabel();
    const input = CreateElement.createElement(Tag.input, [
      { name: 'class', value: 'login-input' },
      { name: 'type', value: InputType.password },
    ]);
    const visibilityBtn =
      PasswordVisibilityBtn.createPasswordVisibilityBtn(input);

    label.append(input, visibilityBtn);

    return label;
  }
}

export default PasswordInput;
