import ManagePage from './manage-page';

class CloseModal {
  public static closeModal(element: HTMLElement): void {
    const page = ManagePage.getPage();

    page.removeChild(element);
  }
}

export default CloseModal;
