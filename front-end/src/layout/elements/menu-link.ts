import CreateElement from './create-element';

import { Tag, Page } from '../../types/enums';
import { ChangePage } from '../../scripts/layout/change-page';

class MenuLink {
  public static createMenuLink(
    className: string,
    textContent: string,
    pageName: Page
  ): HTMLElement {
    const menuLink = CreateElement.createElement(Tag.link, [{ name: 'class', value: className }]);

    menuLink.textContent = textContent;
    menuLink.addEventListener('click', () => { ChangePage.changePage(pageName) });

    return menuLink;
  }
}
