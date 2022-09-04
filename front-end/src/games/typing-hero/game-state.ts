import State from './app-scripts/app-state';
import { enKeys, ruKeys, enLibrary, ruLibrary } from './text-content/game-library';

import { IappCallbacks, Iachievement } from './game-types/interfaces';

class GameState {
  static gameWrapper: HTMLElement;

  static appCallbacks: IappCallbacks;

  static firstAppearance = true;

  static lib: Record<string, string>;

  static keys: string[];

  static bestScore: HTMLElement;

  static bestAccuracy: HTMLElement;

  static totalScore: HTMLElement;

  static averageAccuracy: HTMLElement;

  static achievementCurrentStatus: Iachievement;

  static engageState() {
    GameState.keys = State.currentLang === 'en' ? enKeys : ruKeys;
    GameState.lib = State.currentLang === 'en' ? enLibrary : ruLibrary;
  }
}

export default GameState;
