import IBeast from '../game-types/interfaces';

class FieldState {
  static FieldStatus: boolean;

  static beastInstance: IBeast;

  static heroHp: HTMLElement;

  static heroView: HTMLElement;

  static beastHp: HTMLElement;

  static beastView: HTMLElement;

  static lvlSpells: Record<string, string>[];

  static heroSpells: Record<string, string>[];

  static spellCapture = false;

  static spellsPanel: HTMLElement;

  static currentMove = true;

  static inputStr: string;

  static timer: HTMLElement;

  static timerCounter: number;

  static actionTotal: HTMLElement;

  static heroPanel: HTMLElement;

  static beastPanel: HTMLElement;

  static beastTypeAction: Record<string, string>[] = [];
}

export default FieldState;
