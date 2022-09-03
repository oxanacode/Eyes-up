import State from '../../../scripts/state/state';
import { LessonFontSize, LessonLineHeight } from '../../../types/enums';
import LessonState from './lesson-state';

class RowsPosition {
  public static getStep(): number {
    let step: number;

    if (State.currentLessonFontSize === LessonFontSize.normal) step = LessonLineHeight.normal;
    else if (State.currentLessonFontSize === LessonFontSize.small) step = LessonLineHeight.small;
    else step = LessonLineHeight.big;

    return step;
  }

  public static check() {
    const charTop = LessonState.lessonChars[LessonState.inputIndex].getBoundingClientRect().top;
    const charBottom = LessonState.lessonChars[LessonState.inputIndex].getBoundingClientRect().bottom;
    const frameTop = LessonState.contentWrapper.getBoundingClientRect().top;
    const frameBottom = LessonState.contentWrapper.getBoundingClientRect().bottom;
    const step = RowsPosition.getStep();

    if (charBottom > frameBottom) {
      const margin = parseInt(LessonState.charsWrapper.style.marginTop || '0px', 10);
      const difference = charBottom - frameBottom;

      LessonState.charsWrapper.style.marginTop = `${margin - difference - 2 * step}px`;
    }

    if (charTop < frameTop) {
      const margin = parseInt(LessonState.charsWrapper.style.marginTop || '0px', 10);
      const difference = frameTop - charTop;

      LessonState.charsWrapper.style.marginTop = `${margin + difference + step}px`;
    }
  }

  public static adjust() {
    const charTop = LessonState.lessonChars[LessonState.inputIndex].getBoundingClientRect().top;
    const charBottom = LessonState.lessonChars[LessonState.inputIndex].getBoundingClientRect().bottom;
    const wrapperTop = LessonState.charsWrapper.getBoundingClientRect().top;
    const frameTop = LessonState.contentWrapper.getBoundingClientRect().top;
    const frameBottom = LessonState.contentWrapper.getBoundingClientRect().bottom;
    const step = RowsPosition.getStep();

    if (charBottom > frameBottom - step) {
      const margin = parseInt(LessonState.charsWrapper.style.marginTop || '0px', 10);

      LessonState.charsWrapper.style.marginTop = `${margin - step}px`;
    }

    if (charTop < frameTop + step && wrapperTop < frameTop) {
      const margin = parseInt(LessonState.charsWrapper.style.marginTop || '0px', 10);

      LessonState.charsWrapper.style.marginTop = `${margin + step}px`;
    }
  }
}

export default RowsPosition;
