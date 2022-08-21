import ManageUser from '../../../scripts/profile/manage-user';
import ProfileBtn from './profile-btn';
import RegistrationBtn from './registration-btn';

class UserBtn {
  public static getUserBtn(className: string): HTMLElement {
    let btn;

    if (ManageUser.checkIfUserAuthorized()) {
      btn = ProfileBtn.createProfileBtn();
    } else {
      btn = RegistrationBtn.createRegistrationBtn();
    }

    btn.classList.add(className);

    return btn;
  }
}

export default UserBtn;
