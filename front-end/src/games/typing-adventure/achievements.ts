import GameState from './game-state';
import CreateElement from './overal-func.ts/create-element';
import badgesDescription from '../../data/badges-description';
import State from './app-state';

import GameValues, { Tag, LevelValues } from './game-types/enums';

class Achievements {
  static current: Record<string, boolean> = {
    thunderSpells: false,
    fireSpells: false,
    waterSpells: false,
    lightSpells: false,
    windSpells: false,
    tenSpells: false,
    lvlUp: false,
    halfGame: false,
    gameDone: false,
  };

  static achievementsNums: { [index: string]: number } = {
    tenSpells: 2,
    lvlUp: 1,
    halfGame: 3,
    gameDone: 4,
    thunderSpells: 5,
    fireSpells: 6,
    waterSpells: 7,
    lightSpells: 8,
    windSpells: 9,
  };

  static windowsCounter = 0;

  static setStatus() {
    GameState.achievementsCurrentStatus = Achievements.current;
  }

  static createWindow(textContent: string, path: string) {
    const modal = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'adventure-achievement-modal' }]);
    const title = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'adventure-achievement-title' }]);
    const text = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'adventure-achievement-text' }]);
    const img = CreateElement.createElement(Tag.img, [
      { name: 'class', value: 'achievement-img' },
      { name: 'alt', value: 'achievement-image' },
      { name: 'src', value: path },
    ]);
    const textWrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'adventure-achievement-text-wrapper' },
    ]);
    let top = GameValues.achievementStyleTop;

    title.textContent = GameState.lib.achievementTitle as string;
    text.textContent = textContent;
    textWrapper.append(title, text);
    modal.append(img, textWrapper);

    for (let i = 0; i < Achievements.windowsCounter; i += 1) {
      top += GameValues.achievementAnotherModal;
    }

    modal.style.top = `${top}rem`;

    GameState.gameWrapper.append(modal);
    Achievements.windowsCounter += 1;

    setTimeout(() => {
      modal.remove();
      Achievements.windowsCounter -= 1;
    }, GameValues.achievementTimer);
  }

  static checker() {
    if (!Achievements.current.tenSpells) Achievements.tenSpellsCheck();
    if (!Achievements.current.lvlUp) Achievements.lvlUpCheck();
    if (!Achievements.current.halfGame) Achievements.halfGameCheck();
    if (!Achievements.current.gameDone) Achievements.gameDoneCheck();
    if (!Achievements.current.thunderSpells) Achievements.thunderCheck();
    if (!Achievements.current.fireSpells) Achievements.fireCheck();
    if (!Achievements.current.waterSpells) Achievements.waterCheck();
    if (!Achievements.current.lightSpells) Achievements.lightCheck();
    if (!Achievements.current.windSpells) Achievements.windCheck();

    Achievements.setStatus();
  }

  static tenSpellsCheck() {
    if (GameState.userSpells.length >= GameValues.tenSpells) {
      const { text } = badgesDescription[Achievements.achievementsNums.tenSpells][State.currentLang];

      Achievements.createWindow(text, './assets/images/badges/badge-2.png');
      Achievements.current.tenSpells = true;
    }
  }

  static lvlUpCheck() {
    if (GameState.userLvl === LevelValues.firstLvlDone) {
      const { text } = badgesDescription[Achievements.achievementsNums.lvlUp][State.currentLang];

      Achievements.createWindow(text, './assets/images/badges/badge-1.png');
      Achievements.current.lvlUp = true;
    }
  }

  static halfGameCheck() {
    if (GameState.userLvl === LevelValues.halfGame) {
      const { text } = badgesDescription[Achievements.achievementsNums.halfGame][State.currentLang];

      Achievements.createWindow(text, './assets/images/badges/badge-3.png');
      Achievements.current.halfGame = true;
    }
  }

  static gameDoneCheck() {
    if (GameState.userLvl === LevelValues.fullGame) {
      const { text } = badgesDescription[Achievements.achievementsNums.gameDone][State.currentLang];

      Achievements.createWindow(text, './assets/images/badges/badge-4.png');
      Achievements.current.gameDone = true;
    }
  }

  static thunderCheck() {
    const status = Achievements.elementalCheck('thunderSpells');

    if (status) {
      const { text } = badgesDescription[Achievements.achievementsNums.thunderSpells][State.currentLang];

      Achievements.createWindow(text, './assets/images/badges/badge-5.png');
      Achievements.current.thunderSpells = true;
    }
  }

  static fireCheck() {
    const status = Achievements.elementalCheck('fireSpells');

    if (status) {
      const { text } = badgesDescription[Achievements.achievementsNums.fireSpells][State.currentLang];

      Achievements.createWindow(text, './assets/images/badges/badge-6.png');
      Achievements.current.fireSpells = true;
    }
  }

  static waterCheck() {
    const status = Achievements.elementalCheck('waterSpells');

    if (status) {
      const { text } = badgesDescription[Achievements.achievementsNums.waterSpells][State.currentLang];

      Achievements.createWindow(text, './assets/images/badges/badge-7.png');
      Achievements.current.waterSpells = true;
    }
  }

  static lightCheck() {
    const status = Achievements.elementalCheck('lightSpells');

    if (status) {
      const { text } = badgesDescription[Achievements.achievementsNums.lightSpells][State.currentLang];

      Achievements.createWindow(text, './assets/images/badges/badge-8.png');
      Achievements.current.lightSpells = true;
    }
  }

  static windCheck() {
    const status = Achievements.elementalCheck('windSpells');

    if (status) {
      const { text } = badgesDescription[Achievements.achievementsNums.lightSpells][State.currentLang];

      Achievements.createWindow(text, './assets/images/badges/badge-9.png');
      Achievements.current.windSpells = true;
    }
  }

  static elementalCheck(type: string) {
    const status = GameState.elementalSpells[type].every((spell) => {
      return GameState.userSpells.some((userSpell) => userSpell.name === spell);
    });

    return status;
  }
}

export default Achievements;
