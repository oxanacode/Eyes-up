import CreateElement from '../../elements/create-element';
import TestState from './test-state';
import TestTimer from './test-timer';
import TextPosition from './text-position';
import TestResult from './test-result';

import { Tag } from '../../../types/enums';

class TestInput {
  public static getCorrections(): number {
    return Math.floor(TestState.historyMistakes.length - TestState.mistakes.length);
  }

  public static getAccuracy(): number {
    const finalCorrectChars = TestState.typedChars + 1 - TestState.mistakes.length;
    const correctedChars = TestState.historyMistakes.length - TestState.mistakes.length;
    const accuracy = Math.floor(((finalCorrectChars - correctedChars / 2) / (TestState.typedChars + 1)) * 100);

    TestState.accuracy = accuracy;

    return accuracy;
  }

  public static checkMatch(inputChar: string) {
    if (TestState.testChars[TestState.inputIndex].textContent === inputChar) {
      if (TestState.historyMistakes.includes(TestState.inputIndex)) {
        TestState.testChars[TestState.inputIndex].classList.add('correction');
        const index = TestState.mistakes.indexOf(TestState.inputIndex);

        if (index > -1) TestState.mistakes.splice(index, 1);
      } else {
        TestState.testChars[TestState.inputIndex].classList.add('correct');
      }
    } else {
      if (!TestState.mistakes.includes(TestState.inputIndex)) TestState.mistakes.push(TestState.inputIndex);

      if (!TestState.historyMistakes.includes(TestState.inputIndex))
        TestState.historyMistakes.push(TestState.inputIndex);

      TestState.testChars[TestState.inputIndex].classList.add('incorrect');
    }
  }

  public static createTestInput(): HTMLElement {
    const testInput = CreateElement.createElement(Tag.input, [
      { name: 'class', value: 'test-input' },
      { name: 'autocomplete', value: 'off' },
    ]);
    const MINUTE = 60;

    testInput.addEventListener('input', () => {
      if (TestState.inputIndex <= TestState.testChars.length - 1)
        TestState.testChars[TestState.inputIndex].classList.remove('active-char');

      if (TestState.inputIndex > TestState.testChars.length - 1 || TestState.timeCount.textContent === '0') return;

      TextPosition.adjust();

      if (TestState.inputIndex === 0) TestState.ribbon.style.top = '-5rem';

      TestState.typedChars = TestState.typedChars > TestState.inputIndex ? TestState.typedChars : TestState.inputIndex;

      const inputChar = (<HTMLInputElement>testInput).value.split('')[TestState.inputIndex];

      if (!TestState.typing) {
        TestTimer.stopTimer = false;
        TestState.typing = true;
        TestTimer.startTimer();
      }

      if (inputChar == null) {
        if (TestState.inputIndex) TestState.inputIndex -= 1;

        TestState.testChars[TestState.inputIndex].classList.add('active-char');
        TestState.testChars[TestState.inputIndex].classList.remove('correct', 'incorrect', 'correction');

        return;
      }

      TestInput.checkMatch(inputChar);
      TestState.correctionsCount.textContent = `${Math.floor(TestInput.getCorrections())}`;
      TestState.accuracyCount.textContent = `${Math.floor(TestInput.getAccuracy())} %`;
      TestState.mistakesCount.textContent = `${TestState.mistakes.length}`;

      if (TestState.inputIndex === TestState.testChars.length - 1) {
        TestTimer.stopTimer = true;
        TestResult.showTestResult();
      }

      TestState.inputIndex += 1;

      if (TestState.inputIndex < TestState.testChars.length)
        TestState.testChars[TestState.inputIndex].classList.add('active-char');

      if (TestTimer.getTime() > MINUTE) {
        TestTimer.stopTimer = true;
        TestResult.showTestResult();
      }
    });

    return testInput;
  }
}

export default TestInput;
