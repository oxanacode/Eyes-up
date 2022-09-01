import CreateElement from '../../../elements/create-element';
import ParseTypingAdventure from '../../../../scripts/parsing/parse-typing-adventure';
import State from '../../../../scripts/state/state';
import translation from '../../../../data/translation';

import { Data, Tag, TypingAdventure } from '../../../../types/enums';

class ReachedLevel {
  public static createReachedLevel(statsData: string): HTMLElement {
    const listItem = CreateElement.createElement(Tag.listItem, [{ name: 'class', value: 'profile-stats-item' }]);
    const itemText = CreateElement.createElement(Tag.par);
    const itemValue = CreateElement.createElement(Tag.par);

    const reachedLevel = statsData === Data.noData ? Data.noStats : ParseTypingAdventure.getGameData(statsData).userLvl;

    itemText.textContent = translation.statsReachedLevel[State.currentLang];
    itemValue.textContent = `${reachedLevel} / ${TypingAdventure.levels}`;

    listItem.append(itemText, itemValue);

    return listItem;
  }
}

export default ReachedLevel;
