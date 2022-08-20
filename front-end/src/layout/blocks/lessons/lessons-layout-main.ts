import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import SectionBtn from '../../elements/section-btn';
import LessonsTest from './lessons-test';
import LessonsFact from './lessons-fact';
import ManageState from '../../../scripts/state/manage-state';
import ChangePage from '../../../scripts/layout/change-page';

import { RenderHandler } from '../../../types/types';
import { Tag, Page } from '../../../types/enums';
import MainTitle from '../../elements/main-title';

class LayoutMain {
  public static createLayoutMain(render: RenderHandler) {
    const main = CreateElement.createElement(Tag.main, [
      { name: 'class', value: 'layout' },
    ]);
    const mainTitle = MainTitle.createMainTitle(
      translation.lessonsTitle[State.currentLang]
    );
    const layoutEnBtn = SectionBtn.createSectionBtn(
      'layout-en',
      translation.lessonsEnLayoutTitle[State.currentLang]
    );
    const layoutRuBtn = SectionBtn.createSectionBtn(
      'layout-ru',
      translation.lessonsRuLayoutTitle[State.currentLang]
    );
    const test = LessonsTest.createLessonsTest(render);
    const fact = LessonsFact.createLessonsTest();

    main.append(mainTitle, layoutEnBtn, layoutRuBtn, test, fact);
    layoutEnBtn.addEventListener('click', () => {
      ChangePage.changePage(Page.lessons);
      ManageState.saveState();
      render();
    });
    layoutRuBtn.addEventListener('click', () => {
      ChangePage.changePage(Page.lessons);
      ManageState.saveState();
      render();
    });

    return main;
  }
}

export default LayoutMain;
