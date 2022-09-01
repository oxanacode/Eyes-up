import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import LessonState from './lesson-state';
import CurrentUser from '../../../scripts/user/current-user';
import UserLessonsStats from '../lessons/user-lessons';
import ParseLessons from '../../../scripts/parsing/parse-lessons';
import ApiService from '../../../scripts/api/api-service';
import UserState from '../../../scripts/user/user-state';

import { Layout, Tag } from '../../../types/enums';

class LessonResult {
  public static getScore(): number {
    let score: number;
    const accuracyScore = Math.floor(
      (LessonState.accuracy - LessonState.lessonData.minAccuracy) / ((100 - LessonState.lessonData.minAccuracy) / 5)
    );
    const speedScore = Math.floor(LessonState.speed / LessonState.lessonData.starSpeed);

    score = accuracyScore + speedScore > 5 ? 5 : accuracyScore + speedScore;

    if (
      LessonState.accuracy < LessonState.lessonData.minAccuracy ||
      LessonState.speed < LessonState.lessonData.minSpeed
    )
      score = 0;

    return score;
  }

  public static saveResult(): void {
    const lesson = {
      lastSpeed: LessonState.speed,
      lastAccuracy: LessonState.accuracy,
      lastScore: LessonResult.getScore(),
    };
    const userLessonsData = UserLessonsStats.getAllLessons(LessonState.user);

    userLessonsData[LessonState.lessonData.index] = lesson;

    const lessons = ParseLessons.setLessons(userLessonsData);

    if (State.currentLayout === Layout.en) {
      const userData = new CurrentUser(
        LessonState.user.login,
        LessonState.user.password,
        LessonState.user.avatar,
        LessonState.user.testing,
        lessons,
        LessonState.user.lessonsRu,
        LessonState.user.typingAdventure,
        LessonState.user.typingHero,
        LessonState.user.badges
      );

      ApiService.updateUser(LessonState.user._id, userData);
    } else {
      const userData = new CurrentUser(
        LessonState.user.login,
        LessonState.user.password,
        LessonState.user.avatar,
        LessonState.user.testing,
        LessonState.user.lessonsEn,
        lessons,
        LessonState.user.typingAdventure,
        LessonState.user.typingHero,
        LessonState.user.badges
      );

      ApiService.updateUser(LessonState.user._id, userData);
    }
  }

  public static createAccuracyReq(): HTMLElement {
    const accuracyWrapper = CreateElement.createElement(Tag.span, [
      { name: 'class', value: 'lesson-result-accuracy-wrapper' },
    ]);
    const accuracyText = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'lesson-result-accuracy' }]);
    const accuracyNumber = CreateElement.createElement(Tag.span, [
      { name: 'class', value: 'lesson-result-accuracy-num' },
    ]);

    accuracyText.textContent = translation.lessonResultsReqAccuracy[State.currentLang];
    accuracyNumber.textContent = `${LessonState.lessonData.minAccuracy}%`;
    accuracyWrapper.append(accuracyText, accuracyNumber);

    return accuracyWrapper;
  }

  public static createSpeedReq(): HTMLElement {
    const speedWrapper = CreateElement.createElement(Tag.span, [
      { name: 'class', value: 'lesson-result-speed-wrapper' },
    ]);
    const speedText = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'lesson-result-speed' }]);
    const speedNumber = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'lesson-result-speed-num' }]);

    speedText.textContent = translation.lessonResultsReqSpeed[State.currentLang];
    speedNumber.textContent = `${LessonState.lessonData.minSpeed}${translation.testWpmSub[State.currentLang]}`;
    speedWrapper.append(speedText, speedNumber);

    return speedWrapper;
  }

  public static createSpeedStarReq(): HTMLElement {
    const speedStarWrapper = CreateElement.createElement(Tag.span, [
      { name: 'class', value: 'lesson-result-speed-star-wrapper' },
    ]);
    const speedStarText = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'lesson-result-speed-star' }]);
    const speedStarNumber = CreateElement.createElement(Tag.span, [
      { name: 'class', value: 'lesson-result-speed-star-num' },
    ]);

    speedStarText.textContent = translation.lessonResultsReqSpeedStar[State.currentLang];
    speedStarNumber.textContent = `${LessonState.lessonData.starSpeed}${translation.testWpmSub[State.currentLang]}`;
    speedStarWrapper.append(speedStarText, speedStarNumber);

    return speedStarWrapper;
  }

  public static createLessonResult(): HTMLElement {
    const result = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-result' }]);
    const title = CreateElement.createElement(Tag.h5, [{ name: 'class', value: 'lesson-result-title' }]);
    const scoreText = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'lesson-result-score-text' }]);
    const scoreStarWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-score' }]);
    const scoreWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-score-wrapper' }]);
    const TOTAL_NUMBER_OF_STARS = 5;
    const score = LessonResult.getScore();
    const reqTitle = CreateElement.createElement(Tag.h5, [{ name: 'class', value: 'lesson-result-req' }]);
    const minAccuracy = LessonResult.createAccuracyReq();
    const minSpeed = LessonResult.createSpeedReq();
    const minStarSpeed = LessonResult.createSpeedStarReq();

    if (TOTAL_NUMBER_OF_STARS - score) {
      for (let i = 0; i < TOTAL_NUMBER_OF_STARS - score; i += 1) {
        const star = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-btn-star-empty' }]);

        scoreStarWrapper.append(star);
      }
    }

    for (let i = 0; i < score; i += 1) {
      const star = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-btn-star' }]);

      scoreStarWrapper.append(star);
    }

    switch (score) {
      case 1:
        title.textContent = translation.lessonResults1[State.currentLang];
        break;
      case 2:
        title.textContent = translation.lessonResults2[State.currentLang];
        break;
      case 3:
        title.textContent = translation.lessonResults3[State.currentLang];
        break;
      case 4:
        title.textContent = translation.lessonResults4[State.currentLang];
        break;
      case 5:
        title.textContent = translation.lessonResults5[State.currentLang];
        break;
      default:
        title.textContent = translation.lessonResults0[State.currentLang];
    }

    reqTitle.textContent = translation.lessonResultsReq[State.currentLang];
    scoreText.textContent = translation.lessonResultsScoreText[State.currentLang];
    scoreWrapper.append(scoreText, scoreStarWrapper);
    result.append(title, scoreWrapper, reqTitle, minAccuracy, minSpeed, minStarSpeed);

    return result;
  }

  public static showLessonResult(): void {
    if (UserState.checkIfUserAuthorised()) LessonResult.saveResult();
    LessonState.page.append(LessonResult.createLessonResult());
  }
}

export default LessonResult;
