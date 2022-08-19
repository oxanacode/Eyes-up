import State from '../state/state';

class ManageUser {
  public static checkIfUserAuthorized(): boolean {
    if (State.currentUser.login === State.noLogin) {
      return false;
    }

    return true;
  }

  public static updateUser(login: string, avatar: number): void {
    State.currentUser.login = login;
    State.currentUser.avatar = avatar;
  }

  public static resetUser(): void {
    State.currentUser.login = State.noLogin;
    State.currentUser.avatar = State.noAvatar;
  }
}

export default ManageUser;
