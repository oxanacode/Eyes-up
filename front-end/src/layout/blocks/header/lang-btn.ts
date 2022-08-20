import ChangeLang from '../../../scripts/layout/change-lang';
import ManageState from '../../../scripts/state/manage-state';
import State from '../../../scripts/state/state';
import SmallBtn from '../../elements/small-btn';

class LangBtn {
  public static createLangBtn(): HTMLElement {
    const btn = SmallBtn.createSmallBtn(
      'small-btn small-btn-bg',
      State.currentLang
    );

    btn.addEventListener('click', () => {
      ChangeLang.changeLang();
      ManageState.applyState();
    });

    return btn;
  }
}

export default LangBtn;
