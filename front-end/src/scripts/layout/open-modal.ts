import ManagePage from './manage-page';

class OpenModal {
  public static openModal(element: HTMLElement): void {
    const page = ManagePage.getPage();

    page.append(element);
  }
}

export default OpenModal;
