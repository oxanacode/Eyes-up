import State from '../../../scripts/state/state';
import CreateElement from '../../elements/create-element';
import ChangeTheme from '../../../scripts/layout/change-theme';
import UpdateState from '../../../scripts/state/manage-state';

import { Tag, Theme } from '../../../types/enums';

class ThemeSwitcher {
  public static createThemeSwitcher(
    className: string,
    theme: Theme
  ): HTMLElement {
    const themeSwitcher = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: className },
    ]);

    if (State.currentTheme === Theme.light) {
      themeSwitcher.classList.add('класс светлой темы для элемента');
    } else {
      themeSwitcher.classList.add('класс темной темы для элемента');
    }

    themeSwitcher.addEventListener('click', () => {
      ChangeTheme.changeTheme(theme);
      UpdateState.applyState();
    });

    return themeSwitcher;
  }
}

export default ThemeSwitcher;
