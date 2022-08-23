import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import FilterBtn from './filter-btn';

import { RenderHandler } from '../../../types/types';
import { Tag, Layout, Complexity } from '../../../types/enums';

class LessonsFilters {
  public static createLessonsFilters(
    layout: Layout,
    render: RenderHandler
  ): HTMLElement {
    const lessonFilters = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'lessons-filters' },
    ]);
    const allFilter = FilterBtn.createFilterBtn(
      translation.lessonsFilterAll[State.currentLang],
      render
    );
    const basicFilter = FilterBtn.createFilterBtn(
      translation.lessonsFilterBasic[State.currentLang],
      render,
      Complexity.easy
    );
    const intermediateFilter = FilterBtn.createFilterBtn(
      translation.lessonsFilterIntermediate[State.currentLang],
      render,
      Complexity.medium
    );
    const advancedFilter = FilterBtn.createFilterBtn(
      translation.lessonsFilterAdvanced[State.currentLang],
      render,
      Complexity.hard
    );

    lessonFilters.append(
      allFilter,
      basicFilter,
      intermediateFilter,
      advancedFilter
    );

    return lessonFilters;
  }
}

export default LessonsFilters;
