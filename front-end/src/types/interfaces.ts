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
  testing: string;
  lessonsEn: string;
  lessonsRu: string;
  typingAdventure: string;
  typingHero: string;
  badges: string;
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

export interface RegExpPattern {
  [key: string]: string;
}

export interface TranslationOption {
  en: string;
  ru: string;
}

export interface Translation {
  [key: string]: TranslationOption;
}

export interface Test {
  _id: string;
  __v: number;
  language: Lang;
  text: string;
}
