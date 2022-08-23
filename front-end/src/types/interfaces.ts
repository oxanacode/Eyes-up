import { Complexity, Lang, Page, Theme, Layout } from './enums';

export interface Attribute {
  name: string;
  value: string;
}

export interface User {
  _id: string;
  __v: number;
  login: string;
  password: string;
  avatar: number;
}

export interface Lesson {
  _id: string;
  __v: number;
  layout: Layout;
  index: number;
  title: string;
  complexity: Complexity;
  minAccuracy: number;
  minSpeed: number;
  starSpeed: number;
  content: string;
}

export interface Query {
  layout: Layout;
  complexity?: Complexity;
}

export interface CurrentUser {
  login: string;
  avatar: number;
}

export interface CurrentState {
  currentUser: CurrentUser;
  currentPage: Page;
  currentLang: Lang;
  currentTheme: Theme;
  currentLayout: Layout;
  currentComplexity: Complexity | undefined;
}
