import CreateElement from '../../../elements/create-element';
import State from '../../../../scripts/state/state';
import ParseLessons from '../../../../scripts/parsing/parse-lessons';
import translation from '../../../../data/translation';

import { Data, Tag } from '../../../../types/enums';
import { UserLesson } from '../../../../types/interfaces';

class AverageScore {
  public static createAverageScore(statsData: string): HTMLElement {
    const listItem = CreateElement.createElement(Tag.listItem, [{ name: 'class', value: 'profile-stats-item' }]);
    const itemText = CreateElement.createElement(Tag.par);
    const itemValue = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'profile-stats-score-wrapper' }]);
    const valueText = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'profile-stats-score-value' }]);
    const valueMark = CreateElement.createElement(Tag.span, [{ name: 'class', value: 'profile-stats-score-mark' }]);
    let averageScore;

    if (statsData === Data.noData) {
      averageScore = Data.noStats;
    } else {
      const sumScore = [...Object.values(ParseLessons.getLessons(statsData))]
        .map((el: UserLesson) => el.lastScore)
        .reduce((acc, currValue) => acc + currValue, 0);

      averageScore = Math.ceil(sumScore / [...Object.values(ParseLessons.getLessons(statsData))].length);
    }

    itemText.textContent = translation.statsLessonsScore[State.currentLang];
    valueText.textContent = `${averageScore}`;
    itemValue.append(valueText, valueMark);
    listItem.append(itemText, itemValue);

    return listItem;
  }
}

export default AverageScore;
