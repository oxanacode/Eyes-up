import { Attribute, Lesson, User, Test } from './interfaces';

export type AttributesList = Array<Attribute>;

export type UsersList = Array<User>;

export type LessonsList = Array<Lesson>;

export type UserData = Pick<User, 'login' | 'password' | 'avatar'>;

export type LessonData = Pick<
  Lesson,
  'layout' | 'index' | 'title' | 'complexity' | 'minAccuracy' | 'minSpeed' | 'starSpeed' | 'content'
>;

export type TestData = Pick<Test, 'language' | 'text'>;

export type RenderHandler = () => void;

export type ModalHandler = (wrapper: HTMLElement, renderHandler: RenderHandler) => HTMLElement;

export type ActionHandler = (
  loginInput: HTMLInputElement,
  passwordInput: HTMLInputElement,
  errorBlock: HTMLElement,
  render: RenderHandler
) => HTMLElement;
