import CreateElement from '../../../elements/create-element';

import { Tag } from '../../../../types/enums';

class StatsSubtitle {
  public static createStatsSubtitle(text: string): HTMLElement {
    const title = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'profile-stats-subtitle' }]);

    title.textContent = text;

    return title;
  }
}

export default StatsSubtitle;
