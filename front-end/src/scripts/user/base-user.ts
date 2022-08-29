import CurrentUser from './current-user';

import { Data } from '../../types/enums';

class BaseUser extends CurrentUser {
  constructor(public login: string, public password: string, public avatar: number) {
    super(login, password, avatar, Data.noData, Data.noData, Data.noData, Data.noData, Data.noData, Data.noData);
  }
}

export default BaseUser;
