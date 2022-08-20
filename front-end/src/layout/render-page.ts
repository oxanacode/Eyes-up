import ManagePage from '../scripts/layout/manage-page';
import ManageTheme from '../scripts/layout/manage-theme';
import State from '../scripts/state/state';
import Header from './blocks/header/header';
import CreateFooter from './blocks/footer/render-footer';
import HomeMain from './blocks/home/home-main';

import { Page } from '../types/enums';

class RenderPage {
  public static renderInteractivePage(): void {
    // const page = ManagePage.getPage();
    // const main = CreateMain
    // page.append(main);
  }

  public static renderStaticPage(): void {
    const page = ManagePage.getPage();
    const header = Header.createHeader(RenderPage.renderPage);
    const main = HomeMain.createHomeMain();
    const footer = CreateFooter.createFooter();

    page.append(header, main, footer);
  }

  public static renderPage(): void {
    ManagePage.clearPage();
    ManageTheme.applyTheme();

    if (State.currentPage === Page.lesson || State.currentPage === Page.game) {
      RenderPage.renderInteractivePage();
    } else {
      RenderPage.renderStaticPage();
    }
  }
}

export default RenderPage;
