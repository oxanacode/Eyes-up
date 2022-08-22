import CreateElement from '../../elements/create-element';
import InputLabel from './input-label';
import State from '../../../scripts/state/state';
import translation from '../../../data/translation';

import { Tag } from '../../../types/enums';

class LoginInput {
  public static createLoginInput(): HTMLElement {
    const label = InputLabel.createInputLabel(
      translation.modalSignUpLoginInput[State.currentLang]
    );
    const input = CreateElement.createElement(Tag.input, [
      { name: 'class', value: 'login-input' },
    ]);

    label.append(input);

    return label;
  }
}

export default LoginInput;
