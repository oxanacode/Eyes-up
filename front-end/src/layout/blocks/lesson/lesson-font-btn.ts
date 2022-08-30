import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';

class LessonFontBtn {
  public static createLessonFontBtn(): HTMLElement {
    const fontBtn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'lesson-font-btn' }]);

    return fontBtn;
  }
}

export default LessonFontBtn;
