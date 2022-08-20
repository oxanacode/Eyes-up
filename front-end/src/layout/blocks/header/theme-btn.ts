import ManageTheme from '../../../scripts/layout/manage-theme';
import ManageState from '../../../scripts/state/manage-state';
import SmallBtn from '../../elements/small-btn';

class ThemeBtn {
  public static createThemeBtn(): HTMLElement {
    const btn = SmallBtn.createSmallBtn(
      'small-btn small-btn-bg theme-btn',
      'Theme switcher'
    );

    btn.addEventListener('click', () => {
      ManageTheme.changeTheme();
      ManageState.saveState();
      ManageTheme.applyTheme();
    });

    return btn;
  }
}

export default ThemeBtn;
