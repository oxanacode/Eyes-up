import { TypingAdventureData } from '../../types/interfaces';

class ParseTypingAdventure {
  public static getGameData(data: string): TypingAdventureData {
    return JSON.parse(data);
  }

  public static setGameData(data: TypingAdventureData): string {
    return JSON.stringify(data);
  }
}

export default ParseTypingAdventure;
