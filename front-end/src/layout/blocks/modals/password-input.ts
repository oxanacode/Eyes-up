import CreateInput from '../../elements/create-input';

import { InputType, Tag } from '../../../types/enums';

class PasswordInput {
  public static createPasswordInput(): HTMLInputElement {
    const input = CreateInput.createInput(Tag.input, [
      { name: 'class', value: 'registration-input' },
      { name: 'type', value: InputType.password },
    ]);

    return input;
  }
}

export default PasswordInput;
