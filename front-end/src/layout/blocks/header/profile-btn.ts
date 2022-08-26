import CreateElement from '../../elements/create-element';
import State from '../../../scripts/state/state';

import { Tag } from '../../../types/enums';

class ProfileBtn {
  public static createProfileBtn(): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'profile-btn' }]);

    btn.style.backgroundImage = `./assets/images/avatars/avatar-${State.currentUser.avatar}.png`;

    return btn;
  }

  public static createHeaderProfileBtn(): HTMLElement {
    const btn = ProfileBtn.createProfileBtn();

    // btn.addEventListener('click', () => {
    //   console.log('профиль');
    // });

    return btn;
  }

  public static createBurgerMenuProfileBtn(): HTMLElement {
    const btn = ProfileBtn.createProfileBtn();

    // btn.addEventListener('click', () => {
    //   console.log('профиль');
    // });

    return btn;
  }
}

export default ProfileBtn;
