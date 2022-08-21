import CloseModal from '../../../scripts/layout/close-modal';
import SmallBtn from '../../elements/small-btn';

class CloseBtn {
  public static createCloseBtn(modalWrapper: HTMLElement): HTMLElement {
    const btn = SmallBtn.createSmallBtn('small-btn close-btn');

    btn.addEventListener('click', () => {
      CloseModal.closeModal(modalWrapper);
    });

    return btn;
  }
}

export default CloseBtn;
