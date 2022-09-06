import GameState from './game-state';
import CreateElement from './overal-func.ts/create-element';
import CurrentBeasts from './beasts/current-beasts';
import Achievements from './achievements';
import GameInfo from './game-info';
import Reset from './reset-state';
import ApiHandler from './api-handler';

import GameValues, { Tag, GameName } from './game-types/enums';

class GameMap {
  static mapRender(): HTMLElement {
    const map = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'game-map' }]);
    const beastsWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'game-map-beasts-wrapper' }]);
    const header = GameMap.createMapHeader();
    const beasts = GameMap.mapBeastsRender();
    const inactiveCells = GameMap.createInactiveCells();

    beastsWrapper.append(...beasts, ...inactiveCells);
    map.append(header, beastsWrapper);

    return map;
  }

  static mapBeastsRender() {
    CurrentBeasts.createBeasts(GameMap.innerGameMapRender);
    return GameState.currentGameBeasts.map((beast) => beast.createBeast(GameMap.innerGameMapRender));
  }

  static innerGameMapRender() {
    const mapView = GameMap.mapRender();

    GameState.gameWrapper.innerHTML = '';
    GameState.gameWrapper.append(mapView);
    Achievements.checker();
    ApiHandler.setData();
  }

  static createMapHeader() {
    const mapHeaderWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'map-header-wrapper' }]);
    const layoutButton = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'adventure-back-button' }]);
    const infoButton = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'adventure-info-button' }]);
    const resetButton = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: 'adventure-reset-state-button' },
    ]);
    const buttonsWrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'map-header-buttons-wrapper' },
    ]);
    const gameTitle = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'adventure-menu-title-wrapper' }]);
    const typingTitle = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'adventure-menu-typing-title' }]);
    const adventureTitle = CreateElement.createElement(Tag.par, [
      { name: 'class', value: 'adventure-menu-adventure-title' },
    ]);

    typingTitle.textContent = GameName.typingPart;
    adventureTitle.textContent = GameName.adventurePart;
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
    gameTitle.append(typingTitle, adventureTitle);
    buttonsWrapper.append(resetButton, infoButton);
    mapHeaderWrapper.append(layoutButton, gameTitle, buttonsWrapper);

    return mapHeaderWrapper;
  }

  static createInactiveCells() {
    const beastAmount = GameState.currentGameBeasts.length;
    const cells: HTMLElement[] = [];

    for (let i = beastAmount + 1; i < GameValues.maxMapBeasts; i += 1) {
      const beastWrapper = CreateElement.createElement(Tag.div, [
        { name: 'class', value: `beast-wrapper inactive-cell` },
      ]);

      cells.push(beastWrapper);
    }

    return cells;
  }
}

export default GameMap;
