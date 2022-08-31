import CreateElement from '../../elements/create-element';
import links from '../../../data/links';

import { Tag } from '../../../types/enums';

class GithubLinks {
  public static createGithubLinks() {
    return [
      {
        link: links.IDemidova,
        name: 'IDemidova',
      },
      {
        link: links.ReWired25,
        name: 'ReWired25',
      },
      {
        link: links.oxanacode,
        name: 'oxanacode',
      },
    ].map((item) => {
      const link = CreateElement.createElement(Tag.link, [
        { name: 'class', value: 'dev-link' },
        { name: 'href', value: item.link },
        { name: 'target', value: '_blank' },
      ]);
      link.textContent = item.name;

      return link;
    });
  }
}

export default GithubLinks;
