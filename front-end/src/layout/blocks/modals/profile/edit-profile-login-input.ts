import LoginInput from '../inputs/login-input';

class EditProfileLoginInput {
  public static createEditProfileLoginInput(saveChangesBtn: HTMLElement): HTMLInputElement {
    const input = LoginInput.createLoginInput('profile-input');

    return input;
  }
}

export default EditProfileLoginInput;
