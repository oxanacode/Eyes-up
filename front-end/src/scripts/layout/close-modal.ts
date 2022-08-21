import ManagePage from './manage-page';

class CloseModal {
  public static closeModal(element: HTMLElement): void {
    const page = ManagePage.getPage();

    page.classList.remove('not-scrollable');
    element.remove();
  }
}

export default CloseModal;
