import CreateElement from '../app-scripts/app-create-element';
import LevelState from './level-state';
import UserData from '../data-handler';
import GameState from '../game-state';

import { Tag, PointsType, GameValues } from '../game-types/enums';

class LevelPoints {
  static createScoreAccuracyWrappers() {
    const score = LevelPoints.createCurrentPointsWrapper(PointsType.score);
    const accuracy = LevelPoints.createCurrentPointsWrapper(PointsType.accuracy);

    return { score, accuracy };
  }

  static createUserPointsWrappers(lvlNum: string) {
    const userScore = LevelPoints.createUserPoints(lvlNum, 'score');
    const userAccuracy = LevelPoints.createUserPoints(lvlNum, 'accuracy');

    return { userScore, userAccuracy };
  }

  static createPointsWrapper(pointsTypes: string) {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: `${pointsTypes}` }]);
    const title = CreateElement.createElement(Tag.par, [{ name: 'class', value: `${pointsTypes}-title` }]);
    const points = CreateElement.createElement(Tag.par, [{ name: 'class', value: `${pointsTypes}-pionts` }]);

    return { wrapper, title, points };
  }

  static createCurrentPointsWrapper(pointsType: string) {
    const { wrapper, title, points } = LevelPoints.createPointsWrapper(`current-${pointsType}`);

    if (pointsType === PointsType.score) {
      title.textContent = `${GameState.lib.currentScore} ${GameState.lib.score}`;
      LevelState.scoreWrapper = points;
    }
    if (pointsType === PointsType.accuracy) {
      title.textContent = `${GameState.lib.currentAccuracy} ${GameState.lib.accuracy}`;
      LevelState.accuracyWrapper = points;
    }

    points.textContent = PointsType.basePointsContent;

    wrapper.append(title, points);

    return wrapper;
  }

  static createUserPoints(lvlNum: string, type: string) {
    const { wrapper, title, points } = LevelPoints.createPointsWrapper(`user-data`);

    const userPoints = UserData.levels[lvlNum][type];

    if (type === PointsType.score) {
      title.textContent = `${GameState.lib.prevousBestScore} ${GameState.lib.score}`;
    }
    if (type === PointsType.accuracy) {
      title.textContent = `${GameState.lib.prevousBestAccuracy} ${GameState.lib.accuracy}`;
    }

    if (userPoints === 0) {
      points.textContent = PointsType.basePointsContent;
    } else if (userPoints > 0 && type === PointsType.accuracy) {
      const strValue = userPoints.toString();
      points.textContent = `${strValue}%`;
    } else {
      points.textContent = userPoints.toString();
    }

    wrapper.append(title, points);

    return wrapper;
  }

  static scoreHandler() {
    LevelState.lvlScore += PointsType.scorePoint;

    LevelState.scoreWrapper.textContent = LevelState.lvlScore.toString();
  }

  static accuracyHandler() {
    const pressKeys = LevelState.currentPressKeys.length;
    const keys = LevelState.matchedKeys.length;
    const finalPercent = (keys / pressKeys) * GameValues.hundredPercent;
    const percentStr = `${Math.trunc(finalPercent)}%`;

    LevelState.lvlAccuracy = finalPercent;
    LevelState.accuracyWrapper.textContent = percentStr;
  }

  static saveResult(lvlNum: string) {
    const score = LevelState.lvlScore;
    const accuracy = LevelState.lvlAccuracy;

    if (UserData.levels[lvlNum].score < score) UserData.levels[lvlNum].score = score;
    if (UserData.levels[lvlNum].accuracy < accuracy) UserData.levels[lvlNum].accuracy = Math.trunc(accuracy);

    UserData.progressChecker();
  }

  static clearPointsAndState() {
    LevelState.lvlScore = PointsType.basePoints;
    LevelState.lvlAccuracy = PointsType.basePoints;
    LevelState.currentFieldKeys = [];
    LevelState.currentPressKeys = [];
    LevelState.matchedKeys = [];

    LevelState.scoreWrapper.textContent = PointsType.basePointsContent;
    LevelState.accuracyWrapper.textContent = PointsType.basePointsContent;
  }
}

export default LevelPoints;
