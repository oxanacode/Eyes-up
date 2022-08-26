import CreateElement from '../../elements/create-element';
import State from '../../../scripts/state/state';
import AvatarImage from '../modals/avatar-image';
import translation from '../../../data/translation';

import { Tag } from '../../../types/enums';

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

  public static createHeaderProfileBtn(): HTMLElement {
    const btn = ProfileBtn.createProfileBtn(
      'header-profile-btn',
      'header-profile-avatar',
      `${AvatarImage.path}avatar-${State.currentUser.avatar}.png`,
      'header-profile-text'
    );

    // btn.addEventListener('click', () => {
    //   console.log('профиль');
    // });

    return btn;
  }

  public static createBurgerMenuProfileBtn(): HTMLElement {
    const btn = ProfileBtn.createProfileBtn(
      'burger-menu-profile-btn',
      'burger-menu-profile-avatar selected-avatar',
      `${AvatarImage.path}avatar-${State.currentUser.avatar}.png`,
      'burger-menu-profile-text'
    );

    // btn.addEventListener('click', () => {
    //   console.log('профиль');
    // });

    return btn;
  }
}

export default ProfileBtn;
