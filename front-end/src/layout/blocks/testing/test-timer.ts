import TestState from './test-state';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import TestResult from './test-result';

import { Lang } from '../../../types/enums';

class TestTimer {
  public static minute = 60;

  public static stopTimer = false;

  public static getTime() {
    const currentTime = new Date().valueOf();
    const startTime = TestState.startTime.valueOf();

    return (currentTime - startTime) / 1000;
  }

  public static startTimer(): void {
    TestState.startTime = new Date();

    const refreshTime = setInterval(() => {
      if (TestTimer.stopTimer) clearInterval(refreshTime);
      else TestTimer.getWpm();

      TestState.checkTime = TestTimer.getTime();

      const leftTime = +(TestState.timeCount.textContent as string);

      if (leftTime) TestState.timeCount.textContent = `${leftTime - 1}`;

      if (TestState.checkTime >= TestTimer.minute) {
        TestTimer.stopTimer = true;
        TestResult.showTestResult();
      }
    }, 1000);
  }

  public static getWpm() {
    const AVERAGE_WORD_LENGTH = TestState.lang === Lang.en ? 6 : 8;
    const speed = Math.floor(((TestState.inputIndex / AVERAGE_WORD_LENGTH) * TestTimer.minute) / TestTimer.getTime());

    TestState.speed = speed || 0;
    TestState.wpmCount.textContent = `${TestState.speed} ${translation.testWpmSub[State.currentLang]}`;
  }
}

export default TestTimer;
