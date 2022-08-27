import BigBtn from '../../../elements/big-btn';
import State from '../../../../scripts/state/state';
import translation from '../../../../data/translation';
import { Disabled } from '../../../../types/enums';

class SaveChangesBtn {
  public static createSaveChangesBtn(): HTMLElement {
    const btn = BigBtn.createBigBtn(translation.profileSaveBtn[State.currentLang]);

    btn.classList.add('save-changes-btn');
    btn.setAttribute(Disabled.true, Disabled.true);

    return btn;
  }
}

export default SaveChangesBtn;
