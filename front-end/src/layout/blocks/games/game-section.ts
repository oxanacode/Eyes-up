import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import SectionBtn from '../../elements/section-btn';
import ManageState from '../../../scripts/state/manage-state';
import ChangePage from '../../../scripts/layout/change-page';

import { RenderHandler } from '../../../types/types';
import { Tag, Page } from '../../../types/enums';
import MainTitle from '../../elements/main-title';

class GameSection {
  public static createGameSection(
    className: string,
    gameName: 'gameOne' | 'gameTwo', // --------------- enum for game titles
    render: RenderHandler
  ) {
    const gameSection = CreateElement.createElement(Tag.section, [
      { name: 'class', value: 'game' },
    ]);
    const gameBtn = SectionBtn.createSectionBtn(
      className,
      translation[`${gameName}Title`][State.currentLang]
    );
    const descSection = CreateElement.createElement(Tag.section, [
      { name: 'class', value: 'game-desc' },
    ]);
    const descTitle = MainTitle.createMainTitle(
      translation[`${gameName}DescTitle`][State.currentLang]
    );
    const descText = CreateElement.createElement(Tag.par, [
      { name: 'class', value: 'base-text' },
    ]);

    gameBtn.addEventListener('click', () => {
      ChangePage.changePage(Page.game); // --------------- enum for game titles
      ManageState.saveState();
      render();
    });
    descText.textContent =
      translation[`${gameName}DescText`][State.currentLang];
    descSection.append(descTitle, descText);
    gameSection.append(gameBtn, descSection);

    return gameSection;
  }
}

export default GameSection;
