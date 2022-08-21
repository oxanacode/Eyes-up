import ManageModal from '../../../scripts/layout/manage-modal';
import SmallBtn from '../../elements/small-btn';

class CloseBtn {
  public static createCloseBtn(wrapper: HTMLElement): HTMLElement {
    const btn = SmallBtn.createSmallBtn('small-btn close-btn');

    btn.addEventListener('click', () => {
      ManageModal.closeModal(wrapper);
    });

    return btn;
  }
}

export default CloseBtn;
