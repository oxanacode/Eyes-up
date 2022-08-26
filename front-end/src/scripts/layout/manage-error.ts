import ErrorContent from '../../layout/blocks/modals/error/error-content';

import { ErrorSource, ErrorType } from '../../types/enums';

class ManageError {
  public static wipeError(errorBlock: HTMLElement): void {
    if (errorBlock.firstChild) {
      errorBlock.removeChild(errorBlock.firstChild);
    }
  }

  public static showError(errorBlock: HTMLElement, errorSource: ErrorSource, errorType: ErrorType): void {
    ManageError.wipeError(errorBlock);
    errorBlock.append(ErrorContent.createErrorContent(errorSource, errorType));
  }
}

export default ManageError;
