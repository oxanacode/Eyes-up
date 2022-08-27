import CreateInput from '../../../elements/create-input';

import { Disabled, Tag } from '../../../../types/enums';

class LoginInput {
  public static createLoginInput(className: string, disabled?: Disabled): HTMLInputElement {
    const input = CreateInput.createInput(Tag.input, [{ name: 'class', value: className }]);

    if (disabled) {
      input.setAttribute(disabled, disabled);
    }

    return input;
  }
}

export default LoginInput;
