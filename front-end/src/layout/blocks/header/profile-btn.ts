import CreateElement from '../../elements/create-element';
import State from '../../../scripts/state/state';
import AvatarImage from '../../elements/avatar-image';
import ManageModal from '../../../scripts/layout/manage-modal';
import ModalWrapper from '../modals/common/modal-wrapper';
import ProfileModal from '../modals/profile/profile-modal';
import translation from '../../../data/translation';

import { Tag } from '../../../types/enums';
import { RenderHandler } from '../../../types/types';

class ProfileBtn {
  public static createProfileBtn(
    btnClass: string,
    avatarClass: string,
    avatarPath: string,
    textClass: string
  ): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: btnClass }]);
    const avatar = AvatarImage.createAvatarImage(avatarClass, avatarPath);
    const text = CreateElement.createElement(Tag.par, [{ name: 'class', value: textClass }]);

    text.textContent = translation.profileTitle[State.currentLang];
    btn.append(avatar, text);

    return btn;
  }

  public static createHeaderProfileBtn(render: RenderHandler): HTMLElement {
    const btn = ProfileBtn.createProfileBtn(
      'header-profile-btn',
      'default-avatar header-profile-avatar',
      AvatarImage.createAvatarImagePath(State.currentUser.avatar),
      'header-profile-text'
    );

    btn.addEventListener('click', () => {
      ManageModal.openModal(ModalWrapper.createModalWrapper(ProfileModal.createProfileModal, render));
    });

    return btn;
  }

  public static createBurgerMenuProfileBtn(
    modalWrapper: HTMLElement,
    modalToClose: HTMLElement,
    modalToOpen: HTMLElement
  ): HTMLElement {
    const btn = ProfileBtn.createProfileBtn(
      'burger-menu-profile-btn',
      'default-avatar burger-menu-profile-avatar selected-avatar',
      AvatarImage.createAvatarImagePath(State.currentUser.avatar),
      'burger-menu-profile-text'
    );

    btn.addEventListener('click', () => {
      ManageModal.changeModal(modalWrapper, modalToClose, modalToOpen);
    });

    return btn;
  }
}

export default ProfileBtn;
