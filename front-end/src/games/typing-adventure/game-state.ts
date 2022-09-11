import State from './app-state';
import { enContent, ruContent } from './game-text-content/text-library';
import {
  enSpells,
  ruSpells,
  enElementalSpells,
  ruElementalSpells,
  enBeastMoves,
  ruBeastMoves,
} from './game-text-content/spells-library';

import IBeast, { ISpells, IElementalSpells, IappCallbacks } from './game-types/interfaces';

class GameState {
  static gameWrapper: HTMLElement;

  static appCallbacks: IappCallbacks;

  static firstAppearance = true;

  static firstFieldAppearance = true;

  static currentLang: string;

  static lib: Record<string, string | string[]>;

  static beastMoves: Record<string, Record<string, string>>;

  static spellsLib: ISpells;

  static elementalSpells: IElementalSpells;

  static userLvl = 1;

  static userHp = 100;

  static userSpells: Record<string, string>[] = [];

  static currentGameBeasts: IBeast[] = [];

  static achievementsCurrentStatus: Record<string, boolean>;

  static clearState() {
    GameState.firstAppearance = true;
    GameState.firstFieldAppearance = true;
    GameState.userLvl = 1;
    GameState.userHp = 100;
    GameState.userSpells = [];
    GameState.currentGameBeasts = [];
    GameState.achievementsCurrentStatus = {};
  }

  static engageState(): void {
    GameState.currentLang = State.currentLang;

    GameState.lib = GameState.currentLang === 'en' ? enContent : ruContent;
    GameState.beastMoves = GameState.currentLang === 'en' ? enBeastMoves : ruBeastMoves;
    GameState.spellsLib = GameState.currentLang === 'en' ? enSpells : ruSpells;
    GameState.elementalSpells = GameState.currentLang === 'en' ? enElementalSpells : ruElementalSpells;
  }
}

export default GameState;
