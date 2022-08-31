import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';

class TechDesc {
  public static createTechDesc(descText: string, techText: string): HTMLElement {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'about-desc' }]);
    const par = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'about-text' }]);
    const desc = CreateElement.createElement(Tag.span);
    const tech = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'about-link' }]);

    desc.innerHTML = descText;
    tech.textContent = techText;
    par.append(desc, tech);
    wrapper.append(par);

    return wrapper;
  }
}

export default TechDesc;
