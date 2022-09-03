import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import GameSectionBtn from './game-section-btn';
import GameDesc from './game-desc';

import { RenderHandler } from '../../../types/types';
import { Tag, Game, Page } from '../../../types/enums';

class GameSection {
  public static createGameSection(
    gamesWrapper: HTMLElement,
    className: string,
    gameName: Game,
    gamePage: Page.gameOne | Page.gameTwo,
    render: RenderHandler
  ) {
    const gameBtn = GameSectionBtn.createGameSectionBtn(
      className,
      translation[`${gameName}Title`][State.currentLang],
      gamePage,
      render
    );
    const descSection = CreateElement.createElement(Tag.section, [{ name: 'class', value: `${className}-desc` }]);
    const descFirst = GameDesc.createGameDesc(translation[`${gameName}DescFirst`][State.currentLang]);
    const descSecond = GameDesc.createGameDesc(translation[`${gameName}DescSecond`][State.currentLang]);
    const descThird = GameDesc.createGameDesc(translation[`${gameName}DescThird`][State.currentLang]);

    descSection.append(descFirst, descSecond, descThird);
    gamesWrapper.append(gameBtn, descSection);
  }
}

export default GameSection;
