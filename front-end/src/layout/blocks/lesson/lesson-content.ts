import CreateElement from '../../elements/create-element';
import LessonState from './lesson-state';

import { Tag } from '../../../types/enums';
import State from '../../../scripts/state/state';

class LessonContent {
  public static createLessonContent(): HTMLElement {
    const lessonContent = CreateElement.createElement(Tag.div, [
      { name: 'class', value: `lesson-content lesson-${State.currentLessonFontSize}` },
    ]);
    const charsArray: Array<HTMLElement> = [];
    const charsWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'chars-wrapper' }]);

    LessonState.lessonData.content.split('').forEach((char) => {
      const charSpan = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'lesson-char' }]);
      charSpan.textContent = char;
      charsArray.push(charSpan);
      charsWrapper.append(charSpan);
    });

    lessonContent.append(charsWrapper);
    LessonState.lessonChars = charsArray;
    LessonState.charsWrapper = charsWrapper;
    LessonState.contentWrapper = lessonContent;

    return lessonContent;
  }
}

export default LessonContent;
