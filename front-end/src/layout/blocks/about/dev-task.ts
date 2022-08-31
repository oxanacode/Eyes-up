import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';

class DevTask {
  public static createDevTask(text: string): HTMLElement {
    const task = CreateElement.createElement(Tag.listItem, [{ name: 'class', value: 'about-dev-task' }]);

    task.textContent = text;

    return task;
  }
}

export default DevTask;
