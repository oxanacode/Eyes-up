import CreateElement from '../../elements/create-element';
import Menu from './menu';
import ThemeBtn from './theme-btn';
import LangBtn from './lang-btn';
import BurgerMenuBtn from '../modals/burger-menu/burder-menu-btn';
import AppBtn from './app-btn';
import UserState from '../../../scripts/user/user-state';
import ProfileBtn from '../modals/profile/profile-btn';
import RegistrationBtn from '../modals/registration/registration-btn';

import { Page, Tag } from '../../../types/enums';
import { RenderHandler } from '../../../types/types';

class Header {
  public static createHeader(render: RenderHandler): HTMLElement {
    const header = CreateElement.createElement(Tag.header, [{ name: 'class', value: 'header' }]);
    const headerWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'header-wrapper' }]);
    const menuWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'menu-wrapper' }]);
    const logo = AppBtn.createAppBtn(Page.home, render);
    const menu = Menu.createMenu('menu header-menu', render);
    const controlsWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'controls-wrapper' }]);
    const themeLangWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'theme-lang-wrapper' }]);
    const themeBtn = ThemeBtn.createThemeBtn();
    const langBtn = LangBtn.createLangBtn(render);
    let userBtn;
    const burgerBtn = BurgerMenuBtn.createBurgerMenuBtn(render);

    if (UserState.checkIfUserAuthorized()) {
      userBtn = ProfileBtn.createHeaderProfileBtn(render);
    } else {
      userBtn = RegistrationBtn.createHeaderRegistrationBtn(render);
    }

    userBtn.classList.add('header-user-btn');
    themeLangWrapper.append(themeBtn, langBtn);
    controlsWrapper.append(themeLangWrapper, userBtn, burgerBtn);
    menuWrapper.append(logo, menu);
    headerWrapper.append(menuWrapper, controlsWrapper);
    header.append(headerWrapper);

    return header;
  }
}

export default Header;
