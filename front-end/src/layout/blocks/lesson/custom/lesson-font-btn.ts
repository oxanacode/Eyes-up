import CreateElement from '../../../elements/create-element';
import FontSizeOption from './font-size-option';
import FontFamilyOption from './font-family-option';
import ActiveOption from './active-option';

import { LessonFontFamily, LessonFontSize, Tag } from '../../../../types/enums';

class LessonFontBtn {
  public static fillOptionPanel(panel: HTMLElement, overlay: HTMLElement): void {
    const optionsPanel = panel;
    const fontOptions = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'options-font' }]);
    const fontSizeOptions = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'options-font-size' }]);
    const fontFamilyOptions = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'options-font-family' }]);
    const fontSizeNormal = FontSizeOption.create(LessonFontSize.normal);
    const fontSizeSmall = FontSizeOption.create(LessonFontSize.small);
    const fontSizeBig = FontSizeOption.create(LessonFontSize.big);
    const fontFamilySansSerif = FontFamilyOption.create(LessonFontFamily.default);
    const fontFamilySerif = FontFamilyOption.create(LessonFontFamily.serif);

    fontSizeNormal.textContent = 'Aa';
    fontSizeSmall.textContent = 'Aa';
    fontSizeBig.textContent = 'Aa';
    fontFamilySansSerif.textContent = 'Font Sans Serif';
    fontFamilySerif.textContent = 'Font Serif';
    fontFamilyOptions.append(fontFamilySansSerif, fontFamilySerif);
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
      if (fontBtn.classList.contains('active-option')) {
        fontBtn.classList.remove('active-option');
        overlay.classList.add('hidden');
        panel.classList.add('hidden');

        return;
      }

      LessonFontBtn.fillOptionPanel(panel, overlay);

      if (ActiveOption.option) ActiveOption.option.classList.remove('active-option');

      ActiveOption.option = fontBtn;
      ActiveOption.option.classList.add('active-option');
    });

    return fontBtn;
  }
}

export default LessonFontBtn;
