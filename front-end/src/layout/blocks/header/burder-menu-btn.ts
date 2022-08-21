import CreateElement from '../../elements/create-element';
import OpenModal from '../../../scripts/layout/open-modal';
import BurgerMenu from '../modals/burger-menu';
import ModalWrapper from '../modals/modal-wrapper';

import { Tag } from '../../../types/enums';
import { RenderHandler } from '../../../types/types';

class BurgerMenuBtn {
  public static createBurgerMenuBtn(render: RenderHandler): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: 'burger-menu-btn' },
    ]);

    btn.addEventListener('click', () => {
      OpenModal.openModal(
        ModalWrapper.createModalWrapper(BurgerMenu.createBurgerMenu, render)
      );
    });

    return btn;
  }
}

export default BurgerMenuBtn;
