import State from '../state/state';
import ManagePage from './manage-page';

import { Theme } from '../../types/enums';
import ManageState from '../state/manage-state';

class SwitchTheme {
  public static changeTheme(): void {
    State.currentTheme =
      State.currentTheme === Theme.light ? Theme.dark : Theme.light;
  }

  public static swapTheme(): void {
    const page = ManagePage.getPage();

    if (State.currentTheme === Theme.light) {
      page.classList.remove(Theme.dark);
      page.classList.add(Theme.light);
    } else {
      page.classList.remove(Theme.light);
      page.classList.add(Theme.dark);
    }
  }

  public static applyTheme(): void {
    SwitchTheme.changeTheme();
    ManageState.saveState();
    SwitchTheme.swapTheme();
  }
}

export default SwitchTheme;
