import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import LessonsTest from './lessons-test';
import LessonsFact from './lessons-fact';
import MainTitle from '../../elements/main-title';
import ChangePageBtn from '../../elements/change-page-btn';

import { RenderHandler } from '../../../types/types';
import { Tag, Page, Btn } from '../../../types/enums';

class LayoutMain {
  public static createLayoutMain(render: RenderHandler) {
    const main = CreateElement.createElement(Tag.main, [
      { name: 'class', value: 'layout' },
    ]);
    const mainTitle = MainTitle.createMainTitle(
      translation.lessonsTitle[State.currentLang]
    );
    const layoutEnBtn = ChangePageBtn.createChangePageBtn(
      Btn.section,
      translation.lessonsEnLayoutTitle[State.currentLang],
      Page.lessons,
      render,
      'layout-en'
    );
    const layoutRuBtn = ChangePageBtn.createChangePageBtn(
      Btn.section,
      translation.lessonsRuLayoutTitle[State.currentLang],
      Page.lessons,
      render,
      'layout-ru'
    );
    const test = LessonsTest.createLessonsTest(render);
    const fact = LessonsFact.createLessonsTest();
    const buttonsWrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'section-btns-wrapper' },
    ]);

    mainTitle.classList.add('lessons-title');
    buttonsWrapper.append(layoutEnBtn, layoutRuBtn);
    main.append(mainTitle, buttonsWrapper, test, fact);

    return main;
  }
}

export default LayoutMain;
