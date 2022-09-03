import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import MainTitle from '../../elements/main-title';
import GameSection from './game-section';

import { RenderHandler } from '../../../types/types';
import { Tag, Game, Page } from '../../../types/enums';

class GamesMain {
  public static createGamesMain(render: RenderHandler): HTMLElement {
    const main = CreateElement.createElement(Tag.main, [{ name: 'class', value: 'games' }]);
    const mainTitle = MainTitle.createMainTitle(translation.gamesTitle[State.currentLang]);
    const gamesWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'games-section-wrapper' }]);
    GameSection.createGameSection(gamesWrapper, 'game-one', Game.one, Page.gameOne, render);
    GameSection.createGameSection(gamesWrapper, 'game-two', Game.two, Page.gameTwo, render);

    main.append(mainTitle, gamesWrapper);

    return main;
  }
}

export default GamesMain;
