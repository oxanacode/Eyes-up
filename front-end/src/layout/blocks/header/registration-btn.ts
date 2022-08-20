import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import SmallBtn from '../../elements/small-btn';

class RegistrationBtn {
  public static createRegistrationBtn(): HTMLElement {
    const btn = SmallBtn.createSmallBtn(
      'small-btn small-btn-bg',
      translation.headerSignUpBtn[State.currentLang]
    );

    btn.addEventListener('click', () => {
      console.log('модалка для регистрации');
    });

    return btn;
  }
}

export default RegistrationBtn;
