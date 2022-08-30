import ConfirmationYesBtn from './confirmation-yes-btn';
import ManageUser from '../../../../scripts/user/manage-user';

import { RenderHandler } from '../../../../types/types';

class ConfirmationLogoutBtn {
  public static createConfirmationLogoutBtn(render: RenderHandler): HTMLElement {
    const btn = ConfirmationYesBtn.createConfirmationYesBtn();

    btn.addEventListener('click', () => {
      ManageUser.logoutFromProfile(render);
    });

    return btn;
  }
}

export default ConfirmationLogoutBtn;
