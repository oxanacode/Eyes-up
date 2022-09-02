import CreateElement from '../../../elements/create-element';
import LessonState from '../lesson-state';
import State from '../../../../scripts/state/state';
import ManageState from '../../../../scripts/state/manage-state';

import { LessonBg, Tag } from '../../../../types/enums';
import ActiveOption from './active-option';

class BgOption {
  public static createBgOption(className: LessonBg): HTMLElement {
    const option = CreateElement.createElement(Tag.btn, [{ name: 'class', value: className }]);

    if (className === State.currentLessonBg) {
      option.classList.add('active-option');
      ActiveOption.bg = option;
    }

    option.addEventListener('click', () => {
      if (ActiveOption.bg) ActiveOption.bg.classList.remove('active-option');
      ActiveOption.bg = option;
      option.classList.add('active-option');
      LessonState.page.classList.remove(`lesson-${State.currentLessonBg}`);
      LessonState.page.classList.add(`lesson-${className}`);
      State.currentLessonBg = className;
      ManageState.saveState();
    });

    return option;
  }
}

export default BgOption;
