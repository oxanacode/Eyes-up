class ManagePage {
  public static getPage(): HTMLElement {
    return document.querySelector('.page') as HTMLElement;
  }

  public static clearPage(): void {
    ManagePage.getPage().innerHTML = '';
  }

  public static hideScrollbar(): void {
    if (document.firstElementChild) {
      (document.firstElementChild as HTMLElement).style.overflowY = 'hidden';
    }
  }

  public static showScrollbar(): void {
    if (document.firstElementChild) {
      (document.firstElementChild as HTMLElement).style.overflowY = 'scroll';
    }
  }
}

export default ManagePage;
