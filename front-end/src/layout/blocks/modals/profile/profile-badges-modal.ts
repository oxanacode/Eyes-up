import CreateElement from '../../../elements/create-element';
import BadgesProfileHeader from './profile-badges-header';

import { Tag } from '../../../../types/enums';

class ProfileBadgesModal {
  public static createProfileBadgesModal(modalWrapper: HTMLElement): HTMLElement {
    const modal = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'profile-modal-content profile-badges-modal hidden' },
    ]);
    const header = BadgesProfileHeader.createBadgesProfileHeader(modal, modalWrapper);

    modal.append(header);

    return modal;
  }
}

export default ProfileBadgesModal;
