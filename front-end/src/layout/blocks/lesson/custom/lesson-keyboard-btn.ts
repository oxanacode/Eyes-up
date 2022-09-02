import CreateElement from '../../../elements/create-element';

import { Tag } from '../../../../types/enums';

class LessonKeyboardBtn {
  public static createLessonKeyboardBtn(): HTMLElement {
    const keyboardBtn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'lesson-keyboard-btn' }]);

    return keyboardBtn;
  }
}

export default LessonKeyboardBtn;
