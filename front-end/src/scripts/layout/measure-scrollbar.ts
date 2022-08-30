import CreateElement from '../../layout/elements/create-element';

import { Tag } from '../../types/enums';

class MeasureScrollbar {
  public static countScrollbarWidth(): number {
    const scrollbar = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'measure-scrollbar' }]);

    document.body.append(scrollbar);

    const scrollbarWidth = scrollbar.offsetWidth - scrollbar.clientWidth;

    document.body.removeChild(scrollbar);

    return scrollbarWidth;
  }
}

export default MeasureScrollbar;
