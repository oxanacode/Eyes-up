import CreateElement from '../../../elements/create-element';

import { Tag } from '../../../../types/enums';
import ManageModal from '../../../../scripts/layout/manage-modal';

class ProfileBadgesCloseBtn {
  public static createProfileBadgesCloseBtn(modalToHide: HTMLElement, parentModal: HTMLElement): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'small-btn close-btn profile-btn' }]);

    btn.textContent = 'Close button';
    btn.addEventListener('click', () => {
      ManageModal.showModalHandler(parentModal);
      ManageModal.hideModal(modalToHide);
    });

    return btn;
  }
}

export default ProfileBadgesCloseBtn;
