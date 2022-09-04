import GameState from './game-state';
import Beast from './beasts/beast-creater';
import ApiService from '../../scripts/api/api-service';
import ParseTypingAdventure from '../../scripts/parsing/parse-typing-adventure';
import ParseBadges from '../../scripts/parsing/parse-badges';
import Achievements from './achievements';

import IBeast, { Idata, User } from './game-types/interfaces';
import { Data } from './game-types/enums';

class ApiHandler {
  static userData: User;

  static getData(user: User, callback: () => void) {
    ApiHandler.userData = user;

    if (user.typingAdventure === Data.noData) return;
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

  static badgesHandler() {
    if (!ApiHandler.userData || !GameState.achievementsCurrentStatus) return;

    const { badges } = ApiHandler.userData;
    const currentBadgesKeys = Object.keys(GameState.achievementsCurrentStatus);
    const newBadges: number[] = [];

    currentBadgesKeys.forEach((key) => {
      if (GameState.achievementsCurrentStatus[key]) newBadges.push(Achievements.achievementsNums[key]);
    });

    if (badges === Data.noData && !newBadges.length) return;
    if (badges === Data.noData) ApiHandler.userData.badges = ParseBadges.setBadges(newBadges);
    else {
      const userBadges = ParseBadges.getBadges(badges);

      newBadges.forEach((badge) => {
        if (!userBadges.includes(badge)) userBadges.push(badge);
      });

      ApiHandler.userData.badges = ParseBadges.setBadges(userBadges);
    }
  }

  static uniqueBeastsCounter() {
    if (!GameState.currentGameBeasts) return 0;

    const beasts: IBeast[] = GameState.currentGameBeasts;
    const uniqueBeasts: string[] = [];

    beasts.forEach((beast) => {
      if (!uniqueBeasts.includes(beast.beastType) && beast.done) uniqueBeasts.push(beast.beastType);
    });

    return uniqueBeasts.length;
  }

  static setData() {
    if (!ApiHandler.userData) return;

    const currentUniqueBeasts = ApiHandler.uniqueBeastsCounter();

    const gameData: Idata = {
      firstMapRender: GameState.firstAppearance,
      firstFieldRender: GameState.firstFieldAppearance,
      userLvl: GameState.userLvl,
      userSpells: GameState.userSpells,
      uniqueBeasts: currentUniqueBeasts,
      gameBeasts: GameState.currentGameBeasts,
      achievements: GameState.achievementsCurrentStatus,
    };

    const gameDataJson = ParseTypingAdventure.setGameData(gameData);
    ApiHandler.badgesHandler();

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
