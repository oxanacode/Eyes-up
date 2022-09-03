import CreateElement from '../../../elements/create-element';
import SoundOption from './sound-option';
import translation from '../../../../data/translation';
import State from '../../../../scripts/state/state';
import ActiveOption from './active-option';

import { LessonSound, Tag } from '../../../../types/enums';

class LessonSoundBtn {
  public static fillOptionPanel(panel: HTMLElement, overlay: HTMLElement): void {
    const optionsPanel = panel;
    const soundOptions = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'options-sound' }]);
    const soundSilent = SoundOption.create(LessonSound.silent);
    const soundSoft = SoundOption.create(LessonSound.soft);
    const soundHard = SoundOption.create(LessonSound.hard);
    const soundMechanical = SoundOption.create(LessonSound.mech);

    soundSilent.textContent = translation.lessonSoundSilent[State.currentLang];
    soundSoft.textContent = translation.lessonSoundSoft[State.currentLang];
    soundHard.textContent = translation.lessonSoundHard[State.currentLang];
    soundMechanical.textContent = translation.lessonSoundMech[State.currentLang];
    soundOptions.append(soundSilent, soundSoft, soundHard, soundMechanical);
    optionsPanel.classList.remove('hidden');
    optionsPanel.textContent = '';
    optionsPanel.append(soundOptions);
    overlay.classList.remove('hidden');
  }

  public static createLessonSoundBtn(panel: HTMLElement, overlay: HTMLElement): HTMLElement {
    const soundBtn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'lesson-sound-btn' }]);

    soundBtn.addEventListener('click', () => {
      LessonSoundBtn.fillOptionPanel(panel, overlay);

      if (ActiveOption.option) ActiveOption.option.classList.remove('active-option');

      ActiveOption.option = soundBtn;
      ActiveOption.option.classList.add('active-option');
    });

    return soundBtn;
  }
}

export default LessonSoundBtn;
