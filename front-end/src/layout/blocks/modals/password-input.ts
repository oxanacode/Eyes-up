import CreateElement from '../../elements/create-element';
import InputLabel from './input-label';
import PasswordVisibilityBtn from './password-visibility-btn';
import State from '../../../scripts/state/state';
import translation from '../../../data/translation';

import { InputType, Tag } from '../../../types/enums';

class PasswordInput {
  public static createPasswordInput(): HTMLElement {
    const label = InputLabel.createInputLabel(translation.modalSignUpPasswordInput[State.currentLang]);
    const input = CreateElement.createElement(Tag.input, [
      { name: 'class', value: 'registration-input' },
      { name: 'type', value: InputType.password },
    ]);
    const visibilityBtn = PasswordVisibilityBtn.createPasswordVisibilityBtn(input);

    label.append(input, visibilityBtn);

    return label;
  }
}

export default PasswordInput;
