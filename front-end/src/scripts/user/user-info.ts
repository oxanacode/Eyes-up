import { UserData } from '../../types/types';

class UserInfo implements UserData {
  constructor(
    public login: string,
    public password: string,
    public avatar: number
  ) {
    this.login = login;
    this.password = password;
    this.avatar = avatar;
  }
}

export default UserInfo;
