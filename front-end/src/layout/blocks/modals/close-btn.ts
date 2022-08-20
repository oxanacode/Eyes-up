import CloseModal from '../../../scripts/layout/close-modal';
import SmallBtn from '../../elements/small-btn';

class CloseBtn {
  public static createCloseBtn(element: HTMLElement): HTMLElement {
    const btn = SmallBtn.createSmallBtn('small-btn small-btn-nobg');

    btn.addEventListener('click', () => {
      CloseModal.closeModal(element);
    });

    return btn;
  }
}

export default CloseBtn;
