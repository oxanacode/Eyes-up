import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';

class LessonBgBtn {
  public static createLessonBgBtn(): HTMLElement {
    const bgBtn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'lesson-bg-btn' }]);

    return bgBtn;
  }
}

export default LessonBgBtn;
