import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';

class FooterCopy {
  public static createCopy() {
    const paragpaph = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'copy' }]);

    paragpaph.textContent = '© 2022 EyesUP';

    return paragpaph;
  }
}

export default FooterCopy;
