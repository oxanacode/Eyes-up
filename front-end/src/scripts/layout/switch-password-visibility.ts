import { InputType } from '../../types/enums';

class SwitchPasswordVisibility {
  public static switchPasswordVisibility(visibilityBtn: HTMLElement, passwordInput: HTMLElement): void {
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

  public static hidePassword(dataBlock: HTMLElement): void {
    if (
      dataBlock.lastElementChild &&
      dataBlock.lastElementChild.lastElementChild &&
      dataBlock.lastElementChild.lastElementChild.previousElementSibling
    ) {
      if (dataBlock.lastElementChild.lastElementChild.previousElementSibling.getAttribute('type') === InputType.text) {
        dataBlock.lastElementChild.lastElementChild.classList.add('password-close');
        dataBlock.lastElementChild.lastElementChild.classList.remove('password-open');
        dataBlock.lastElementChild.lastElementChild.previousElementSibling.setAttribute('type', InputType.password);
      }
    }
  }
}

export default SwitchPasswordVisibility;
