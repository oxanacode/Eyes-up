import CreateElement from '../../elements/create-element';
import SwitchPage from '../../../scripts/layout/switch-page';
import LessonState from '../lesson/lesson-state';
import UserLessonsStats from './user-lessons';
import UserState from '../../../scripts/user/user-state';

import { RenderHandler } from '../../../types/types';
import { Tag, Page } from '../../../types/enums';
import { Lesson } from '../../../types/interfaces';

class LessonBtn {
  public static createLessonBtn(lesson: Lesson, index: number, render: RenderHandler): HTMLElement {
    const TOTAL_NUMBER_OF_STARS = 5;
    const lessonBtn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'lesson-btn' }]);
    const lessonTop = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-btn-top' }]);
    const lessonIndex = CreateElement.createElement(Tag.div, [
      {
        name: 'class',
        value: `lesson-btn-index lesson-index-${lesson.complexity}`,
      },
    ]);
    const lessonStars = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-btn-stars' }]);

    if (UserState.checkIfUserAuthorised()) {
      const userLessonsData = UserLessonsStats.getAllLessons(LessonState.user);

      if (Object.keys(userLessonsData).length !== 0 && userLessonsData[lesson.index]) {
        const numberOfStars = userLessonsData[lesson.index].lastScore;

        if (TOTAL_NUMBER_OF_STARS - numberOfStars) {
          for (let i = 0; i < TOTAL_NUMBER_OF_STARS - numberOfStars; i += 1) {
            const star = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-btn-star-empty' }]);

            lessonStars.append(star);
          }
        }

        for (let i = 0; i < numberOfStars; i += 1) {
          const star = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-btn-star' }]);

          lessonStars.append(star);
        }
      }
    }

    const lessonImg = CreateElement.createElement(Tag.div, [
      { name: 'class', value: `lesson-btn-bg lesson-bg-${lesson.complexity}` },
    ]);
    const lessonTitle = CreateElement.createElement(Tag.h5, [{ name: 'class', value: 'lesson-btn-title' }]);

    lessonIndex.textContent = `${index + 1}`;
    lessonTitle.textContent = lesson.title;
    lessonTop.append(lessonIndex, lessonStars);
    lessonBtn.append(lessonTop, lessonImg, lessonTitle);
    lessonBtn.addEventListener('click', () => {
      LessonState.lessonData = lesson;
      SwitchPage.applyPage(Page.lesson, render);
    });

    return lessonBtn;
  }
}

export default LessonBtn;
