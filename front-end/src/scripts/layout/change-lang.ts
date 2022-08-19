import State from '../state/state';

import { Lang } from '../../types/enums';

class ChangeLang {
  public static changeLang(currentLang: Lang, alternativeLang: Lang): void {
    State.currentLang = alternativeLang;
    State.alternativeLang = currentLang;
  }
}

export default ChangeLang;
