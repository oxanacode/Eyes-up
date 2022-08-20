import State from '../state/state';

import { Page } from '../../types/enums';

class ChangePage {
  public static changePage(page: Page): void {
    if (State.currentPage === page) return;

    State.currentPage = page;
  }
}

export default ChangePage;
