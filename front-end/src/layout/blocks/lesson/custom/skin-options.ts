import CreateElement from '../../../elements/create-element';
import LessonState from '../lesson-state';
import State from '../../../../scripts/state/state';
import ManageState from '../../../../scripts/state/manage-state';
import ActiveOption from './active-option';

import { LessonSkin, Tag } from '../../../../types/enums';

class SkinOption {
  public static createSkinOption(className: LessonSkin): HTMLElement {
    const option = CreateElement.createElement(Tag.btn, [{ name: 'class', value: className }]);

    if (className === State.currentLessonSkin) {
      option.classList.add('active-skin-option');
      ActiveOption.skin = option;
    }

    option.addEventListener('click', () => {
      if (ActiveOption.skin) ActiveOption.skin.classList.remove('active-skin-option');

      ActiveOption.skin = option;
      option.classList.add('active-skin-option');
      LessonState.keyboard.classList.remove(`lesson-${State.currentLessonSkin}`);
      LessonState.keyboard.classList.add(`lesson-${className}`);
      State.currentLessonSkin = className;
      ManageState.saveState();
    });

    return option;
  }
}

export default SkinOption;
