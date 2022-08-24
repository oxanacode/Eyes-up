import { Translation } from '../types/interfaces';

const registrationErrors: Translation = {
  noLogin: {
    en: 'Please enter login.',
    ru: 'Пожалуйста, введите логин.',
  },
  noPassword: {
    en: 'Please enter password.',
    ru: 'Пожалуйста, введите пароль.',
  },
  incorrectLogin: {
    en: 'Invalid login. Hover over the icon to see more details.',
    ru: 'Неверный логин. Коснитесь иконки, чтобы узнать детали.',
  },
  incorrectPassword: {
    en: 'Invalid password. Hover over the icon to see more details.',
    ru: 'Неверный пароль. Коснитесь иконки, чтобы узнать детали.',
  },
  existingLogin: {
    en: 'There is a user with such login already.',
    ru: 'Пользователь с таким логином уже существует.',
  },
  notRegistered: {
    en: 'There is no user with such login. Please register first.',
    ru: 'Пользователя с таким логином не существует. Пожалуйста, сначала зарегистрируйтесь.',
  },
  notMatchingPassword: {
    en: `Password doesn't match.`,
    ru: 'Пароль не подходит.',
  },
  loginHint: {
    en: '2-20 characters, latin / cyrillic letters, numbers, should start form letter.',
    ru: '2-20 символов, буквы латиницы / кириллицы, числа, должен начинаться с буквы.',
  },
  passwordHint: {
    en: '6-20 characters, 1 number, 1 latin capital letter, 1 latin lowercase letter, 1 special character (!@#$%^&*).',
    ru: '6-20 символов, 1 число, 1 заглавная латинская буква, 1 прописная латинская буква, 1 спецсимвол (!@#$%^&*).',
  },
};

export default registrationErrors;
