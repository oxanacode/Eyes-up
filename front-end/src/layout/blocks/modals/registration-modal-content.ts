import CreateElement from '../../elements/create-element';
import MainTitle from '../../elements/main-title';
import CloseBtn from './close-btn';
import LoginInput from './login-input';
import PasswordInput from './password-input';
import SwitchModalBtn from './switch-modal-btn';

import { Tag } from '../../../types/enums';

class RegistrationModalContent {
  public static createRegistrationModalContent(
    titleName: string,
    actionBtn: HTMLElement,
    switchBtnText: string,
    switchBtnAction: string,
    modalToClose: HTMLElement
  ): HTMLElement {
    const content = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'registration-modal-content' },
    ]);
    const closeBtn = CloseBtn.createCloseBtn(modalToClose);
    const title = MainTitle.createMainTitle(titleName);
    const login = LoginInput.createLoginInput();
    const password = PasswordInput.createPasswordInput();
    const action = actionBtn;
    const switchBtn = SwitchModalBtn.createSwitchModalBtn(
      switchBtnText,
      switchBtnAction,
      content
    );

    content.append(closeBtn, title, login, password, action, switchBtn);

    return content;
  }
}

export default RegistrationModalContent;
