export enum Tag {
  div = 'div',
  link = 'a',
  btn = 'button',
  img = 'img',
  par = 'p',
  span = 'span',
  nav = 'nav',
  input = 'input',
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  main = 'main',
  header = 'header',
  footer = 'footer',
  section = 'section',
  label = 'label',
}

export enum InputType {
  text = 'text',
  password = 'password',
}

export enum Page {
  home = 'home',
  layout = 'layout',
  lessons = 'lessons',
  lesson = 'lesson',
  test = 'test',
  games = 'games',
  game = 'game',
  about = 'about',
}

export enum Lang {
  ru = 'ru',
  en = 'en',
}

export enum Theme {
  light = 'light',
  dark = 'dark',
}

export enum Endpoint {
  users = '/users',
  lessons = '/lessons',
}

export enum Method {
  get = 'get',
  post = 'post',
  put = 'put',
  delete = 'delete',
}

export enum Complexity {
  easy = 'basic',
  medium = 'intermediate',
  hard = 'advanced',
}

export enum Layout {
  ru = 'ru',
  en = 'en',
}

export enum Game {
  one = 'gameOne',
  two = 'gameTwo',
}

export enum ErrorType {
  noLogin = 'noLogin',
  noPassword = 'noPassword',
  invalidLogin = 'invalidLogin',
  invalidPassword = 'invalidPassword',
  existingLogin = 'existingLogin',
  notRegistered = 'notRegistered',
  notMatchingPassword = 'notMatchingPassword',
}

export enum ErrorSource {
  registration = 'registration',
  authorisation = 'authorisation',
}

export enum LoginLength {
  min = 2,
  max = 20,
}

export enum PasswordLength {
  min = 6,
  max = 20,
}

export enum StatusCode {
  found = 200,
  notFound = 404,
}
