import CreateElement from '../../../elements/create-element';

import { Tag } from '../../../../types/enums';

class ConfirmationText {
  public static createConfirmationText(textContent: string): HTMLElement {
    const text = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'confirmation-text' }]);

    text.textContent = textContent;

    return text;
  }
}

export default ConfirmationText;
