import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import TestRestartBtn from './test-restart-btn';
import TestState from './test-state';

import { Tag } from '../../../types/enums';
import { RenderHandler } from '../../../types/types';

class TestTop {
  public static createTestTop(render: RenderHandler): HTMLElement {
    const testTop = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-top' }]);
    const stats = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-stats' }]);
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
    const wpmWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-wpm-wrapper' }]);
    const wpm = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'test-wpm' }]);
    const wpmCount = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'test-wpm-count' }]);
    const accuracyWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-accuracy-wrapper' }]);
    const accuracy = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'test-accuracy' }]);
    const accuracyCount = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'test-accuracy-count' }]);
    const restart = TestRestartBtn.createTestRestartBtn(render);

    TestState.mistakesCount = mistakesCount;
    TestState.correctionsCount = correctionsCount;
    TestState.wpmCount = wpmCount;
    TestState.accuracyCount = accuracyCount;
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
    stats.append(mistakesWrapper, correctionsWrapper, wpmWrapper, accuracyWrapper);
    testTop.append(stats, restart);

    return testTop;
  }
}

export default TestTop;
