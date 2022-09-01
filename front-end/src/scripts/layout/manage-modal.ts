import ManagePage from './manage-page';

class ManageModal {
  public static openModal(modalToOpen: HTMLElement): void {
    ManagePage.hidePageScrollbar();
    ManagePage.getPage().append(modalToOpen);
  }

  public static closeModal(modalToClose: HTMLElement | Element): void {
    ManagePage.showPageScrollbar();
    modalToClose.remove();
  }

  public static changeModal(modalWrapper: HTMLElement, modalToClose: HTMLElement, modalToOpen: HTMLElement): void {
    modalToClose.remove();
    modalWrapper.append(modalToOpen);
  }

  public static switchModal(modalToHide: HTMLElement): void {
    modalToHide.classList.add('hidden');

    if (modalToHide.previousElementSibling) {
      modalToHide.previousElementSibling.classList.remove('hidden');
    }

    if (modalToHide.nextElementSibling) {
      modalToHide.nextElementSibling.classList.remove('hidden');
    }
  }

  public static clearModalContent(modal: HTMLElement): void {
    if (modal.children) {
      Array.from(modal.children).forEach((child: Element) => {
        modal.removeChild(child);
      });
    }
  }

  public static closeBurgerMenu(): void {
    const page = ManagePage.getPage();

    if (
      page.lastElementChild &&
      page.lastElementChild.lastElementChild &&
      page.lastElementChild.lastElementChild.classList.contains('burger-menu')
    ) {
      ManageModal.closeModal(page.lastElementChild);
    }
  }

  public static closeBurgerMenuHandler(): void {
    const TABLET = '(max-width: 899px)';

    if (!window.matchMedia(TABLET).matches) {
      ManageModal.closeBurgerMenu();
    }
  }
}

export default ManageModal;
