import CreateElement from '../../../elements/create-element';
import LoggedText from './logged-text';
import LogoutText from './logout-text';
import LogoutBtn from './logout-btn';
import CancelBtn from './cancel-btn';

import { Tag } from '../../../../types/enums';
import { RenderHandler } from '../../../../types/types';

class HomeLogoutConfirmation {
  public static createHomeLogoutConfirmation(wrapper: HTMLElement, render: RenderHandler): HTMLElement {
    const content = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'logout-confirmation-content hidden' },
    ]);
    const loggedText = LoggedText.createLoggedText();
    const logoutText = LogoutText.createLogoutText();
    const btnsWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'confirmation-btns-wrapper' }]);
    const logoutBtn = LogoutBtn.createLogoutBtn(render);
    const cancelBtn = CancelBtn.createCancelBtn(wrapper);

    btnsWrapper.append(logoutBtn, cancelBtn);
    content.append(loggedText, logoutText, btnsWrapper);

    return content;
  }
}

export default HomeLogoutConfirmation;
