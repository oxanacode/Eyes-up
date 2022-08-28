import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import TestInput from './test-input';
import TestRestartBtn from './test-restart-btn';

import { Tag } from '../../../types/enums';
import { RenderHandler } from '../../../types/types';

class TestInteraction {
  public static createTestInteraction(
    spanArray: Array<HTMLElement>,
    spansWrapper: HTMLElement,
    render: RenderHandler
  ): HTMLElement {
    const interaction = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-results' }]);
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
    const ribbon = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-ribbon' }]);
    const testInput = TestInput.createTestInput(spanArray, spansWrapper, [
      ribbon,
      mistakesCount,
      correctionsCount,
      wpmCount,
      accuracyCount,
    ]);

    corrections.textContent = translation.testCorrectionsText[State.currentLang];
    ribbon.textContent = translation.testRibbonText[State.currentLang];
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
    interaction.append(testInput, stats, restart, ribbon);

    document.addEventListener('keydown', () => {
      testInput.focus();
    });

    return interaction;
  }
}

export default TestInteraction;
