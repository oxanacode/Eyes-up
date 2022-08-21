import CreateElement from './create-element';
import SectionTitle from './section-title';
import SwitchPage from '../../scripts/layout/switch-page';

import { Tag, Page } from '../../types/enums';
import { RenderHandler } from '../../types/types';

class SectionBtn {
  public static createSectionBtn(
    className: string,
    title: string,
    page: Page,
    render: RenderHandler
  ): HTMLElement {
    const btn = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: `${className}-btn section-btn` },
    ]);
    const btnTitle = SectionTitle.createSectionTitle(title);
    const imgContainer = CreateElement.createElement(Tag.div, [
      { name: 'class', value: `${className}-bg section-btn-bg` },
    ]);

    btn.append(btnTitle, imgContainer);
    btn.addEventListener('click', () => {
      SwitchPage.applyPage(page, render);
    });

    return btn;
  }
}

export default SectionBtn;
