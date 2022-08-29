import CreateElement from '../../../elements/create-element';
import State from '../../../../scripts/state/state';
import confirmationTranslation from '../../../../data/confirmation-translation';

import { Tag } from '../../../../types/enums';

class ConfirmationYesBtn {
  public static createConfirmationYesBtn(): HTMLElement {
    const btn = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'confirmation-yes-btn' }]);

    btn.textContent = confirmationTranslation.btnYes[State.currentLang];

    return btn;
  }
}

export default ConfirmationYesBtn;
