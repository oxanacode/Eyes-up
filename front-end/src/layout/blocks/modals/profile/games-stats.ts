import CreateElement from '../../../elements/create-element';
import StatsTitle from './stats-title';
import State from '../../../../scripts/state/state';
import TypingAdventureStats from './typing-adventure-stats';
import TypingHeroStats from './typing-hero-stats';
import translation from '../../../../data/translation';

import { Tag } from '../../../../types/enums';
import { User } from '../../../../types/interfaces';

class GamesStats {
  public static createGamesStats(user: User): HTMLElement {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-stats-block' }]);
    const title = StatsTitle.createStatsTitle(translation.gamesTitle[State.currentLang]);
    const typingAdventure = TypingAdventureStats.createTypingAdventureStats(user);
    const typinghero = TypingHeroStats.createTypingHeroStats(user);

    wrapper.append(title, typingAdventure, typinghero);

    return wrapper;
  }
}

export default GamesStats;
