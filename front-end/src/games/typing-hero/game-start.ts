import CreateElement from './app-scripts/app-create-element';
import Menu from './game-menu';
import GameState from './game-state';
import Modal from './modal';
import Achievements from './achievements';
import State from './app-scripts/app-state';
import ApiService from '../../scripts/api/api-service';
import UserData from './data-handler';
import Reset from './reset-state';
import Spinner from '../../layout/elements/spinner';

import { Tag, Page } from './game-types/enums';
import { RenderHandler } from './game-types/types';
import { IappCallbacks } from './game-types/interfaces';

class TypingHero {
  static start(
    appPage: Page,
    switchPageCallback: (page: Page, render: RenderHandler) => void,
    renderCallback: () => void
  ) {
    const appCallbacks: IappCallbacks = {
      page: appPage,
      switchPage: switchPageCallback,
      render: renderCallback,
    };
    const gameView = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'game-wrapper' }]);
    const { spinner, loadingText } = Spinner.create('spinner spinner-in-wrapper');
    const loaderWrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'loader-wrapper game-loader' },
    ]);

    GameState.gameWrapper = gameView;
    loaderWrapper.append(spinner, loadingText);
    gameView.append(loaderWrapper);

    if (State.currentUser.login !== State.notAuthorised) {
      ApiService.getUser(State.currentUser.login).then((user) => {
        GameState.engageState();
        Reset.state();
        Reset.resetLvlsPoints();
        Reset.achievementClear();
        UserData.getData(user);
        GameState.appCallbacks = appCallbacks;

        const menu = Menu.createMenu();

        if (GameState.firstAppearance) {
          Modal.startModal();
        }
        if (GameState.achievementCurrentStatus) {
          Achievements.current = GameState.achievementCurrentStatus;
        }

        loaderWrapper.remove();
        gameView.append(menu);
      });
    } else {
      GameState.engageState();
      Reset.state();
      Reset.resetLvlsPoints();
      Reset.achievementClear();
      GameState.appCallbacks = appCallbacks;

      const menu = Menu.createMenu();

      if (GameState.firstAppearance) {
        Modal.startModal();
      }

      loaderWrapper.remove();
      gameView.append(menu);
    }

    return gameView;
  }
}

export default TypingHero;
