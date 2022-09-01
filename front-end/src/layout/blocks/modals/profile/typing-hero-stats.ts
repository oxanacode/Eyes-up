import CreateElement from '../../../elements/create-element';
import StatsSubtitle from './stats-subtitle';
import State from '../../../../scripts/state/state';
import translation from '../../../../data/translation';

import { Tag } from '../../../../types/enums';

class TypingHeroStats {
  public static createTypingHeroStats(): HTMLElement {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-stats-subblock' }]);
    const title = StatsSubtitle.createStatsSubtitle(translation.gameTwoTitle[State.currentLang]);
    const statsList = CreateElement.createElement(Tag.list, [{ name: 'class', value: 'profile-stats-list' }]);

    wrapper.append(title, statsList);

    return wrapper;
  }
}

export default TypingHeroStats;
