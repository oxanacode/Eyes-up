import CreateElement from '../../../elements/create-element';
import ConfirmationQuestion from './confirmation-question';
import ConfirmationText from './confirmation-text';
import confirmationTranslation from '../../../../data/confirmation-translation';
import State from '../../../../scripts/state/state';
import ConfirmationDeleteAccountBtn from './confirmation-delete-account-btn';
import ConfirmationLogoutBtn from './confirmation-logout-btn';
import ConfirmationNoBtn from './confirmation-no-btn';

import { Confirmation, Tag } from '../../../../types/enums';
import { User } from '../../../../types/interfaces';
import { RenderHandler } from '../../../../types/types';

class ConfirmationContent {
  public static createConfirmationContent(
    wrapper: HTMLElement,
    className: string,
    render: RenderHandler,
    confirmation: Confirmation,
    user?: User
  ): HTMLElement {
    const content = CreateElement.createElement(Tag.div, [{ name: 'class', value: className }]);
    const question = ConfirmationQuestion.createConfirmationQuestion();
    const text =
      confirmation === Confirmation.delete
        ? ConfirmationText.createConfirmationText(confirmationTranslation.textDelete[State.currentLang])
        : ConfirmationText.createConfirmationText(confirmationTranslation.textLogout[State.currentLang]);
    const btnsWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'confirmation-btns-wrapper' }]);
    const yesBtn =
      Confirmation.delete && user
        ? ConfirmationDeleteAccountBtn.createConfirmationDeleteAccountBtn(user, render)
        : ConfirmationLogoutBtn.createConfirmationLogoutBtn(render);
    const noBtn = ConfirmationNoBtn.createConfirmationNoBtn(wrapper);

    btnsWrapper.append(yesBtn, noBtn);
    content.append(question, text, btnsWrapper);

    return content;
  }
}

export default ConfirmationContent;
