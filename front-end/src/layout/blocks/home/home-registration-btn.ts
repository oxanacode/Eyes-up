import BigBtn from '../../elements/big-btn';
import ManageModal from '../../../scripts/layout/manage-modal';
import ModalWrapper from '../modals/common/modal-wrapper';
import RegistrationModal from '../modals/registration/registration-modal';
import translation from '../../../data/translation';

import { RenderHandler } from '../../../types/types';
import State from '../../../scripts/state/state';

class HomeRegBtn {
  public static createHomeRegBtn(render: RenderHandler): HTMLElement {
    const button = BigBtn.createBigBtn(translation.homeRegistrationBtn[State.currentLang]);

    button.addEventListener('click', () => {
      ManageModal.openModal(ModalWrapper.createModalWrapper(RegistrationModal.createRegistrationModal, render));
    });

    return button;
  }
}

export default HomeRegBtn;
