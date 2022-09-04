import CreateElement from '../../../elements/create-element';
import State from '../../../../scripts/state/state';
import ManageState from '../../../../scripts/state/manage-state';
import ActiveOption from './active-option';

import { LessonSound, Tag } from '../../../../types/enums';

class SoundOption {
  public static create(className: LessonSound): HTMLElement {
    const option = CreateElement.createElement(Tag.btn, [{ name: 'class', value: className }]);

    if (className === State.currentLessonSound) {
      option.classList.add('active-sound-option');
      ActiveOption.sound = option;
    }

    option.addEventListener('click', () => {
      if (ActiveOption.sound) ActiveOption.sound.classList.remove('active-sound-option');

      ActiveOption.sound = option;
      option.classList.add('active-sound-option');
      State.currentLessonSound = className;
      ManageState.saveState();
    });

    return option;
  }
}

export default SoundOption;
