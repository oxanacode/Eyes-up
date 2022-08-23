import SwitchPage from '../../../scripts/layout/switch-page';
import SectionBtn from '../../elements/section-btn';
import ChosenLessons from './chosen-lessons';

import { RenderHandler } from '../../../types/types';
import { Page, Layout } from '../../../types/enums';

class LayoutBtn {
  public static createLayoutBtn(
    text: string,
    render: RenderHandler,
    layout: Layout
  ): HTMLElement {
    const button = SectionBtn.createSectionBtn(`layout-${layout}`, text);

    button.addEventListener('click', () => {
      ChosenLessons.layout = layout;
      SwitchPage.applyPage(Page.lessons, render);
    });

    return button;
  }
}

export default LayoutBtn;
