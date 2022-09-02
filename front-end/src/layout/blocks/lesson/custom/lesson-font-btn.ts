import CreateElement from '../../../elements/create-element';

import { LessonFontSize, Tag } from '../../../../types/enums';
import FontSizeOption from './font-size-option';

class LessonFontBtn {
  public static fillOptionPanel(panel: HTMLElement, overlay: HTMLElement): void {
    const optionsPanel = panel;
    const fontOptions = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'options-font' }]);
    const fontSizeOptions = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'options-font-size' }]);
    const fontFamilyOptions = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'options-font-family' }]);
    const fontSizeNormal = FontSizeOption.create(LessonFontSize.normal);
    const fontSizeSmall = FontSizeOption.create(LessonFontSize.small);
    const fontSizeBig = FontSizeOption.create(LessonFontSize.big);

    fontSizeNormal.textContent = 'Aa';
    fontSizeSmall.textContent = 'Aa';
    fontSizeBig.textContent = 'Aa';
    fontSizeOptions.append(fontSizeSmall, fontSizeNormal, fontSizeBig);
    fontOptions.append(fontSizeOptions, fontFamilyOptions);
    optionsPanel.classList.remove('hidden');
    optionsPanel.textContent = '';
    optionsPanel.append(fontOptions);
    overlay.classList.remove('hidden');
  }

  public static createLessonFontBtn(panel: HTMLElement, overlay: HTMLElement): HTMLElement {
    const fontBtn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'lesson-font-btn' }]);

    fontBtn.addEventListener('click', () => {
      LessonFontBtn.fillOptionPanel(panel, overlay);
    });

    return fontBtn;
  }
}

export default LessonFontBtn;
