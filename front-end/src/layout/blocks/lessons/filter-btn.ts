import CreateElement from '../../elements/create-element';
import SwitchPage from '../../../scripts/layout/switch-page';
import ChosenLessons from './chosen-lessons';

import { RenderHandler } from '../../../types/types';
import { Tag, Complexity, Page } from '../../../types/enums';

class FilterBtn {
  public static createFilterBtn(
    text: string,
    render: RenderHandler,
    complexity?: Complexity
  ): HTMLElement {
    const button = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: 'filter-btn' },
    ]);

    if (complexity) button.classList.add(complexity);
    else button.classList.add('all');

    button.textContent = text;
    button.addEventListener('click', () => {
      if (complexity) ChosenLessons.complexity = complexity;
      else ChosenLessons.complexity = undefined;

      SwitchPage.applyPage(Page.lessons, render);
    });

    return button;
  }
}

export default FilterBtn;
