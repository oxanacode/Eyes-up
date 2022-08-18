import CreateElement from '../../elements/create-element';
import FooterWrapper from './footer-wrapper';

import { Tag } from '../../../types/enums';

class CreateFooter {
  public static createFooter() {
    const footer = CreateElement.createElement(Tag.footer, [
      { name: 'class', value: 'footer' },
    ]);
    const content = FooterWrapper.createContentWrapper();

    footer.append(content);

    return footer;
  }
}

export default CreateFooter;
