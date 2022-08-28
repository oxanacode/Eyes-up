import BigBtn from '../../../elements/big-btn';
import State from '../../../../scripts/state/state';
import ManageUser from '../../../../scripts/user/manage-user';
import translation from '../../../../data/translation';

import { Disabled } from '../../../../types/enums';
import { RenderHandler } from '../../../../types/types';
import { User } from '../../../../types/interfaces';

class SaveChangesBtn {
  public static createSaveChangesBtn(user: User, errorBlock: HTMLElement, render: RenderHandler): HTMLElement {
    const btn = BigBtn.createBigBtn(translation.profileSaveBtn[State.currentLang]);

    btn.classList.add('save-changes-btn');
    btn.setAttribute(Disabled.true, Disabled.true);
    btn.addEventListener('click', () => {
      ManageUser.changeUserData(user, errorBlock, render);
    });

    return btn;
  }
}

export default SaveChangesBtn;
