import CreateElement from '../../../elements/create-element';
import LessonState from '../lesson-state';
import State from '../../../../scripts/state/state';
import ManageState from '../../../../scripts/state/manage-state';
import ActiveOption from './active-option';
import RowsPosition from '../rows-position';

import { LessonFontSize, Tag } from '../../../../types/enums';

class FontSizeOption {
  public static create(className: LessonFontSize): HTMLElement {
    const option = CreateElement.createElement(Tag.btn, [{ name: 'class', value: className }]);

    if (className === State.currentLessonFontSize) {
      option.classList.add('active-font-size-option');
      ActiveOption.fontSize = option;
    }

    option.addEventListener('click', () => {
      if (ActiveOption.fontSize) ActiveOption.fontSize.classList.remove('active-font-size-option');

      ActiveOption.fontSize = option;
      option.classList.add('active-font-size-option');
      LessonState.contentWrapper.classList.remove(`lesson-${State.currentLessonFontSize}`);
      LessonState.contentWrapper.classList.add(`lesson-${className}`);
      State.currentLessonFontSize = className;

      if (LessonState.contentWrapper.style.visibility !== 'hidden') RowsPosition.check();

      ManageState.saveState();
    });

    return option;
  }
}

export default FontSizeOption;
