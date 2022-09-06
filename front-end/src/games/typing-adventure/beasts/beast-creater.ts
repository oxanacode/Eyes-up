import CreateElement from '../overal-func.ts/create-element';
import GameState from '../game-state';
import FieldState from '../game-field/field-state';
import GameField from '../game-field/create-field';
import { beastsSelectors } from '../game-text-content/spells-and-beasts-selectors';

import { Tag } from '../game-types/enums';

class Beast {
  beastType: string;

  lvl: number;

  hp: number;

  renderCallback: () => void;

  done: boolean;

  constructor(beastType: string, lvl: number, hp: number, renderCallback: () => void, done: boolean) {
    this.beastType = beastType;
    this.lvl = lvl;
    this.hp = hp;
    this.renderCallback = renderCallback;
    this.done = done;
  }

  createBeast(mapCallback: () => void): HTMLElement {
    const beastWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: `beast-wrapper` }]);
    const beastTitle = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'beast-title' }]);
    const beastPlace = CreateElement.createElement(Tag.div, [
      { name: 'class', value: `beast ${beastsSelectors[this.beastType]}` },
    ]);

    beastTitle.innerHTML = `${GameState.lib.lvl} ${this.lvl}`;
    beastWrapper.append(beastTitle, beastPlace);

    beastWrapper.addEventListener('click', () => {
      FieldState.beastInstance = this;
      GameField.createField(mapCallback);
    });

    return beastWrapper;
  }
}

export default Beast;
