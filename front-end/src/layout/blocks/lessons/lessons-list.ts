import CreateElement from '../../elements/create-element';
import LessonBtn from './lesson-btn';

import { LessonsList, RenderHandler } from '../../../types/types';
import { Tag } from '../../../types/enums';

class AllLessonsList {
  public static createLessonsList(
    data: LessonsList,
    render: RenderHandler
  ): HTMLElement {
    const lessonsList = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'lessons-list' },
    ]);

    lessonsList.append(
      ...data.map((lesson) => LessonBtn.createLessonBtn(lesson, render))
    );

    return lessonsList;
  }
}

export default AllLessonsList;
