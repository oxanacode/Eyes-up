import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import LessonState from './lesson-state';
import RowsPosition from './rows-position';
import LessonTimer from './lesson-timer';

import { Tag } from '../../../types/enums';
import LessonKeyboard from './lesson-keyboard';

class LessonInput {
  public static checkMatch(inputChar: string): void {
    if (LessonState.lessonChars[LessonState.inputIndex].textContent === inputChar) {
      if (LessonState.historyMistakes.includes(LessonState.inputIndex)) {
        LessonState.lessonChars[LessonState.inputIndex].classList.add('correction');
        const index = LessonState.mistakes.indexOf(LessonState.inputIndex);

        if (index > -1) LessonState.mistakes.splice(index, 1);
      } else {
        LessonState.lessonChars[LessonState.inputIndex].classList.add('correct');
      }
    } else {
      if (!LessonState.mistakes.includes(LessonState.inputIndex)) LessonState.mistakes.push(LessonState.inputIndex);

      if (!LessonState.historyMistakes.includes(LessonState.inputIndex))
        LessonState.historyMistakes.push(LessonState.inputIndex);

      LessonState.lessonChars[LessonState.inputIndex].classList.add('incorrect');
    }
  }

  public static getCorrections(): number {
    return LessonState.historyMistakes.length - LessonState.mistakes.length;
  }

  public static getAccuracy(): number {
    const finalCorrectChars = LessonState.typedChars + 1 - LessonState.mistakes.length;
    const correctedChars = LessonState.historyMistakes.length - LessonState.mistakes.length;

    return ((finalCorrectChars - correctedChars / 2) / (LessonState.typedChars + 1)) * 100;
  }

  public static hideRibbon(): void {
    LessonState.ribbon.style.top = '-5rem';
  }

  public static highlightKey(index: number): void {
    if (index < LessonState.lessonChars.length) {
      let char = <string>LessonState.lessonChars[index].textContent;

      if (char === ' ') {
        LessonKeyboard.space.classList.add('current-char');
      } else {
        if (char === char.toLocaleUpperCase() && char.match(/[a-zA-Zа-яА-Я]/))
          LessonKeyboard.shift.classList.add('current-char');

        char = char.toLocaleLowerCase();
        LessonKeyboard.virtualKeys[char].classList.add('current-char');
      }
    }
  }

  public static removeKeyHighlight(index: number): void {
    if (index < LessonState.lessonChars.length) {
      let char = <string>LessonState.lessonChars[index].textContent;

      if (char === ' ') {
        LessonKeyboard.space.classList.remove('current-char');
      } else {
        if (char === char.toLocaleUpperCase() && char.match(/[a-zA-Zа-яА-Я]/))
          LessonKeyboard.shift.classList.remove('current-char');

        char = char.toLocaleLowerCase();
        LessonKeyboard.virtualKeys[char].classList.remove('current-char');
      }
    }
  }

  public static createLessonInput(): HTMLElement {
    const testInput = CreateElement.createElement(Tag.input, [
      { name: 'class', value: 'lesson-input' },
      { name: 'autocomplete', value: 'off' },
    ]);
    LessonState.lessonChars[0].classList.add('active-char');
    LessonInput.highlightKey(0);

    testInput.addEventListener('input', () => {
      if (LessonState.inputIndex < LessonState.lessonChars.length)
        LessonState.lessonChars[LessonState.inputIndex].classList.remove('active-char');

      LessonInput.removeKeyHighlight(LessonState.inputIndex);

      if (LessonState.inputIndex >= LessonState.lessonChars.length) return;

      const inputChar = (<HTMLInputElement>testInput).value.split('')[LessonState.inputIndex];

      if (inputChar) LessonInput.highlightKey(LessonState.inputIndex + 1);

      if (!LessonState.inputIndex) LessonInput.hideRibbon();

      RowsPosition.adjust();

      LessonState.typedChars =
        LessonState.typedChars > LessonState.inputIndex ? LessonState.typedChars : LessonState.inputIndex;

      if (!LessonState.typing) {
        LessonTimer.stopTimer = false;
        LessonState.typing = true;
        LessonTimer.startTimer();
      }

      if (inputChar == null) {
        if (LessonState.inputIndex) LessonState.inputIndex -= 1;
        LessonInput.highlightKey(LessonState.inputIndex);
        LessonState.lessonChars[LessonState.inputIndex].classList.remove('correct', 'incorrect', 'correction');
        LessonState.lessonChars[LessonState.inputIndex].classList.add('active-char');
        return;
      }

      LessonInput.checkMatch(inputChar);

      LessonState.wpmCount.textContent = `${LessonTimer.getWpm()} ${translation.testWpmSub[State.currentLang]}`;
      LessonState.correctionsCount.textContent = `${Math.floor(LessonInput.getCorrections())}`;
      LessonState.accuracyCount.textContent = `${Math.floor(LessonInput.getAccuracy())} %`;
      LessonState.mistakesCount.textContent = `${LessonState.mistakes.length}`;

      if (LessonState.inputIndex === LessonState.lessonChars.length - 1) {
        LessonTimer.stopTimer = true;
        // TestResult.showTestResult(wpmCount);
      }

      LessonState.inputIndex += 1;

      if (LessonState.inputIndex < LessonState.lessonChars.length)
        LessonState.lessonChars[LessonState.inputIndex].classList.add('active-char');
    });
    return testInput;
  }
}

export default LessonInput;
