import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';

import { Tag } from '../../../types/enums';
import State from '../../../scripts/state/state';
import LessonState from './lesson-state';

class LessonStats {
  public static createLessonStats(): HTMLElement {
    const lessonStats = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-stats' }]);
    const mistakesWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-mistakes-wrapper' }]);
    const mistakes = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'test-mistakes' }]);
    const mistakesCount = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'test-mistakes-count' }]);
    const correctionsWrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'test-corrections-wrapper' },
    ]);
    const corrections = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'test-corrections' }]);
    const correctionsCount = CreateElement.createElement(Tag.span, [
      { name: 'class', value: 'test-corrections-count' },
    ]);
    const wpmWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-wpm-wrapper' }]);
    const wpm = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'lesson-wpm' }]);
    const wpmCount = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'lesson-wpm-count' }]);
    const accuracyWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-accuracy-wrapper' }]);
    const accuracy = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'lesson-accuracy' }]);
    const accuracyCount = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'lesson-accuracy-count' }]);

    LessonState.mistakesCount = mistakesCount;
    LessonState.correctionsCount = correctionsCount;
    LessonState.wpmCount = wpmCount;
    LessonState.accuracyCount = accuracyCount;
    corrections.textContent = translation.testCorrectionsText[State.currentLang];
    mistakes.textContent = translation.testMistakesText[State.currentLang];
    wpm.textContent = translation.testWpmText[State.currentLang];
    accuracy.textContent = translation.testAccuracyText[State.currentLang];
    mistakesCount.textContent = '0';
    correctionsCount.textContent = '0';
    wpmCount.textContent = '0';
    accuracyCount.textContent = '0';
    mistakesWrapper.append(mistakes, mistakesCount);
    correctionsWrapper.append(corrections, correctionsCount);
    wpmWrapper.append(wpm, wpmCount);
    accuracyWrapper.append(accuracy, accuracyCount);
    lessonStats.append(mistakesWrapper, correctionsWrapper, wpmWrapper, accuracyWrapper);

    return lessonStats;
  }
}

export default LessonStats;
