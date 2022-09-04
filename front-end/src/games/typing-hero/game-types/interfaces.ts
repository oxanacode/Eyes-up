import { Page } from './enums';
import { RenderHandler } from './types';

export interface IlevelValues {
  [index: string]: Record<string, number>;
}

export interface IlevelMaxScore {
  [index: string]: number;
}

export interface Idata {
  firstAppearance: boolean;
  levelsPoints: IlevelValues;
  levelsDone: number;
  bestScore: string | number;
  bestAccuracy: string | number;
  totalScore: string | number;
  averageAccuracy: string | number;
}

export interface IappCallbacks {
  switchPage: (page: Page, render: RenderHandler) => void;
  render: () => void;
  page: Page;
}
