import CreateElement from '../../../elements/create-element';
import State from '../../../../scripts/state/state';
import errorsTranslation from '../../../../data/errors-translation';

import { ErrorType, Tag } from '../../../../types/enums';

class ErrorText {
  public static createErrorText(errorType: ErrorType): HTMLElement {
    const text = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'error-text' }]);

    text.textContent = errorsTranslation[errorType][State.currentLang];

    return text;
  }
}

export default ErrorText;
