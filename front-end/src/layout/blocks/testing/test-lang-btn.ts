import CreateElement from '../../elements/create-element';
import SwitchPage from '../../../scripts/layout/switch-page';
import TestState from './test-state';

import { RenderHandler } from '../../../types/types';
import { Tag, Page, Lang } from '../../../types/enums';

class TestLangBtn {
  public static createTestLangBtn(
    lang: Lang,
    render: RenderHandler
  ): HTMLElement {
    const button = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: 'test-lang-btn' },
    ]);

    if (lang === TestState.lang) {
      button.classList.add('active-test-lang');
    }

    button.textContent = lang;
    button.addEventListener('click', () => {
      TestState.lang = lang;
      SwitchPage.applyPage(Page.test, render);
    });

    return button;
  }
}

export default TestLangBtn;
