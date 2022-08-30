import ConfirmationYesBtn from './confirmation-yes-btn';
import ApiService from '../../../../scripts/api/api-service';
import ManageUser from '../../../../scripts/user/manage-user';

import { RenderHandler } from '../../../../types/types';
import { User } from '../../../../types/interfaces';

class ConfirmationDeleteAccountBtn {
  public static createConfirmationDeleteAccountBtn(user: User, render: RenderHandler): HTMLElement {
    const btn = ConfirmationYesBtn.createConfirmationYesBtn();

    btn.addEventListener('click', () => {
      ApiService.deleteUser(user._id).then(() => {
        ManageUser.logoutFromProfile(render);
      });
    });

    return btn;
  }
}

export default ConfirmationDeleteAccountBtn;
