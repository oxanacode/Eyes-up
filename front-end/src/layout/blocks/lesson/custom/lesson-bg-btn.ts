import CreateElement from '../../../elements/create-element';
import BgOption from './bg-option';
import ActiveOption from './active-option';

import { LessonBg, Tag } from '../../../../types/enums';

class LessonBgBtn {
  public static fillOptionPanel(panel: HTMLElement, overlay: HTMLElement): void {
    const optionsPanel = panel;
    const bgOptions = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'options-bg' }]);
    const bgOne = BgOption.createBgOption(LessonBg.default);
    const bgTwo = BgOption.createBgOption(LessonBg.one);
    const bgThree = BgOption.createBgOption(LessonBg.two);

    bgOptions.append(bgOne, bgTwo, bgThree);
    optionsPanel.classList.remove('hidden');
    optionsPanel.textContent = '';
    optionsPanel.append(bgOptions);
    overlay.classList.remove('hidden');
  }

  public static createLessonBgBtn(panel: HTMLElement, overlay: HTMLElement): HTMLElement {
    const bgBtn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'lesson-bg-btn' }]);

    bgBtn.addEventListener('click', () => {
      if (bgBtn.classList.contains('active-option')) {
        bgBtn.classList.remove('active-option');
        overlay.classList.add('hidden');
        panel.classList.add('hidden');

        return;
      }

      LessonBgBtn.fillOptionPanel(panel, overlay);

      if (ActiveOption.option) ActiveOption.option.classList.remove('active-option');

      ActiveOption.option = bgBtn;
      ActiveOption.option.classList.add('active-option');
    });

    return bgBtn;
  }
}

export default LessonBgBtn;
