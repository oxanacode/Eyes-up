import State from '../state/state';

class UserState {
  public static checkIfUserAuthorised(): boolean {
    if (State.currentUser.login === State.notAuthorised) {
      return false;
    }

    return true;
  }

  public static updateUserLogin(login: string): void {
    State.currentUser.login = login;
  }

  public static updateUserState(login: string, avatar: number): void {
    State.currentUser.login = login;
    State.currentUser.avatar = avatar;
  }

  public static resetUserState(): void {
    State.currentUser.login = State.notAuthorised;
    State.currentUser.avatar = State.defaultAvatar;
  }
}

export default UserState;
