import CreateInput from '../../../elements/create-input';

import { Disabled, InputType, Tag } from '../../../../types/enums';

class PasswordInput {
  public static createPasswordInput(className: string, disabled?: Disabled): HTMLInputElement {
    const input = CreateInput.createInput(Tag.input, [
      { name: 'class', value: className },
      { name: 'type', value: InputType.password },
    ]);

    if (disabled) {
      input.setAttribute(disabled, 'true');
    }

    return input;
  }
}

export default PasswordInput;
