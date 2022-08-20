import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';
import State from '../../../scripts/state/state';

class ProfileBtn {
  public static createProfileBtn(): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: 'profile-btn' },
    ]);

    btn.style.backgroundImage = `./assets/images/avatars/avatar-${State.currentUser.avatar}.png`;
    btn.addEventListener('click', () => {
      console.log('пользовательский профиль');
    });

    return btn;
  }
}

export default ProfileBtn;
