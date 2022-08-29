import PasswordInput from '../inputs/password-input';
import ManageProfileState from '../../../../scripts/profile/manage-profile-state';
import ManageSaveChangesBtn from '../../../../scripts/layout/manage-save-shanges-btn';

import { User } from '../../../../types/interfaces';

class EditProfilePasswordInput {
  public static createEditProfilePasswordInput(user: User, saveChangesBtn: HTMLElement): HTMLInputElement {
    const input = PasswordInput.createPasswordInput('profile-input profile-password-input');

    input.addEventListener('input', () => {
      ManageProfileState.changePasswordState(input.value.trim());
      ManageSaveChangesBtn.switchSaveChangesBtnState(user, saveChangesBtn);
    });

    return input;
  }
}

export default EditProfilePasswordInput;
