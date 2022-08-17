import { Language, Page, Theme } from '../types/enums';

class State {
  public static currentPage = Page.home;

  public static currentLanguage = Language.en;

  public static currentTheme = Theme.light;
}

export default State;