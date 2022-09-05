import { Tag, Page, Data } from '../../../types/enums';

export { Tag, Page, Data };

export enum GameName {
  typingPart = 'Typing',
  heroPart = 'Hero',
}

export enum GameValues {
  marginRoad = 50,
  keysStep = 100,
  keyCheck = 1,
  keyCounterStep = 1,
  hundredPercent = 100,
  resultTimeMultiplier = 1.5,
  completeModal = 5000,
  msMultiplier = 1000,
  maxLvls = 10,
  startScore = 0,
  initialValue = 0,
}

export enum PointsType {
  score = 'score',
  accuracy = 'accuracy',
  scorePoint = 10,
  basePoints = 0,
  basePointsContent = '0',
  best = 'best',
  total = 'total',
  average = 'average',
}

export enum AchievementsValues {
  hero = 10,
  legend = 11,
  achievementStyleTop = 2,
  achievementAnotherModal = 17,
  achievementTimer = 7000,
}

export enum SandboxVadilValues {
  speedMin = 1000,
  speedMax = 10000,
  durationMin = 10000,
  durationMax = 150000,
  columnsMin = 3,
  columnsMax = 7,
}
