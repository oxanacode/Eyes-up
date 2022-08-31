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

export interface BadgeContent {
  title: string;
  text: string;
}

export interface BadgeDescription {
  en: BadgeContent;
  ru: BadgeContent;
}

export interface BadgesDescription {
  [key: string]: BadgeDescription;
}

export interface Links {
  [key: string]: string;
}

export interface Test {
  _id: string;
  __v: number;
  language: Lang;
  text: string;
}

interface TypingAdventureBeast {
  beastType: string;
  lvl: number;
  hp: number;
  renderCallback: () => void;
  done: boolean;
  createBeast(): HTMLElement;
}

export interface TypingAdventureData {
  firstMapRender: boolean;
  firstFieldRender: boolean;
  userLvl: number;
  userSpells: Record<string, string>[];
  gameBeasts: TypingAdventureBeast[];
  achievements: Record<string, boolean>;
}

export interface UserLessons {
  [key: string]: {
    bestSpeed: number;
    bestAccuracy: number;
    bestScore: number;
  };
}

export interface UserTesting {
  bestSpeed: number;
  bestAccuracy: number;
}

export interface VirtualKeys {
  [key: string]: HTMLElement;
}
