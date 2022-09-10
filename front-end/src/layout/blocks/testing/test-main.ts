import CreateElement from '../../elements/create-element';
import ApiService from '../../../scripts/api/api-service';
import BackBtn from '../../elements/back-btn';
import TestLangBtn from './test-lang-btn';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import TestContent from './test-content';
import TestState from './test-state';
import TestTimer from './test-timer';
import TestInput from './test-input';
import TestTop from './test-stats';
import UserState from '../../../scripts/user/user-state';
import TestLastResult from './test-last';

import { RenderHandler } from '../../../types/types';
import { Tag, Page, Lang } from '../../../types/enums';

class TestMain {
  public static createTestMain(render: RenderHandler): HTMLElement {
    TestState.clearState();
    TestTimer.stopTimer = true;

    const main = CreateElement.createElement(Tag.main, [{ name: 'class', value: 'test' }]);
    const nav = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-nav' }]);
    const back = BackBtn.createBackBtn(Page.layout, render);
    const btnsWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-btns' }]);
    const btnsText = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'test-btns-text' }]);
    const enBtn = TestLangBtn.createTestLangBtn(Lang.en, render);
    const ruBtn = TestLangBtn.createTestLangBtn(Lang.ru, render);
    const ribbon = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-ribbon' }]);
    const testTop = TestTop.createTestTop(render);
    const time = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-time' }]);
    const timeText = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'test-time-text' }]);
    const timeCount = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'test-time-count' }]);

    ribbon.textContent = translation.testRibbonText[State.currentLang];
    TestState.ribbon = ribbon;
    btnsText.textContent = translation.testBtnsText[State.currentLang];
    timeText.textContent = translation.testTimeText[State.currentLang];
    timeCount.textContent = '60';
    TestState.timeCount = timeCount;
    btnsWrapper.append(enBtn, ruBtn);
    nav.append(back, btnsText, btnsWrapper);
    time.append(timeText, timeCount);
    main.append(nav, ribbon, time, testTop);

    ApiService.getTest(TestState.lang).then((data) => {
      main.append(TestContent.createTestContent(data[0].text));

      if (UserState.checkIfUserAuthorised()) {
        const lastResult = TestLastResult.createTestLastResult();

        main.append(lastResult);
      }
    });

    const testInput = TestInput.createTestInput();

    document.addEventListener('keydown', () => {
      testInput.focus();
    });

    testTop.append(testInput);
    TestState.page = main;

    return main;
  }
}

export default TestMain;
