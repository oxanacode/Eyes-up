import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';

class DevLink {
  public static createDevLink(title: HTMLElement, gitHubLink: string): HTMLElement {
    const link = CreateElement.createElement(Tag.link, [
      { name: 'href', value: gitHubLink },
      { name: 'target', value: '_blank' },
    ]);

    link.append(title);

    return link;
  }
}

export default DevLink;
