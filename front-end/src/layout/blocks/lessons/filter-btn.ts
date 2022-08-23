import CreateElement from '../../elements/create-element';
import SwitchPage from '../../../scripts/layout/switch-page';
import State from '../../../scripts/state/state';

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

    if (complexity) button.classList.add(`filter-btn-${complexity}`);
    else button.classList.add('filter-btn-all');

    if (State.currentComplexity === complexity)
      button.classList.add('active-filter');

    button.textContent = text;
    button.addEventListener('click', () => {
      if (complexity) State.currentComplexity = complexity;
      else State.currentComplexity = undefined;

      SwitchPage.applyPage(Page.lessons, render);
    });

    return button;
  }
}

export default FilterBtn;
