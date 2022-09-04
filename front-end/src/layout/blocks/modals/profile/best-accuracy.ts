import CreateElement from '../../../elements/create-element';
import ParseTypingHero from '../../../../scripts/parsing/parse-typing-hero';
import State from '../../../../scripts/state/state';
import translation from '../../../../data/translation';

import { Data, Tag } from '../../../../types/enums';

class BestAccuracy {
  public static createBestAccuracy(statsData: string): HTMLElement {
    const listItem = CreateElement.createElement(Tag.listItem, [{ name: 'class', value: 'profile-stats-item' }]);
    const itemText = CreateElement.createElement(Tag.par);
    const itemValue = CreateElement.createElement(Tag.par);
    const bestAccuracy = statsData === Data.noData ? Data.noStats : ParseTypingHero.getGameData(statsData).bestAccuracy;

    itemText.textContent = translation.statsBestAccuracy[State.currentLang];
    itemValue.textContent = `${bestAccuracy} %`;

    listItem.append(itemText, itemValue);

    return listItem;
  }
}

export default BestAccuracy;
