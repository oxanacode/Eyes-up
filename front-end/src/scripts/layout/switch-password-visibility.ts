import { InputType } from '../../types/enums';

class SwitchPasswordVisibility {
  public static switchPasswordVisibility(
    visibilityBtn: HTMLElement,
    passwordInput: HTMLElement
  ): void {
    if (passwordInput.getAttribute('type') === InputType.password) {
      visibilityBtn.classList.add('password-open');
      visibilityBtn.classList.remove('password-close');
      passwordInput.setAttribute('type', InputType.text);
    } else {
      visibilityBtn.classList.add('password-close');
      visibilityBtn.classList.remove('password-open');
      passwordInput.setAttribute('type', InputType.password);
    }
  }
}

export default SwitchPasswordVisibility;
