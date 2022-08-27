import State from '../../../../scripts/state/state';
import BigBtn from '../../../elements/big-btn';
import ManageUser from '../../../../scripts/user/manage-user';
import translation from '../../../../data/translation';

import { RenderHandler } from '../../../../types/types';

class LogoutBtn {
  public static createLogoutBtn(render: RenderHandler): HTMLElement {
    const btn = BigBtn.createBigBtn(translation.profileLogoutBtn[State.currentLang]);

    btn.classList.add('logout-btn');
    btn.addEventListener('click', () => {
      ManageUser.logoutFromProfile(render);
    });

    return btn;
  }
}

export default LogoutBtn;
