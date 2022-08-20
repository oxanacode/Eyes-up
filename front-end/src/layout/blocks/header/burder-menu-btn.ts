import { Tag } from '../../../types/enums';
import CreateElement from '../../elements/create-element';

class BurgerMenuBtn {
  public static createBurgerMenuBtn(): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: 'burger-menu-btn' },
    ]);

    btn.addEventListener('click', () => {
      console.log('бургер меню');
    });

    return btn;
  }
}

export default BurgerMenuBtn;
