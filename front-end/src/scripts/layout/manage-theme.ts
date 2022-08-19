import State from '../state/state';
import ManagePage from './manage-page';

import { Theme } from '../../types/enums';

class ManageTheme {
  public static changeTheme(
    currentTheme: Theme,
    alternativeTheme: Theme
  ): void {
    State.currentTheme = alternativeTheme;
    State.alternativeTheme = currentTheme;
  }

  public static applyTheme(): void {
    const page = ManagePage.getPage();

    if (State.currentTheme === Theme.light) {
      page.classList.remove(Theme.dark);
      page.classList.add(Theme.light);
    } else {
      page.classList.remove(Theme.light);
      page.classList.add(Theme.dark);
    }
  }
}

export default ManageTheme;
