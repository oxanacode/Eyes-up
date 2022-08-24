import CreateElement from '../../../elements/create-element';
import ErrorText from './error-text';
import ErrorIcon from './error-icon';
import ErrorHint from './error-hint';

import { ErrorSource, ErrorType, Tag } from '../../../../types/enums';

class ErrorContent {
  public static createErrorContent(
    errorSource: ErrorSource,
    errorType: ErrorType
  ): HTMLElement {
    const content = CreateElement.createElement(Tag.par, [
      { name: 'class', value: 'error-content' },
    ]);
    const text = ErrorText.createErrorText(errorType);

    if (errorSource === ErrorSource.registration) {
      const icon = ErrorIcon.createErrorIcon(content);
      const hint = ErrorHint.createErrorHint();
      content.append(text, icon, hint);
    } else {
      content.append(text);
    }

    return content;
  }
}

export default ErrorContent;
