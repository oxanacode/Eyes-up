import CreateElement from '../../elements/create-element';
import State from '../../../scripts/state/state';
import AboutDesc from './about-desc';
import IllustrationsDesc from './illustrations-desc';
import aboutTranslation from '../../../data/about-translation';
import links from '../../../data/links';

import { Tag } from '../../../types/enums';

class CreditsBlock {
  public static createCreditsBlock(): HTMLElement {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'about-double-wrapper' }]);
    const idea = AboutDesc.createAboutDesc(
      aboutTranslation.inspyredBy[State.currentLang],
      aboutTranslation.typingClub[State.currentLang],
      links.TypingClub
    );
    const illustrations = IllustrationsDesc.createIllustrationsDesc();

    wrapper.append(idea, illustrations);

    return wrapper;
  }
}

export default CreditsBlock;
