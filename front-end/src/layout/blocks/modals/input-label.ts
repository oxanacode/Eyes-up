import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';

class InputLabel {
  public static createInputLabel(): HTMLElement {
    const label = CreateElement.createElement(Tag.label, [
      { name: 'class', value: 'input-label' },
    ]);

    return label;
  }
}

export default InputLabel;
