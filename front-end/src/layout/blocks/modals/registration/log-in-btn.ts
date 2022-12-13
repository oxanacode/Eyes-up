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
    const btnWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'btn-wrapper' }]);
    const btn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'big-btn' }]);
    const spinner = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'spinner auth-spinner' }]);

    btn.textContent = translation.modalLogInTitle[State.currentLang];
    btnWrapper.append(btn);
    btn.addEventListener('click', () => {
      btnWrapper.prepend(spinner);
      btn.setAttribute('disabled', '');
      ManageUser.authoriseUser(loginInput, passwordInput, errorBlock, spinner, btn, render);
    });

    return btnWrapper;
  }
}

export default LogInBtn;
