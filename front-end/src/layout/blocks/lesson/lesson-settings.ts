import CreateElement from '../../elements/create-element';
import LessonFontBtn from './lesson-font-btn';
import LessonSoundBtn from './lesson-sound-btn';
import LessonBgBtn from './lesson-bg-btn';
import LessonKeyboardBtn from './lesson-keyboard-btn';

import { Tag } from '../../../types/enums';

class LessonSettings {
  public static createLessonSettings(): HTMLElement {
    const lessonSettings = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-settings' }]);
    const fontBtn = LessonFontBtn.createLessonFontBtn();
    const soundBtn = LessonSoundBtn.createLessonSoundBtn();
    const bgBtn = LessonBgBtn.createLessonBgBtn();
    const keyboardBtn = LessonKeyboardBtn.createLessonKeyboardBtn();

    lessonSettings.append(fontBtn, soundBtn, keyboardBtn, bgBtn);

    return lessonSettings;
  }
}

export default LessonSettings;
