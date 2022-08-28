import { Disabled } from '../../types/enums';
import { User } from '../../types/interfaces';
import ProfileState from '../profile/profile-state';

class ManageSaveChangesBtn {
  private static disableSaveChangesBtn(saveChangesBtn: HTMLElement): void {
    saveChangesBtn.setAttribute(Disabled.true, Disabled.true);
  }

  private static enableSaveChangesBtn(saveChangesBtn: HTMLElement): void {
    saveChangesBtn.removeAttribute(Disabled.true);
  }

  public static switchSaveChangesBtnState(user: User, saveChangesBtn: HTMLElement): void {
    if (
      ProfileState.login === user.login &&
      ProfileState.password === user.password &&
      ProfileState.avatar === user.avatar
    ) {
      ManageSaveChangesBtn.disableSaveChangesBtn(saveChangesBtn);
    } else {
      ManageSaveChangesBtn.enableSaveChangesBtn(saveChangesBtn);
    }
  }
}

export default ManageSaveChangesBtn;
