import CreateElement from '../../../elements/create-element';
import StatsSubtitle from './stats-subtitle';
import CompletedLevels from './completed-levels';
import State from '../../../../scripts/state/state';
import BestScore from './best-score';
import BestAccuracy from './best-accuracy';
import translation from '../../../../data/translation';

import { Tag } from '../../../../types/enums';
import { User } from '../../../../types/interfaces';

class TypingHeroStats {
  public static createTypingHeroStats(user: User): HTMLElement {
    const statsData = user.typingHero;
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-stats-subblock' }]);
    const title = StatsSubtitle.createStatsSubtitle(translation.gameTwoTitle[State.currentLang]);
    const statsList = CreateElement.createElement(Tag.list, [{ name: 'class', value: 'profile-stats-list' }]);
    const levelItem = CompletedLevels.createCompletedLevels(statsData);
    const scoreItem = BestScore.createBestScore(statsData);
    const accuracyItem = BestAccuracy.createBestAccuracy(statsData);

    statsList.append(levelItem, scoreItem, accuracyItem);
    wrapper.append(title, statsList);

    return wrapper;
  }
}

export default TypingHeroStats;
