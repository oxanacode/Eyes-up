import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';

class GameDesc {
  public static createGameDesc(text: string): HTMLElement {
    const desc = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'base-text game-desc-text' }]);

    desc.textContent = text;

    return desc;
  }
}

export default GameDesc;
