import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';

class TechDesc {
  public static createTechDesc(descText: string, techText: string): HTMLElement {
    const desc = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'about-desc' }]);
    const tech = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'about-link' }]);

    desc.innerHTML = descText;
    tech.textContent = techText;
    desc.append(tech);

    return desc;
  }
}

export default TechDesc;
