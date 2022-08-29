import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';
import keys from '../../../data/keys';

interface VirtualKeys {
  [key: string]: HTMLElement;
}

class LessonKeyboard {
  public static virtualKeys: VirtualKeys;

  public static createLessonKeyboard(): HTMLElement {
    const keyboard = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-keyboard' }]);

    keys.forEach((row) => {
      const keyboardRow = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'keyboard-row' }]);
      row.forEach((key) => {
        const keyElement = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'keyboard-key' }]);

        LessonKeyboard.virtualKeys[key.code] = keyElement;

        keyboardRow.append(keyElement);
      });
      keyboard.append(keyboardRow);
    });

    return keyboard;
  }
}

export default LessonKeyboard;
