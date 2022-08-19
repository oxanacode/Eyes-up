import UpdatePage from './elements/update-page';
import State from '../scripts/state/state';

import { Page } from '../types/enums';

class RenderPage {
  public static renderInteractivePage(): void {
    const page = UpdatePage.getPage();
    // const main = CreateMain

    // page.append(main);
  }

  public static renderStaticPage(): void {
    const page = UpdatePage.getPage();
    // const header = CreateHeader
    // const main = CreateMain
    // const footer = CreateFooter

    // page.append(header, main, footer);
  }

  public static renderPage(): void {
    UpdatePage.clearPage();

    if (State.currentPage === Page.lesson || State.currentPage === Page.game) {
      RenderPage.renderInteractivePage();
    } else {
      RenderPage.renderStaticPage();
    }
  }
}

export default RenderPage;
