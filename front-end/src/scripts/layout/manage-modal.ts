import ManagePage from './manage-page';

class ManageModal {
  public static closeModal(element: HTMLElement): void {
    const page = ManagePage.getPage();

    page.classList.remove('not-scrollable');
    element.remove();
  }

  public static openModal(element: HTMLElement): void {
    const page = ManagePage.getPage();

    page.classList.add('not-scrollable');
    page.append(element);
  }

  public static closeModalOpenModal(
    elementToClose: HTMLElement,
    elementToOpen: HTMLElement
  ): void {
    ManageModal.closeModal(elementToClose);
    ManageModal.openModal(elementToOpen);
  }
}

export default ManageModal;
