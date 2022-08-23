import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import MainTitle from '../../elements/main-title';
import LessonsFilters from './lessons-filters';
import ChosenLessons from './chosen-lessons';
import ApiService from '../../../scripts/api/api-service';
import AllLessonsList from './lessons-list';

import { RenderHandler } from '../../../types/types';
import { Tag } from '../../../types/enums';

class LessonsMain {
  public static createLessonsMain(render: RenderHandler): HTMLElement {
    const main = CreateElement.createElement(Tag.main, [
      { name: 'class', value: 'lessons' },
    ]);
    const lessonsTopWrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'lessons-top' },
    ]);
    const mainTitle = MainTitle.createMainTitle(
      translation.lessonsTitle[State.currentLang]
    );
    const lessonFilters = LessonsFilters.createLessonsFilters(
      ChosenLessons.layout,
      render
    );
    const { layout, complexity } = ChosenLessons;

    mainTitle.classList.add('lessons-title');
    lessonsTopWrapper.append(mainTitle, lessonFilters);
    main.append(lessonsTopWrapper);

    ApiService.getLessons({ layout, complexity }).then((res) => {
      main.append(AllLessonsList.createLessonsList(res, render));
    });

    return main;
  }
}

export default LessonsMain;
