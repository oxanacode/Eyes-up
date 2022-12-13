import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import MainTitle from '../../elements/main-title';
import LessonsFilters from './lessons-filters';
import ApiService from '../../../scripts/api/api-service';
import AllLessonsList from './lessons-list';
import BackBtn from '../../elements/back-btn';
import UserState from '../../../scripts/user/user-state';
import LessonState from '../lesson/lesson-state';
import EmptyUser from '../lesson/empty-user';
import Spinner from '../../elements/spinner';

import { LessonsList, RenderHandler } from '../../../types/types';
import { Tag, Page } from '../../../types/enums';

class LessonsMain {
  public static createLessonsMain(render: RenderHandler): HTMLElement {
    const back = BackBtn.createBackBtn(Page.layout, render);
    const main = CreateElement.createElement(Tag.main, [{ name: 'class', value: 'lessons' }]);
    const lessonsTopWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lessons-top' }]);
    const mainTitle = MainTitle.createMainTitle(translation.lessonsTitle[State.currentLang]);
    const lessonFilters = LessonsFilters.createLessonsFilters(State.currentLayout, render);
    const layout = State.currentLayout;
    const complexity = State.currentComplexity;
    const { spinner, loadingText } = Spinner.create('spinner');

    mainTitle.classList.add('lessons-title');
    lessonsTopWrapper.append(mainTitle, lessonFilters);
    main.append(back, lessonsTopWrapper);
    main.append(spinner, loadingText);

    const addLessons = (res: LessonsList) => {
      spinner.remove();
      loadingText.remove();
      main.append(AllLessonsList.createLessonsList(res, render));
      LessonState.lessonsNumber = res.length;
    };

    if (UserState.checkIfUserAuthorised()) {
      ApiService.getUser(State.currentUser.login).then((user) => {
        LessonState.user = user;
        ApiService.getLessons({ layout, complexity }).then((res) => {
          addLessons(res);
        });
      });
    } else {
      LessonState.user = EmptyUser.createEmptyUser();
      ApiService.getLessons({ layout, complexity }).then((res) => {
        addLessons(res);
      });
    }

    return main;
  }
}

export default LessonsMain;
