import { Attribute } from './interfaces';
import { Page } from './enums';

export type AttributesList = Array<Attribute>;

export type EventHandler = (pageName: Page) => void;