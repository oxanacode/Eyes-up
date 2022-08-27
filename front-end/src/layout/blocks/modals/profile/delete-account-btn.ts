import CreateElement from '../../../elements/create-element';
import State from '../../../../scripts/state/state';
import ApiService from '../../../../scripts/api/api-service';
import ManageUser from '../../../../scripts/user/manage-user';
import translation from '../../../../data/translation';

import { Tag } from '../../../../types/enums';
import { User } from '../../../../types/interfaces';
import { RenderHandler } from '../../../../types/types';

class DeleteAccountBtn {
  public static createDeleteAccountBtn(user: User, render: RenderHandler): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'delete-account-btn' }]);

    btn.textContent = translation.profileDeleteBtn[State.currentLang];
    btn.addEventListener('click', () => {
      /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
      ApiService.deleteUser(user._id).then(() => {
        ManageUser.logoutFromProfile(render);
      });
    });

    return btn;
  }
}

export default DeleteAccountBtn;
