import ManageModal from '../../../scripts/layout/manage-modal';
import SmallBtn from '../../elements/small-btn';

class CloseBtn {
  public static createCloseBtn(modalToClose: HTMLElement): HTMLElement {
    const btn = SmallBtn.createSmallBtn('small-btn close-btn');

    btn.addEventListener('click', () => {
      ManageModal.closeModal(modalToClose);
    });

    return btn;
  }
}

export default CloseBtn;
