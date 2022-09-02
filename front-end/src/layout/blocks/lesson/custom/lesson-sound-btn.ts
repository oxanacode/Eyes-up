import CreateElement from '../../../elements/create-element';

import { Tag } from '../../../../types/enums';

class LessonSoundBtn {
  public static createLessonSoundBtn(): HTMLElement {
    const soundBtn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'lesson-sound-btn' }]);

    return soundBtn;
  }
}

export default LessonSoundBtn;
