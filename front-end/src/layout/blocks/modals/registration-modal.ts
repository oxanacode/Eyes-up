import CreateElement from '../../elements/create-element';
import State from '../../../scripts/state/state';
import SignUpBtn from './sign-up-btn';
import LogInBtn from './log-in-btn';
import RegistrationModalContent from './registration-modal-content';
import translation from '../../../data/translation';

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
    const signUpContent =
      RegistrationModalContent.createRegistrationModalContent(
        translation.modalSignUpTitle[State.currentLang],
        SignUpBtn.createSignUpBtn(render),
        translation.modalSignUpText[State.currentLang],
        translation.modalSignUpLink[State.currentLang],
        modalToClose
      );
    const logInContent =
      RegistrationModalContent.createRegistrationModalContent(
        translation.modalLogInTitle[State.currentLang],
        LogInBtn.createLogInBtn(render),
        translation.modalLogInText[State.currentLang],
        translation.modalLogInLink[State.currentLang],
        modalToClose
      );

    logInContent.classList.add('hidden');
    modal.append(signUpContent, logInContent);

    return modal;
  }
}

export default RegistrationModal;
