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
import translation from '../../../data/translation';
import LessonIntro from './lesson-intro';

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

    main = CreateElement.createElement(Tag.main, [{ name: 'class', value: `lesson lesson-${State.currentLessonBg}` }]);
    LessonState.page = main;

    const topWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-top' }]);
    const back = BackBtn.createBackBtn(Page.lessons, render);
    const lessonSettings = LessonSettings.createLessonSettings();
    const ribbon = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-ribbon' }]);
    const lessonWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-wrapper' }]);
    const contentTopWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'content-top-wrapper' }]);
    const lessonStats = LessonStats.createLessonStats();
    const restartBtn = LessonRestartBtn.createRestartBtn(render);
    const lessonContent = LessonContent.createLessonContent();
    const progressBarWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'progress-bar-wrapper' }]);
    const progressBarDone = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'progress-bar-done' }]);
    const progressBarAll = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'progress-bar-all' }]);
    const keyboard = LessonKeyboard.createLessonKeyboard();
    const hands = CreateElement.createElement(Tag.img, [
      { name: 'class', value: 'lesson-hands' },
      { name: 'alt', value: 'Hands tip' },
      { name: 'height', value: '500px' },
      { name: 'width', value: '900px' },
    ]) as HTMLImageElement;

    LessonState.hands = hands;

    const input = LessonInput.createLessonInput(render);

    ribbon.textContent = translation.testRibbonText[State.currentLang];
    LessonState.ribbon = ribbon;
    LessonState.keyboard = keyboard;
    topWrapper.append(back, lessonSettings);
    contentTopWrapper.append(lessonStats, restartBtn);
    lessonWrapper.append(contentTopWrapper, lessonContent, input);
    progressBarAll.append(progressBarDone);
    progressBarWrapper.append(progressBarAll);
    LessonState.progress = progressBarDone;
    LessonState.progressWrapper = progressBarWrapper;
    main.append(topWrapper, ribbon, lessonWrapper, progressBarWrapper, keyboard, hands);

    document.addEventListener('keydown', () => {
      input.focus();
    });

    if (LessonState.lessonData.index === 1) LessonIntro.show();

    return main;
  }
}

export default LessonMain;
