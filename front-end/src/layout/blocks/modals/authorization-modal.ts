import CloseBtn from './close-btn';
import CreateElement from '../../elements/create-element';
import MainTitle from '../../elements/main-title';
import State from '../../../scripts/state/state';
import translation from '../../../data/translation';
import LoginInput from './login-input';
import PasswordInput from './password-input';
import SwitchModalBtn from './switch-modal-btn';
import LogInBtn from './log-in-btn';

import { Tag } from '../../../types/enums';
import { RenderHandler } from '../../../types/types';

class AuthorizationModal {
  public static createAuthorizationModal(
    modalToClose: HTMLElement,
    render: RenderHandler
  ): HTMLElement {
    const modal = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'authorization-modal' },
    ]);
    const closeBtn = CloseBtn.createCloseBtn(modalToClose);
    const title = MainTitle.createMainTitle(
      translation.modalLogInTitle[State.currentLang]
    );
    const login = LoginInput.createLoginInput();
    const password = PasswordInput.createPasswordInput();
    const logInBtn = LogInBtn.createLogInBtn(render);
    const switchBtn = SwitchModalBtn.createSwitchModalBtn(
      translation.modalLogInText[State.currentLang],
      translation.modalLogInLink[State.currentLang]
    );

    modal.append(closeBtn, title, login, password, logInBtn, switchBtn);

    return modal;
  }
}

export default AuthorizationModal;
