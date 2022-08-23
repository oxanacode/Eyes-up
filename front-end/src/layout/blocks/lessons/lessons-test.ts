import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import SwitchPage from '../../../scripts/layout/switch-page';
import BigBtn from '../../elements/big-btn';

import { RenderHandler } from '../../../types/types';
import { Tag, Page } from '../../../types/enums';

class LessonsTest {
  public static createLessonsTest(render: RenderHandler): HTMLElement {
    const test = CreateElement.createElement(Tag.section, [
      { name: 'class', value: 'layout-test' },
    ]);
    const lessonsTestTitle = CreateElement.createElement(Tag.h4, [
      { name: 'class', value: 'section-title' },
    ]);
    const testBtn = BigBtn.createBigBtn(
      translation.lessonsTestBtn[State.currentLang]
    );

    testBtn.addEventListener('click', () => {
      SwitchPage.applyPage(Page.test, render);
    });
    lessonsTestTitle.textContent =
      translation.lessonsTestTitle[State.currentLang];
    test.append(lessonsTestTitle, testBtn);

    return test;
  }
}

export default LessonsTest;
