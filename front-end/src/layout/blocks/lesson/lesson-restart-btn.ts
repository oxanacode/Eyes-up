import CreateElement from '../../elements/create-element';
import SwitchPage from '../../../scripts/layout/switch-page';
import LessonState from './lesson-state';
import LessonTimer from './lesson-timer';

import { RenderHandler } from '../../../types/types';
import { Tag, Page } from '../../../types/enums';

class LessonRestartBtn {
  public static createRestartBtn(render: RenderHandler): HTMLElement {
    const button = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'lesson-restart-btn' }]);

    button.addEventListener('click', () => {
      LessonState.clearState();
      LessonTimer.stopTimer = true;
      SwitchPage.applyPage(Page.lesson, render);
    });

    return button;
  }
}

export default LessonRestartBtn;
