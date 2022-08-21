import ManagePage from './manage-page';

class OpenModal {
  public static openModal(element: HTMLElement): void {
    const page = ManagePage.getPage();

    page.classList.add('not-scrollable');
    page.append(element);
  }
}

export default OpenModal;
