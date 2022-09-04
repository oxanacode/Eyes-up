import CreateElement from '../../../elements/create-element';
import ParseTypingAdventure from '../../../../scripts/parsing/parse-typing-adventure';
import State from '../../../../scripts/state/state';
import translation from '../../../../data/translation';

import { Data, Tag, TypingAdventure } from '../../../../types/enums';

class CollectedSpells {
  public static createCollectedSpells(statsData: string): HTMLElement {
    const listItem = CreateElement.createElement(Tag.listItem, [{ name: 'class', value: 'profile-stats-item' }]);
    const itemText = CreateElement.createElement(Tag.par);
    const itemValue = CreateElement.createElement(Tag.par);
    const collectedSpells =
      statsData === Data.noData ? Data.noStats : ParseTypingAdventure.getGameData(statsData).userSpells.length;

    itemText.textContent = translation.statsCollectedSpells[State.currentLang];
    itemValue.textContent = `${collectedSpells} / ${TypingAdventure.spells}`;

    listItem.append(itemText, itemValue);

    return listItem;
  }
}

export default CollectedSpells;
