import CreateElement from '../../../elements/create-element';
import LessonState from '../lesson-state';
import State from '../../../../scripts/state/state';
import ManageState from '../../../../scripts/state/manage-state';
import ActiveOption from './active-option';

import { LessonFontFamily, Tag } from '../../../../types/enums';

class FontFamilyOption {
  public static create(className: LessonFontFamily): HTMLElement {
    const option = CreateElement.createElement(Tag.btn, [{ name: 'class', value: className }]);

    if (className === State.currentLessonFontFamily) {
      option.classList.add('active-font-family-option');
      ActiveOption.fontFamily = option;
    }

    option.addEventListener('click', () => {
      if (ActiveOption.fontFamily) ActiveOption.fontFamily.classList.remove('active-font-family-option');

      ActiveOption.fontFamily = option;
      option.classList.add('active-font-family-option');
      LessonState.contentWrapper.classList.remove(`lesson-${State.currentLessonFontFamily}`);
      LessonState.contentWrapper.classList.add(`lesson-${className}`);
      State.currentLessonFontFamily = className;
      ManageState.saveState();
    });

    return option;
  }
}

export default FontFamilyOption;
