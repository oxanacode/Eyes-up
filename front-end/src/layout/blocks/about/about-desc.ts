import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';

class AboutDesc {
  public static createAboutDesc(descText: string, linkText: string, linkUrl: string): HTMLElement {
    const desc = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'about-desc' }]);
    const link = CreateElement.createElement(Tag.link, [
      { name: 'class', value: 'about-link' },
      { name: 'href', value: linkUrl },
      { name: 'target', value: '_blank' },
    ]);

    desc.textContent = descText;
    link.textContent = linkText;
    desc.append(link);

    return desc;
  }
}

export default AboutDesc;
