import { Lang, Page, Theme } from '../types/enums';

class State {
  public static currentPage = Page.home;

  public static currentLang = Lang.en;

  public static currentTheme = Theme.light;
}

export default State;