import CreateElement from '../../../elements/create-element';
import ParseTypingAdventure from '../../../../scripts/parsing/parse-typing-adventure';
import State from '../../../../scripts/state/state';
import translation from '../../../../data/translation';

import { Data, Tag, TypingAdventure } from '../../../../types/enums';

class EncounteredBeasts {
  public static createEncounteredBeasts(statsData: string): HTMLElement {
    const listItem = CreateElement.createElement(Tag.listItem, [{ name: 'class', value: 'profile-stats-item' }]);
    const itemText = CreateElement.createElement(Tag.par);
    const itemValue = CreateElement.createElement(Tag.par);
    const encounteredBeasts =
      statsData === Data.noData ? Data.noStats : ParseTypingAdventure.getGameData(statsData).uniqueBeasts;

    itemText.textContent = translation.statsEncounteredBeasts[State.currentLang];
    itemValue.textContent = `${encounteredBeasts} / ${TypingAdventure.beasts}`;

    listItem.append(itemText, itemValue);

    return listItem;
  }
}

export default EncounteredBeasts;
