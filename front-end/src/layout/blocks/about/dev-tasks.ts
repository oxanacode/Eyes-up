import CreateElement from '../../elements/create-element';
import DevTask from './dev-task';
import State from '../../../scripts/state/state';
import aboutTranslation from '../../../data/about-translation';

import { Tag } from '../../../types/enums';

class DevTasks {
  public static createDevTasks(name: string): HTMLElement {
    const tasks = CreateElement.createElement(Tag.list, [{ name: 'class', value: 'about-dev-tasks' }]);
    const taskOne = DevTask.createDevTask(aboutTranslation[`taskOne${name}`][State.currentLang]);
    const taskTwo = DevTask.createDevTask(aboutTranslation[`taskTwo${name}`][State.currentLang]);
    const taskThree = DevTask.createDevTask(aboutTranslation[`taskThree${name}`][State.currentLang]);
    const taskFour = DevTask.createDevTask(aboutTranslation[`taskFour${name}`][State.currentLang]);

    tasks.append(taskOne, taskTwo, taskThree, taskFour);

    if (`taskFive${name}` in aboutTranslation) {
      const taskFive = DevTask.createDevTask(aboutTranslation[`taskFive${name}`][State.currentLang]);

      tasks.append(taskOne, taskTwo, taskThree, taskFour, taskFive);
    }

    return tasks;
  }
}

export default DevTasks;
