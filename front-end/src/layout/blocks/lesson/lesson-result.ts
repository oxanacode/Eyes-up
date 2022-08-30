import CreateElement from '../../elements/create-element';
import ManageModal from '../../../scripts/layout/manage-modal';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import LessonInput from './lesson-input';

import { Tag } from '../../../types/enums';

class LessonResult {
  public static visible = false;

  public static createLessonResult(speedEl: HTMLElement): HTMLElement {
    const ribbon = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-result-ribbon' }]);
    const text = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'result-ribbon-text' }]);
    const speed = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'result-ribbon-speed' }]);
    const accuracy = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'result-ribbon-accuracy' }]);

    text.textContent = translation.testResults[State.currentLang];
    speed.textContent = `${translation.testWpmText[State.currentLang]} ${speedEl.textContent}`;
    accuracy.textContent = `${translation.testAccuracyText[State.currentLang]} ${Math.floor(
      LessonInput.getAccuracy()
    )} %`;
    ribbon.append(text, speed, accuracy);

    return ribbon;
  }

  public static showLessonResult(speed: HTMLElement): void {
    if (LessonResult.visible) return;

    LessonResult.visible = true;
    ManageModal.openModal(LessonResult.createLessonResult(speed));
  }
}

export default LessonResult;
