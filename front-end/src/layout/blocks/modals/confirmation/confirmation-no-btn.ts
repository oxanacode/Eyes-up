import CreateElement from '../../../elements/create-element';
import State from '../../../../scripts/state/state';
import ManageConfirmation from '../../../../scripts/layout/manage-confirmation';
import confirmationTranslation from '../../../../data/confirmation-translation';

import { Tag } from '../../../../types/enums';

class ConfirmationNoBtn {
  public static createConfirmationNoBtn(wrapper: HTMLElement): HTMLElement {
    const btn = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'confirmation-no-btn' }]);

    btn.textContent = confirmationTranslation.btnNo[State.currentLang];
    btn.addEventListener('click', () => {
      ManageConfirmation.hideConfirmation(wrapper);
    });

    return btn;
  }
}

export default ConfirmationNoBtn;
