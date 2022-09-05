import CreateElement from './overal-func.ts/create-element';
import GameState from './game-state';
import GameMap from './game-map';
import ApiHandler from './api-handler';
import Modal from './overal-func.ts/create-modal';
import State from './app-state';
import ApiService from '../../scripts/api/api-service';

import { Page, Tag } from './game-types/enums';
import RenderHandler from './game-types/types';

class TypingAdventure {
  static start(
    appPage: Page,
    switchPageCallback: (page: Page, render: RenderHandler) => void,
    renderCallback: () => void
  ) {
    const appCallbacks = {
      page: appPage,
      switchPage: switchPageCallback,
      render: renderCallback,
    };

    const gameView = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'game-wrapper' }]);
    GameState.gameWrapper = gameView;

    if (State.currentUser.login !== State.notAuthorised) {
      ApiService.getUser(State.currentUser.login).then((user) => {
        GameState.engageState();
        ApiHandler.getData(user, GameMap.innerGameMapRender);
        GameState.appCallbacks = appCallbacks;

        const mapView = GameMap.mapRender();

        if (GameState.firstAppearance) {
          Modal.createWelcomeModal(ApiHandler.setData);
        }

        gameView.append(mapView);
      });
    } else {
      GameState.engageState();
      GameState.appCallbacks = appCallbacks;

      const mapView = GameMap.mapRender();

      if (GameState.firstAppearance) {
        Modal.createWelcomeModal(ApiHandler.setData);
      }

      gameView.append(mapView);
    }

    return gameView;
  }
}

export default TypingAdventure;
