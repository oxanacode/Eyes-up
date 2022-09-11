import CreateElement from '../../../elements/create-element';
import State from '../../../../scripts/state/state';
import confirmationTranslation from '../../../../data/confirmation-translation';

import { Tag } from '../../../../types/enums';

class LogoutText {
  public static createLogoutText(): HTMLElement {
    const text = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'confirmation-text' }]);

    text.textContent = confirmationTranslation.logoutText[State.currentLang];

    return text;
  }
}

export default LogoutText;
