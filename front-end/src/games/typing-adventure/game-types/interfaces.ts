import { Page } from './enums';
import RenderHandler from './types';

interface IBeast {
  beastType: string;
  lvl: number;
  hp: number;
  renderCallback: () => void;
  done: boolean;

  createBeast(): HTMLElement;
}

export interface ISpells {
  [index: number]: Record<string, Record<string, string>>;
}

export interface IElementalSpells {
  [index: string]: string[];
}

export interface ISpellsBeastsSelectors {
  [index: string]: string;
}

export interface Idata {
  firstMapRender: boolean;
  firstFieldRender: boolean;
  userLvl: number;
  userSpells: Record<string, string>[];
  gameBeasts: IBeast[];
  achievements: Record<string, boolean>;
}

export interface IappCallbacks {
  switchPage: (page: Page, render: RenderHandler) => void;
  render: () => void;
  page: Page;
}

export default IBeast;
