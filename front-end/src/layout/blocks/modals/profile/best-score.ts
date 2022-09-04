import CreateElement from '../../../elements/create-element';
import ParseTypingHero from '../../../../scripts/parsing/parse-typing-hero';
import State from '../../../../scripts/state/state';
import translation from '../../../../data/translation';

import { Data, Tag } from '../../../../types/enums';

class BestScore {
  public static createBestScore(statsData: string): HTMLElement {
    const listItem = CreateElement.createElement(Tag.listItem, [{ name: 'class', value: 'profile-stats-item' }]);
    const itemText = CreateElement.createElement(Tag.par);
    const itemValue = CreateElement.createElement(Tag.par);
    const bestScore = statsData === Data.noData ? Data.noStats : ParseTypingHero.getGameData(statsData).bestScore;

    itemText.textContent = translation.statsBestScore[State.currentLang];
    itemValue.textContent = `${bestScore}`;

    listItem.append(itemText, itemValue);

    return listItem;
  }
}

export default BestScore;
