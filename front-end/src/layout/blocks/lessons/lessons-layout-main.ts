import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import SectionBtn from '../../elements/section-btn';
import LessonsTest from './lessons-test';
import LessonsFact from './lessons-fact';

import { RenderHandler } from '../../../types/types';
import { Tag } from '../../../types/enums';
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
    const buttonsWrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'section-btns-wrapper' },
    ]);

    mainTitle.classList.add('lessons-title');
    buttonsWrapper.append(layoutEnBtn, layoutRuBtn);
    main.append(mainTitle, buttonsWrapper, test, fact);
    layoutEnBtn.addEventListener('click', () => {});
    layoutRuBtn.addEventListener('click', () => {});

    return main;
  }
}

export default LayoutMain;
