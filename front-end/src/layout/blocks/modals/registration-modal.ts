import CloseBtn from './close-btn';
import CreateElement from '../../elements/create-element';
import MainTitle from '../../elements/main-title';
import State from '../../../scripts/state/state';
import translation from '../../../data/translation';
import LoginInput from './login-input';
import PasswordInput from './password-input';
import SwitchModalBtn from './switch-modal-btn';
import SignUpBtn from './sign-up-btn';

import { Tag } from '../../../types/enums';
import { RenderHandler } from '../../../types/types';

class RegistrationModal {
  public static createRegistrationModal(
    modalToClose: HTMLElement,
    render: RenderHandler
  ): HTMLElement {
    const modal = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'registration-modal' },
    ]);
    const closeBtn = CloseBtn.createCloseBtn(modalToClose);
    const title = MainTitle.createMainTitle(
      translation.modalSignUpTitle[State.currentLang]
    );
    const login = LoginInput.createLoginInput();
    const password = PasswordInput.createPasswordInput();
    const signUpBtn = SignUpBtn.createSignUpBtn(render);
    const switchBtn = SwitchModalBtn.createSwitchModalBtn(
      translation.modalSignUpText[State.currentLang],
      translation.modalSignUpLink[State.currentLang]
    );

    modal.append(closeBtn, title, login, password, signUpBtn, switchBtn);

    return modal;
  }
}

export default RegistrationModal;
