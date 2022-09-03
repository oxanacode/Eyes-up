import CreateElement from '../overal-func.ts/create-element';
import GameState from '../game-state';
import FieldState from './field-state';
import FieldAction from './field-action';
import { beastsSelectors } from '../game-text-content/spells-and-beasts-selectors';

import IBeast from '../game-types/interfaces';
import { Tag } from '../game-types/enums';

class GameField {
  static createField() {
    const fieldWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: `field-wrapper` }]);
    const header = GameField.createFieldHeader();
    const middle = GameField.createFieldMiddle(FieldState.beastInstance);
    const footer = GameField.createFieldFooter();

    fieldWrapper.append(header, middle, footer);

    GameState.gameWrapper.innerHTML = '';
    GameState.gameWrapper.append(fieldWrapper);

    const currentLvlSpells = Object.values(GameState.spellsLib[FieldState.beastInstance.lvl]);

    FieldState.lvlSpells = currentLvlSpells;
    FieldState.FieldStatus = true;
    FieldState.beastTypeAction = [];
    FieldAction.action();
  }

  static createFieldHeader() {
    const fieldHeader = CreateElement.createElement(Tag.div, [{ name: 'class', value: `field-header` }]);
    FieldState.spellsPanel = CreateElement.createElement(Tag.div, [{ name: 'class', value: `spells-field-panel` }]);

    fieldHeader.append(FieldState.spellsPanel);

    return fieldHeader;
  }

  static createFieldMiddle(beastInstance: IBeast) {
    const fieldMiddle = CreateElement.createElement(Tag.div, [{ name: 'class', value: `field-middle` }]);
    const actionPanel = CreateElement.createElement(Tag.div, [{ name: 'class', value: `action-field-panel` }]);
    FieldState.timer = CreateElement.createElement(Tag.div, [{ name: 'class', value: `field-timer` }]);
    FieldState.actionInput = CreateElement.createElement(Tag.div, [{ name: 'class', value: `action-field-input` }]);
    FieldState.actionTotal = CreateElement.createElement(Tag.div, [{ name: 'class', value: `action-field-total` }]);
    const hero = GameField.createCharacterView('hero');
    const beast = GameField.createCharacterView('beast', beastInstance);

    actionPanel.append(FieldState.timer, FieldState.actionInput, FieldState.actionTotal);
    fieldMiddle.append(hero, actionPanel, beast);

    return fieldMiddle;
  }

  static createFieldFooter() {
    const fieldFooter = CreateElement.createElement(Tag.div, [{ name: 'class', value: `field-footer` }]);
    FieldState.heroPanel = CreateElement.createElement(Tag.div, [{ name: 'class', value: `hero-field-panel` }]);
    FieldState.beastPanel = CreateElement.createElement(Tag.div, [{ name: 'class', value: `beast-field-panel` }]);

    fieldFooter.append(FieldState.heroPanel, FieldState.beastPanel);

    return fieldFooter;
  }

  static createCharacterView(characterType: string, beast?: IBeast) {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: `${characterType}-field-wrapper` }]);
    const hp = CreateElement.createElement(Tag.par, [{ name: 'class', value: `${characterType}-field-hp` }]);
    let view: HTMLElement;

    if (beast) {
      view = CreateElement.createElement(Tag.par, [
        { name: 'class', value: `${characterType}-field-view ${beastsSelectors[beast.beastType]}` },
      ]);
    } else {
      view = CreateElement.createElement(Tag.par, [{ name: 'class', value: `${characterType}-field-view` }]);
    }

    if (beast) {
      hp.textContent = beast.hp.toString();
      FieldState.beastHp = hp;
      FieldState.beastView = wrapper;
    } else {
      hp.textContent = (GameState.userHp * GameState.userLvl).toString();
      FieldState.heroHp = hp;
      FieldState.heroView = wrapper;
    }

    wrapper.append(hp, view);

    return wrapper;
  }
}

export default GameField;
