import GameState from './game-state';
import CreateElement from './overal-func.ts/create-element';

import GameValues, { Tag } from './game-types/enums';

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

  static windowsCounter = 0;

  static setStatus() {
    GameState.achievementsCurrentStatus = Achievements.current;
  }

  static createWindow(titleContent: string, textContent: string, path: string) {
    const modal = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'achievement-modal' }]);
    const title = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'achievement-title' }]);
    const textTitle = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'achievement-text' }]);
    const text = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'achievement-text' }]);
    const img = CreateElement.createElement(Tag.img, [
      { name: 'class', value: 'achievement-img' },
      { name: 'alt', value: 'achievement-image' },
      { name: 'src', value: path },
    ]);
    const contentWrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'achievement-content-wrapper' },
    ]);
    const textWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'achievement-text-wrapper' }]);

    title.textContent = GameState.lib.achievementTitle as string;
    textTitle.textContent = titleContent;
    text.textContent = textContent;

    textWrapper.append(textTitle, text);
    contentWrapper.append(img, textWrapper);
    modal.append(title, contentWrapper);

    let top = GameValues.achievementStyleTop;
    for (let i = 0; i < Achievements.windowsCounter; i += 1) {
      top += GameValues.achievementAnotherModal;
    }

    modal.style.top = `${top}px`;

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
    if (GameState.userSpells.length >= 10) {
      const title = GameState.lib.achievementTitleTenSpells as string;
      const text = GameState.lib.achievementTextTenSpells as string;

      Achievements.createWindow(title, text, './assets/typing-adventure/achievement.png');
      Achievements.current.tenSpells = true;
    }
  }

  static lvlUpCheck() {
    if (GameState.userLvl === 2) {
      const title = GameState.lib.achievementTitleLvlUp as string;
      const text = GameState.lib.achievementTextLvlUp as string;

      Achievements.createWindow(title, text, './assets/typing-adventure/achievement.png');
      Achievements.current.lvlUp = true;
    }
  }

  static halfGameCheck() {
    if (GameState.userLvl === 5) {
      const title = GameState.lib.achievementTitleHalfGame as string;
      const text = GameState.lib.achievementTextHalfGame as string;

      Achievements.createWindow(title, text, './assets/typing-adventure/achievement.png');
      Achievements.current.halfGame = true;
    }
  }

  static gameDoneCheck() {
    if (GameState.userLvl === 10) {
      const title = GameState.lib.achievementTitleGameDone as string;
      const text = GameState.lib.achievementTextGameDone as string;

      Achievements.createWindow(title, text, './assets/typing-adventure/achievement.png');
      Achievements.current.gameDone = true;
    }
  }

  static thunderCheck() {
    const status = Achievements.elementalCheck('thunderSpells');

    if (status) {
      const title = GameState.lib.achievementTitleThunder as string;
      const text = GameState.lib.achievementTextThunder as string;

      Achievements.createWindow(title, text, './assets/typing-adventure/achievement.png');
      Achievements.current.thunderSpells = true;
    }
  }

  static fireCheck() {
    const status = Achievements.elementalCheck('fireSpells');

    if (status) {
      const title = GameState.lib.achievementTitleFire as string;
      const text = GameState.lib.achievementTextFire as string;

      Achievements.createWindow(title, text, './assets/typing-adventure/achievement.png');
      Achievements.current.fireSpells = true;
    }
  }

  static waterCheck() {
    const status = Achievements.elementalCheck('waterSpells');

    if (status) {
      const title = GameState.lib.achievementTitleWater as string;
      const text = GameState.lib.achievementTextWater as string;

      Achievements.createWindow(title, text, './assets/typing-adventure/achievement.png');
      Achievements.current.waterSpells = true;
    }
  }

  static lightCheck() {
    const status = Achievements.elementalCheck('lightSpells');

    if (status) {
      const title = GameState.lib.achievementTitleLight as string;
      const text = GameState.lib.achievementTextLight as string;

      Achievements.createWindow(title, text, './assets/typing-adventure/achievement.png');
      Achievements.current.lightSpells = true;
    }
  }

  static windCheck() {
    const status = Achievements.elementalCheck('windSpells');

    if (status) {
      const title = GameState.lib.achievementTitleWind as string;
      const text = GameState.lib.achievementTextWind as string;

      Achievements.createWindow(title, text, './assets/typing-adventure/achievement.png');
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
