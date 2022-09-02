import CreateElement from '../../../elements/create-element';
import ManageModal from '../../../../scripts/layout/manage-modal';
import SwitchPasswordVisibility from '../../../../scripts/layout/switch-password-visibility';
import ManageConfirmation from '../../../../scripts/layout/manage-confirmation';
import ProfileBadgesModal from './profile-badges-modal';
import State from '../../../../scripts/state/state';
import translation from '../../../../data/translation';

import { Tag } from '../../../../types/enums';
import { User } from '../../../../types/interfaces';

class AllBadgesBtn {
  public static createAllBadgesBtn(
    dataBlock: HTMLElement,
    condirmationWrapper: HTMLElement,
    profileBadges: HTMLElement,
    viewProfile: HTMLElement,
    user: User
  ): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'simple-account-btn' }]);

    btn.textContent = translation.profileBadgesLink[State.currentLang];
    btn.addEventListener('click', () => {
      SwitchPasswordVisibility.hidePassword(dataBlock);
      ManageConfirmation.hideConfirmation(condirmationWrapper);
      ProfileBadgesModal.createProfileBadgesModal(profileBadges, viewProfile, user);
      ManageModal.showModal(profileBadges);
      ManageModal.hideModal(viewProfile);
    });

    return btn;
  }
}

export default AllBadgesBtn;
