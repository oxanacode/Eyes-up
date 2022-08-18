class UpdatePage {
  public static getPage(): HTMLElement {
    return document.querySelector('.page') as HTMLElement;
  }

  public static clearPage(): void {
    UpdatePage.getPage().innerHTML = '';
  }
}

export default UpdatePage;
