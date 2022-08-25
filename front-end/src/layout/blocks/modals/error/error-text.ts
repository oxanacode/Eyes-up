import CreateElement from '../../../elements/create-element';
import State from '../../../../scripts/state/state';
import registrationErrors from '../../../../data/registration-errors';

import { ErrorType, Tag } from '../../../../types/enums';

class ErrorText {
  public static createErrorText(errorType: ErrorType): HTMLElement {
    const text = CreateElement.createElement(Tag.span, [
      { name: 'class', value: 'error-text' },
    ]);

    text.textContent = registrationErrors[errorType][State.currentLang];

    return text;
  }
}

export default ErrorText;
