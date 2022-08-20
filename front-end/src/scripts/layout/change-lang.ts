import State from '../state/state';

import { Lang } from '../../types/enums';

class ChangeLang {
  public static changeLang(): void {
    State.currentLang = Lang.en ? Lang.ru : Lang.en;
  }
}

export default ChangeLang;
