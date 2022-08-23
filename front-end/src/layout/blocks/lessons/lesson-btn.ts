import CreateElement from '../../elements/create-element';
import SwitchPage from '../../../scripts/layout/switch-page';

import { RenderHandler } from '../../../types/types';
import { Tag, Page } from '../../../types/enums';
import { Lesson } from '../../../types/interfaces';

class LessonBtn {
  public static createLessonBtn(
    lesson: Lesson,
    render: RenderHandler
  ): HTMLElement {
    const lessonBtn = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: 'lesson-btn' },
    ]);
    const lessonTop = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'lesson-btn-top' },
    ]);
    const lessonIndex = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'lesson-btn-index' },
    ]);
    const lessonStars = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'lesson-btn-stars' },
    ]);
    // -- User stats for stars
    const lessonImg = CreateElement.createElement(Tag.div, [
      { name: 'class', value: `lesson-btn-bg lesson-bg-${lesson.complexity}` },
    ]);
    const lessonTitle = CreateElement.createElement(Tag.h5, [
      { name: 'class', value: 'lesson-btn-title' },
    ]);

    lessonTitle.textContent = lesson.title;
    lessonTop.append(lessonIndex, lessonStars);
    lessonBtn.append(lessonTop, lessonImg, lessonTitle);
    lessonBtn.addEventListener('click', () => {
      SwitchPage.applyPage(Page.lessons, render);
    });

    return lessonBtn;
  }
}

export default LessonBtn;
