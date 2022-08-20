import CreateElement from '../../elements/create-element';
import CloseBtn from './close-btn';
import Menu from '../header/menu';
import UserBtn from '../header/user-btn';
import Overlay from './overlay';

import { Tag } from '../../../types/enums';

class BurgerMenu {
  public static createBurgerMenu(): HTMLElement {
    const overlay = Overlay.createOverlay();
    const modal = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'burger-menu' },
    ]);
    const closeBtn = CloseBtn.createCloseBtn(overlay);
    const menu = Menu.createMenu();
    const userBtn = UserBtn.getUserBtn();

    modal.append(closeBtn, menu, userBtn);
    overlay.append(modal);

    return overlay;
  }
}

export default BurgerMenu;
