import CreateElement from '../../../elements/create-element';
import ManageErrorHint from '../../../../scripts/layout/manage-error-hint';

import { Tag } from '../../../../types/enums';

class ErrorIcon {
  public static createErrorIcon(errorContent: HTMLElement): HTMLElement {
    const icon = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'error-icon' }]);

    icon.textContent = 'Error hint';
    icon.addEventListener('mouseenter', () => {
      ManageErrorHint.showHint(errorContent);
    });
    icon.addEventListener('mouseleave', () => {
      ManageErrorHint.hideHint(errorContent);
    });

    return icon;
  }
}

export default ErrorIcon;
