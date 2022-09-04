class LevelState {
  static lvlWrapper: HTMLElement;

  static lvlColumns: HTMLElement[];

  static scoreWrapper: HTMLElement;

  static accuracyWrapper: HTMLElement;

  static lvlScore = 0;

  static lvlAccuracy = 0;

  static currentFieldKeys: (HTMLElement | null)[] = [];

  static currentPressKeys: string[] = [];

  static matchedKeys: string[] = [];
}

export default LevelState;
