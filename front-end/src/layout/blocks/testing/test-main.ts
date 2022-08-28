import CreateElement from '../../elements/create-element';
import ApiService from '../../../scripts/api/api-service';
import BackBtn from '../../elements/back-btn';
import TestLangBtn from './test-lang-btn';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import TestText from './test-text';
import TestState from './test-state';
import TestTimer from './test-timer';

import { RenderHandler } from '../../../types/types';
import { Tag, Page, Lang } from '../../../types/enums';

class TestMain {
  public static createTestMain(render: RenderHandler): HTMLElement {
    TestState.clearState();
    TestTimer.stopTimer = true;

    const main = CreateElement.createElement(Tag.main, [{ name: 'class', value: 'test' }]);
    const top = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-top' }]);
    const back = BackBtn.createBackBtn(Page.layout, render);
    const btnsWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-btns' }]);
    const btnsText = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'test-btns-text' }]);
    const enBtn = TestLangBtn.createTestLangBtn(Lang.en, render);
    const ruBtn = TestLangBtn.createTestLangBtn(Lang.ru, render);

    btnsText.textContent = translation.testBtnsText[State.currentLang];
    btnsWrapper.append(enBtn, ruBtn);
    top.append(back, btnsText, btnsWrapper);
    main.append(top);

    ApiService.getTest(TestState.lang).then((data) => {
      main.append(TestText.createTestText(data[0].text, render));
    });

    return main;
  }
}

export default TestMain;
