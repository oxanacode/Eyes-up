import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import TestState from './test-state';
import ApiService from '../../../scripts/api/api-service';
import CurrentUser from '../../../scripts/user/current-user';
import ParseTesting from '../../../scripts/parsing/parse-testing';
import UserState from '../../../scripts/user/user-state';

import { Tag } from '../../../types/enums';
import { UserTesting } from '../../../types/interfaces';

class TestResult {
  public static updateLastResult(): void {
    const lastResult: UserTesting = { lastSpeed: TestState.speed, lastAccuracy: TestState.accuracy };

    const userData = new CurrentUser(
      TestState.user.login,
      TestState.user.password,
      TestState.user.avatar,
      ParseTesting.setTesting(lastResult),
      TestState.user.lessonsEn,
      TestState.user.lessonsRu,
      TestState.user.typingAdventure,
      TestState.user.typingHero,
      TestState.user.badges
    );

    ApiService.updateUser(TestState.user._id, userData);
  }

  public static createTestResult(): HTMLElement {
    const ribbon = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'test-result-ribbon' }]);
    const text = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'result-ribbon-text' }]);
    const speed = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'result-ribbon-speed' }]);
    const accuracy = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'result-ribbon-accuracy' }]);

    text.textContent = translation.testResultText[State.currentLang];
    speed.textContent = `${translation.testWpmText[State.currentLang]} ${TestState.speed}${
      translation.testWpmSub[State.currentLang]
    },`;
    accuracy.textContent = `${translation.testAccuracyText[State.currentLang]} ${Math.floor(TestState.accuracy)}%`;
    ribbon.append(text, speed, accuracy);

    return ribbon;
  }

  public static showTestResult(): void {
    if (UserState.checkIfUserAuthorised()) TestResult.updateLastResult();

    TestState.page.append(TestResult.createTestResult());
  }
}

export default TestResult;
