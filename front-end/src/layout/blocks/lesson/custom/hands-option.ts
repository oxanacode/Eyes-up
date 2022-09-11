import CreateElement from '../../../elements/create-element';
import State from '../../../../scripts/state/state';
import ManageState from '../../../../scripts/state/manage-state';

import { LessonHands, Tag } from '../../../../types/enums';
import LessonState from '../lesson-state';

class HandsOption {
  public static create(): HTMLElement {
    const option = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'hands-option' }]);

    if (State.currentLessonHands === LessonHands.hidden) {
      LessonState.hands.style.visibility = 'hidden';
      option.classList.add(LessonHands.hidden);
    } else {
      LessonState.hands.style.visibility = 'visible';
      option.classList.add(LessonHands.visible);
    }

    option.addEventListener('click', () => {
      if (option.classList.contains(LessonHands.hidden)) {
        LessonState.hands.style.visibility = 'visible';
        option.classList.add(LessonHands.visible);
        option.classList.remove(LessonHands.hidden);
        State.currentLessonHands = LessonHands.visible;
      } else {
        LessonState.hands.style.visibility = 'hidden';
        option.classList.add(LessonHands.hidden);
        option.classList.remove(LessonHands.visible);
        State.currentLessonHands = LessonHands.hidden;
      }

      ManageState.saveState();
    });

    return option;
  }
}

export default HandsOption;
