import SwitchTheme from '../../../scripts/layout/switch-theme';
import SmallBtn from '../../elements/small-btn';

class ThemeBtn {
  public static createThemeBtn(): HTMLElement {
    const btn = SmallBtn.createSmallBtn('small-btn small-btn-bg theme-btn', 'Theme switcher');

    btn.addEventListener('click', () => {
      SwitchTheme.applyTheme();
    });

    return btn;
  }
}

export default ThemeBtn;
