import ManageTheme from '../../../scripts/layout/manage-theme';
import ManageState from '../../../scripts/state/manage-state';
import SmallBtn from '../../elements/small-btn';

import { Theme } from '../../../types/enums';

class ThemeBtn {
  public static createThemeBtn(
    currentTheme: Theme,
    alternativeTheme: Theme
  ): HTMLElement {
    const btn = SmallBtn.createSmallBtn('small-btn small-btn-bg theme-btn');

    btn.addEventListener('click', () => {
      ManageTheme.changeTheme(currentTheme, alternativeTheme);
      ManageState.applyState();
    });

    return btn;
  }
}

export default ThemeBtn;
