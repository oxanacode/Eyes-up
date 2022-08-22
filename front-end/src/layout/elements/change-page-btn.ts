import BigBtn from './big-btn';
import SwitchPage from '../../scripts/layout/switch-page';
import SectionBtn from './section-btn';

import { Page, Btn } from '../../types/enums';
import { RenderHandler } from '../../types/types';

class ChangePageBtn {
  public static createChangePageBtn(
    btn: Btn,
    text: string,
    page: Page,
    render: RenderHandler,
    className?: string
  ): HTMLElement {
    let button: HTMLElement;

    if (btn === Btn.section)
      button = SectionBtn.createSectionBtn(<string>className, text);
    else button = BigBtn.createBigBtn(text);

    BigBtn.createBigBtn(text);

    button.addEventListener('click', () => {
      SwitchPage.applyPage(page, render);
    });

    return button;
  }
}

export default ChangePageBtn;
