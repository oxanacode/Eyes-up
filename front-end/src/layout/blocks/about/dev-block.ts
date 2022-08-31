import CreateElement from '../../elements/create-element';
import DevDesc from './dev-desc';
import developers from '../../../data/developers';

import { Tag } from '../../../types/enums';

class DevBlock {
  public static createDevBlock(): HTMLElement {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'about-wrapper' }]);
    const irina = DevDesc.createDevDesc(developers.Irina);
    const nikita = DevDesc.createDevDesc(developers.Nikita);
    const oxana = DevDesc.createDevDesc(developers.Oxana);

    wrapper.append(irina, nikita, oxana);

    return wrapper;
  }
}

export default DevBlock;
