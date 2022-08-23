import State from '../state/state';
import ManageState from '../state/manage-state';

import { Page } from '../../types/enums';
import { RenderHandler } from '../../types/types';

class SwitchPage {
  public static changePage(page: Page): void {
    State.currentPage = page;
  }

  public static applyPage(page: Page, render: RenderHandler): void {
    if (State.currentPage !== page || State.currentPage === Page.lessons) {
      SwitchPage.changePage(page);
      ManageState.saveState();
      render();
    }
  }
}

export default SwitchPage;
