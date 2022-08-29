import GameState from '../game-state';
import FieldState from './field-state';

class MonsterResist {
  static spellChecker(currentSpells: string[], name: string, damage: string) {
    const spells = currentSpells;
    let currendDamage = +damage;

    spells.forEach((spell) => {
      if (spell === name) {
        currendDamage /= 2;
      }
    });

    return currendDamage;
  }

  static handler(name: string, damage: string) {
    const { beastType } = FieldState.beastInstance;
    let currentDamage = +damage;

    if (beastType.includes('cloud') || beastType.includes('облачный')) {
      currentDamage = MonsterResist.spellChecker(GameState.elementalSpells.thunderSpells, name, damage);
    } else if (beastType.includes('lava') || beastType.includes('лавовый')) {
      currentDamage = MonsterResist.spellChecker(GameState.elementalSpells.fireSpells, name, damage);
    } else if (beastType.includes('waterfall') || beastType.includes('водопадный')) {
      currentDamage = MonsterResist.spellChecker(GameState.elementalSpells.waterSpells, name, damage);
    } else if (beastType.includes('tornado') || beastType.includes('ураганный')) {
      currentDamage = MonsterResist.spellChecker(GameState.elementalSpells.windSpells, name, damage);
    }

    return currentDamage.toString();
  }
}

export default MonsterResist;
