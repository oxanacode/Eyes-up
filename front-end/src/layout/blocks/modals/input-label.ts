import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';

class InputLabel {
  public static createInputLabel(text: string): HTMLElement {
    const label = CreateElement.createElement(Tag.label, [
      { name: 'class', value: 'registration-input-label base-text' },
    ]);

    label.textContent = text;
    return label;
  }
}

export default InputLabel;
