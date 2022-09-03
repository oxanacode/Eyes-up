import { LessonLineHeight } from '../../../types/enums';
import { Lesson, User } from '../../../types/interfaces';

class LessonState {
  public static user: User;

  public static lessonData: Lesson;

  public static lessonsNumber = 0;

  public static lessonChars: Array<HTMLElement>;

  public static page: HTMLElement;

  public static audio: HTMLAudioElement;

  public static charsWrapper: HTMLElement;

  public static contentWrapper: HTMLElement;

  public static keyboard: HTMLElement;

  public static ribbon: HTMLElement;

  public static mistakesCount: HTMLElement;

  public static correctionsCount: HTMLElement;

  public static wpmCount: HTMLElement;

  public static accuracyCount: HTMLElement;

  public static speed: number;

  public static accuracy: number;

  public static inputIndex = 0;

  public static mistakes: Array<number> = [];

  public static historyMistakes: Array<number> = [];

  public static typing = false;

  public static startTime: Date;

  public static checkTime = 0;

  public static typedChars = 0;

  public static lineHeight = LessonLineHeight.normal;

  public static clearState() {
    LessonState.lessonsNumber = 0;
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
