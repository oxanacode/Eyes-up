import translation from '../../../data/translation';
import ManageModal from '../../../scripts/layout/manage-modal';
import State from '../../../scripts/state/state';
import SmallBtn from '../../elements/small-btn';
import ModalWrapper from '../modals/modal-wrapper';
import RegistrationModal from '../modals/registration-modal';

import { RenderHandler } from '../../../types/types';

class RegistrationBtn {
  public static createRegistrationBtn(): HTMLElement {
    const btn = SmallBtn.createSmallBtn(
      'small-btn small-btn-bg registration-btn',
      translation.headerSignUpBtn[State.currentLang]
    );

    return btn;
  }

  public static createHeaderRegistrationBtn(
    render: RenderHandler
  ): HTMLElement {
    const btn = RegistrationBtn.createRegistrationBtn();

    btn.addEventListener('click', () => {
      ManageModal.openModal(
        ModalWrapper.createModalWrapper(
          RegistrationModal.createRegistrationModal,
          render
        )
      );
    });

    return btn;
  }

  // подумать над тем, как реализовать закрытие одной модалки и открытие другой - может, перерисовывать?
  public static createBurgerMenuRegistrationBtn(
    modalToClose: HTMLElement,
    modalToOpen: HTMLElement
  ): HTMLElement {
    const btn = RegistrationBtn.createRegistrationBtn();

    btn.addEventListener('click', () => {
      ManageModal.closeModalOpenModal(modalToClose, modalToOpen);
    });

    return btn;
  }
}

export default RegistrationBtn;
