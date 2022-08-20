import CreateElement from '../../elements/create-element';
import MenuBtn from './menu-btn';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';

import { Page, Tag } from '../../../types/enums';

class Menu {
  public static createMenu(): HTMLElement {
    const menu = CreateElement.createElement(Tag.nav, [
      { name: 'class', value: 'menu' },
    ]);
    const homeBtn = MenuBtn.createMenuBtn(
      translation.homeLink[State.currentLang],
      Page.home
    );
    const layoutBtn = MenuBtn.createMenuBtn(
      translation.lessonsLink[State.currentLang],
      Page.layout
    );
    const gamesBtn = MenuBtn.createMenuBtn(
      translation.gamesLink[State.currentLang],
      Page.games
    );
    const aboutBtn = MenuBtn.createMenuBtn(
      translation.aboutUsLink[State.currentLang],
      Page.about
    );

    menu.append(homeBtn, layoutBtn, gamesBtn, aboutBtn);

    return menu;
  }
}

export default Menu;
