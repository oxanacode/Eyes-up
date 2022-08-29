import State from '../state/state';

import { Avatar } from '../../types/enums';

class ProfileState {
  public static login: string = State.notAuthorised;

  public static password: string = State.notAuthorised;

  public static avatar: Avatar | number = State.defaultAvatar;
}

export default ProfileState;
