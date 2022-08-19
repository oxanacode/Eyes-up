import State from '../state/state';
import ManagePage from './manage-page';

import { Theme } from '../../types/enums';

class ManageTheme {
  public static changeTheme(theme: Theme): void {
    if (State.currentTheme === theme) return;

    State.currentTheme = theme;
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
