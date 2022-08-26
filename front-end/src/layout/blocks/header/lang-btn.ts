import SwitchLang from '../../../scripts/layout/switch-lang';
import State from '../../../scripts/state/state';
import SmallBtn from '../../elements/small-btn';
import translation from '../../../data/translation';

import { RenderHandler } from '../../../types/types';

class LangBtn {
  public static createLangBtn(render: RenderHandler): HTMLElement {
    const btn = SmallBtn.createSmallBtn('small-btn small-btn-bg', translation.themeSwitcher[State.currentLang]);

    btn.addEventListener('click', () => {
      SwitchLang.applyLang(render);
    });

    return btn;
  }
}

export default LangBtn;
