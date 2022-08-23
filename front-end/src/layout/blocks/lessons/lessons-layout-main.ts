import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import LessonsTest from './lessons-test';
import LessonsFact from './lessons-fact';
import MainTitle from '../../elements/main-title';
import LayoutBtn from './layout-btn';

import { RenderHandler } from '../../../types/types';
import { Tag, Layout } from '../../../types/enums';

class LayoutMain {
  public static createLayoutMain(render: RenderHandler): HTMLElement {
    const main = CreateElement.createElement(Tag.main, [
      { name: 'class', value: 'layout' },
    ]);
    const mainTitle = MainTitle.createMainTitle(
      translation.lessonsTitle[State.currentLang]
    );
    const layoutEnBtn = LayoutBtn.createLayoutBtn(
      translation.lessonsEnLayoutTitle[State.currentLang],
      render,
      Layout.en
    );
    const layoutRuBtn = LayoutBtn.createLayoutBtn(
      translation.lessonsRuLayoutTitle[State.currentLang],
      render,
      Layout.ru
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
