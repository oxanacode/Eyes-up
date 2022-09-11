import CreateElement from '../../../elements/create-element';
import State from '../../../../scripts/state/state';
import confirmationTranslation from '../../../../data/confirmation-translation';

import { Tag } from '../../../../types/enums';

class LoggedText {
  public static createLoggedText(): HTMLElement {
    const text = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'confirmation-question' }]);

    text.textContent = confirmationTranslation.loggedText[State.currentLang];

    return text;
  }
}

export default LoggedText;
