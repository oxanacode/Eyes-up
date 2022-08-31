import CreateElement from '../../elements/create-element';
import State from '../../../scripts/state/state';
import DevTasks from './dev-tasks';
import DevTitle from './dev-title';
import DevAvatar from './dev-avatar';
import aboutTranslation from '../../../data/about-translation';

import { Tag } from '../../../types/enums';
import { Developer } from '../../../types/interfaces';

class DevDesc {
  public static createDevDesc(developer: Developer): HTMLElement {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'about-dev' }]);
    const avatar = DevAvatar.createDevAvatar(developer.avatar);
    const title = DevTitle.createDevTitle(aboutTranslation[`name${developer.name}`][State.currentLang]);
    const tasks = DevTasks.createDevTasks(developer.name);

    wrapper.append(avatar, title, tasks);

    return wrapper;
  }
}

export default DevDesc;
