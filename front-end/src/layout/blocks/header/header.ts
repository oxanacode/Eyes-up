import CreateElement from '../../elements/create-element';
import AppLogo from './app-logo';
import Menu from './menu';
import ThemeBtn from './theme-btn';
import State from '../../../scripts/state/state';
import LangBtn from './lang-btn';
import UserBtn from './user-btn';
import BurgerMenuBtn from './burder-menu-btn';

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
    const themeBtn = ThemeBtn.createThemeBtn();
    const langBtn = LangBtn.createLangBtn();
    const userBtn = UserBtn.getUserBtn();
    const burgerBtn = BurgerMenuBtn.createBurgerMenuBtn();

    themeLangWrapper.append(themeBtn, langBtn);
    controlsWrapper.append(themeLangWrapper, userBtn, burgerBtn);
    menuWrapper.append(menu, controlsWrapper);
    headerWrapper.append(logo, menuWrapper);
    header.append(headerWrapper);

    return header;
  }
}

export default Header;
