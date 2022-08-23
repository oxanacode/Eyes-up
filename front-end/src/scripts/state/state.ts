import { Complexity, Lang, Layout, Page, Theme } from '../../types/enums';
import { CurrentUser } from '../../types/interfaces';

class State {
  public static noLogin = 'noLogin';

  public static noAvatar = 0;

  public static currentUser: CurrentUser = {
    login: State.noLogin,
    avatar: State.noAvatar,
  };

  public static currentPage = Page.home;

  public static currentLang = Lang.en;

  public static currentTheme = Theme.light;

  public static currentLayout: Layout;

  public static currentComplexity: Complexity | undefined;
}

export default State;
