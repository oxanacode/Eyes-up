import CreateElement from '../../elements/create-element';
import InputLabel from './input-label';

import { Tag } from '../../../types/enums';

class LoginInput {
  public static createLoginInput(): HTMLElement {
    const label = InputLabel.createInputLabel();
    const input = CreateElement.createElement(Tag.input, [
      { name: 'class', value: 'login-input' },
    ]);

    label.append(input);

    return label;
  }
}

export default LoginInput;
