import CreateElement from '../../../elements/create-element';
import State from '../../../../scripts/state/state';
import SignUpBtn from './sign-up-btn';
import LogInBtn from './log-in-btn';
import RegistrationModalContent from './registration-modal-content';
import translation from '../../../../data/translation';
import CloseBtn from '../common/close-btn';

import { Tag } from '../../../../types/enums';
import { RenderHandler } from '../../../../types/types';

class RegistrationModal {
  public static createRegistrationModal(modalToClose: HTMLElement, render: RenderHandler): HTMLElement {
    const modal = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'registration-modal' }]);
    const closeBtn = CloseBtn.createCloseBtn('small-btn close-btn registration-close-btn', modalToClose);
    const signUpContent = RegistrationModalContent.createRegistrationModalContent(
      'registration-modal-content',
      translation.modalSignUpTitle[State.currentLang],
      translation.modalSignUpText[State.currentLang],
      translation.modalSignUpLink[State.currentLang],
      SignUpBtn.createSignUpBtn,
      render
    );
    const logInContent = RegistrationModalContent.createRegistrationModalContent(
      'registration-modal-content hidden',
      translation.modalLogInTitle[State.currentLang],
      translation.modalLogInText[State.currentLang],
      translation.modalLogInLink[State.currentLang],
      LogInBtn.createLogInBtn,
      render
    );

    modal.append(closeBtn, signUpContent, logInContent);

    return modal;
  }
}

export default RegistrationModal;
