import CreateElement from '../../../elements/create-element';
import LayoutStats from './layout-stats';
import StatsTitle from './stats-title';
import State from '../../../../scripts/state/state';
import translation from '../../../../data/translation';

import { Layout, Tag } from '../../../../types/enums';
import { User } from '../../../../types/interfaces';

class LessonsStats {
  public static createLessonsStats(user: User): HTMLElement {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-stats-block' }]);
    const title = StatsTitle.createStatsTitle(translation.lessonsTitle[State.currentLang]);
    const layoutEn = LayoutStats.createLayoutStats(Layout.en, user);
    const layoutRu = LayoutStats.createLayoutStats(Layout.ru, user);

    wrapper.append(title, layoutEn, layoutRu);

    return wrapper;
  }
}

export default LessonsStats;
