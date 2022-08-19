import { Complexity, Lang, Page, Theme } from './enums';

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
  language: Lang;
  name: string;
  complexity: Complexity;
  text: string;
}

export interface Query {
  language: Lang;
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
  alternativeLang: Lang;
  currentTheme: Theme;
  alternativeTheme: Theme;
}
