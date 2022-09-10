import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import ApiService from '../../../scripts/api/api-service';
import ParseTesting from '../../../scripts/parsing/parse-testing';

import { Data, Tag } from '../../../types/enums';
import TestState from './test-state';

class TestLastResult {
  public static visible = false;

  public static createTestLastResult(): HTMLElement {
    const lastResult = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-result-last' }]);
    const text = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'result-last-text' }]);
    const speed = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'result-last-speed' }]);
    const accuracy = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'result-last-accuracy' }]);
    let speedCount = 0;
    let accuracyCount = 0;

    ApiService.getUser(State.currentUser.login).then((user) => {
      TestState.user = user;

      if (user.testing !== Data.noData) {
        const testing = ParseTesting.getTesting(user.testing);

        speedCount = testing.lastSpeed;
        accuracyCount = testing.lastAccuracy;
      }

      speed.textContent = `${translation.testWpmText[State.currentLang]} ${speedCount}${
        translation.testWpmSub[State.currentLang]
      },`;
      accuracy.textContent = `${translation.testAccuracyText[State.currentLang]} ${accuracyCount}%`;
    });

    text.textContent = translation.testLastResultText[State.currentLang];
    lastResult.append(text, speed, accuracy);

    return lastResult;
  }
}

export default TestLastResult;
