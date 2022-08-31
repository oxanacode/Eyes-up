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

  public static createLessonResult(): HTMLElement {
    const modal = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-result-ribbon' }]);
    const text = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'result-ribbon-text' }]);
    const speed = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'result-ribbon-speed' }]);
    const accuracy = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'result-ribbon-accuracy' }]);

    text.textContent = translation.testResults[State.currentLang];
    speed.textContent = `${translation.testWpmText[State.currentLang]} ${LessonState.wpmCount.textContent}`;
    accuracy.textContent = `${translation.testAccuracyText[State.currentLang]} ${
      LessonState.accuracyCount.textContent
    }`;
    modal.append(text, speed, accuracy);

    return modal;
  }

  public static showLessonResult(): void {
    if (UserState.checkIfUserAuthorised()) LessonResult.saveResult();
    LessonState.page.append(LessonResult.createLessonResult());
  }
}

export default LessonResult;
