import './style.scss';

import GameState from './game-state';
import GameRender from './game-render';
import ApiHandler from './api-handler';
import Modal from './overal-func.ts/create-modal';

import { Page } from './game-types/enums';
import RenderHandler from './game-types/types';

class TypingAdventure {
  static start(
    appPage: Page,
    switchPageCallback: (page: Page, render: RenderHandler) => void,
    renderCallback: () => void
  ) {
    GameState.engageState();

    const appCallbacks = {
      page: appPage,
      switchPage: switchPageCallback,
      render: renderCallback,
    };

    GameState.appCallbacks = appCallbacks;

    ApiHandler.getData();

    const gameView = GameRender.startRender();

    if (GameState.firstAppearance) {
      Modal.createWelcomeModal();
    }

    return gameView;
  }
}

export default TypingAdventure;
