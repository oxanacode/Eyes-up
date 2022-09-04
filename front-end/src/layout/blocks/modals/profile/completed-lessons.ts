import CreateElement from '../../../elements/create-element';
import ApiService from '../../../../scripts/api/api-service';
import ParseLessons from '../../../../scripts/parsing/parse-lessons';
import State from '../../../../scripts/state/state';
import translation from '../../../../data/translation';

import { Data, Layout, Tag } from '../../../../types/enums';
import { LessonsList } from '../../../../types/types';

class CompletedLessons {
  public static createCompletedLessons(statsLayout: Layout, statsData: string): HTMLElement {
    const listItem = CreateElement.createElement(Tag.listItem, [{ name: 'class', value: 'profile-stats-item' }]);
    const itemText = CreateElement.createElement(Tag.par);
    const itemValue = CreateElement.createElement(Tag.par);

    ApiService.getLessons({ layout: statsLayout }).then((data: LessonsList) => {
      const completedLessons =
        statsData === Data.noData ? Data.noStats : [...Object.keys(ParseLessons.getLessons(statsData))].length;
      const lessonsAmount = data.length;

      itemText.textContent = translation.statsLessonsCompleted[State.currentLang];
      itemValue.textContent = `${completedLessons} / ${lessonsAmount}`;

      listItem.append(itemText, itemValue);
    });

    return listItem;
  }
}

export default CompletedLessons;
