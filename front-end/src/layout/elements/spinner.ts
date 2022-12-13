import CreateElement from './create-element';
import State from '../../scripts/state/state';
import translation from '../../data/translation';

import { Tag } from '../../types/enums';

class Spinner {
  public static create(className: string): Record<string, HTMLElement> {
    const spinner = CreateElement.createElement(Tag.div, [{ name: 'class', value: className }]);
    const loadingText = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'loading' }]);

    loadingText.textContent = translation.loading[State.currentLang];

    return { spinner, loadingText };
  }
}

export default Spinner;
