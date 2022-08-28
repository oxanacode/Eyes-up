import GameState from './game-state';

// import { Idata } from './game-types/interfaces';

class ApiHandler {
  static getData() {
    // const data: Idata = JSON.parse();
    // if (data.firstMapRender) GameState.firstAppearance = data.firstMapRender;
    // if (data.firstFieldRender) GameState.firstFieldAppearance = data.firstFieldRender;
    // if (data.userLvl) GameState.userLvl = data.userLvl;
    // if (data.gameBeasts) GameState.currentGameBeasts = data.gameBeasts;
    // if (data.achievements) GameState.achievementsCurrentStatus = data.achievements;
    // if (data.userSpells) {
    //   const spells = data.userSpells;
    //   spells.forEach((spell) => {
    //     ApiHandler.engageSpell(spell.name);
    //   });
    // }
  }

  static engageSpell(databaseSpell: string) {
    const spellsLvls = Object.keys(GameState.spellsLib);

    spellsLvls.forEach((lvl) => {
      const currentLvlSpells = GameState.spellsLib[+lvl];
      const spellsNames = Object.keys(currentLvlSpells);

      spellsNames.forEach((name) => {
        if (name === databaseSpell) {
          const userSpell = currentLvlSpells[name];

          GameState.userSpells.push(userSpell);
        }
      });
    });
  }

  static setData() {
    // const dataObj = {
    //   firstMapRender: GameState.firstAppearance,
    //   firstFieldRender: GameState.firstFieldAppearance,
    //   userLvl: GameState.userLvl,
    //   userSpells: GameState.userSpells,
    //   gameBeasts: GameState.currentGameBeasts,
    //   achievements: GameState.achievementsCurrentStatus,
    // };
    // const data = JSON.stringify(dataObj);
    // Push into database;
  }
}

export default ApiHandler;
