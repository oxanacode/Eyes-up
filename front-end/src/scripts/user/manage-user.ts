import ApiService from '../api/api-service';
import DataValidation from '../validation/data-validation';
import ManageError from '../layout/manage-error';
import UserState from './user-state';
import BaseUser from './base-user';
import ManageState from '../state/manage-state';
import State from '../state/state';
import ProfileState from '../profile/profile-state';

import { ErrorSource, ErrorType, StatusCode } from '../../types/enums';
import { RenderHandler, UserData } from '../../types/types';
import { User } from '../../types/interfaces';

class ManageUser {
  public static createUser(
    loginInput: HTMLInputElement,
    passwordInput: HTMLInputElement,
    errorBlock: HTMLElement,
    render: RenderHandler
  ): void {
    const login = loginInput.value.trim();
    const password = passwordInput.value.trim();
    const dataCorrect = DataValidation.checkIfDataCorrect(login, password, errorBlock);

    if (dataCorrect) {
      ApiService.checkUser(login).then((status: number) => {
        if (status === StatusCode.found) {
          ManageError.showError(errorBlock, ErrorSource.registration, ErrorType.existingLogin);
        }

        if (status === StatusCode.notFound) {
          const user = new BaseUser(login, password, State.currentUser.avatar);

          ApiService.createUser(user).then(() => {
            UserState.updateUserLogin(login);
            ManageState.saveState();
            render();
          });
        }
      });
    }
  }

  public static authoriseUser(
    loginInput: HTMLInputElement,
    passwordInput: HTMLInputElement,
    errorBlock: HTMLElement,
    render: RenderHandler
  ): void {
    const login = loginInput.value.trim();
    const password = passwordInput.value.trim();
    const dataEntered = DataValidation.checkIfDataEntered(login, password, errorBlock);

    if (dataEntered) {
      ApiService.checkUser(login).then((status: number) => {
        if (status === StatusCode.notFound) {
          ManageError.showError(errorBlock, ErrorSource.authorisation, ErrorType.notRegistered);
        }

        if (status === StatusCode.found) {
          ApiService.getUser(login).then((user: User) => {
            if (password !== user.password) {
              ManageError.showError(errorBlock, ErrorSource.authorisation, ErrorType.notMatchingPassword);
            } else {
              UserState.updateUserLogin(login);
              ManageState.saveState();
              render();
            }
          });
        }
      });
    }
  }

  public static logoutFromProfile(render: RenderHandler): void {
    UserState.resetUserState();
    ManageState.saveState();
    render();
  }

  public static changeUserData(user: User, errorBlock: HTMLElement, render: RenderHandler): void {
    const dataCorrect = DataValidation.checkIfDataCorrect(ProfileState.login, ProfileState.password, errorBlock);
    const loginDiffer = DataValidation.checkIfLoginDiffer(user);

    if (dataCorrect && loginDiffer) {
      ApiService.checkUser(ProfileState.login).then((status: number) => {
        if (status === StatusCode.found) {
          ManageError.showError(errorBlock, ErrorSource.registration, ErrorType.existingLogin);
        }

        if (status === StatusCode.notFound) {
          const userData: Partial<UserData> = {
            login: ProfileState.login,
            password: ProfileState.password,
            avatar: ProfileState.avatar,
          };

          ApiService.updateUser(user._id, userData).then(() => {
            UserState.updateUserState(ProfileState.login, ProfileState.avatar);
            ManageState.saveState();
            render();
          });
        }
      });
    }
  }
}

export default ManageUser;
