import { Attribute, Lesson, User } from './interfaces';

export type AttributesList = Array<Attribute>;

export type UsersList = Array<User>;

export type LessonsList = Array<Lesson>;

export type UserData = Pick<User, 'login' | 'password'>;

export type LessonData = Pick<
  Lesson,
  'language' | 'name' | 'complexity' | 'text'
>;

export type RenderHandler = () => void;

export type ModalHandler = (
  wrapper: HTMLElement,
  renderHandler: RenderHandler
) => HTMLElement;
