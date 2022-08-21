import CreateElement from '../../elements/create-element';
import MenuBtn from './menu-btn';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';

import { Page, Tag } from '../../../types/enums';
import { RenderHandler } from '../../../types/types';

class Menu {
  public static createMenu(
    className: string,
    render: RenderHandler
  ): HTMLElement {
    const menu = CreateElement.createElement(Tag.nav, [
      { name: 'class', value: className },
    ]);
    const homeBtn = MenuBtn.createMenuBtn(
      translation.homeLink[State.currentLang],
      Page.home,
      render
    );
    const layoutBtn = MenuBtn.createMenuBtn(
      translation.lessonsLink[State.currentLang],
      Page.layout,
      render
    );
    const gamesBtn = MenuBtn.createMenuBtn(
      translation.gamesLink[State.currentLang],
      Page.games,
      render
    );
    const aboutBtn = MenuBtn.createMenuBtn(
      translation.aboutUsLink[State.currentLang],
      Page.about,
      render
    );

    menu.append(homeBtn, layoutBtn, gamesBtn, aboutBtn);

    return menu;
  }
}

export default Menu;
