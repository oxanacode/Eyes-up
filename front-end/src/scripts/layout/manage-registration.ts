import ModalWrapper from '../../layout/blocks/modals/common/modal-wrapper';
import RegistrationModal from '../../layout/blocks/modals/registration/registration-modal';
import ManageModal from './manage-modal';
import ManageConfirmation from './manage-confirmation';
import State from '../state/state';

import { RenderHandler } from '../../types/types';

class ManageRegistration {
  public static homeRegistrationHandler(wrapper: HTMLElement, render: RenderHandler): void {
    if (State.currentUser.login === State.notAuthorised) {
      ManageModal.openModal(ModalWrapper.createModalWrapper(RegistrationModal.createRegistrationModal, render));
    } else {
      ManageConfirmation.showConfirmation(wrapper);
    }
  }
}

export default ManageRegistration;
