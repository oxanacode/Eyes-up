import CreateElement from '../../elements/create-element';
import BackBtn from '../../elements/back-btn';
import LessonState from './lesson-state';
import LessonSettings from './lesson-settings';
import LessonContent from './lesson-content';
import LessonKeyboard from './lesson-keyboard';
import State from '../../../scripts/state/state';
import LessonsMain from '../lessons/lessons-main';
import LessonStats from './lesson-stats';
import LessonRestartBtn from './lesson-restart-btn';
import LessonInput from './lesson-input';

import { RenderHandler } from '../../../types/types';
import { Tag, Page } from '../../../types/enums';

class LessonMain {
  public static createLessonMain(render: RenderHandler): HTMLElement {
    let main: HTMLElement;
    if (!LessonState.lessonData) {
      State.currentPage = Page.lessons;
      main = LessonsMain.createLessonsMain(render);
      return main;
    }

    main = CreateElement.createElement(Tag.main, [{ name: 'class', value: 'lesson' }]);

    const topWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-top' }]);
    const back = BackBtn.createBackBtn(Page.lessons, render);
    const lessonSettings = LessonSettings.createLessonSettings();
    const ribbon = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-ribbon' }]);
    const lessonWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-wrapper' }]);
    const contentTopWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'content-top-wrapper' }]);
    const lessonStats = LessonStats.createLessonStats();
    const restartBtn = LessonRestartBtn.createRestartBtn(render);
    const lessonContent = LessonContent.createLessonContent();
    const keyboard = LessonKeyboard.createLessonKeyboard();
    const input = LessonInput.createLessonInput();

    LessonState.ribbon = ribbon;
    topWrapper.append(back, lessonSettings);
    contentTopWrapper.append(lessonStats, restartBtn);
    lessonWrapper.append(contentTopWrapper, lessonContent, input);
    main.append(topWrapper, ribbon, lessonWrapper, keyboard);

    document.addEventListener('keydown', () => {
      input.focus();
    });

    return main;
  }
}

export default LessonMain;
