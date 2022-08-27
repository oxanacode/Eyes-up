import CreateElement from '../../elements/create-element';
import InputLabel from './input-label';
import State from '../../../scripts/state/state';
import LoginInput from './login-input';
import PasswordInput from './password-input';
import translation from '../../../data/translation';

import { Tag } from '../../../types/enums';
import { ActionHandler, RenderHandler } from '../../../types/types';
import PasswordVisibilityBtn from './password-visibility-btn';

class RegistrationDataWrapper {
  public static createRegistrationDataWrapper(actionBtn: ActionHandler, render: RenderHandler): HTMLElement {
    const dataWrapper = CreateElement.createElement(Tag.div);
    const inputsWrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'registration-inputs-wrapper' },
    ]);
    const loginLabel = InputLabel.createInputLabel(
      'registration-input-label base-text',
      translation.modalSignUpLoginInput[State.currentLang]
    );
    const loginInput = LoginInput.createLoginInput('registration-input');
    const passwordLabel = InputLabel.createInputLabel(
      'registration-input-label base-text',
      translation.modalSignUpPasswordInput[State.currentLang]
    );
    const passwordInput = PasswordInput.createPasswordInput('registration-input');
    const visibilityBtn = PasswordVisibilityBtn.createPasswordVisibilityBtn(
      'password-visibility-btn registration-password-visibility-btn password-close',
      passwordInput
    );
    const errorBlock = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'error-block' }]);
    const action = actionBtn(loginInput, passwordInput, errorBlock, render);

    loginLabel.append(loginInput);
    passwordLabel.append(passwordInput, visibilityBtn);
    inputsWrapper.append(loginLabel, passwordLabel, errorBlock);
    dataWrapper.append(inputsWrapper, action);

    return dataWrapper;
  }
}

export default RegistrationDataWrapper;
