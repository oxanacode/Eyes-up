import DataValidation from '../validation/data-validation';

import { Disabled } from '../../types/enums';
import { User } from '../../types/interfaces';

class ManageSaveChangesBtn {
  private static disableSaveChangesBtn(saveChangesBtn: HTMLElement): void {
    saveChangesBtn.setAttribute(Disabled.true, Disabled.true);
  }

  private static enableSaveChangesBtn(saveChangesBtn: HTMLElement): void {
    saveChangesBtn.removeAttribute(Disabled.true);
  }

  public static switchSaveChangesBtnState(user: User, saveChangesBtn: HTMLElement): void {
    if (DataValidation.checkIfUserDataDiffer(user)) {
      ManageSaveChangesBtn.enableSaveChangesBtn(saveChangesBtn);
    } else {
      ManageSaveChangesBtn.disableSaveChangesBtn(saveChangesBtn);
    }
  }
}

export default ManageSaveChangesBtn;
