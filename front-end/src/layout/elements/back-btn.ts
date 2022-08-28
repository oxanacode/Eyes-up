import CreateElement from './create-element';
import translation from '../../data/translation';
import State from '../../scripts/state/state';
import SwitchPage from '../../scripts/layout/switch-page';
import TestTimer from '../blocks/testing/test-timer';
import TestState from '../blocks/testing/test-state';

import { Page, Tag } from '../../types/enums';
import { RenderHandler } from '../../types/types';

class BackBtn {
  public static createBackBtn(page: Page, render: RenderHandler): HTMLElement {
    const button = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'back-btn' }]);

    button.textContent = translation.backBtn[State.currentLang];

    button.addEventListener('click', () => {
      if (page === Page.layout) {
        TestState.clearState();
        TestTimer.stopTimer = true;
      }
      SwitchPage.applyPage(page, render);
    });

    return button;
  }
}

export default BackBtn;
