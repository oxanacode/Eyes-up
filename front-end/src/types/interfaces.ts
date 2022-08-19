import { Complexity, Lang } from './enums';

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
  language: string;
  name: string;
  complexity: string;
  text: string;
}

export interface Query {
  language: Lang;
  complexity?: Complexity;
}
