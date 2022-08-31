import CreateElement from '../../elements/create-element';
import State from '../../../scripts/state/state';
import aboutTranslation from '../../../data/about-translation';
import links from '../../../data/links';

import { Tag } from '../../../types/enums';

class IllustrationsDesc {
  public static createIllustrationsDesc(): HTMLElement {
    const desc = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'about-desc' }]);
    const and = CreateElement.createElement(Tag.span);
    const linkOne = CreateElement.createElement(Tag.link, [
      { name: 'class', value: 'about-link' },
      { name: 'href', value: links.SpectrumUI },
      { name: 'target', value: '_blank' },
    ]);
    const linkTwo = CreateElement.createElement(Tag.link, [
      { name: 'class', value: 'about-link' },
      { name: 'href', value: links.AlzeaArafat },
      { name: 'target', value: '_blank' },
    ]);

    desc.textContent = aboutTranslation.illustrationsBy[State.currentLang];
    and.textContent = aboutTranslation.and[State.currentLang];
    linkOne.textContent = aboutTranslation.illustratorOne[State.currentLang];
    linkTwo.textContent = aboutTranslation.illustratorTwo[State.currentLang];
    desc.append(linkOne, and, linkTwo);

    return desc;
  }
}

export default IllustrationsDesc;
