import { IlevelValues, IlevelMaxScore } from '../game-types/interfaces';

export const levelValues: IlevelValues = {
  1: {
    speed: 5500,
    duration: 30000,
    columns: 5,
  },
  2: {
    speed: 5000,
    duration: 35000,
    columns: 5,
  },
  3: {
    speed: 4500,
    duration: 45000,
    columns: 5,
  },
  4: {
    speed: 4000,
    duration: 45000,
    columns: 5,
  },
  5: {
    speed: 4000,
    duration: 70000,
    columns: 5,
  },
  6: {
    speed: 5500,
    duration: 55000,
    columns: 7,
  },
  7: {
    speed: 5000,
    duration: 75000,
    columns: 7,
  },
  8: {
    speed: 4500,
    duration: 80000,
    columns: 7,
  },
  9: {
    speed: 4000,
    duration: 100000,
    columns: 7,
  },
  10: {
    speed: 4000,
    duration: 150000,
    columns: 7,
  },
};

export const levelMaxScore: IlevelMaxScore = {
  1: 250,
  2: 350,
  3: 500,
  4: 550,
  5: 850,
  6: 700,
  7: 1050,
  8: 1190,
  9: 1750,
  10: 2590,
};
