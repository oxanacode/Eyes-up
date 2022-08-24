import CreateElement from '../../elements/create-element';

import { InputType, Tag } from '../../../types/enums';

class PasswordInput {
  public static createPasswordInput(): HTMLInputElement {
    const input = CreateElement.createElement(Tag.input, [
      { name: 'class', value: 'registration-input' },
      { name: 'type', value: InputType.password },
    ]);

    return input as HTMLInputElement;
  }
}

export default PasswordInput;
