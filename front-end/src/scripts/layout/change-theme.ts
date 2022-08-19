import RenderPage from '../../layout/render-page';
import State from '../state';

import { Theme } from '../../types/enums';

class ChangeTheme {
  public static changeTheme(theme: Theme): void {
    if (State.currentTheme === theme) return;

    State.currentTheme = theme;
    RenderPage.renderPage();
  }
}

export default ChangeTheme;
