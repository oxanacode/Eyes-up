import TestState from './test-state';

class TextPosition {
  public static adjust() {
    const charTop = TestState.testChars[TestState.inputIndex].getBoundingClientRect().top;
    const charBottom = TestState.testChars[TestState.inputIndex].getBoundingClientRect().bottom;
    const wrapperTop = TestState.charsWrapper.getBoundingClientRect().top;
    const frameTop = TestState.contentWrapper.getBoundingClientRect().top;
    const frameBottom = TestState.contentWrapper.getBoundingClientRect().bottom;
    const step = TestState.lineHeight;

    if (charBottom > frameBottom - step) {
      const margin = parseInt(TestState.charsWrapper.style.marginTop || '0px', 10);

      TestState.charsWrapper.style.marginTop = `${margin - step}px`;
    }

    if (charTop < frameTop + step && wrapperTop < frameTop) {
      const margin = parseInt(TestState.charsWrapper.style.marginTop || '0px', 10);

      TestState.charsWrapper.style.marginTop = `${margin + step}px`;
    }
  }
}

export default TextPosition;
