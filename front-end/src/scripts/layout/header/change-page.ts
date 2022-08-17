import State from '../../state';
import RenderPage from '../../../layout/render-page';

import { Page } from '../../../types/enums';

class ChangePage {
  public static changePage(page: Page): void {

    if (State.currentPage === page) return;

    State.currentPage = page;
    RenderPage.renderPage();
  }
}

export default ChangePage;