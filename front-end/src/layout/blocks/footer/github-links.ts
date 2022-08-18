import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';

class GithubLinks {
  public static createGithubLinks() {
    return [
      {
        link: 'https://github.com/IDemidova',
        name: 'IDemidova',
      },
      {
        link: 'https://github.com/ReWired25',
        name: 'ReWired25',
      },
      {
        link: 'https://github.com/oxanacode',
        name: 'oxanacode',
      },
    ].map((item) => {
      const link = CreateElement.createElement(Tag.link, [
        { name: 'class', value: 'dev-link' },
        { name: 'href', value: item.link },
      ]);
      link.textContent = item.name;
      return link;
    });
  }
}

export default GithubLinks;
