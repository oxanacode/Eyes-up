import CreateElement from '../../../elements/create-element';
import InputLabel from '../inputs/input-label';
import ProfileAvatar from './profile-avatar';
import State from '../../../../scripts/state/state';
import translation from '../../../../data/translation';
import LoginInput from '../inputs/login-input';
import PasswordInput from '../inputs/password-input';
import PasswordVisibilityBtn from '../inputs/password-visibility-btn';
import EditProfileLoginInput from './edit-profile-login-input';
import EditProfilePasswordInput from './edit-profile-password-input';

import { Disabled, Profile, Tag } from '../../../../types/enums';
import { User } from '../../../../types/interfaces';

class ProfileData {
  public static createViewProfileData(user: User, profile: Profile, saveChangesBtn?: HTMLElement): HTMLElement {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-data-wrapper' }]);
    const image = ProfileAvatar.createProfileAvatar(user.avatar);
    const loginLabel = InputLabel.createInputLabel(
      'profile-input-label profile-login-input-label',
      translation.modalSignUpLoginInput[State.currentLang]
    );
    const loginInput =
      profile === Profile.edit && saveChangesBtn
        ? EditProfileLoginInput.createEditProfileLoginInput(user, saveChangesBtn)
        : LoginInput.createLoginInput('profile-input', Disabled.true);
    const passwordLabel = InputLabel.createInputLabel(
      'profile-input-label profile-password-input-label',
      translation.modalSignUpPasswordInput[State.currentLang]
    );
    const passwordInput =
      profile === Profile.edit && saveChangesBtn
        ? EditProfilePasswordInput.createEditProfilePasswordInput(user, saveChangesBtn)
        : PasswordInput.createPasswordInput('profile-input profile-password-input', Disabled.true);
    const visibilityBtn = PasswordVisibilityBtn.createPasswordVisibilityBtn(
      'password-visibility-btn profile-password-visibility-btn password-close',
      passwordInput
    );

    loginInput.value = user.login;
    passwordInput.value = user.password;
    loginLabel.append(loginInput);
    passwordLabel.append(passwordInput, visibilityBtn);
    wrapper.append(image, loginLabel, passwordLabel);

    return wrapper;
  }
}

export default ProfileData;
