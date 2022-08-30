import State from '../../../../scripts/state/state';
import BigBtn from '../../../elements/big-btn';
import ManageConfirmation from '../../../../scripts/layout/manage-confirmation';
import translation from '../../../../data/translation';

class LogoutBtn {
  public static createLogoutBtn(wrapper: HTMLElement): HTMLElement {
    const btn = BigBtn.createBigBtn(translation.profileLogoutBtn[State.currentLang]);

    btn.classList.add('logout-btn');
    btn.addEventListener('click', () => {
      ManageConfirmation.showConfirmation(wrapper);
    });

    return btn;
  }
}

export default LogoutBtn;
