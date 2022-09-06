import CreateElement from '../overal-func.ts/create-element';
import FieldState from './field-state';
import Random from '../overal-func.ts/random-funcs';
import GameState from '../game-state';
import MoveHandler from './move-handler';
import FieldTutorial from './start-tutorial';
import { spellsSelectors } from '../game-text-content/spells-and-beasts-selectors';

import GameValues, { Tag } from '../game-types/enums';

class FieldAction {
  static action() {
    if (!FieldState.FieldStatus) {
      FieldAction.clearPanels();
      return;
    }

    if (GameState.firstFieldAppearance) {
      FieldAction.launchTutorial();
      return;
    }

    FieldAction.viewHeroSpells();
    FieldAction.randomBeastActions();
    FieldAction.viewBeastActions();

    if (FieldState.currentMove) {
      FieldAction.heroMove();
    } else {
      FieldAction.beastMove();
    }
  }

  static launchTutorial() {
    FieldState.actionTotal.textContent = GameState.lib.preparation as string;
    FieldState.timer.textContent = GameState.lib.yourMove as string;

    FieldAction.createCurrentSpellAction([GameState.spellsLib[GameValues.firstLvl].fire], FieldState.heroPanel);
    FieldAction.createCurrentSpellAction(
      [GameState.beastMoves.physics, GameState.beastMoves.magic],
      FieldState.beastPanel
    );
    FieldAction.createCurrentSpellAction([GameState.spellsLib[GameValues.firstLvl].wind], FieldState.spellsPanel);

    GameState.firstFieldAppearance = false;
    FieldTutorial.startModal(FieldAction.action);
  }

  static heroMove() {
    FieldState.timerCounter = GameValues.heroTimer;
    const currentSpells = FieldAction.randomSpells();

    FieldAction.createCurrentSpellAction(currentSpells, FieldState.spellsPanel);
    FieldState.actionTotal.textContent = GameState.lib.preparation as string;
    FieldState.timer.textContent = GameState.lib.yourMove as string;
    FieldState.currentMove = false;

    setTimeout(() => {
      FieldState.timer.textContent = `${FieldState.timerCounter}`;
      FieldState.actionTotal.textContent = '';
      FieldAction.timerChanger();
      FieldState.spellCapture = true;
      MoveHandler.heroMoveAction(currentSpells);
    }, GameValues.startTimer);
  }

  static beastMove() {
    FieldState.timerCounter = GameValues.beastTimer;
    FieldState.actionTotal.textContent = GameState.lib.preparation as string;
    FieldState.timer.textContent = GameState.lib.beastMove as string;
    FieldState.currentMove = true;

    setTimeout(() => {
      FieldState.timer.textContent = `${FieldState.timerCounter}`;
      FieldAction.nextBeastActions();
      FieldAction.timerChanger();
      MoveHandler.beastMoveAction();
    }, GameValues.startTimer);
  }

  static timerChanger() {
    setTimeout(() => {
      FieldState.timerCounter -= 1;
      FieldState.timer.textContent = `${FieldState.timerCounter}`;

      if (FieldState.timerCounter >= 0) {
        FieldAction.timerChanger();
      } else {
        MoveHandler.effectsHandler();
        FieldState.spellCapture = false;
        MoveHandler.moveHandlerStop();
        FieldAction.action();
      }
    }, 1000);
  }

  static randomSpells() {
    const numOfSpells = FieldState.lvlSpells.length;
    const numOfCurrentSpells = Random.createRandomNums(GameValues.randomSpellsAmount, numOfSpells);
    const currentSpells = numOfCurrentSpells.map((num) => FieldState.lvlSpells[num]);

    return currentSpells;
  }

  static createCurrentSpellAction(currentItems: Record<string, string>[], panel: HTMLElement) {
    const currPanel = panel;
    currPanel.innerHTML = '';

    currentItems.forEach((item) => {
      const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'action-spell-wrapper' }]);

      if (item.name === GameState.beastMoves.physics.name || item.name === GameState.beastMoves.magic.name) {
        const wrapperName = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'beast-action-wrapper' }]);
        const name = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'beast-field-action' }]);

        wrapper.classList.add('beast-action');
        name.textContent = item.name;
        wrapperName.append(name);
        wrapper.append(wrapperName);
      } else {
        const image = CreateElement.createElement(Tag.div, [
          { name: 'class', value: `action-spell-image ${spellsSelectors[item.name]}` },
        ]);
        const name = CreateElement.createElement(Tag.par, [
          { name: 'class', value: `action-spell-name ${spellsSelectors[item.name]}` },
        ]);

        name.textContent = item.name;
        wrapper.append(image, name);
      }

      currPanel.append(wrapper);
    });
  }

  static viewHeroSpells() {
    FieldState.heroSpells = GameState.userSpells;

    FieldAction.createCurrentSpellAction(FieldState.heroSpells, FieldState.heroPanel);
  }

  static randomBeastActions() {
    const physics = GameState.beastMoves.physics.name;
    const magic = GameState.beastMoves.magic.name;
    let physicsDamage = +GameState.beastMoves.physics.damage;
    let magicDamage = +GameState.beastMoves.magic.damage;

    if (FieldState.beastInstance.lvl > 1) {
      physicsDamage += FieldState.beastInstance.lvl * 5;
      magicDamage += FieldState.beastInstance.lvl * 5;
    }

    const actionType = [
      { name: physics, damage: `${physicsDamage}` },
      { name: magic, damage: `${magicDamage}` },
    ];
    const numOfActions = Random.createRandomNums(actionType.length, actionType.length);
    const currentActions = numOfActions.map((num) => actionType[num]);

    FieldState.beastTypeAction.push(...currentActions);
  }

  static viewBeastActions() {
    const firstAction = FieldState.beastTypeAction[GameValues.firstAction];
    const secondAction = FieldState.beastTypeAction[GameValues.secondAction];

    FieldAction.createCurrentSpellAction([firstAction, secondAction], FieldState.beastPanel);
  }

  static nextBeastActions() {
    const firstAction = FieldState.beastTypeAction[GameValues.firstAction];
    const secondAction = FieldState.beastTypeAction[GameValues.secondAction];
    const thirdAction = FieldState.beastTypeAction[GameValues.thirdAction];

    FieldState.beastTypeAction.shift();
    FieldState.actionTotal.textContent = firstAction.name;
    MoveHandler.totalEffects.push(firstAction.damage);

    FieldAction.createCurrentSpellAction([secondAction, thirdAction], FieldState.beastPanel);
  }

  static clearPanels() {
    FieldState.timer.textContent = 'finished';
    FieldState.actionTotal.textContent = '';
  }
}

export default FieldAction;
