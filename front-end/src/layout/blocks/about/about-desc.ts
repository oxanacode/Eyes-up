import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';

class AboutDesc {
  public static createAboutDesc(descText: string, linkText: string, linkUrl: string): HTMLElement {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'about-desc' }]);
    const par = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'about-text' }]);
    const desc = CreateElement.createElement(Tag.span);
    const link = CreateElement.createElement(Tag.link, [
      { name: 'class', value: 'about-link' },
      { name: 'href', value: linkUrl },
      { name: 'target', value: '_blank' },
    ]);

    desc.textContent = descText;
    link.textContent = linkText;
    par.append(desc, link);
    wrapper.append(par);

    return wrapper;
  }
}

export default AboutDesc;
