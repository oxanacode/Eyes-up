import CreateElement from '../../../elements/create-element';
import LessonState from '../lesson-state';
import State from '../../../../scripts/state/state';
import ManageState from '../../../../scripts/state/manage-state';

import { LessonFontFamily, Tag } from '../../../../types/enums';
import ActiveOption from './active-option';

class FontSizeOption {
  public static create(className: LessonFontFamily): HTMLElement {
    const option = CreateElement.createElement(Tag.btn, [{ name: 'class', value: className }]);

    if (className === State.currentLessonFontFamily) {
      option.classList.add('active-option');
      ActiveOption.bg = option;
    }

    option.addEventListener('click', () => {
      if (ActiveOption.bg) ActiveOption.bg.classList.remove('active-option');
      ActiveOption.bg = option;
      option.classList.add('active-option');
      LessonState.page.classList.remove(`lesson-${State.currentLessonFontFamily}`);
      LessonState.page.classList.add(`lesson-${className}`);
      State.currentLessonFontFamily = className;
      ManageState.saveState();
    });

    return option;
  }
}

export default FontSizeOption;
