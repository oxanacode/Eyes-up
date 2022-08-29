class ManageConfirmation {
  public static showConfirmation(wrapper: HTMLElement): void {
    if (wrapper.firstElementChild) {
      wrapper.firstElementChild.classList.remove('hidden');
    }
  }

  public static hideConfirmation(wrapper: HTMLElement): void {
    if (wrapper.firstElementChild) {
      wrapper.firstElementChild.classList.add('hidden');
    }
  }
}

export default ManageConfirmation;
