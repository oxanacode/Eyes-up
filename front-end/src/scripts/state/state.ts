import {
  Avatar,
  Complexity,
  Lang,
  Layout,
  Page,
  Theme,
} from '../../types/enums';
import { CurrentUser } from '../../types/interfaces';

class State {
  public static notAuthorised = 'login';

  public static defaultAvatar: Avatar = Avatar.one;

  public static currentUser: CurrentUser = {
    login: State.notAuthorised,
    avatar: State.defaultAvatar,
  };

  public static currentPage = Page.home;

  public static currentLang = Lang.en;

  public static currentTheme = Theme.light;

  public static currentLayout: Layout;

  public static currentComplexity: Complexity | undefined;
}

export default State;
