import GameState from './game-state';
import ApiService from '../../scripts/api/api-service';
import ParseTypingAdventure from '../../scripts/parsing/parse-typing-adventure';

import { Idata, User } from './game-types/interfaces';
import Beast from './beasts/beast-creater';

class ApiHandler {
  static userData: User;

  static getData(user: User, callback: () => void) {
    ApiHandler.userData = user;

    if (user.typingAdventure === 'noData') return;
    if (!user.typingAdventure) return;

    const data: Idata = ParseTypingAdventure.getGameData(user.typingAdventure);

    if (data.firstMapRender !== undefined) GameState.firstAppearance = data.firstMapRender;
    if (data.firstFieldRender !== undefined) GameState.firstFieldAppearance = data.firstFieldRender;
    if (data.userLvl) GameState.userLvl = data.userLvl;
    if (data.achievements) GameState.achievementsCurrentStatus = data.achievements;

    if (data.gameBeasts) {
      GameState.currentGameBeasts = data.gameBeasts.map(
        (beastData) => new Beast(beastData.beastType, beastData.lvl, beastData.hp, callback, beastData.done)
      );
    }

    if (data.userSpells) {
      const spells = data.userSpells;
      GameState.userSpells = [];

      spells.forEach((spell) => {
        ApiHandler.engageSpell(spell.name);
      });
    }
  }

  static engageSpell(databaseSpell: string) {
    const spellsLvls = Object.keys(GameState.spellsLib);

    spellsLvls.forEach((lvl) => {
      const currentLvlSpells = GameState.spellsLib[+lvl];
      const spellsNames = Object.keys(currentLvlSpells);

      spellsNames.forEach((objName) => {
        if (currentLvlSpells[objName].name === databaseSpell) {
          const userSpell = currentLvlSpells[objName];

          GameState.userSpells.push(userSpell);
        }
      });
    });
  }

  static setData() {
    if (!ApiHandler.userData) return;

    const gameData: Idata = {
      firstMapRender: GameState.firstAppearance,
      firstFieldRender: GameState.firstFieldAppearance,
      userLvl: GameState.userLvl,
      userSpells: GameState.userSpells,
      gameBeasts: GameState.currentGameBeasts,
      achievements: GameState.achievementsCurrentStatus,
    };

    const gameDataJson = ParseTypingAdventure.setGameData(gameData);

    const data: User = {
      _id: ApiHandler.userData._id,
      __v: ApiHandler.userData.__v,
      login: ApiHandler.userData.login,
      password: ApiHandler.userData.password,
      avatar: ApiHandler.userData.avatar,
      testing: ApiHandler.userData.testing,
      lessonsEn: ApiHandler.userData.lessonsEn,
      lessonsRu: ApiHandler.userData.lessonsRu,
      typingAdventure: gameDataJson,
      typingHero: ApiHandler.userData.typingHero,
      badges: ApiHandler.userData.badges,
    };

    ApiService.updateUser(ApiHandler.userData._id, data);
  }
}

export default ApiHandler;
