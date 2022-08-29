import CreateElement from '../overal-func.ts/create-element';
import GameState from '../game-state';
import FieldState from '../game-field/field-state';
import GameField from '../game-field/create-field';

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

  createBeast(): HTMLElement {
    const beastWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'beast-wrapper' }]);
    const beastTitle = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'beast-title' }]);
    const beastPlace = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'beast' }]);

    beastTitle.innerHTML = `${this.beastType}<br>${GameState.lib.lvl} ${this.lvl}`;
    if (this.done) beastTitle.innerHTML += GameState.lib.doneStatus as string;
    beastWrapper.append(beastTitle, beastPlace);

    beastWrapper.addEventListener('click', () => {
      FieldState.beastInstance = this;
      GameField.createField();
    });

    return beastWrapper;
  }
}

export default Beast;
