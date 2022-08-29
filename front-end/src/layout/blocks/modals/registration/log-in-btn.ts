import CreateElement from '../../../elements/create-element';
import State from '../../../../scripts/state/state';
import translation from '../../../../data/translation';
import ManageUser from '../../../../scripts/user/manage-user';

import { RenderHandler } from '../../../../types/types';
import { Tag } from '../../../../types/enums';

class LogInBtn {
  public static createLogInBtn(
    loginInput: HTMLInputElement,
    passwordInput: HTMLInputElement,
    errorBlock: HTMLElement,
    render: RenderHandler
  ): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'big-btn' }]);

    btn.textContent = translation.modalLogInTitle[State.currentLang];
    btn.addEventListener('click', () => {
      ManageUser.authoriseUser(loginInput, passwordInput, errorBlock, render);
    });

    return btn;
  }
}

export default LogInBtn;
