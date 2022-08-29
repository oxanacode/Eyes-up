import CreateElement from '../../../elements/create-element';
import State from '../../../../scripts/state/state';
import confirmationTranslation from '../../../../data/confirmation-translation';

import { Tag } from '../../../../types/enums';

class ConfirmationQuestion {
  public static createConfirmationQuestion(): HTMLElement {
    const question = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'confirmation-question' }]);

    question.textContent = confirmationTranslation.question[State.currentLang];

    return question;
  }
}

export default ConfirmationQuestion;
