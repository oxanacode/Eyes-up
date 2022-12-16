import CreateElement from './create-element';
import State from '../../scripts/state/state';
import translation from '../../data/translation';

import { Tag } from '../../types/enums';

class Spinner {
  public static create(): HTMLElement {
    const spinnerWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'spinner-wrapper' }]);
    const spinner = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'spinner' }]);
    const loadingText = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'loading-text' }]);

    loadingText.textContent = translation.loading[State.currentLang];
    spinnerWrapper.append(spinner, loadingText);

    return spinnerWrapper;
  }
}

export default Spinner;
