import CloseBtn from './close-btn';
import CreateElement from '../../elements/create-element';
import MainTitle from '../../elements/main-title';
import State from '../../../scripts/state/state';
import translation from '../../../data/translation';
import LoginInput from './login-input';
import PasswordInput from './password-input';

import { Tag } from '../../../types/enums';
import SwitchModalBtn from './switch-modal-btn';

class RegistrationModal {
  public static createRegistrationModal(wrapper: HTMLElement): HTMLElement {
    const modal = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'registration-modal' },
    ]);
    const closeBtn = CloseBtn.createCloseBtn(wrapper);
    const title = MainTitle.createMainTitle(
      translation.modalSignUpTitle[State.currentLang]
    );
    const login = LoginInput.createLoginInput();
    const password = PasswordInput.createPasswordInput();
    const switchBtn = SwitchModalBtn.createSwitchModalBtn(
      translation.modalSignUpText[State.currentLang],
      translation.modalSignUpLink[State.currentLang]
    );

    modal.append(closeBtn, title, login, password, switchBtn);

    return modal;
  }
}

export default RegistrationModal;
