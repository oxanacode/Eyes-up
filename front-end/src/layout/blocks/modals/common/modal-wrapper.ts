import Overlay from './overlay';
import CreateElement from '../../../elements/create-element';

import { Tag } from '../../../../types/enums';
import { ModalHandler, RenderHandler } from '../../../../types/types';

class ModalWrapper {
  public static createModalWrapper(modal: ModalHandler, render: RenderHandler) {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'modal-wrapper' }]);
    const overlay = Overlay.createOverlay(wrapper);
    const content = modal(wrapper, render);

    wrapper.append(overlay, content);

    return wrapper;
  }
}

export default ModalWrapper;
