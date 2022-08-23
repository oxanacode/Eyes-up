import SwitchPage from '../../../scripts/layout/switch-page';
import SectionBtn from '../../elements/section-btn';

import { RenderHandler } from '../../../types/types';
import { Page } from '../../../types/enums';

class GameSectionBtn {
  public static createGameSectionBtn(
    className: string,
    text: string,
    render: RenderHandler
  ): HTMLElement {
    const button = SectionBtn.createSectionBtn(className, text);

    button.addEventListener('click', () => {
      SwitchPage.applyPage(Page.home, render); // ---------------------Page.game
    });

    return button;
  }
}

export default GameSectionBtn;
