import CloseModal from '../../scripts/layout/close-modal';
import SmallBtn from './small-btn';

class CloseBtn {
  public static createCloseBtn(wrapper: HTMLElement): HTMLElement {
    const btn = SmallBtn.createSmallBtn('small-btn close-btn');

    btn.addEventListener('click', () => {
      CloseModal.closeModal(wrapper);
    });

    return btn;
  }
}

export default CloseBtn;
