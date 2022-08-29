import ManageSaveChangesBtn from '../../../../scripts/layout/manage-save-shanges-btn';
import ManageProfileState from '../../../../scripts/profile/manage-profile-state';
import LoginInput from '../inputs/login-input';

import { User } from '../../../../types/interfaces';

class EditProfileLoginInput {
  public static createEditProfileLoginInput(user: User, saveChangesBtn: HTMLElement): HTMLInputElement {
    const input = LoginInput.createLoginInput('profile-input');

    input.addEventListener('input', () => {
      ManageProfileState.changeLoginState(input.value.trim());
      ManageSaveChangesBtn.switchSaveChangesBtnState(user, saveChangesBtn);
    });

    return input;
  }
}

export default EditProfileLoginInput;
