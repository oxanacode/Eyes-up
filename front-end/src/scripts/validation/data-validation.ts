import ManageError from './manage-error';
import ManageUser from '../profile/manage-user';

import { ErrorSource, ErrorType } from '../../types/enums';
import { RenderHandler } from '../../types/types';

class DataValidation {
  public static checkRegistrationData(
    loginInput: HTMLInputElement,
    passwordInput: HTMLInputElement,
    errorBlock: HTMLElement,
    render: RenderHandler
  ): boolean {
    const login = loginInput.value.trim();
    const password = passwordInput.value.trim();

    if (!login) {
      ManageError.showError(
        errorBlock,
        ErrorSource.registration,
        ErrorType.noLogin
      );
      return false;
    }

    if (!password) {
      ManageError.showError(
        errorBlock,
        ErrorSource.registration,
        ErrorType.noPassword
      );
      return false;
    }

    if (ManageUser.checkIfUserAuthorized()) {
      render();
    }

    return true;
  }

  public static checkAuthorisationData(
    loginInput: HTMLInputElement,
    passwordInput: HTMLInputElement,
    errorBlock: HTMLElement,
    render: RenderHandler
  ): boolean {
    const login = loginInput.value.trim();
    const password = passwordInput.value.trim();

    if (!login) {
      ManageError.showError(
        errorBlock,
        ErrorSource.registration,
        ErrorType.noLogin
      );
      return false;
    }

    if (!password) {
      ManageError.showError(
        errorBlock,
        ErrorSource.registration,
        ErrorType.noPassword
      );
      return false;
    }

    if (ManageUser.checkIfUserAuthorized()) {
      render();
    }

    return true;
  }
}

export default DataValidation;
