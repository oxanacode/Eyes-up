import CreateElement from '../../elements/create-element';
import TestInteraction from './test-typing';

import { Tag } from '../../../types/enums';
import { RenderHandler } from '../../../types/types';

class TestText {
  public static createTestText(text: string, render: RenderHandler): HTMLElement {
    const testTextWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-text-wrapper' }]);
    const spanArray: Array<HTMLElement> = [];
    const testText = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-text' }]);
    const SpansWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-spans-wrapper' }]);

    text.split('').forEach((char) => {
      const charSpan = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'char' }]);
      charSpan.textContent = char;
      spanArray.push(charSpan);
      SpansWrapper.append(charSpan);
    });

    const testInput = TestInteraction.createTestInteraction(spanArray, SpansWrapper, render);

    document.addEventListener('keydown', () => {
      testInput.focus();
    });

    testText.append(SpansWrapper);
    testTextWrapper.append(testInput, testText);

    return testTextWrapper;
  }
}

export default TestText;
