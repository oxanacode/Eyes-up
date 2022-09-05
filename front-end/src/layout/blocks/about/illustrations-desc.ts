import CreateElement from '../../elements/create-element';
import State from '../../../scripts/state/state';
import aboutTranslation from '../../../data/about-translation';
import links from '../../../data/links';

import { Tag } from '../../../types/enums';

class IllustrationsDesc {
  public static createIllustrationsDesc(): HTMLElement {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'about-desc' }]);
    const par = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'about-text' }]);
    const desc = CreateElement.createElement(Tag.span);
    const and = CreateElement.createElement(Tag.span);
    const comma = CreateElement.createElement(Tag.span);
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
    const linkThree = CreateElement.createElement(Tag.link, [
      { name: 'class', value: 'about-link' },
      { name: 'href', value: links.Upklyak },
      { name: 'target', value: '_blank' },
    ]);

    desc.textContent = aboutTranslation.illustrationsBy[State.currentLang];
    and.textContent = aboutTranslation.and[State.currentLang];
    comma.textContent = aboutTranslation.comma[State.currentLang];
    linkOne.textContent = aboutTranslation.illustratorOne[State.currentLang];
    linkTwo.textContent = aboutTranslation.illustratorTwo[State.currentLang];
    linkThree.textContent = aboutTranslation.illustratorThree[State.currentLang];
    par.append(desc, linkOne, comma, linkTwo, and, linkThree);
    wrapper.append(par);

    return wrapper;
  }
}

export default IllustrationsDesc;
