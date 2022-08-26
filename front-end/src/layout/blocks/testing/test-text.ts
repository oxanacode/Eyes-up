import CreateElement from '../../elements/create-element';
import TestInput from './test-input';

import { Tag } from '../../../types/enums';

class TestText {
  public static createTestText(text: string): HTMLElement {
    const testTextWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-text-wrapper' }]);
    const spanArray: Array<HTMLElement> = [];
    const testText = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-text' }]);

    text.split('').forEach((char) => {
      const charSpan = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'char' }]);
      charSpan.textContent = char;
      spanArray.push(charSpan);
      testText.append(charSpan);
    });

    const testInput = TestInput.createTestInput(spanArray);

    document.addEventListener('keydown', () => {
      testInput.focus();
    });

    testTextWrapper.append(testText, testInput);

    return testTextWrapper;
  }
}

export default TestText;
