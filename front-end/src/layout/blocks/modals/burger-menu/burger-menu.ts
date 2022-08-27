import CreateElement from '../../../elements/create-element';
import CloseBtn from '../common/close-btn';
import Menu from '../../header/menu';
import UserState from '../../../../scripts/user/user-state';
import ProfileBtn from '../profile/profile-btn';
import RegistrationBtn from '../registration/registration-btn';
import RegistrationModal from '../registration/registration-modal';
import ProfileModal from '../profile/profile-modal';

import { Tag } from '../../../../types/enums';
import { RenderHandler } from '../../../../types/types';

class BurgerMenu {
  public static createBurgerMenu(wrapper: HTMLElement, render: RenderHandler): HTMLElement {
    const modal = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'burger-menu' }]);
    const closeBtn = CloseBtn.createCloseBtn('small-btn close-btn', wrapper);
    const menu = Menu.createMenu('menu modal-menu', render);
    let userBtn;

    if (UserState.checkIfUserAuthorized()) {
      userBtn = ProfileBtn.createBurgerMenuProfileBtn(wrapper, modal, ProfileModal.createProfileModal(wrapper, render));
    } else {
      userBtn = RegistrationBtn.createBurgerMenuRegistrationBtn(
        wrapper,
        modal,
        RegistrationModal.createRegistrationModal(wrapper, render)
      );
    }

    userBtn.classList.add('burger-menu-user-btn');
    modal.append(closeBtn, menu, userBtn);

    return modal;
  }
}

export default BurgerMenu;
