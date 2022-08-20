import CreateElement from '../../elements/create-element';
import OpenModal from '../../../scripts/layout/open-modal';
import BurgerMenu from '../modals/burger-menu';

import { Tag } from '../../../types/enums';

class BurgerMenuBtn {
  public static createBurgerMenuBtn(): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: 'burger-menu-btn' },
    ]);

    btn.addEventListener('click', () => {
      OpenModal.openModal(BurgerMenu.createBurgerMenu());
    });

    return btn;
  }
}

export default BurgerMenuBtn;
