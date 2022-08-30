import CreateElement from '../../elements/create-element';
import keys from '../../../data/keys';
import State from '../../../scripts/state/state';

import { Layout, Tag } from '../../../types/enums';
import { VirtualKeys } from '../../../types/interfaces';

class LessonKeyboard {
  public static virtualKeys: VirtualKeys = {};

  public static space: HTMLElement;

  public static shift: HTMLElement;

  public static createKey(key: HTMLElement, content: string): void {
    const char = CreateElement.createElement(Tag.span);

    char.textContent = content;
    key.append(char);
  }

  public static createLessonKeyboard(): HTMLElement {
    const keyboard = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-keyboard' }]);

    keys.forEach((row) => {
      const keyboardRow = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'keyboard-row' }]);
      row.forEach((key) => {
        const keyElement = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'keyboard-key' }]);

        if (key.type === 'Function') {
          keyElement.classList.add('key_function');
          keyElement.textContent = `${key.down}`;
        }
        if (key.specialSize) {
          switch (key.specialSize) {
            case 1:
              keyElement.classList.add('key-size-one-half');
              break;
            case 2:
              keyElement.classList.add('key-size-double');
              break;
            case 3:
              keyElement.classList.add('key-size-two-half');
              if (key.down === 'Shift') LessonKeyboard.shift = keyElement;
              break;
            default:
              keyElement.classList.add('key-size-space');
              LessonKeyboard.space = keyElement;
          }
        }
        if (key.type === 'Symbol') {
          if (State.currentLayout === Layout.en) {
            if (key.upEng) {
              LessonKeyboard.createKey(keyElement, key.upEng);
              LessonKeyboard.virtualKeys[key.upEng] = keyElement;
            }
            if (key.downEng) {
              LessonKeyboard.createKey(keyElement, key.downEng);
              LessonKeyboard.virtualKeys[key.downEng] = keyElement;
            }
            if (key.upEng && key.downEng) keyElement.classList.add('key-two-symbols');
          } else {
            if (key.upRu) {
              LessonKeyboard.createKey(keyElement, key.upRu);
              LessonKeyboard.virtualKeys[key.upRu] = keyElement;
            }
            if (key.downRu) {
              LessonKeyboard.createKey(keyElement, key.downRu);
              LessonKeyboard.virtualKeys[key.downRu] = keyElement;
            }
            if (key.upRu && key.downRu) keyElement.classList.add('key-two-symbols');
          }
        }
        if (key.letter) keyElement.classList.add('key-letter');
        keyboardRow.append(keyElement);
      });
      keyboard.append(keyboardRow);
    });

    return keyboard;
  }
}

export default LessonKeyboard;
