import CreateElement from '../../elements/create-element';
import TestState from './test-state';

import { Tag } from '../../../types/enums';

class TestInput {
  public static createTestInput(spanArray: Array<HTMLElement>): HTMLElement {
    const testInput = CreateElement.createElement(Tag.input, [
      { name: 'class', value: 'test-input' },
      { name: 'autocomplete', value: 'off' },
    ]);

    document.addEventListener('keydown', () => {
      testInput.focus();
    });
    testInput.addEventListener('input', () => {
      const inputChar = (<HTMLInputElement>testInput).value.split('')[
        TestState.charIndex
      ];
      if (inputChar == null) {
        TestState.charIndex -= 1;
        spanArray[TestState.charIndex].classList.remove(
          'correct',
          'incorrect',
          'rep'
        );

        return;
      }
      if (spanArray[TestState.charIndex].textContent === inputChar) {
        if (TestState.mistakes.includes(TestState.charIndex)) {
          TestState.mistakes = TestState.mistakes.filter(
            (m) => m !== TestState.charIndex
          );
          spanArray[TestState.charIndex].classList.add('correction');
          console.log(TestState.mistakes);
        } else {
          spanArray[TestState.charIndex].classList.add('correct');
        }
      } else {
        if (!TestState.mistakes.includes(TestState.charIndex))
          TestState.mistakes.push(TestState.charIndex);
        spanArray[TestState.charIndex].classList.add('incorrect');
        console.log(TestState.mistakes);
      }
      TestState.charIndex += 1;
    });

    return testInput;
  }
}

export default TestInput;
