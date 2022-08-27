import PasswordInput from '../inputs/password-input';

class EditProfilePasswordInput {
  public static createEditProfilePasswordInput(saveChangesBtn: HTMLElement): HTMLInputElement {
    const input = PasswordInput.createPasswordInput('profile-input');

    return input;
  }
}

export default EditProfilePasswordInput;
