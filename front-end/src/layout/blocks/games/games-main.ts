import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import MainTitle from '../../elements/main-title';
import GameSection from './game-section';

import { RenderHandler } from '../../../types/types';
import { Tag, Game } from '../../../types/enums';

class GamesMain {
  public static createGamesMain(render: RenderHandler): HTMLElement {
    const main = CreateElement.createElement(Tag.main, [{ name: 'class', value: 'games' }]);
    const mainTitle = MainTitle.createMainTitle(translation.gamesTitle[State.currentLang]);
    const gameOneSection = GameSection.createGameSection('game-one', Game.one, render);
    const gameTwoSection = GameSection.createGameSection('game-two', Game.two, render);
    const gamesWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'section-btns-wrapper' }]);

    gamesWrapper.append(gameOneSection, gameTwoSection);
    main.append(mainTitle, gamesWrapper);

    return main;
  }
}

export default GamesMain;
