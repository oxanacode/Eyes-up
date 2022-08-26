import CreateElement from '../../elements/create-element';
import State from '../../../scripts/state/state';
import ManageUser from '../../../scripts/user/manage-user';
import translation from '../../../data/translation';

import { RenderHandler } from '../../../types/types';
import { Tag } from '../../../types/enums';

class SignUpBtn {
  public static createSignUpBtn(
    loginInput: HTMLInputElement,
    passwordInput: HTMLInputElement,
    errorBlock: HTMLElement,
    render: RenderHandler
  ): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'big-btn' }]);

    btn.textContent = translation.modalSignUpTitle[State.currentLang];
    btn.addEventListener('click', () => {
      ManageUser.createUser(loginInput, passwordInput, errorBlock, render);
    });

    return btn;
  }
}

export default SignUpBtn;
