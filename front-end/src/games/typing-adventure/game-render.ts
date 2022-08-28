import CreateElement from './overal-func.ts/create-element';
import GameState from './game-state';
import GameMap from './game-map';

import { Tag } from './game-types/enums';

class GameRender {
  static startRender() {
    const gameView = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'game-wrapper' }]);
    const mapView = GameMap.mapRender();

    console.log(GameState.userLvl);

    GameState.gameWrapper = gameView;
    gameView.append(mapView);

    return gameView;
  }
}

export default GameRender;
