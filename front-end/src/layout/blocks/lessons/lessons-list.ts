import CreateElement from '../../elements/create-element';
import LessonBtn from './lesson-btn';
import LessonState from '../lesson/lesson-state';

import { LessonsList, RenderHandler } from '../../../types/types';
import { Tag } from '../../../types/enums';

class AllLessonsList {
  public static createLessonsList(data: LessonsList, render: RenderHandler): HTMLElement {
    const lessonsList = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lessons-list' }]);

    LessonState.lessonsId = [];

    lessonsList.append(
      ...data.map((lesson, index) => {
        LessonState.lessonsId.push(lesson._id);
        return LessonBtn.createLessonBtn(lesson, index, render);
      })
    );

    return lessonsList;
  }
}

export default AllLessonsList;
