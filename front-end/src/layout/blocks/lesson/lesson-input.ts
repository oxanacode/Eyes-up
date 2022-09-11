import CreateElement from '../../elements/create-element';
import State from '../../../scripts/state/state';
import LessonState from './lesson-state';
import RowsPosition from './rows-position';
import LessonTimer from './lesson-timer';
import LessonKeyboard from './lesson-keyboard';
import LessonResult from './lesson-result';
import matchKeyboard from '../../../data/keyboard-match';

import { Complexity, Layout, LessonSound, Tag } from '../../../types/enums';
import { RenderHandler } from '../../../types/types';

class LessonInput {
  public static charLetter = /[a-zA-Zа-яА-ЯЁё]/;

  public static charRu = /[а-яА-ЯЁё]/;

  public static charEn = /[a-zA-Z]/;

  public static charNum = /\d/;

  public static charSymbols = /[():*%"!?~"#№_+|<>{}^@$&]/;

  public static charShiftRu = /[,;/]/;

  public static charRuSpecial = /[ЁХЪЖЭБЮ]/;

  public static rightShift = /[~!@#$%Ё№ЙЦУКЕФЫВАПЯЧСМИQWERTASDFGZXCVB]/;

  public static rightShiftRu = /[";]/;

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
    return Math.floor(LessonState.historyMistakes.length - LessonState.mistakes.length);
  }

  public static getAccuracy(): number {
    const finalCorrectChars = LessonState.typedChars + 1 - LessonState.mistakes.length;
    const correctedChars = LessonState.historyMistakes.length - LessonState.mistakes.length;
    const accuracy = Math.floor(((finalCorrectChars - correctedChars / 2) / (LessonState.typedChars + 1)) * 100);

    LessonState.accuracy = accuracy;

    return accuracy;
  }

  public static hideRibbon(): void {
    LessonState.ribbon.style.top = '-5rem';
  }

  public static highlightKey(index: number): void {
    if (index < LessonState.lessonChars.length) {
      let char = LessonState.lessonChars[index].textContent as string;

      if (char === ' ') {
        LessonKeyboard.space.classList.add('current-char');
      } else {
        if (
          (char === char.toLocaleUpperCase() && char.match(LessonInput.charLetter)) ||
          (State.currentLayout === Layout.ru && char.match(LessonInput.charShiftRu)) ||
          char.match(LessonInput.charSymbols)
        )
          if (
            char.match(LessonInput.rightShift) ||
            (State.currentLayout === Layout.ru && char.match(LessonInput.rightShiftRu))
          )
            LessonKeyboard.shiftRight.classList.add('current-char');
          else LessonKeyboard.shiftLeft.classList.add('current-char');

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
        if (
          (char === char.toLocaleUpperCase() && char.match(LessonInput.charLetter)) ||
          (State.currentLayout === Layout.ru && char.match(LessonInput.charShiftRu)) ||
          char.match(LessonInput.charSymbols)
        )
          if (
            char.match(LessonInput.rightShift) ||
            (State.currentLayout === Layout.ru && char.match(LessonInput.rightShiftRu))
          )
            LessonKeyboard.shiftRight.classList.remove('current-char');
          else LessonKeyboard.shiftLeft.classList.remove('current-char');

        char = char.toLocaleLowerCase();
        LessonKeyboard.virtualKeys[char].classList.remove('current-char');
      }
    }
  }

  public static turnOnSound(): void {
    if (State.currentLessonSound === LessonSound.silent) return;

    let audio = new Audio(`./assets/audio/${LessonSound.soft}.wav`);

    if (State.currentLessonSound === LessonSound.hard) audio = new Audio(`./assets/audio/${LessonSound.hard}.wav`);

    if (State.currentLessonSound === LessonSound.mech) audio = new Audio(`./assets/audio/${LessonSound.mech}.wav`);

    audio.currentTime = 0;
    audio.play();
  }

  public static addHandsRu(char: string, path: string, pathShift: string, theme: string): void {
    if (char === char.toLocaleLowerCase())
      LessonState.hands.setAttribute('src', `${path}-${matchKeyboard[char.toLocaleLowerCase()]}-${theme}.svg`);
    else if (char === char.toLocaleUpperCase() && !char.match(LessonInput.charRuSpecial))
      LessonState.hands.setAttribute('src', `${pathShift}-${matchKeyboard[char.toLocaleLowerCase()]}-${theme}.svg`);
    else if (char.match(LessonInput.charRuSpecial))
      LessonState.hands.setAttribute('src', `${path}-${matchKeyboard[char]}-${theme}.svg`);
  }

  public static addHands(): void {
    const char = LessonState.lessonChars[LessonState.inputIndex].textContent as string;
    const theme = State.currentTheme;
    const path = './assets/images/hands/hand';
    const pathShift = './assets/images/hands/hand-shift';
    if (char.match(LessonInput.charRu)) LessonInput.addHandsRu(char, path, pathShift, theme);
    else if (char.match(LessonInput.charEn)) {
      if (char === char.toLocaleLowerCase())
        LessonState.hands.setAttribute('src', `${path}-${char.toLocaleLowerCase()}-${theme}.svg`);
      else LessonState.hands.setAttribute('src', `${pathShift}-${char.toLocaleLowerCase()}-${theme}.svg`);
    } else if (char.match(LessonInput.charNum)) LessonState.hands.setAttribute('src', `${path}-${char}-${theme}.svg`);
    else if (char === '`') LessonState.hands.setAttribute('src', `${path}-backquote-${theme}.svg`);
    else if (char === '~') LessonState.hands.setAttribute('src', `${path}-tilda-${theme}.svg`);
    else if (char === `'`) LessonState.hands.setAttribute('src', `${path}-single-quote-${theme}.svg`);
    else if (char === '"')
      if (State.currentLayout === Layout.en) LessonState.hands.setAttribute('src', `${path}-double-quote-${theme}.svg`);
      else LessonState.hands.setAttribute('src', `${pathShift}-2-${theme}.svg`);
    else if (char === `\\`) LessonState.hands.setAttribute('src', `${path}-back-slash-${theme}.svg`);
    else if (char === '|') LessonState.hands.setAttribute('src', `${path}-or-${theme}.svg`);
    else if (char === `-`) LessonState.hands.setAttribute('src', `${path}-dash-${theme}.svg`);
    else if (char === '_') LessonState.hands.setAttribute('src', `${pathShift}-dash-${theme}.svg`);
    else if (char === ',') LessonState.hands.setAttribute('src', `${path}-comma-${theme}.svg`);
    else if (char === '<') LessonState.hands.setAttribute('src', `${pathShift}-comma-${theme}.svg`);
    else if (char === `/`)
      if (State.currentLayout === Layout.en) LessonState.hands.setAttribute('src', `${path}-slash-${theme}.svg`);
      else LessonState.hands.setAttribute('src', `${path}-or-${theme}.svg`);
    else if (char === '=') LessonState.hands.setAttribute('src', `${path}-equality-${theme}.svg`);
    else if (char === '+') LessonState.hands.setAttribute('src', `${pathShift}-equality-${theme}.svg`);
    else if (char === '[') LessonState.hands.setAttribute('src', `${path}-left-bracket-${theme}.svg`);
    else if (char === '{') LessonState.hands.setAttribute('src', `${path}-left-brace-${theme}.svg`);
    else if (char === ']') LessonState.hands.setAttribute('src', `${path}-right-bracket-${theme}.svg`);
    else if (char === '}') LessonState.hands.setAttribute('src', `${path}-right-brace-${theme}.svg`);
    else if (char === ';')
      if (State.currentLayout === Layout.en) LessonState.hands.setAttribute('src', `${path}-semicolon-${theme}.svg`);
      else LessonState.hands.setAttribute('src', `${pathShift}-4-${theme}.svg`);
    else if (char === ':')
      if (State.currentLayout === Layout.en) LessonState.hands.setAttribute('src', `${path}-colon-${theme}.svg`);
      else LessonState.hands.setAttribute('src', `${pathShift}-6-${theme}.svg`);
    else if (char === ' ') LessonState.hands.setAttribute('src', `${path}-space-${theme}.svg`);
    else if (char === '>') LessonState.hands.setAttribute('src', `${pathShift}-dot-${theme}.svg`);
    else if (char === ')') LessonState.hands.setAttribute('src', `${pathShift}-0-${theme}.svg`);
    else if (char === '(') LessonState.hands.setAttribute('src', `${pathShift}-9-${theme}.svg`);
    else if (char === '!') LessonState.hands.setAttribute('src', `${pathShift}-1-${theme}.svg`);
    else if (char === '@') LessonState.hands.setAttribute('src', `${pathShift}-2-${theme}.svg`);
    else if (char === '%') LessonState.hands.setAttribute('src', `${pathShift}-5-${theme}.svg`);
    else if (char === '^') LessonState.hands.setAttribute('src', `${pathShift}-6-${theme}.svg`);
    else if (char === '*') LessonState.hands.setAttribute('src', `${pathShift}-8-${theme}.svg`);
    else if (char === '$') LessonState.hands.setAttribute('src', `${pathShift}-4-${theme}.svg`);
    else if (char === '&') LessonState.hands.setAttribute('src', `${pathShift}-7-${theme}.svg`);
    else if (char === '#' || char === '№') LessonState.hands.setAttribute('src', `${pathShift}-3-${theme}.svg`);
    else if (char === '?')
      if (State.currentLayout === Layout.en) LessonState.hands.setAttribute('src', `${path}-question-${theme}.svg`);
      else LessonState.hands.setAttribute('src', `${pathShift}-7-${theme}.svg`);
    else if (char === '.')
      if (State.currentLayout === Layout.en) LessonState.hands.setAttribute('src', `${path}-dot-${theme}.svg`);
      else LessonState.hands.setAttribute('src', `${path}-slash-${theme}.svg`);
  }

  public static createLessonInput(render: RenderHandler): HTMLElement {
    const testInput = CreateElement.createElement(Tag.input, [
      { name: 'class', value: 'lesson-input' },
      { name: 'autocomplete', value: 'off' },
    ]);
    LessonState.lessonChars[0].classList.add('active-char');
    LessonInput.highlightKey(0);
    LessonInput.addHands();

    testInput.addEventListener('input', () => {
      LessonInput.turnOnSound();
      if (LessonState.inputIndex < LessonState.lessonChars.length)
        LessonState.lessonChars[LessonState.inputIndex].classList.remove('active-char');

      LessonInput.removeKeyHighlight(LessonState.inputIndex);

      if (LessonState.inputIndex >= LessonState.lessonChars.length) return;

      const inputChar = (testInput as HTMLInputElement).value.split('')[LessonState.inputIndex];

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
        LessonInput.addHands();
        LessonState.progress.style.width = `${(LessonState.inputIndex / LessonState.lessonChars.length) * 100}%`;
        return;
      }
      LessonInput.checkMatch(inputChar);
      LessonState.correctionsCount.textContent = `${LessonInput.getCorrections()}`;
      LessonState.accuracyCount.textContent = `${LessonInput.getAccuracy()} %`;
      LessonState.mistakesCount.textContent = `${LessonState.mistakes.length}`;

      if (LessonState.inputIndex === LessonState.lessonChars.length - 1) {
        LessonTimer.stopTimer = true;
        LessonResult.showLessonResult(render);
      }

      LessonState.inputIndex += 1;
      if (LessonState.inputIndex < LessonState.lessonChars.length) {
        LessonInput.addHands();
        LessonState.lessonChars[LessonState.inputIndex].classList.add('active-char');
      }
      LessonState.progress.style.width = `${(LessonState.inputIndex / LessonState.lessonChars.length) * 100}%`;
    });
    return testInput;
  }
}

export default LessonInput;
