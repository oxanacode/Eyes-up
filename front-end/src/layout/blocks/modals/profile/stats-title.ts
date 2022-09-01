import CreateElement from '../../../elements/create-element';

import { Tag } from '../../../../types/enums';

class StatsTitle {
  public static createStatsTitle(text: string): HTMLElement {
    const title = CreateElement.createElement(Tag.h5, [{ name: 'class', value: 'profile-stats-title' }]);

    title.textContent = text;

    return title;
  }
}

export default StatsTitle;
