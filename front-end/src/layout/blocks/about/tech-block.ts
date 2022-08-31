import CreateElement from '../../elements/create-element';
import State from '../../../scripts/state/state';
import TechDesc from './tech-desc';
import aboutTranslation from '../../../data/about-translation';

import { Tag } from '../../../types/enums';

class TechBlock {
  public static createTechBlock(): HTMLElement {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'about-wrapper' }]);
    const frontend = TechDesc.createTechDesc(
      aboutTranslation.textFront[State.currentLang],
      aboutTranslation.techFront[State.currentLang]
    );
    const backend = TechDesc.createTechDesc(
      aboutTranslation.textBack[State.currentLang],
      aboutTranslation.techBack[State.currentLang]
    );

    wrapper.append(frontend, backend);

    return wrapper;
  }
}

export default TechBlock;
