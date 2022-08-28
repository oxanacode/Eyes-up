import GameState from '../game-state';
import Random from '../overal-func.ts/random-funcs';
import Beast from './beast-creater';

import GameValues from '../game-types/enums';

class CurrentBeasts {
  static createBeasts(renderCallback: () => void): void {
    const currentLvl = GameState.userLvl;
    const nums = Random.createRandomNums(currentLvl, GameValues.allBeastsTypes);
    const lengthArrOfBeasts = GameState.currentGameBeasts.length;

    for (let i = lengthArrOfBeasts; i < currentLvl; i += 1) {
      const currentTitle = nums[i];
      const currentBeastLvl = i + 1;
      const beastType = GameState.lib.beastTitle[currentTitle];
      const beastHp = Random.randomBeastHp(currentBeastLvl);

      const beast = new Beast(beastType, currentBeastLvl, beastHp, renderCallback, false);

      GameState.currentGameBeasts.push(beast);
    }
  }
}

export default CurrentBeasts;
