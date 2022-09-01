import CreateElement from '../../../elements/create-element';
import ManageModal from '../../../../scripts/layout/manage-modal';
import State from '../../../../scripts/state/state';
import translation from '../../../../data/translation';

import { Tag } from '../../../../types/enums';

class AllBadgesBtn {
  public static createAllBadgesBtn(modalToShow: HTMLElement, modalToHide: HTMLElement): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'simple-account-btn' }]);

    btn.textContent = translation.profileBadgesLink[State.currentLang];
    btn.addEventListener('click', () => {
      ManageModal.showModal(modalToShow);
      ManageModal.hideModal(modalToHide);
    });

    return btn;
  }
}

export default AllBadgesBtn;
