import { Lang, Page, Theme } from '../../types/enums';
import { CurrentUser } from '../../types/interfaces';

class State {
  public static noLogin = '';

  public static noAvatar = 0;

  public static currentUser: CurrentUser = {
    login: State.noLogin,
    avatar: State.noAvatar,
  };

  public static currentPage = Page.home;

  public static currentLang = Lang.en;

  public static alternativeLang = Lang.ru;

  public static currentTheme = Theme.light;

  public static alternativeTheme = Theme.dark;
}

export default State;
