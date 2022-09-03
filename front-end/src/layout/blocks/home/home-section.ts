import CreateElement from '../../elements/create-element';
import MainTitle from '../../elements/main-title';

import { Tag } from '../../../types/enums';

class HomeSection {
  public static createHomeSection(sectionClass: string, sectionTitle: string, sectionText: string): HTMLElement {
    const section = CreateElement.createElement(Tag.section, [{ name: 'class', value: `home-${sectionClass}` }]);
    const title = MainTitle.createMainTitle(sectionTitle);
    const text = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'home-text' }]);
    const imgContainer = CreateElement.createElement(Tag.div, [{ name: 'class', value: `home-${sectionClass}-bg` }]);
    const contentContainer = CreateElement.createElement(Tag.div, [
      { name: 'class', value: `home-${sectionClass}-content` },
    ]);

    title.textContent = sectionTitle;
    text.textContent = sectionText;
    contentContainer.append(title, text);
    section.append(contentContainer, imgContainer);

    return section;
  }
}

export default HomeSection;
