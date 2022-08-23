import CreateElement from '../../elements/create-element';
import ManageUser from '../../../scripts/profile/manage-user';
import State from '../../../scripts/state/state';
import translation from '../../../data/translation';

import { RenderHandler } from '../../../types/types';
import { Tag } from '../../../types/enums';

class SignUpBtn {
  public static createSignUpBtn(render: RenderHandler): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: 'big-btn' },
    ]);

    btn.textContent = translation.modalSignUpTitle[State.currentLang];
    btn.addEventListener('click', () => {
      if (ManageUser.checkIfUserAuthorized()) {
        render();
      }
    });

    return btn;
  }
}

export default SignUpBtn;
