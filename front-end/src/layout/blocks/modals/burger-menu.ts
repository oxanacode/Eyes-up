import CreateElement from '../../elements/create-element';
import CloseBtn from './close-btn';
import Menu from '../header/menu';
import ManageUser from '../../../scripts/profile/manage-user';
import ProfileBtn from '../header/profile-btn';
import RegistrationBtn from '../header/registration-btn';

import { Tag } from '../../../types/enums';
import { RenderHandler } from '../../../types/types';

class BurgerMenu {
  public static createBurgerMenu(
    wrapper: HTMLElement,
    render: RenderHandler
  ): HTMLElement {
    const modal = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'burger-menu' },
    ]);
    const closeBtn = CloseBtn.createCloseBtn(wrapper);
    const menu = Menu.createMenu('menu modal-menu', render);
    let userBtn;

    if (ManageUser.checkIfUserAuthorized()) {
      // заменить на BurgerMenuProfileBtn
      userBtn = ProfileBtn.createProfileBtn();
    } else {
      // заменить на BurgerMenuRegistrationBtn
      userBtn = RegistrationBtn.createRegistrationBtn();
    }

    userBtn.classList.add('modal-user-btn');
    modal.append(closeBtn, menu, userBtn);

    return modal;
  }
}

export default BurgerMenu;
