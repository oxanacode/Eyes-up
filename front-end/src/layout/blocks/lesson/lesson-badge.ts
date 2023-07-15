import translation from '../../../data/translation';
import ParseBadges from '../../../scripts/parsing/parse-badges';
import State from '../../../scripts/state/state';
import CreateElement from '../../elements/create-element';
import UserLessonsStats from '../lessons/user-lessons';
import LessonState from './lesson-state';

import { Badge, Data, Layout, Tag } from '../../../types/enums';

class LessonBadge {
  public static create(index: number, text: string): HTMLElement {
    const badge = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-badge' }]);
    const badgeImg = CreateElement.createElement(Tag.img, [
      { name: 'src', value: `./assets/images/badges/badge-${index}.png` },
      { name: 'alt', value: 'Badge Image' },
      { name: 'height', value: '80px' },
      { name: 'width', value: '80px' },
    ]);
    const badgeText = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-badge-text' }]);
    const badgeTitle = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'lesson-badge-title' }]);
    const badgeContent = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'lesson-badge-content' }]);

    badgeTitle.textContent = translation.lessonBadgeTitle[State.currentLang];
    badgeContent.textContent = text;
    badgeText.append(badgeTitle, badgeContent);
    badge.append(badgeImg, badgeText);

    return badge;
  }

  public static checkCompletedBadges(badges: Array<number>, badgesWrapper: HTMLElement): Array<number> {
    const lessonsData = UserLessonsStats.getAllLessons(LessonState.user);
    const zeroStars = Object.values(lessonsData).filter((lesson) => lesson.lastScore === 0).length;

    if (Object.keys(lessonsData).length === LessonState.lessonsNumber && !zeroStars) {
      if (State.currentLayout === Layout.en) {
        if (!badges.includes(Badge.twelve)) {
          badgesWrapper.append(
            LessonBadge.create(Badge.twelve, translation.lessonBadgeCompletedAllLessons[State.currentLang])
          );
          badges.push(Badge.twelve);

          if (badges.includes(Badge.thirteen)) {
            badgesWrapper.append(LessonBadge.create(Badge.twenty, translation.lessonBadgeEyesUp[State.currentLang]));
            badges.push(Badge.twenty);
          }
        }
      } else if (!badges.includes(Badge.thirteen)) {
        badgesWrapper.append(
          LessonBadge.create(Badge.thirteen, translation.lessonBadgeCompletedAllLessons[State.currentLang])
        );
        badges.push(Badge.thirteen);

        if (badges.includes(Badge.twelve)) {
          badgesWrapper.append(LessonBadge.create(Badge.twenty, translation.lessonBadgeEyesUp[State.currentLang]));
          badges.push(Badge.twenty);
        }
      }
    }

    return badges;
  }

  public static checkSpeedBadges(badges: Array<number>, badgesWrapper: HTMLElement): Array<number> {
    const ACCURACY_REQ = 90;

    if (LessonState.accuracy >= ACCURACY_REQ && LessonState.speed >= 20) {
      if (State.currentLayout === Layout.en) {
        if (!badges.includes(Badge.fourteen)) {
          badgesWrapper.append(LessonBadge.create(Badge.fourteen, translation.lessonBadgeSpeed20[State.currentLang]));
          badges.push(Badge.fourteen);
        }
      } else if (!badges.includes(Badge.fifteen)) {
        if (!badges.includes(Badge.fifteen)) {
          badgesWrapper.append(LessonBadge.create(Badge.fifteen, translation.lessonBadgeSpeed20[State.currentLang]));
          badges.push(Badge.fifteen);
        }
      }

      if (LessonState.speed >= 60) {
        if (State.currentLayout === Layout.en) {
          if (!badges.includes(Badge.sixteen)) {
            badgesWrapper.append(LessonBadge.create(Badge.sixteen, translation.lessonBadgeSpeed60[State.currentLang]));
            badges.push(Badge.sixteen);
          }
        } else if (!badges.includes(Badge.seventeen)) {
          if (!badges.includes(Badge.seventeen)) {
            badgesWrapper.append(
              LessonBadge.create(Badge.seventeen, translation.lessonBadgeSpeed60[State.currentLang])
            );
            badges.push(Badge.seventeen);
          }
        }
      }

      if (LessonState.speed >= 100) {
        if (State.currentLayout === Layout.en) {
          if (!badges.includes(Badge.eighteen)) {
            badgesWrapper.append(
              LessonBadge.create(Badge.eighteen, translation.lessonBadgeSpeed100[State.currentLang])
            );
            badges.push(Badge.eighteen);
          }
        } else if (!badges.includes(Badge.nineteen)) {
          if (!badges.includes(Badge.nineteen)) {
            badgesWrapper.append(
              LessonBadge.create(Badge.nineteen, translation.lessonBadgeSpeed100[State.currentLang])
            );
            badges.push(Badge.nineteen);
          }
        }
      }
    }

    return badges;
  }

  public static checkBadges(): HTMLElement {
    let badges: Array<number> = [];
    const badgesWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-badges-wrapper' }]);

    if (LessonState.user.badges !== Data.noData) badges = ParseBadges.getBadges(LessonState.user.badges);

    badges = LessonBadge.checkCompletedBadges(badges, badgesWrapper);
    badges = LessonBadge.checkSpeedBadges(badges, badgesWrapper);
    LessonState.user.badges = ParseBadges.setBadges(badges);

    return badgesWrapper;
  }
}

export default LessonBadge;
