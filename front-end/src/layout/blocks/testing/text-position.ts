class TextPosition {
  public static adjust(char: HTMLElement, wrapper: HTMLElement) {
    const textWrapper = wrapper;

    if (char.getBoundingClientRect().bottom > 480) {
      const margin = parseInt(textWrapper.style.marginTop || '0px', 10);
      textWrapper.style.marginTop = `${margin - 40}px`;
    }

    if (char.getBoundingClientRect().top < 290 && textWrapper.getBoundingClientRect().top < 250) {
      const margin = parseInt(textWrapper.style.marginTop || '0px', 10);
      textWrapper.style.marginTop = `${margin + 40}px`;
    }
  }
}

export default TextPosition;
