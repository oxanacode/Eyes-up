import CreateElement from '../../../elements/create-element';
import State from '../../../../scripts/state/state';
import ParseLessons from '../../../../scripts/parsing/parse-lessons';
import translation from '../../../../data/translation';

import { Data, Tag } from '../../../../types/enums';
import { UserLesson } from '../../../../types/interfaces';

class AverageAccuracy {
  public static createAverageAccuracy(statsData: string): HTMLElement {
    const listItem = CreateElement.createElement(Tag.listItem, [{ name: 'class', value: 'profile-stats-item' }]);
    const itemText = CreateElement.createElement(Tag.par);
    const itemValue = CreateElement.createElement(Tag.par);
    let averageAccuracy;

    if (statsData === Data.noData) {
      averageAccuracy = Data.noStats;
    } else {
      averageAccuracy =
        [...Object.values(ParseLessons.getLessons(statsData))]
          .map((el: UserLesson) => el.lastAccuracy)
          .reduce((acc, currValue) => acc + currValue, 0) /
        [...Object.values(ParseLessons.getLessons(statsData))].length;
    }

    itemText.textContent = translation.statsLessonsAccuracy[State.currentLang];
    itemValue.textContent = `${averageAccuracy}%`;
    listItem.append(itemText, itemValue);

    return listItem;
  }
}

export default AverageAccuracy;
