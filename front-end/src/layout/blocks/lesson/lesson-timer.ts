import State from '../../../scripts/state/state';
import { Layout } from '../../../types/enums';
import LessonState from './lesson-state';

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

      LessonState.checkTime = LessonTimer.getTime();
    }, 100);
  }

  public static getWpm() {
    const MINUTE = 60;
    const AVERAGE_WORD_LENGTH = State.currentLayout === Layout.en ? 6 : 8;

    return Math.floor(((LessonState.inputIndex / AVERAGE_WORD_LENGTH) * MINUTE) / LessonTimer.getTime());
  }
}

export default LessonTimer;
