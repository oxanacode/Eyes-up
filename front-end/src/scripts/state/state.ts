import {
  Avatar,
  Complexity,
  Lang,
  Layout,
  LessonBg,
  Page,
  Theme,
  LessonFontSize,
  LessonFontFamily,
} from '../../types/enums';
import { CurrentUser } from '../../types/interfaces';

class State {
  public static notAuthorised = '0login';

  public static defaultAvatar: Avatar = Avatar.default;

  public static currentUser: CurrentUser = {
    login: State.notAuthorised,
    avatar: State.defaultAvatar,
  };

  public static currentPage = Page.home;

  public static currentLang = Lang.en;

  public static currentTheme = Theme.light;

  public static currentLayout: Layout;

  public static currentComplexity: Complexity | undefined;

  public static currentLessonBg = LessonBg.default;

  public static currentLessonFontSize = LessonFontSize.normal;

  public static currentLessonFontFamily = LessonFontFamily.default;
}

export default State;
