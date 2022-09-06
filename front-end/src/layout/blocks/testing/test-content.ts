import CreateElement from '../../elements/create-element';
import TestState from './test-state';

import { Tag } from '../../../types/enums';

class TestContent {
  public static createTestContent(text: string): HTMLElement {
    const testTextWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-text-wrapper' }]);
    const spanArray: Array<HTMLElement> = [];
    const spansWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-spans-wrapper' }]);

    text.split('').forEach((char) => {
      const charSpan = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'char' }]);
      charSpan.textContent = char;
      spanArray.push(charSpan);
      spansWrapper.append(charSpan);
    });

    testTextWrapper.append(spansWrapper);
    TestState.testChars = spanArray;
    TestState.charsWrapper = spansWrapper;
    TestState.contentWrapper = testTextWrapper;

    return testTextWrapper;
  }
}

export default TestContent;
