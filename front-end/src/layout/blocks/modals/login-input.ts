import CreateInput from '../../elements/create-input';

import { Tag } from '../../../types/enums';

class LoginInput {
  public static createLoginInput(): HTMLInputElement {
    const input = CreateInput.createInput(Tag.input, [{ name: 'class', value: 'registration-input' }]);

    return input;
  }
}

export default LoginInput;
