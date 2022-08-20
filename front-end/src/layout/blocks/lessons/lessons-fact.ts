import CreateElement from '../../elements/create-element';
import facts from '../../../data/facts';
import State from '../../../scripts/state/state';

import { Tag } from '../../../types/enums';

class LessonsFact {
  public static createLessonsTest(): HTMLElement {
    const fact = CreateElement.createElement(Tag.section, [
      { name: 'class', value: 'layout-fact' },
    ]);
    const factBg = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'fact-bg' },
    ]);
    const factText = CreateElement.createElement(Tag.par, [
      { name: 'class', value: 'base-text' },
    ]);
    const randomFactNumber = Math.floor(Math.random() * facts.length);

    factText.textContent = facts[randomFactNumber][State.currentLang];
    fact.append(factBg, factText);

    return fact;
  }
}

export default LessonsFact;
