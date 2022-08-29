import LessonState from './lesson-state';

class RowsPosition {
  public static adjust() {
    const charTop = LessonState.lessonChars[LessonState.inputIndex].getBoundingClientRect().top;
    const charBottom = LessonState.lessonChars[LessonState.inputIndex].getBoundingClientRect().bottom;
    const wrapperTop = LessonState.charsWrapper.getBoundingClientRect().top;
    const frameTop = LessonState.contentWrapper.getBoundingClientRect().top;
    const frameBottom = LessonState.contentWrapper.getBoundingClientRect().bottom;
    const step = LessonState.lineHeight;

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
