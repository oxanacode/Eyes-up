class ManageErrorHint {
  public static showHint(errorContent: HTMLElement): void {
    if (errorContent.lastElementChild) {
      errorContent.lastElementChild.classList.remove('hidden');
    }
  }

  public static hideHint(errorContent: HTMLElement): void {
    if (errorContent.lastElementChild) {
      errorContent.lastElementChild.classList.add('hidden');
    }
  }
}

export default ManageErrorHint;
