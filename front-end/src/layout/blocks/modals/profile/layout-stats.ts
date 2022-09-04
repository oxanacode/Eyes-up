import CreateElement from '../../../elements/create-element';
import AverageAccuracy from './average-accuracy';
import AverageScore from './average-score';
import CompletedLessons from './completed-lessons';
import StatsSubtitle from './stats-subtitle';
import State from '../../../../scripts/state/state';
import translation from '../../../../data/translation';

import { Layout, Tag } from '../../../../types/enums';
import { User } from '../../../../types/interfaces';

class LayoutStats {
  public static createLayoutStats(statsLayout: Layout, user: User): HTMLElement {
    const statsData = statsLayout === Layout.en ? user.lessonsEn : user.lessonsRu;
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-stats-subblock' }]);
    const title =
      statsLayout === Layout.en
        ? StatsSubtitle.createStatsSubtitle(translation.lessonsEnLayoutTitle[State.currentLang])
        : StatsSubtitle.createStatsSubtitle(translation.lessonsRuLayoutTitle[State.currentLang]);
    const statsList = CreateElement.createElement(Tag.list, [{ name: 'class', value: 'profile-stats-list' }]);
    const lessonsItem = CompletedLessons.createCompletedLessons(statsLayout, statsData);
    const scoreItem = AverageScore.createAverageScore(statsData);
    const accuracyItem = AverageAccuracy.createAverageAccuracy(statsData);

    statsList.append(lessonsItem, scoreItem, accuracyItem);
    wrapper.append(title, statsList);

    return wrapper;
  }
}

export default LayoutStats;
