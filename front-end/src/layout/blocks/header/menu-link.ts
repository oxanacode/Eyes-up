import CreateElement from '../../elements/create-element';
import State from '../../../scripts/state';
import ChangePage from '../../../scripts/layout/header/change-page';

import { Tag, Page, Theme, Language } from '../../../types/enums';

class MenuLink {
  public static createMenuLink(className: string, pageName: Page): HTMLElement {
    const menuLink = CreateElement.createElement(Tag.link, [{ name: 'class', value: className }]);

    if (State.currentTheme === Theme.light) {
      menuLink.classList.add('класс светлой темы для элемента');
    } else {
      menuLink.classList.add('класс темной темы для элемента');
    }

    menuLink.textContent = State.currentLanguage === Language.en
      ? 'текст на английском'
      : 'текст на русском';
    menuLink.addEventListener('click', () => { ChangePage.changePage(pageName) });

    return menuLink;
  }
}

export default MenuLink;
