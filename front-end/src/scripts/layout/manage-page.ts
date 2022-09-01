import MeasureScrollbar from './measure-scrollbar';

class ManagePage {
  public static getPage(): HTMLElement {
    return document.querySelector('.page') as HTMLElement;
  }

  public static clearPage(): void {
    ManagePage.getPage().innerHTML = '';
  }

  public static hidePageScrollbar(): void {
    ManagePage.setPagePadding();
    ManagePage.setPageOverflowHidden();
  }

  public static showPageScrollbar(): void {
    ManagePage.removePagePadding();
    ManagePage.setPageOverlowScroll();
  }

  public static setPagePadding(): void {
    ManagePage.getPage().style.paddingRight = `${MeasureScrollbar.countScrollbarWidth()}px`;
  }

  public static removePagePadding(): void {
    ManagePage.getPage().style.paddingRight = '0';
  }

  public static setPageOverflowHidden(): void {
    if (document.firstElementChild) {
      (document.firstElementChild as HTMLElement).style.overflowY = 'hidden';
    }
  }

  public static setPageOverlowScroll(): void {
    if (document.firstElementChild) {
      (document.firstElementChild as HTMLElement).style.overflowY = 'scroll';
    }
  }
}

export default ManagePage;
