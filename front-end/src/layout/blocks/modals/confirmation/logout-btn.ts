import CreateElement from '../../../elements/create-element';
import ManageUser from '../../../../scripts/user/manage-user';
import State from '../../../../scripts/state/state';
import confirmationTranslation from '../../../../data/confirmation-translation';

import { Tag } from '../../../../types/enums';
import { RenderHandler } from '../../../../types/types';

class LogoutBtn {
  public static createLogoutBtn(render: RenderHandler): HTMLElement {
    const btn = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'confirmation-yes-btn' }]);

    btn.textContent = confirmationTranslation.logoutBtn[State.currentLang];
    btn.addEventListener('click', () => {
      ManageUser.logoutFromProfile(render);
    });

    return btn;
  }
}

export default LogoutBtn;
