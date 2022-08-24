import CreateElement from '../../../elements/create-element';

import { Tag } from '../../../../types/enums';

class ErrorHintContent {
  public static createErrorHintContent(
    markText: string,
    hintText: string
  ): HTMLElement {
    const content = CreateElement.createElement(Tag.par, [
      { name: 'class', value: 'error-hint-content' },
    ]);
    const mark = CreateElement.createElement(Tag.span, [
      { name: 'class', value: 'error-hint-mark' },
    ]);
    const hint = CreateElement.createElement(Tag.span, [
      { name: 'class', value: 'error-hint-text' },
    ]);

    mark.textContent = `${markText}:`;
    hint.textContent = hintText;
    content.append(mark, hint);

    return content;
  }
}

export default ErrorHintContent;
