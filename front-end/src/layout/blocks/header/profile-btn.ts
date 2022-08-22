import CreateElement from '../../elements/create-element';
import State from '../../../scripts/state/state';
import ManageModal from '../../../scripts/layout/manage-modal';

import { Tag } from '../../../types/enums';

class ProfileBtn {
  public static createProfileBtn(): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: 'profile-btn' },
    ]);

    btn.style.backgroundImage = `./assets/images/avatars/avatar-${State.currentUser.avatar}.png`;

    return btn;
  }

  // заменить modalToOpen на render, в openModal передавать метод создания модалки профиля и render
  public static createHeaderProfileBtn(modalToOpen: HTMLElement): HTMLElement {
    const btn = ProfileBtn.createProfileBtn();

    btn.addEventListener('click', () => {
      ManageModal.openModal(modalToOpen);
    });

    return btn;
  }

  // подумать над тем, как реализовать закрытие одной модалки и открытие другой - может, перерисовывать?
  public static createBurgerMenuProfileBtn(
    modalToClose: HTMLElement,
    modalToOpen: HTMLElement
  ): HTMLElement {
    const btn = ProfileBtn.createProfileBtn();

    btn.addEventListener('click', () => {
      ManageModal.closeModalOpenModal(modalToClose, modalToOpen);
    });

    return btn;
  }
}

export default ProfileBtn;
