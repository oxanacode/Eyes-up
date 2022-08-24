import CreateElement from '../../../elements/create-element';
import ErrorHintContent from './error-hint-content';
import State from '../../../../scripts/state/state';
import translation from '../../../../data/translation';
import registrationErrors from '../../../../data/registration-errors';

import { Tag } from '../../../../types/enums';

class ErrorHint {
  public static createErrorHint(): HTMLElement {
    const wrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'error-hint hidden' },
    ]);
    const loginHint = ErrorHintContent.createErrorHintContent(
      translation.modalSignUpLoginInput[State.currentLang],
      registrationErrors.loginHint[State.currentLang]
    );
    const passwordHint = ErrorHintContent.createErrorHintContent(
      translation.modalSignUpPasswordInput[State.currentLang],
      registrationErrors.passwordHint[State.currentLang]
    );

    wrapper.append(loginHint, passwordHint);

    return wrapper;
  }
}

export default ErrorHint;
