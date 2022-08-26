import BigBtn from '../../elements/big-btn';
import SwitchPage from '../../../scripts/layout/switch-page';

import { Page } from '../../../types/enums';
import { RenderHandler } from '../../../types/types';

class PromoBtn {
  public static createPromoBtn(text: string, render: RenderHandler): HTMLElement {
    const button = BigBtn.createBigBtn(text);

    button.addEventListener('click', () => {
      SwitchPage.applyPage(Page.layout, render);
    });

    return button;
  }
}

export default PromoBtn;
