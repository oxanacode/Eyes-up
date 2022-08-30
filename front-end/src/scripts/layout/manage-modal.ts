import ManagePage from './manage-page';
import MeasureScrollbar from './measure-scrollbar';

class ManageModal {
  public static openModal(modalToOpen: HTMLElement): void {
    const page = ManagePage.getPage();

    ManagePage.hideScrollbar();
    page.style.paddingRight = `${MeasureScrollbar.countScrollbarWidth()}px`;
    page.append(modalToOpen);
  }

  public static closeModal(modalToClose: HTMLElement): void {
    const page = ManagePage.getPage();

    ManagePage.showScrollbar();
    page.style.paddingRight = '0';
    modalToClose.remove();
  }

  public static changeModal(modalWrapper: HTMLElement, modalToClose: HTMLElement, modalToOpen: HTMLElement): void {
    modalToClose.remove();
    modalWrapper.append(modalToOpen);
  }

  public static switchModal(modalToHide: HTMLElement): void {
    modalToHide.classList.add('hidden');

    if (modalToHide.previousElementSibling) {
      modalToHide.previousElementSibling.classList.remove('hidden');
    }

    if (modalToHide.nextElementSibling) {
      modalToHide.nextElementSibling.classList.remove('hidden');
    }
  }

  public static clearModalContent(modal: HTMLElement): void {
    if (modal.children) {
      Array.from(modal.children).forEach((child: Element) => {
        modal.removeChild(child);
      });
    }
  }
}

export default ManageModal;
