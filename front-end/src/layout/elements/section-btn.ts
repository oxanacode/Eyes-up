import CreateElement from './create-element';
import SectionTitle from './section-title';

import { Tag } from '../../types/enums';

class SectionBtn {
  public static createSectionBtn(className: string, title: string): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: `${className}-btn section-btn` }]);
    const btnTitle = SectionTitle.createSectionTitle(title);
    const imgContainer = CreateElement.createElement(Tag.div, [
      { name: 'class', value: `${className}-bg section-btn-bg` },
    ]);

    btn.append(btnTitle, imgContainer);

    return btn;
  }
}

export default SectionBtn;
