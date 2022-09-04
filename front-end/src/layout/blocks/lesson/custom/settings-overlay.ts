import CreateElement from '../../../elements/create-element';
import LessonState from '../lesson-state';
import ActiveOption from './active-option';

import { Tag } from '../../../../types/enums';

class SettingsOverlay {
  public static create(panel: HTMLElement): HTMLElement {
    const overlay = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'options-panel-overlay hidden' }]);
    const optionsPanel = panel;

    LessonState.page.append(overlay);

    overlay.addEventListener('click', () => {
      overlay.classList.add('hidden');
      optionsPanel.textContent = '';
      optionsPanel.classList.add('hidden');
      ActiveOption.option.classList.remove('active-option');
    });

    return overlay;
  }
}

export default SettingsOverlay;
