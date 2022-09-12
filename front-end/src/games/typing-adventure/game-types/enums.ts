import { Tag, Page, Data } from '../../../types/enums';

enum GameValues {
  heroTimer = 5,
  beastTimer = 3,
  startTimer = 5000,
  allBeastsTypes = 9,
  maxMapBeasts = 9,
  randomSpellsAmount = 1,
  firstAction = 0,
  secondAction = 1,
  thirdAction = 2,
  firstLvl = 1,
  achievementTimer = 7000,
  achievementStyleTop = 2,
  achievementAnotherModal = 17,
  tenSpells = 10,
}

export enum LevelValues {
  increaseLvl = 1,
  firstLvlDone = 2,
  halfGame = 5,
  fullGame = 10,
  maxBeastLvl = 9,
}

export enum MoveValues {
  resultHp = 0,
  shieldEffect = 2,
  hero = 'hero',
  beast = 'beast',
  enMagic = 'magic',
  ruMagic = 'магия',
}

export enum GameName {
  typingPart = 'Typing',
  adventurePart = 'Adventure',
}

export { Tag, Page, Data };

export default GameValues;
