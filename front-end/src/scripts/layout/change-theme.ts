import State from '../state/state';

import { Theme } from '../../types/enums';

class ChangeTheme {
  public static changeTheme(theme: Theme): void {
    if (State.currentTheme === theme) return;

    State.currentTheme = theme;
  }
}

export default ChangeTheme;
