import ChangeLang from '../../../scripts/layout/change-lang';
import ManageState from '../../../scripts/state/manage-state';
import SmallBtn from '../../elements/small-btn';

import { Lang } from '../../../types/enums';

class LangBtn {
  public static createLangBtn(
    currentLang: Lang,
    alternativeLang: Lang
  ): HTMLElement {
    const btn = SmallBtn.createSmallBtn('small-btn small-btn-bg');

    btn.addEventListener('click', () => {
      ChangeLang.changeLang(currentLang, alternativeLang);
      ManageState.applyState();
    });

    return btn;
  }
}

export default LangBtn;
