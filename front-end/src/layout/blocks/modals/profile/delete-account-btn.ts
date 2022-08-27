import CreateElement from '../../../elements/create-element';
import State from '../../../../scripts/state/state';
import translation from '../../../../data/translation';

import { Tag } from '../../../../types/enums';
import { User } from '../../../../types/interfaces';

class DeleteAccountBtn {
  public static createDeleteAccountBtn(user: User): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'delete-account-btn' }]);

    btn.textContent = translation.profileDeleteBtn[State.currentLang];

    return btn;
  }
}

export default DeleteAccountBtn;
