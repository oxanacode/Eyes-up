import { Attribute, Lesson, User } from './interfaces';

export type AttributesList = Array<Attribute>;

export type UsersList = Array<User>;

export type LessonsList = Array<Lesson>;

export type UserData = Pick<User, 'login' | 'password'>;

export type LessonData = Pick<
  Lesson,
  | 'layout'
  | 'index'
  | 'title'
  | 'complexity'
  | 'minAccuracy'
  | 'minSpeed'
  | 'starSpeed'
  | 'content'
>;

export type RenderHandler = () => void;

export type ModalHandler = (
  modalWrapper: HTMLElement,
  renderHandler: RenderHandler
) => HTMLElement;
