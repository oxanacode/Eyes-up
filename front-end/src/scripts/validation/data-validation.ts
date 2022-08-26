import ManageError from '../layout/manage-error';
import RegExpService from '../reg-exp/reg-exp-service';

import { ErrorSource, ErrorType, LoginLength, PasswordLength } from '../../types/enums';
import { loginPattern, passwordPattern } from '../../data/reg-exp-patterns';

class DataValidation {
  public static checkIfValueNotEmpty(value: string): boolean {
    if (value) {
      return true;
    }

    return false;
  }

  public static checkIfLoginValid(login: string): boolean {
    const loginRegExp = RegExpService.createLoginRegExp(loginPattern, LoginLength.min, LoginLength.max);

    return loginRegExp.test(login);
  }

  public static checkIfPasswordValid(password: string): boolean {
    const passwordRegExp = RegExpService.createPasswordRegExp(passwordPattern, PasswordLength.min, PasswordLength.max);

    return passwordRegExp.test(password);
  }

  public static checkIfLoginCorrect(login: string, errorBlock: HTMLElement): boolean {
    if (!DataValidation.checkIfValueNotEmpty(login)) {
      ManageError.showError(errorBlock, ErrorSource.registration, ErrorType.noLogin);
      return false;
    }

    if (!DataValidation.checkIfLoginValid(login)) {
      ManageError.showError(errorBlock, ErrorSource.registration, ErrorType.invalidLogin);
      return false;
    }

    return true;
  }

  public static checkIfPasswordCorrect(password: string, errorBlock: HTMLElement): boolean {
    if (!DataValidation.checkIfValueNotEmpty(password)) {
      ManageError.showError(errorBlock, ErrorSource.registration, ErrorType.noPassword);
      return false;
    }

    if (!DataValidation.checkIfPasswordValid(password)) {
      ManageError.showError(errorBlock, ErrorSource.registration, ErrorType.invalidPassword);
      return false;
    }

    return true;
  }

  public static checkIfDataCorrect(login: string, password: string, errorBlock: HTMLElement): boolean {
    const passwordCorrect = DataValidation.checkIfPasswordCorrect(password, errorBlock);
    const loginCorrect = DataValidation.checkIfLoginCorrect(login, errorBlock);

    if (passwordCorrect && loginCorrect) {
      return true;
    }

    return false;
  }

  public static checkIfDataEntered(login: string, password: string, errorBlock: HTMLElement): boolean {
    if (!DataValidation.checkIfValueNotEmpty(login)) {
      ManageError.showError(errorBlock, ErrorSource.authorisation, ErrorType.noLogin);
      return false;
    }

    if (!DataValidation.checkIfValueNotEmpty(password)) {
      ManageError.showError(errorBlock, ErrorSource.authorisation, ErrorType.noPassword);
      return false;
    }

    return true;
  }
}

export default DataValidation;
