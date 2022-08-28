import TestState from './test-state';

class TestTimer {
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
      TestState.checkTime = TestTimer.getTime();
    }, 100);
  }

  public static getWpm() {
    const MINUTE = 60;

    return Math.floor((TestState.words * MINUTE) / TestTimer.getTime());
  }
}

export default TestTimer;
