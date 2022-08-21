import CreateElement from '../../elements/create-element';
import CloseModal from '../../../scripts/layout/close-modal';

import { Tag } from '../../../types/enums';

class Overlay {
  public static createOverlay(modalWrapper: HTMLElement): HTMLElement {
    const overlay = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'overlay' },
    ]);

    overlay.addEventListener('click', () => {
      CloseModal.closeModal(modalWrapper);
    });

    return overlay;
  }
}

export default Overlay;
