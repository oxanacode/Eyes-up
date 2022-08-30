import { Lesson } from '../../../types/interfaces';

class LessonState {
  public static lessonData: Lesson;

  public static lessonChars: Array<HTMLElement>;

  public static charsWrapper: HTMLElement;

  public static contentWrapper: HTMLElement;

  public static ribbon: HTMLElement;

  public static mistakesCount: HTMLElement;

  public static correctionsCount: HTMLElement;

  public static wpmCount: HTMLElement;

  public static accuracyCount: HTMLElement;

  public static inputIndex = 0;

  public static mistakes: Array<number> = [];

  public static historyMistakes: Array<number> = [];

  public static typing = false;

  public static startTime: Date;

  public static checkTime = 0;

  public static typedChars = 0;

  public static lineHeight = 40;

  public static clearState() {
    LessonState.inputIndex = 0;
    LessonState.mistakes = [];
    LessonState.historyMistakes = [];
    LessonState.typing = false;
    LessonState.checkTime = 0;
    LessonState.typedChars = 0;
    LessonState.lineHeight = 40;
  }
}

export default LessonState;
