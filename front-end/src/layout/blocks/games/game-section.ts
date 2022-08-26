import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import GameSectionBtn from './game-section-btn';

import { RenderHandler } from '../../../types/types';
import { Tag, Game } from '../../../types/enums';

class GameSection {
  public static createGameSection(
    className: string,
    gameName: Game.one | Game.two,
    render: RenderHandler
  ): HTMLElement {
    const gameSection = CreateElement.createElement(Tag.section, [{ name: 'class', value: 'game' }]);
    const gameBtn = GameSectionBtn.createGameSectionBtn(
      className,
      translation[`${gameName}Title`][State.currentLang],
      render
    );
    const descSection = CreateElement.createElement(Tag.section, [{ name: 'class', value: 'game-desc' }]);
    const descTitle = CreateElement.createElement(Tag.h4, [{ name: 'class', value: 'section-title' }]);
    const descText = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'base-text game-desc-text' }]);

    descTitle.textContent = translation[`${gameName}DescTitle`][State.currentLang];
    descText.textContent = translation[`${gameName}DescText`][State.currentLang];
    descSection.append(descTitle, descText);
    gameSection.append(gameBtn, descSection);

    return gameSection;
  }
}

export default GameSection;
