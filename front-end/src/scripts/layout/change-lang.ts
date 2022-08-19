import State from '../state/state';

import { Lang } from '../../types/enums';

class ChangeLang {
  public static changeLang(lang: Lang): void {
    if (State.currentLang === lang) return;

    State.currentLang = lang;
  }
}

export default ChangeLang;
