import CreateElement from '../../../elements/create-element';

import { Tag } from '../../../../types/enums';

class InputLabel {
  public static createInputLabel(className: string, text: string): HTMLElement {
    const label = CreateElement.createElement(Tag.label, [{ name: 'class', value: className }]);

    label.textContent = text;
    return label;
  }
}

export default InputLabel;
