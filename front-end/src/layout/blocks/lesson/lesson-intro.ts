import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import CreateElement from '../../elements/create-element';
import LessonState from './lesson-state';

import { Tag } from '../../../games/typing-hero/game-types/enums';
import { LessonTip } from '../../../types/enums';

class LessonIntro {
  public static currentTip = LessonTip.first;

  public static remove(overlay: HTMLElement, wrapper: HTMLElement): void {
    overlay.remove();
    wrapper.remove();
    LessonIntro.currentTip = LessonTip.first;
  }

  public static createLastTip(text: HTMLElement): void {
    const lastText = text;
    const firstPar = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'intro-text-accent' }]);
    const secondPar = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'intro-text' }]);

    firstPar.textContent = translation.lessonTipFifth1[State.currentLang];
    secondPar.textContent = translation.lessonTipFifth2[State.currentLang];
    lastText.textContent = '';
    lastText.classList.add('intro-text-wrapper');
    lastText.append(firstPar, secondPar);
  }

  public static show(): void {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-intro' }]);
    const overlay = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'intro-overlay' }]);
    const img = CreateElement.createElement(Tag.img, [{ name: 'class', value: 'intro-img' }]);
    const text = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'intro-text' }]);
    const skipBtn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'intro-skip-btn' }]);
    const nextBtn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'intro-next-btn' }]);
    const imgPath = './assets/images/lesson/lesson-tip';
    const keyF = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'intro-text-key' }]);
    const keyJ = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'intro-text-key' }]);
    const tipStart = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'intro-text' }]);
    const tipMiddle = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'intro-text' }]);
    const tipEnd = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'intro-text' }]);
    const btnsWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'intro-btns-wrapper' }]);
    (img as HTMLImageElement).src = `${imgPath}-${LessonTip.first}-${State.currentTheme}.svg`;
    text.textContent = translation.lessonTipFirst[State.currentLang];
    skipBtn.textContent = translation.lessonTipSkip[State.currentLang];
    nextBtn.textContent = translation.lessonTipNext[State.currentLang];
    keyF.textContent = translation.lessonTipF[State.currentLang];
    keyJ.textContent = translation.lessonTipJ[State.currentLang];
    tipStart.textContent = translation.lessonTipSecond[State.currentLang];
    tipMiddle.textContent = translation.lessonTipSecondMiddle[State.currentLang];
    tipEnd.textContent = translation.lessonTipSecondEnd[State.currentLang];
    btnsWrapper.append(skipBtn, nextBtn);
    wrapper.append(text, img, btnsWrapper);
    LessonState.page.append(wrapper, overlay);
    nextBtn.addEventListener('click', () => {
      switch (LessonIntro.currentTip) {
        case 1:
          (img as HTMLImageElement).src = `${imgPath}-${LessonTip.second}-${State.currentTheme}.svg`;
          text.textContent = '';
          text.append(tipStart, keyF, tipMiddle, keyJ, tipEnd);
          LessonIntro.currentTip = LessonTip.second;
          break;
        case 2:
          (img as HTMLImageElement).src = `${imgPath}-${LessonTip.third}-${State.currentTheme}.svg`;
          text.textContent = translation.lessonTipThird[State.currentLang];
          LessonIntro.currentTip = LessonTip.third;
          break;
        case 3:
          (img as HTMLImageElement).src = `${imgPath}-${LessonTip.fourth}-${State.currentTheme}.svg`;
          text.textContent = translation.lessonTipFourth[State.currentLang];
          LessonIntro.currentTip = LessonTip.fourth;
          break;
        case 4:
          img.remove();
          LessonIntro.createLastTip(text);
          LessonIntro.currentTip = LessonTip.fifth;
          break;
        default:
          LessonIntro.remove(overlay, wrapper);
      }
    });
    skipBtn.addEventListener('click', () => {
      LessonIntro.remove(overlay, wrapper);
    });
    overlay.addEventListener('click', () => {
      LessonIntro.remove(overlay, wrapper);
    });
  }
}

export default LessonIntro;
