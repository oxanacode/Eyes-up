import CreateElement from '../../elements/create-element';
import SwitchPage from '../../../scripts/layout/switch-page';
import TestState from './test-state';
import TestTimer from './test-timer';

import { RenderHandler } from '../../../types/types';
import { Tag, Page } from '../../../types/enums';

class TestRestartBtn {
  public static createTestRestartBtn(render: RenderHandler): HTMLElement {
    const button = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'test-restart' }]);

    button.addEventListener('click', () => {
      TestState.clearState();
      TestTimer.stopTimer = true;
      SwitchPage.applyPage(Page.test, render);
    });

    return button;
  }
}

export default TestRestartBtn;
