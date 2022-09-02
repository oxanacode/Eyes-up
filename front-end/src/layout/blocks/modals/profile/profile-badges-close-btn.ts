import CreateElement from '../../../elements/create-element';
import ManageModal from '../../../../scripts/layout/manage-modal';

import { Tag } from '../../../../types/enums';

class ProfileBadgesCloseBtn {
  public static createProfileBadgesCloseBtn(profileBages: HTMLElement, viewProfile: HTMLElement): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'small-btn close-btn profile-btn' }]);

    btn.textContent = 'Close button';
    btn.addEventListener('click', () => {
      ManageModal.showModal(viewProfile);
      ManageModal.hideModal(profileBages);
    });

    return btn;
  }
}

export default ProfileBadgesCloseBtn;
