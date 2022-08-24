import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';

class LoginInput {
  public static createLoginInput(): HTMLInputElement {
    const input = CreateElement.createElement(Tag.input, [
      { name: 'class', value: 'registration-input' },
    ]);

    return input as HTMLInputElement;
  }
}

export default LoginInput;
