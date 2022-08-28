import CreateElement from '../../elements/create-element';
import TestState from './test-state';
import TestTimer from './test-timer';

import { Tag } from '../../../types/enums';
import TextPosition from './text-position';
import TestResult from './test-result';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';

class TestInput {
  public static createTestInput(
    spanArray: Array<HTMLElement>,
    spansWrapper: HTMLElement,
    elem: Array<HTMLElement>
  ): HTMLElement {
    const testInput = CreateElement.createElement(Tag.input, [
      { name: 'class', value: 'test-input' },
      { name: 'autocomplete', value: 'off' },
    ]);
    const [ribbon, mistakesCount, correctionsCount, wpmCount, accuracyCount] = elem;
    const MINUTE = 60;
    testInput.addEventListener('input', () => {
      if (TestState.charIndex <= spanArray.length - 1) spanArray[TestState.charIndex].classList.remove('active-char');
      if (TestState.charIndex > spanArray.length - 1) return;
      TextPosition.adjust(spanArray[TestState.charIndex], spansWrapper);
      if (TestState.charIndex === 0) ribbon.style.top = '-5rem';
      TestState.typedChars = TestState.typedChars > TestState.charIndex ? TestState.typedChars : TestState.charIndex;
      const inputChar = (<HTMLInputElement>testInput).value.split('')[TestState.charIndex];
      if (!TestState.Typing) {
        TestTimer.stopTimer = false;
        TestState.Typing = true;
        TestTimer.startTimer();
      }
      if (inputChar == null) {
        if (TestState.charIndex) TestState.charIndex -= 1;
        spanArray[TestState.charIndex].classList.remove('correct', 'incorrect', 'correction');
        return;
      }
      if (spanArray[TestState.charIndex].textContent === inputChar) {
        if (TestState.historyMistakes.includes(TestState.charIndex)) {
          spanArray[TestState.charIndex].classList.add('correction');
          const index = TestState.mistakes.indexOf(TestState.charIndex);
          if (index > -1) TestState.mistakes.splice(index, 1);
        } else {
          spanArray[TestState.charIndex].classList.add('correct');
        }
      } else {
        if (!TestState.mistakes.includes(TestState.charIndex)) TestState.mistakes.push(TestState.charIndex);
        if (!TestState.historyMistakes.includes(TestState.charIndex))
          TestState.historyMistakes.push(TestState.charIndex);
        spanArray[TestState.charIndex].classList.add('incorrect');
      }
      if (spanArray[TestState.charIndex].textContent === ' ' || TestState.charIndex === spanArray.length - 1) {
        TestState.words += 1;
        wpmCount.textContent = `${TestTimer.getWpm()} ${translation.testWpmSub[State.currentLang]}`;
      }
      if (TestState.charIndex === spanArray.length - 1) {
        TestTimer.stopTimer = true;
        TestResult.showTestResult(wpmCount);
      }
      correctionsCount.textContent = `${Math.floor(TestState.getCorrections())}`;
      accuracyCount.textContent = `${Math.floor(TestState.getAccuracy())} %`;
      mistakesCount.textContent = `${TestState.mistakes.length}`;
      TestState.charIndex += 1;
      if (TestState.charIndex <= spanArray.length - 1) spanArray[TestState.charIndex].classList.add('active-char');
      if (TestTimer.getTime() > MINUTE) TestResult.showTestResult(wpmCount);
    });
    return testInput;
  }
}

export default TestInput;
