import GameState from './game-state';
import CreateElement from './overal-func.ts/create-element';
import CurrentBeasts from './beasts/current-beasts';
import Achievements from './achievements';
import GameInfo from './game-info';
import Reset from './reset-state';
import ApiHandler from './api-handler';

import { Tag } from './game-types/enums';

class GameMap {
  static mapRender(): HTMLElement {
    const map = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'game-map' }]);
    const buttons = GameMap.createMapButtons();
    const beasts = GameMap.mapBeastsRender();

    map.append(buttons, ...beasts);

    return map;
  }

  static mapBeastsRender() {
    CurrentBeasts.createBeasts(GameMap.innerGameMapRender);
    return GameState.currentGameBeasts.map((beast) => beast.createBeast());
  }

  static innerGameMapRender() {
    const mapView = GameMap.mapRender();

    GameState.gameWrapper.innerHTML = '';
    GameState.gameWrapper.append(mapView);
    Achievements.checker();
    ApiHandler.setData();
  }

  static createMapButtons() {
    const buttonWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'map-buttons-wrapper' }]);
    const layoutButton = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'layout-button' }]);
    const infoButton = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'game-info-button' }]);
    const resetButton = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'reset-state-button' }]);

    layoutButton.textContent = GameState.lib.layoutButton as string;
    resetButton.textContent = GameState.lib.resetButton as string;
    infoButton.textContent = GameState.lib.gameInfoTitle as string;

    layoutButton.addEventListener('click', () => {
      GameState.appCallbacks.switchPage(GameState.appCallbacks.page, GameState.appCallbacks.render);
      GameState.gameWrapper.remove();
    });
    infoButton.addEventListener('click', () => {
      GameInfo.createInfoModal();
    });
    resetButton.addEventListener('click', () => {
      Reset.resetMethod(GameMap.innerGameMapRender);
    });

    buttonWrapper.append(layoutButton, infoButton, resetButton);

    return buttonWrapper;
  }
}

export default GameMap;
