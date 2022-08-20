import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';

class Overlay {
  public static createOverlay(): HTMLElement {
    const overlay = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'overlay' },
    ]);

    return overlay;
  }
}

export default Overlay;
