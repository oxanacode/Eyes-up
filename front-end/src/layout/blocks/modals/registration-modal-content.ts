import CreateElement from '../../elements/create-element';
import MainTitle from '../../elements/main-title';
import LoginInput from './login-input';
import PasswordInput from './password-input';
import RegistrationSwitchBtn from './registration-switch-btn';

import { Tag } from '../../../types/enums';

class RegistrationModalContent {
  public static createRegistrationModalContent(
    titleName: string,
    actionBtn: HTMLElement,
    switchBtnText: string,
    switchBtnAction: string
  ): HTMLElement {
    const content = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'registration-modal-content' },
    ]);
    const title = MainTitle.createMainTitle(titleName);
    const inputsWrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'registration-inputs-wrapper' },
    ]);
    const login = LoginInput.createLoginInput();
    const password = PasswordInput.createPasswordInput();
    const error = CreateElement.createElement(Tag.par, [
      { name: 'class', value: 'error-block' },
    ]);
    const action = actionBtn;
    const switchBtn = RegistrationSwitchBtn.createRegistrationSwitchBtn(
      switchBtnText,
      switchBtnAction,
      content
    );

    inputsWrapper.append(login, password, error);
    content.append(title, inputsWrapper, action, switchBtn);

    return content;
  }
}

export default RegistrationModalContent;
