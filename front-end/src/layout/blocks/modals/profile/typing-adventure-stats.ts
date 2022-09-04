import CreateElement from '../../../elements/create-element';
import CollectedSpells from './collected-spells';
import EncounteredBeasts from './encountered-beasts';
import ReachedLevel from './reached-level';
import StatsSubtitle from './stats-subtitle';
import State from '../../../../scripts/state/state';
import translation from '../../../../data/translation';

import { Tag } from '../../../../types/enums';
import { User } from '../../../../types/interfaces';

class TypingAdventureStats {
  public static createTypingAdventureStats(user: User): HTMLElement {
    const statsData = user.typingAdventure;
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-stats-subblock' }]);
    const title = StatsSubtitle.createStatsSubtitle(translation.gameOneTitle[State.currentLang]);
    const statsList = CreateElement.createElement(Tag.list, [{ name: 'class', value: 'profile-stats-list' }]);
    const levelItem = ReachedLevel.createReachedLevel(statsData);
    const spellsItem = CollectedSpells.createCollectedSpells(statsData);
    const beastsItem = EncounteredBeasts.createEncounteredBeasts(statsData);

    statsList.append(levelItem, spellsItem, beastsItem);
    wrapper.append(title, statsList);

    return wrapper;
  }
}

export default TypingAdventureStats;
