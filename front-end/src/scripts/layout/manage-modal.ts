import ManagePage from './manage-page';

class ManageModal {
  public static openModal(modalToOpen: HTMLElement): void {
    const page = ManagePage.getPage();

    page.classList.add('not-scrollable');
    page.append(modalToOpen);
  }

  public static closeModal(modalToClose: HTMLElement): void {
    const page = ManagePage.getPage();

    page.classList.remove('not-scrollable');
    modalToClose.remove();
  }

  public static closeModalOpenModal(
    modalToClose: HTMLElement,
    modalToOpen: HTMLElement
  ): void {
    ManageModal.closeModal(modalToClose);
    ManageModal.openModal(modalToOpen);
  }
}

export default ManageModal;
