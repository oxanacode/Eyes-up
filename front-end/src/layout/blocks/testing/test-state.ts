import { Lang } from '../../../types/enums';

class TestState {
  public static lang = Lang.en;

  public static charIndex = 0;

  public static mistakes: Array<number> = [];

  public static historyMistakes: Array<number> = [];

  public static Typing = false;

  public static startTime: Date;

  public static checkTime = 0;

  public static words = 0;

  public static typedChars = 0;

  public static getCorrections(): number {
    return TestState.historyMistakes.length - TestState.mistakes.length;
  }

  public static getAccuracy(): number {
    const finalCorrectChars = TestState.typedChars + 1 - TestState.mistakes.length;
    const correctedChars = TestState.historyMistakes.length - TestState.mistakes.length;

    return ((finalCorrectChars - correctedChars / 2) / (TestState.typedChars + 1)) * 100;
  }

  public static clearState() {
    TestState.charIndex = 0;
    TestState.mistakes = [];
    TestState.historyMistakes = [];
    TestState.Typing = false;
    TestState.checkTime = 0;
    TestState.words = 0;
    TestState.typedChars = 0;
  }
}

export default TestState;
