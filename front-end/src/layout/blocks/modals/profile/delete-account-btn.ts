import CreateElement from '../../../elements/create-element';
import State from '../../../../scripts/state/state';
import ManageConfirmation from '../../../../scripts/layout/manage-confirmation';
import translation from '../../../../data/translation';

import { Tag } from '../../../../types/enums';

class DeleteAccountBtn {
  public static createDeleteAccountBtn(wrapper: HTMLElement): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'delete-account-btn' }]);

    btn.textContent = translation.profileDeleteBtn[State.currentLang];
    btn.addEventListener('click', () => {
      ManageConfirmation.showConfirmation(wrapper);
    });

    return btn;
  }
}

export default DeleteAccountBtn;
