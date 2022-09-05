import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import TestState from './test-state';

import { Tag } from '../../../types/enums';

class TestResult {
  public static visible = false;

  public static createTestResult(): HTMLElement {
    const ribbon = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-result-ribbon' }]);
    const text = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'result-ribbon-text' }]);
    const speed = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'result-ribbon-speed' }]);
    const accuracy = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'result-ribbon-accuracy' }]);

    text.textContent = translation.testResultText[State.currentLang];
    speed.textContent = `${translation.testWpmText[State.currentLang]} ${TestState.speed} ${
      translation.testWpmSub[State.currentLang]
    }`;
    accuracy.textContent = `${translation.testAccuracyText[State.currentLang]} ${Math.floor(TestState.accuracy)} %`;
    ribbon.append(text, speed, accuracy);

    return ribbon;
  }

  public static showTestResult(): void {
    if (TestResult.visible) return;

    TestResult.visible = true;
    TestState.page.append(TestResult.createTestResult());
  }
}

export default TestResult;
