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
  list = 'ul',
  listItem = 'li',
  audio = 'audio',
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
  gameOne = 'gameOne',
  gameTwo = 'gameTwo',
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
  tests = '/tests',
  test = '/test',
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

export enum Avatar {
  default = 1,
  amount = 12,
}

export enum Disabled {
  true = 'disabled',
}

export enum Data {
  noData = 'noData',
  noStats = 0,
}

export enum Profile {
  view = 'view',
  edit = 'edit',
}

export enum Confirmation {
  logout = 'logout',
  delete = 'delete',
}

export enum Badge {
  one = 1,
  two = 2,
  three = 3,
  four = 4,
  five = 5,
  six = 6,
  seven = 7,
  eight = 8,
  nine = 9,
  ten = 10,
  eleven = 11,
  twelve = 12,
  thirteen = 13,
  fourteen = 14,
  fifteen = 15,
  sixteen = 16,
  seventeen = 17,
  eighteen = 18,
  nineteen = 19,
  twenty = 20,
}

export enum LessonBg {
  default = 'bg-default',
  one = 'bg-one',
  two = 'bg-two',
}

export enum LessonFontSize {
  normal = 'font-size-normal',
  small = 'font-size-small',
  big = 'font-size-big',
}

export enum LessonFontFamily {
  default = 'font-family-sans-serif',
  serif = 'font-family-serif',
}

export enum LessonLineHeight {
  normal = 40,
  small = 30,
  big = 60,
}

export enum LessonSound {
  soft = 'sound-soft',
  hard = 'sound-hard',
  mech = 'sound-mechanical',
  silent = 'sound-silent',
}

export enum LessonSkin {
  default = 'skin-default',
  one = 'skin-one',
  two = 'skin-two',
  three = 'skin-three',
}

export enum TypingAdventure {
  levels = 10,
  spells = 28,
  beasts = 9,
}

export enum TypingHero {
  levels = 10,
  score = 2590,
}
