import CreateElement from '../overal-func.ts/create-element';
import FieldState from './field-state';
import Modal from '../overal-func.ts/create-modal';
import GameState from '../game-state';
import MonsterResist from './monster-resist-handler';

import GameValues, { Tag } from '../game-types/enums';

class MoveHandler {
  static spells: Record<string, string>[];

  static inputStr = '';

  static totalSpells: string[] = [];

  static totalEffects: string[] = [];

  static heroShield = false;

  static whoseMove = '';

  static heroEventHandler(event: KeyboardEvent) {
    if (!FieldState.spellCapture) return;
    MoveHandler.inputStr += event.key;

    FieldState.heroSpells.forEach((spell) => {
      if (MoveHandler.inputStr.includes(spell.name)) {
        MoveHandler.totalSpells.push(spell.name);

        const damage = MonsterResist.handler(spell.name, spell.damage);
        MoveHandler.totalEffects.push(damage);

        MonsterResist.handler(spell.name, spell.damage);

        FieldState.actionTotal.textContent = MoveHandler.totalSpells.join(' ');
        MoveHandler.inputStr = '';
      }
    });
    MoveHandler.spells.forEach((spell) => {
      if (MoveHandler.inputStr.includes(spell.name)) {
        if (!FieldState.heroSpells.includes(spell)) {
          FieldState.heroSpells.push(spell);
          MoveHandler.totalSpells.push(spell.name);

          const damage = MonsterResist.handler(spell.name, spell.damage);
          MoveHandler.totalEffects.push(damage);

          FieldState.actionTotal.textContent = MoveHandler.totalSpells.join(' ');
          MoveHandler.inputStr = '';
        }
      }
    });
  }

  static beastEventHandler(event: KeyboardEvent) {
    MoveHandler.inputStr += event.key;

    if (MoveHandler.inputStr.includes('resist') || MoveHandler.inputStr.includes('отразить')) {
      MoveHandler.heroShield = true;
      FieldState.actionTotal.textContent += GameState.lib.resistMessage as string;
      window.removeEventListener('keypress', MoveHandler.beastEventHandler);
    }
  }

  static effectsHandler() {
    let totalResult = MoveHandler.totalEffects.reduce((value, num) => {
      const currentValue = +num + value;
      return currentValue;
    }, 0);

    if (MoveHandler.heroShield) {
      totalResult = Math.trunc((totalResult /= 2));
      MoveHandler.heroShield = false;
    }

    if (MoveHandler.whoseMove === 'hero') {
      MoveHandler.resultMoveHandler(totalResult, FieldState.beastHp);
    }
    if (MoveHandler.whoseMove === 'beast') {
      MoveHandler.resultMoveHandler(totalResult, FieldState.heroHp);
    }

    MoveHandler.whoseMove = '';
    MoveHandler.totalEffects = [];
  }

  static resultMoveHandler(totalResult: number, targetHp: HTMLElement) {
    const stateHp = targetHp;
    const currentHp = stateHp.textContent;

    if (!currentHp) return;
    let resultHp = +currentHp - totalResult;
    if (resultHp < 0) resultHp = 0;

    MoveHandler.createResultView(totalResult);

    if (resultHp === 0) {
      stateHp.textContent = GameState.lib.lowStrengthMessage as string;
      FieldState.FieldStatus = false;
      MoveHandler.resultHandler(MoveHandler.whoseMove);
    } else {
      stateHp.textContent = resultHp.toString();
    }
  }

  static createResultView(result: number) {
    const view = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'field-hp-result-view' }]);

    view.textContent = `-${result}`;

    setTimeout(() => {
      view.remove();
    }, GameValues.startTimer);

    if (MoveHandler.whoseMove === 'hero') {
      FieldState.beastView.append(view);
    }
    if (MoveHandler.whoseMove === 'beast') {
      FieldState.heroView.append(view);
    }
  }

  static heroMoveAction(spells: Record<string, string>[]) {
    MoveHandler.whoseMove = 'hero';
    MoveHandler.spells = spells;
    MoveHandler.inputStr = '';
    MoveHandler.totalSpells = [];

    window.addEventListener('keypress', MoveHandler.heroEventHandler);
  }

  static resultHandler(winner: string) {
    const beastLvl = FieldState.beastInstance.lvl;
    const heroLvl = GameState.userLvl;
    let resultMessage;

    if (winner === 'hero') {
      resultMessage = GameState.lib.winnerHero as string;
    } else {
      resultMessage = GameState.lib.winnerBeast as string;
    }

    if (beastLvl === 9 && !FieldState.beastInstance.done && winner === 'hero') {
      const messageInfo = GameState.lib.resultFinalLvl as string;

      FieldState.beastInstance.done = true;
      Modal.createFieldModal(resultMessage, messageInfo);
    } else if (beastLvl === 9 && winner === 'hero') {
      Modal.createFieldModal(resultMessage);
    } else if (heroLvl === beastLvl && winner === 'hero') {
      const messageInfo = GameState.lib.resultNewLvl as string;

      GameState.userLvl += 1;

      FieldState.beastInstance.done = true;
      Modal.createFieldModal(resultMessage, messageInfo);
    } else {
      Modal.createFieldModal(resultMessage);
    }

    FieldState.currentMove = true;
  }

  static beastMoveAction() {
    MoveHandler.whoseMove = 'beast';
    MoveHandler.inputStr = '';

    if (FieldState.actionTotal.textContent === 'magic' || FieldState.actionTotal.textContent === 'магия') {
      window.addEventListener('keypress', MoveHandler.beastEventHandler);
    }
  }

  static moveHandlerStop() {
    window.removeEventListener('keypress', MoveHandler.beastEventHandler);
    window.removeEventListener('keypress', MoveHandler.heroEventHandler);
  }
}

export default MoveHandler;
