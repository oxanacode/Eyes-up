import CreateElement from '../../elements/create-element';
import LessonFontBtn from './custom/lesson-font-btn';
import LessonSoundBtn from './custom/lesson-sound-btn';
import LessonBgBtn from './custom/lesson-bg-btn';
import LessonKeyboardBtn from './custom/lesson-keyboard-btn';

import { Tag } from '../../../types/enums';
import SettingsOverlay from './custom/settings-overlay';

class LessonSettings {
  public static createLessonSettings(): HTMLElement {
    const lessonSettings = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-settings' }]);
    const panel = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'options-panel hidden' }]);
    const overlay = SettingsOverlay.create(panel);
    const fontBtn = LessonFontBtn.createLessonFontBtn(panel, overlay);
    const soundBtn = LessonSoundBtn.createLessonSoundBtn();
    const bgBtn = LessonBgBtn.createLessonBgBtn(panel, overlay);
    const keyboardBtn = LessonKeyboardBtn.createLessonKeyboardBtn();

    lessonSettings.append(fontBtn, soundBtn, keyboardBtn, bgBtn, panel);

    return lessonSettings;
  }
}

export default LessonSettings;
