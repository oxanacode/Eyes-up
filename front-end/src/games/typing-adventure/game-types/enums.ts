import { Tag, Page, Data } from '../../../types/enums';

enum GameValues {
  heroTimer = 5,
  beastTimer = 3,
  startTimer = 5000,
  allBeastsTypes = 9,
  maxMapBeasts = 10,
  randomSpellsAmount = 1,
  firstAction = 0,
  secondAction = 1,
  thirdAction = 2,
  firstLvl = 1,
  achievementTimer = 7000,
  achievementStyleTop = 2,
  achievementAnotherModal = 17,
}

export enum GameName {
  typingPart = 'Typing',
  adventurePart = 'Adventure',
}

export { Tag, Page, Data };

export default GameValues;
