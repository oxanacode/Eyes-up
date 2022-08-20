class ManagePage {
  public static getPage(): HTMLElement {
    return document.querySelector('.page') as HTMLElement;
  }

  public static clearPage(): void {
    ManagePage.getPage().innerHTML = '';
  }
}

export default ManagePage;
