import State from '../../../../scripts/state/state';
import CreateElement from '../../../elements/create-element';
import ViewProfileHeader from './view-profile-header';

import { Tag } from '../../../../types/enums';
import { RenderHandler } from '../../../../types/types';

class ViewProfileModal {
  public static createViewProfileModal(modalToClose: HTMLElement, render: RenderHandler): HTMLElement {
    const modal = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'view-profile-modal' }]);
    const header = ViewProfileHeader.createViewProfileHeader(modalToClose, modal);

    if (State.currentUser.login === '42') {
      render();
    }

    modal.append(header);

    return modal;
  }
}

export default ViewProfileModal;
