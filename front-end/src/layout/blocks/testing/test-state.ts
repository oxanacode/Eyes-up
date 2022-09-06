import { Lang, LessonLineHeight } from '../../../types/enums';

class TestState {
  public static lang = Lang.en;

  public static inputIndex = 0;

  public static testChars: Array<HTMLElement>;

  public static page: HTMLElement;

  public static charsWrapper: HTMLElement;

  public static contentWrapper: HTMLElement;

  public static mistakesCount: HTMLElement;

  public static ribbon: HTMLElement;

  public static timeCount: HTMLElement;

  public static correctionsCount: HTMLElement;

  public static wpmCount: HTMLElement;

  public static accuracyCount: HTMLElement;

  public static speed: number;

  public static accuracy: number;

  public static mistakes: Array<number> = [];

  public static historyMistakes: Array<number> = [];

  public static typing = false;

  public static startTime: Date;

  public static checkTime = 0;

  public static typedChars = 0;

  public static lineHeight = LessonLineHeight.normal;

  public static clearState() {
    TestState.inputIndex = 0;
    TestState.mistakes = [];
    TestState.historyMistakes = [];
    TestState.typing = false;
    TestState.checkTime = 0;
    TestState.typedChars = 0;
  }
}

export default TestState;
