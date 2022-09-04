import CreateElement from '../../../elements/create-element';
import ParseTypingHero from '../../../../scripts/parsing/parse-typing-hero';
import State from '../../../../scripts/state/state';
import translation from '../../../../data/translation';

import { Data, Tag, TypingHero } from '../../../../types/enums';

class CompletedLevels {
  public static createCompletedLevels(statsData: string): HTMLElement {
    const listItem = CreateElement.createElement(Tag.listItem, [{ name: 'class', value: 'profile-stats-item' }]);
    const itemText = CreateElement.createElement(Tag.par);
    const itemValue = CreateElement.createElement(Tag.par);
    const completedLevels =
      statsData === Data.noData ? Data.noStats : ParseTypingHero.getGameData(statsData).levelsDone;

    itemText.textContent = translation.statsCompletedLevels[State.currentLang];
    itemValue.textContent = `${completedLevels} / ${TypingHero.levels}`;

    listItem.append(itemText, itemValue);

    return listItem;
  }
}

export default CompletedLevels;
