import CreateElement from '../../../elements/create-element';
import InputLabel from '../inputs/input-label';
import ProfileAvatar from './profile-avatar';
import State from '../../../../scripts/state/state';
import translation from '../../../../data/translation';
import LoginInput from '../inputs/login-input';
import PasswordInput from '../inputs/password-input';
import PasswordVisibilityBtn from '../inputs/password-visibility-btn';

import { Disabled, Tag } from '../../../../types/enums';
import { User } from '../../../../types/interfaces';

class ViewProfileData {
  public static createViewProfileData(user: User): HTMLElement {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-data-wrapper' }]);
    const image = ProfileAvatar.createProfileAvatar(user.avatar);
    const loginLabel = InputLabel.createInputLabel(
      'profile-input-label',
      translation.modalSignUpLoginInput[State.currentLang]
    );
    const loginInput = LoginInput.createLoginInput('profile-input', Disabled.true);
    const passwordLabel = InputLabel.createInputLabel(
      'profile-input-label',
      translation.modalSignUpPasswordInput[State.currentLang]
    );
    const passwordInput = PasswordInput.createPasswordInput('profile-input', Disabled.true);
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

export default ViewProfileData;
