import SwitchPage from '../../../scripts/layout/switch-page';
import SectionBtn from '../../elements/section-btn';

import { RenderHandler } from '../../../types/types';
import { Page } from '../../../types/enums';

class GameSectionBtn {
  public static createGameSectionBtn(
    className: string,
    text: string,
    gamePage: Page,
    render: RenderHandler
  ): HTMLElement {
    const button = SectionBtn.createSectionBtn(className, text);

    if (gamePage === Page.gameOne) {
      button.addEventListener('click', () => {
        SwitchPage.applyPage(Page.gameOne, render);
      });
    } else if (gamePage === Page.gameTwo) {
      button.addEventListener('click', () => {
        SwitchPage.applyPage(Page.gameTwo, render);
      });
    }

    return button;
  }
}

export default GameSectionBtn;
