import ApiService from '../api/api-service';
import DataValidation from '../validation/data-validation';
import ManageError from '../layout/manage-error';
import UserState from './user-state';
import BaseUser from './base-user';
import ManageState from '../state/manage-state';
import State from '../state/state';
import ProfileState from '../profile/profile-state';
import CurrentUser from './current-user';
import ManagePage from '../layout/manage-page';

import { ErrorSource, ErrorType, StatusCode } from '../../types/enums';
import { RenderHandler } from '../../types/types';
import { User } from '../../types/interfaces';

class ManageUser {
  public static createUser(
    loginInput: HTMLInputElement,
    passwordInput: HTMLInputElement,
    errorBlock: HTMLElement,
    spinner: HTMLElement,
    btn: HTMLElement,
    render: RenderHandler
  ): void {
    const login = loginInput.value.trim();
    const password = passwordInput.value.trim();
    const dataCorrect = DataValidation.checkIfDataCorrect(login, password, errorBlock);

    if (dataCorrect) {
      ApiService.checkUser(login).then((status: number) => {
        if (status === StatusCode.found) {
          spinner.remove();
          btn.removeAttribute('disabled');
          ManageError.showError(errorBlock, ErrorSource.registration, ErrorType.existingLogin);
        }

        if (status === StatusCode.notFound) {
          const userData = new BaseUser(login, password, State.currentUser.avatar);

          ApiService.createUser(userData).then(() => {
            spinner.remove();
            btn.removeAttribute('disabled');
            UserState.updateUserLogin(login);
            ManageState.saveState();
            ManagePage.showPageScrollbar();
            render();
          });
        }
      });
    } else {
      spinner.remove();
      btn.removeAttribute('disabled');
    }
  }

  public static authoriseUser(
    loginInput: HTMLInputElement,
    passwordInput: HTMLInputElement,
    errorBlock: HTMLElement,
    spinner: HTMLElement,
    btn: HTMLElement,
    render: RenderHandler
  ): void {
    const login = loginInput.value.trim();
    const password = passwordInput.value.trim();
    const dataEntered = DataValidation.checkIfDataEntered(login, password, errorBlock);

    if (dataEntered) {
      ApiService.checkUser(login).then((status: number) => {
        if (status === StatusCode.notFound) {
          spinner.remove();
          btn.removeAttribute('disabled');
          ManageError.showError(errorBlock, ErrorSource.authorisation, ErrorType.notRegistered);
        }

        if (status === StatusCode.found) {
          ApiService.getUser(login).then((user: User) => {
            spinner.remove();
            btn.removeAttribute('disabled');

            if (password !== user.password) {
              ManageError.showError(errorBlock, ErrorSource.authorisation, ErrorType.notMatchingPassword);
            } else {
              UserState.updateUserState(login, user.avatar);
              ManageState.saveState();
              ManagePage.showPageScrollbar();
              render();
            }
          });
        }
      });
    } else {
      spinner.remove();
      btn.removeAttribute('disabled');
    }
  }

  public static logoutFromProfile(render: RenderHandler): void {
    UserState.resetUserState();
    ManageState.saveState();
    ManagePage.showPageScrollbar();
    render();
  }

  public static changeUserData(user: User, errorBlock: HTMLElement, render: RenderHandler): void {
    const dataCorrect = DataValidation.checkIfDataCorrect(ProfileState.login, ProfileState.password, errorBlock);
    const loginDiffer = DataValidation.checkIfLoginDiffer(user);
    const userData = new CurrentUser(
      ProfileState.login,
      ProfileState.password,
      ProfileState.avatar,
      user.testing,
      user.lessonsEn,
      user.lessonsRu,
      user.typingAdventure,
      user.typingHero,
      user.badges
    );

    if (dataCorrect) {
      if (loginDiffer) {
        ApiService.checkUser(ProfileState.login).then((status: number) => {
          if (status === StatusCode.found) {
            ManageError.showError(errorBlock, ErrorSource.registration, ErrorType.existingLogin);
          }

          if (status === StatusCode.notFound) {
            ApiService.updateUser(user._id, userData).then(() => {
              UserState.updateUserState(ProfileState.login, ProfileState.avatar);
              ManageState.saveState();
              ManagePage.showPageScrollbar();
              render();
            });
          }
        });
      } else {
        ApiService.updateUser(user._id, userData).then(() => {
          UserState.updateUserState(ProfileState.login, ProfileState.avatar);
          ManageState.saveState();
          ManagePage.showPageScrollbar();
          render();
        });
      }
    }
  }
}

export default ManageUser;
