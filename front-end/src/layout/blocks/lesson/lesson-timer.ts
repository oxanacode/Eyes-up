import State from '../../../scripts/state/state';
import LessonState from './lesson-state';
import translation from '../../../data/translation';

import { Layout } from '../../../types/enums';

class LessonTimer {
  public static stopTimer = false;

  public static getTime() {
    const currentTime = new Date().valueOf();
    const startTime = LessonState.startTime.valueOf();

    return (currentTime - startTime) / 1000;
  }

  public static startTimer(): void {
    LessonState.startTime = new Date();

    const refreshTime = setInterval(() => {
      if (LessonTimer.stopTimer) clearInterval(refreshTime);
      else LessonTimer.getWpm();

      LessonState.checkTime = LessonTimer.getTime();
    }, 500);
  }

  public static getWpm() {
    const MINUTE = 60;
    const AVERAGE_WORD_LENGTH = State.currentLayout === Layout.en ? 6 : 8;
    const speed = Math.floor(((LessonState.inputIndex / AVERAGE_WORD_LENGTH) * MINUTE) / LessonTimer.getTime());

    LessonState.speed = speed || 0;

    LessonState.wpmCount.textContent = `${LessonState.speed} ${translation.testWpmSub[State.currentLang]}`;
  }
}

export default LessonTimer;
