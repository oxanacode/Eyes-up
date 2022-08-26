import { RegExpPattern } from '../types/interfaces';

export const passwordPattern: RegExpPattern = {
  numeric: '0-9',
  special: '!@#$%^&*',
  latinLower: 'a-z',
  latinUpper: 'A-Z',
};

export const loginPattern: RegExpPattern = {
  numeric: '0-9',
  latin: 'a-z',
  cyrillic: 'а-яё',
};
