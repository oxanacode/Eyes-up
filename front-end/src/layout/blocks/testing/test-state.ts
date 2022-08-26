import { Lang } from '../../../types/enums';

class TestState {
  public static lang = Lang.en;

  public static charIndex = 0;

  public static mistakes: Array<number> = [];
}

export default TestState;
