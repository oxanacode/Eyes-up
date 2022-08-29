import ProfileState from './profile-state';

import { User } from '../../types/interfaces';

class ManageProfileState {
  public static updateProfileState(user: User): void {
    ProfileState.login = user.login;
    ProfileState.password = user.password;
    ProfileState.avatar = user.avatar;
  }

  public static changeLoginState(login: string): void {
    ProfileState.login = login;
  }

  public static changePasswordState(password: string): void {
    ProfileState.password = password;
  }

  public static changeAvatarState(avatar: number): void {
    ProfileState.avatar = avatar;
  }
}

export default ManageProfileState;
