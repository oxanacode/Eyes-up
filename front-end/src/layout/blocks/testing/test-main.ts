import CreateElement from '../../elements/create-element';
import ApiService from '../../../scripts/api/api-service';
import BackBtn from '../../elements/back-btn';
import TestLangBtn from './test-lang-btn';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import TestText from './test-text';
import TestState from './test-state';

import { RenderHandler } from '../../../types/types';
import { Tag, Page, Lang } from '../../../types/enums';

class TestMain {
  public static createTestMain(render: RenderHandler): HTMLElement {
    const main = CreateElement.createElement(Tag.main, [{ name: 'class', value: 'test' }]);
    const back = BackBtn.createBackBtn(Page.layout, render);
    const btnsWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-btns' }]);
    const enBtn = TestLangBtn.createTestLangBtn(Lang.en, render);
    const ruBtn = TestLangBtn.createTestLangBtn(Lang.ru, render);
    const testRibbon = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-ribbon' }]);

    testRibbon.textContent = translation.testRibbonText[State.currentLang];
    btnsWrapper.append(enBtn, ruBtn);
    main.append(back, btnsWrapper);

    ApiService.getTest(TestState.lang).then((data) => {
      main.append(TestText.createTestText(data[0].text));
    });

    return main;
  }
}

export default TestMain;
