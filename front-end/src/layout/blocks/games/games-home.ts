import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';

import { RenderHandler } from '../../../types/types';
import { Tag } from '../../../types/enums';
import MainTitle from '../../elements/main-title';
import GameSection from './game-section';

class GamesMain {
  public static createGamesMain(render: RenderHandler) {
    const main = CreateElement.createElement(Tag.main, [
      { name: 'class', value: 'games' },
    ]);
    const mainTitle = MainTitle.createMainTitle(
      translation.lessonsTitle[State.currentLang]
    );
    const gameOneSection = GameSection.createGameSection(
      'game-one',
      'gameOne',
      render
    );
    const gameTwoSection = GameSection.createGameSection(
      'game-two',
      'gameTwo',
      render
    );

    main.append(mainTitle, gameOneSection, gameTwoSection);

    return main;
  }
}

export default GamesMain;
