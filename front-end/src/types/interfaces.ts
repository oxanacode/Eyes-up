import {
  Complexity,
  Lang,
  Page,
  Theme,
  Layout,
  LessonBg,
  LessonFontSize,
  LessonFontFamily,
  LessonSound,
  LessonSkin,
} from './enums';

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
  currentLessonBg: LessonBg;
  currentLessonFontSize: LessonFontSize;
  currentLessonFontFamily: LessonFontFamily;
  currentLessonSound: LessonSound;
  currentLessonSkin: LessonSkin;
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

export interface Developer {
  name: string;
  nickname: string;
  gitHubLink: string;
  avatar: string;
}

export interface Developers {
  [key: string]: Developer;
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
  createBeast(mapCallback: () => void): HTMLElement;
}

export interface TypingAdventureData {
  firstMapRender: boolean;
  firstFieldRender: boolean;
  userLvl: number;
  userSpells: Record<string, string>[];
  uniqueBeasts: number;
  gameBeasts: TypingAdventureBeast[];
  achievements: Record<string, boolean>;
}

export interface TypingHeroData {
  firstAppearance: boolean;
  levelsPoints: { [index: string]: Record<string, number> };
  levelsDone: number;
  bestScore: string | number;
  bestAccuracy: string | number;
  totalScore: string | number;
  averageAccuracy: string | number;
}

export interface UserLessons {
  [key: string]: UserLesson;
}

export interface UserLesson {
  lastSpeed: number;
  lastAccuracy: number;
  lastScore: number;
}

export interface UserTesting {
  lastSpeed: number;
  lastAccuracy: number;
}

export interface VirtualKeys {
  [key: string]: HTMLElement;
}

export interface Match {
  [key: string]: string;
}
