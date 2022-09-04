import { TypingHeroData } from '../../types/interfaces';

class ParseTypingHero {
  public static getGameData(data: string): TypingHeroData {
    return JSON.parse(data);
  }

  public static setGameData(data: TypingHeroData): string {
    return JSON.stringify(data);
  }
}

export default ParseTypingHero;
