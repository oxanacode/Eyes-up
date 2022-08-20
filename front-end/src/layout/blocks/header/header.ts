import CreateElement from '../../elements/create-element';
import AppLogo from './app-logo';
import Menu from './menu';
import ThemeBtn from './theme-btn';
import State from '../../../scripts/state/state';
import LangBtn from './lang-btn';
import UserBtn from './user-btn';

import { Tag } from '../../../types/enums';

class Header {
  public static createHeader(): HTMLElement {
    const header = CreateElement.createElement(Tag.header, [
      { name: 'class', value: 'header' },
    ]);
    const headerWrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'header-wrapper' },
    ]);
    const logo = AppLogo.createAppLogo();
    const menuWrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'menu-wrapper' },
    ]);
    const menu = Menu.createMenu();
    const controlsWrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'controls-wrapper' },
    ]);
    const themeLangWrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'theme-lang-wrapper' },
    ]);
    const userBtn = UserBtn.getUserBtn();
    const themeBtn = ThemeBtn.createThemeBtn(
      State.currentTheme,
      State.alternativeTheme
    );
    const langBtn = LangBtn.createLangBtn(
      State.currentLang,
      State.alternativeLang
    );

    themeLangWrapper.append(themeBtn, langBtn);
    controlsWrapper.append(themeLangWrapper, userBtn);
    menuWrapper.append(menu, controlsWrapper);
    headerWrapper.append(logo, menuWrapper);
    header.append(headerWrapper);

    return header;
  }
}

export default Header;
