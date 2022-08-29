import CreateElement from '../../../elements/create-element';
import ManageModal from '../../../../scripts/layout/manage-modal';

import { Tag } from '../../../../types/enums';

class Overlay {
  public static createOverlay(modalToClose: HTMLElement): HTMLElement {
    const overlay = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'overlay' }]);

    overlay.addEventListener('click', () => {
      ManageModal.closeModal(modalToClose);
    });

    return overlay;
  }
}

export default Overlay;
