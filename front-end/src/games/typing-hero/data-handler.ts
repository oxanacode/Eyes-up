import GameState from './game-state';
import ParseTypingHero from '../../scripts/parsing/parse-typing-hero';
import ParseBadges from '../../scripts/parsing/parse-badges';
import ApiService from '../../scripts/api/api-service';

import { User } from '../../types/interfaces';
import { Idata, IlevelValues, Iachievement } from './game-types/interfaces';
import { AchievementsValues, PointsType, Data } from './game-types/enums';

class UserData {
  static userData: User;

  static levels: IlevelValues = {
    1: {
      score: 0,
      accuracy: 0,
    },
    2: {
      score: 0,
      accuracy: 0,
    },
    3: {
      score: 0,
      accuracy: 0,
    },
    4: {
      score: 0,
      accuracy: 0,
    },
    5: {
      score: 0,
      accuracy: 0,
    },
    6: {
      score: 0,
      accuracy: 0,
    },
    7: {
      score: 0,
      accuracy: 0,
    },
    8: {
      score: 0,
      accuracy: 0,
    },
    9: {
      score: 0,
      accuracy: 0,
    },
    10: {
      score: 0,
      accuracy: 0,
    },
    sandbox: {
      score: 0,
      accuracy: 0,
    },
  };

  static lvlsDone = 0;

  static bestLvlScore: number | string = PointsType.basePointsContent;

  static bestLvlAccuracy: number | string = PointsType.basePointsContent;

  static totalScore: number | string = PointsType.basePointsContent;

  static averageAccuracy: number | string = PointsType.basePointsContent;

  static createArrOfPoints(type: string) {
    const lvls = Object.keys(UserData.levels);
    const completeLvls = lvls.filter((lvl) => {
      if (UserData.levels[lvl][type] === 0) return false;

      return true;
    });
    const completeLvlsCount = completeLvls.length;
    const results = completeLvls.map((lvl) => UserData.levels[lvl][type]);

    return { results, completeLvlsCount };
  }

  static userBestLvlPoints(type: string) {
    const { results } = UserData.createArrOfPoints(type);
    const maxValue = Math.max(...results);

    return maxValue;
  }

  static userAllScore() {
    const { results } = UserData.createArrOfPoints(PointsType.score);
    const valuesSum = results.reduce((value, score) => value + score);

    return valuesSum;
  }

  static userAverageAccuracy() {
    const { results } = UserData.createArrOfPoints(PointsType.accuracy);
    const valuesSum = results.reduce((value, accuracy) => value + accuracy);
    const result = valuesSum / results.length;

    return Math.trunc(result);
  }

  static progressChecker() {
    const score = UserData.userBestLvlPoints(PointsType.score);
    const accuracy = UserData.userBestLvlPoints(PointsType.accuracy);
    const { completeLvlsCount } = UserData.createArrOfPoints(PointsType.score);
    const totalScore = UserData.userAllScore();
    const averageAccuracy = UserData.userAverageAccuracy();

    UserData.bestLvlScore = score;
    UserData.bestLvlAccuracy = accuracy;
    UserData.lvlsDone = completeLvlsCount;
    UserData.totalScore = totalScore;
    UserData.averageAccuracy = averageAccuracy;
  }

  static getData(user: User) {
    UserData.userData = user;

    if (user.typingHero === Data.noData) return;
    if (!user.typingHero) return;

    const data: Idata = ParseTypingHero.getGameData(user.typingHero);

    if (data.firstAppearance !== undefined) GameState.firstAppearance = data.firstAppearance;
    if (data.levelsPoints) UserData.levels = data.levelsPoints;
    if (data.levelsDone) UserData.lvlsDone = data.levelsDone;
    if (data.bestScore) UserData.bestLvlScore = data.bestScore;
    if (data.bestAccuracy) UserData.bestLvlAccuracy = data.bestAccuracy;
    if (data.totalScore) UserData.totalScore = data.totalScore;
    if (data.averageAccuracy) UserData.averageAccuracy = data.averageAccuracy;

    const { badges } = user;

    if (badges === Data.noData) return;

    const userBadges = ParseBadges.getBadges(badges);
    const badgesObj: Iachievement = {
      hero: false,
      legend: false,
    };

    if (userBadges.includes(AchievementsValues.hero)) badgesObj.hero = true;
    if (userBadges.includes(AchievementsValues.hero)) badgesObj.legend = true;

    GameState.achievementCurrentStatus = badgesObj;
  }

  static badgeHandler() {
    if (!UserData.userData || !GameState.achievementCurrentStatus) return;

    const { badges } = UserData.userData;
    const newBadges: number[] = [];

    if (GameState.achievementCurrentStatus.hero) newBadges.push(AchievementsValues.hero);
    if (GameState.achievementCurrentStatus.legend) newBadges.push(AchievementsValues.legend);

    if (badges === Data.noData && !newBadges.length) return;
    if (badges === Data.noData) UserData.userData.badges = ParseBadges.setBadges(newBadges);
    else {
      const userBadges = ParseBadges.getBadges(badges);

      newBadges.forEach((badge) => {
        if (!userBadges.includes(badge)) userBadges.push(badge);
      });

      UserData.userData.badges = ParseBadges.setBadges(userBadges);
    }
  }

  static setData() {
    if (!UserData.userData) return;

    const gameData: Idata = {
      firstAppearance: GameState.firstAppearance,
      levelsPoints: UserData.levels,
      levelsDone: UserData.lvlsDone,
      bestScore: UserData.bestLvlScore,
      bestAccuracy: UserData.bestLvlAccuracy,
      totalScore: UserData.totalScore,
      averageAccuracy: UserData.averageAccuracy,
    };
    const gameDataJson = ParseTypingHero.setGameData(gameData);

    UserData.badgeHandler();

    const data: User = {
      _id: UserData.userData._id,
      __v: UserData.userData.__v,
      login: UserData.userData.login,
      password: UserData.userData.password,
      avatar: UserData.userData.avatar,
      testing: UserData.userData.testing,
      lessonsEn: UserData.userData.lessonsEn,
      lessonsRu: UserData.userData.lessonsRu,
      typingAdventure: UserData.userData.typingAdventure,
      typingHero: gameDataJson,
      badges: UserData.userData.badges,
    };

    ApiService.updateUser(UserData.userData._id, data);
  }
}

export default UserData;
