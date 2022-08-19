import CreateElement from '../../elements/create-element';
import State from '../../../scripts/state';
import ChangePage from '../../../scripts/layout/change-page';

import { Tag, Page, Theme, Lang } from '../../../types/enums';

class MenuLink {
  public static createMenuLink(className: string, page: Page): HTMLElement {
    const menuLink = CreateElement.createElement(Tag.link, [
      { name: 'class', value: className },
    ]);

    if (State.currentTheme === Theme.light) {
      menuLink.classList.add('класс светлой темы для элемента');
    } else {
      menuLink.classList.add('класс темной темы для элемента');
    }

    menuLink.textContent =
      State.currentLang === Lang.en
        ? 'текст на английском'
        : 'текст на русском';
    menuLink.addEventListener('click', () => {
      ChangePage.changePage(page);
    });

    return menuLink;
  }
}

export default MenuLink;
