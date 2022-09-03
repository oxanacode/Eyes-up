import CreateElement from '../../../elements/create-element';
import LessonState from '../lesson-state';
import State from '../../../../scripts/state/state';
import ManageState from '../../../../scripts/state/manage-state';
import ActiveOption from './active-option';

import { LessonBg, Tag } from '../../../../types/enums';

class BgOption {
  public static createBgOption(className: LessonBg): HTMLElement {
    const option = CreateElement.createElement(Tag.btn, [{ name: 'class', value: className }]);

    if (className === State.currentLessonBg) {
      option.classList.add('active-bg-option');
      ActiveOption.bg = option;
    }

    option.addEventListener('click', () => {
      if (ActiveOption.bg) ActiveOption.bg.classList.remove('active-bg-option');

      ActiveOption.bg = option;
      option.classList.add('active-bg-option');
      LessonState.page.classList.remove(`lesson-${State.currentLessonBg}`);
      LessonState.page.classList.add(`lesson-${className}`);
      State.currentLessonBg = className;
      ManageState.saveState();
    });

    return option;
  }
}

export default BgOption;
