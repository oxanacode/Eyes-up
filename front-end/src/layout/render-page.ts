import ManagePage from '../scripts/layout/manage-page';
import SwitchTheme from '../scripts/layout/switch-theme';
import State from '../scripts/state/state';
import Header from './blocks/header/header';
import CreateFooter from './blocks/footer/render-footer';
import HomeMain from './blocks/home/home-main';
import LayoutMain from './blocks/lessons/lessons-layout-main';
import GamesMain from './blocks/games/games-main';
import ManageState from '../scripts/state/manage-state';
import LessonsMain from './blocks/lessons/lessons-main';
import TestMain from './blocks/testing/test-main';
import TypingAdventure from '../games/typing-adventure/game-start';
import SwitchPage from '../scripts/layout/switch-page';
import LessonMain from './blocks/lesson/lesson-main';
import AboutMain from './blocks/about/about-main';
import ManageModal from '../scripts/layout/manage-modal';

import { Page } from '../types/enums';

class RenderPage {
  public static renderInteractivePage(): void {
    const page = ManagePage.getPage();
    let main: HTMLElement;

    switch (State.currentPage) {
      case Page.lesson:
        main = LessonMain.createLessonMain(RenderPage.renderPage);
        break;
      case Page.test:
        main = TestMain.createTestMain(RenderPage.renderPage);
        break;
      case Page.gameOne:
        main = TypingAdventure.start(Page.games, SwitchPage.applyPage, RenderPage.renderPage);
        break;
      default:
        main = LessonsMain.createLessonsMain(RenderPage.renderPage);
    }

    page.append(main);
  }

  public static renderStaticPage(): void {
    const page = ManagePage.getPage();
    const header = Header.createHeader(RenderPage.renderPage);
    let main: HTMLElement;
    const footer = CreateFooter.createFooter();

    switch (State.currentPage) {
      case Page.layout:
        main = LayoutMain.createLayoutMain(RenderPage.renderPage);
        break;
      case Page.games:
        main = GamesMain.createGamesMain(RenderPage.renderPage);
        break;
      case Page.about:
        main = AboutMain.createAboutMain();
        break;
      default:
        main = HomeMain.createHomeMain(RenderPage.renderPage);
    }

    page.append(header, main, footer);
  }

  public static renderPage(): void {
    ManageState.updateState();
    ManagePage.clearPage();
    SwitchTheme.swapTheme();
    window.addEventListener('resize', () => {
      ManageModal.closeBurgerMenuHandler();
    });

    if (
      State.currentPage === Page.lesson ||
      State.currentPage === Page.gameOne ||
      State.currentPage === Page.lessons ||
      State.currentPage === Page.test
    ) {
      RenderPage.renderInteractivePage();
    } else {
      RenderPage.renderStaticPage();
    }
  }
}

export default RenderPage;
