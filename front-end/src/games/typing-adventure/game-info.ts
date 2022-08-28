import GameState from './game-state';
import CreateElement from './overal-func.ts/create-element';
import Modal from './overal-func.ts/create-modal';

import { Tag } from './game-types/enums';

class GameInfo {
  static lvlSpells(lvl: number) {
    const currentLvl = Object.keys(GameState.spellsLib[lvl]);
    const userSpellsNames = GameState.userSpells.map((spell) => spell.name);

    const spellsNames = currentLvl.map((spell) => GameState.spellsLib[lvl][spell].name);

    return spellsNames.map((name) => {
      if (userSpellsNames.includes(name)) {
        return GameInfo.createTextWrapper(name, 'info-spell available');
      }
      return GameInfo.createTextWrapper(name, 'info-spell');
    });
  }

  static createInfoModal() {
    const { overlay, modal, button } = Modal.modalElements('game-info');
    const title = GameInfo.createTextWrapper(GameState.lib.gameInfoTitle as string, 'game-info-title');

    const heroLvlTitle = GameInfo.createTextWrapper(GameState.lib.gameInfoLvl as string, 'info-title');
    const heroLvl = GameInfo.createTextWrapper(GameState.userLvl.toString(), 'info-lvl');

    const heroSpellsTitle = GameInfo.createTextWrapper(GameState.lib.gameInfoHeroSpells as string, 'info-title');
    let heroSpells = GameState.userSpells.map((spell) => GameInfo.createTextWrapper(spell.name, 'info-user-spell'));
    if (!heroSpells.length)
      heroSpells = [GameInfo.createTextWrapper(GameState.lib.gameInfoNullSpells as string, 'info-user-spell')];

    const allSpells = GameInfo.createTextWrapper(GameState.lib.gameInfoAllSpells as string, 'lvl-spells-title');

    button.textContent = GameState.lib.gameInfoButton as string;

    button.addEventListener('click', () => {
      overlay.remove();
    });

    modal.append(
      title,
      heroLvlTitle,
      heroLvl,
      heroSpellsTitle,
      ...heroSpells,
      allSpells,
      ...GameInfo.gameSpellsView(),
      button
    );

    overlay.append(modal);
    GameState.gameWrapper.append(overlay);
  }

  static gameSpellsView() {
    const lvlOneTitle = GameInfo.createTextWrapper(`${GameState.lib.lvl} 1` as string, 'lvl-spells-title');
    const lvlOne = GameInfo.lvlSpells(1);
    const lvlTwoTitle = GameInfo.createTextWrapper(`${GameState.lib.lvl} 2` as string, 'lvl-spells-title');
    const lvlTwo = GameInfo.lvlSpells(2);
    const lvlThreeTitle = GameInfo.createTextWrapper(`${GameState.lib.lvl} 3` as string, 'lvl-spells-title');
    const lvlThree = GameInfo.lvlSpells(3);
    const lvlFourTitle = GameInfo.createTextWrapper(`${GameState.lib.lvl} 4` as string, 'lvl-spells-title');
    const lvlFour = GameInfo.lvlSpells(4);
    const lvlFiveTitle = GameInfo.createTextWrapper(`${GameState.lib.lvl} 5` as string, 'lvl-spells-title');
    const lvlFive = GameInfo.lvlSpells(5);
    const lvlSixTitle = GameInfo.createTextWrapper(`${GameState.lib.lvl} 6` as string, 'lvl-spells-title');
    const lvlSix = GameInfo.lvlSpells(6);
    const lvlSevenTitle = GameInfo.createTextWrapper(`${GameState.lib.lvl} 7` as string, 'lvl-spells-title');
    const lvlSeven = GameInfo.lvlSpells(7);
    const lvlEightTitle = GameInfo.createTextWrapper(`${GameState.lib.lvl} 8` as string, 'lvl-spells-title');
    const lvlEight = GameInfo.lvlSpells(8);
    const lvlNineTitle = GameInfo.createTextWrapper(`${GameState.lib.lvl} 9` as string, 'lvl-spells-title');
    const lvlNine = GameInfo.lvlSpells(9);

    return [
      lvlOneTitle,
      ...lvlOne,
      lvlTwoTitle,
      ...lvlTwo,
      lvlThreeTitle,
      ...lvlThree,
      lvlFourTitle,
      ...lvlFour,
      lvlFiveTitle,
      ...lvlFive,
      lvlSixTitle,
      ...lvlSix,
      lvlSevenTitle,
      ...lvlSeven,
      lvlEightTitle,
      ...lvlEight,
      lvlNineTitle,
      ...lvlNine,
    ];
  }

  static createTextWrapper(name: string, className: string) {
    const text = CreateElement.createElement(Tag.par, [{ name: 'class', value: className }]);
    text.textContent = name;

    return text;
  }
}

export default GameInfo;
