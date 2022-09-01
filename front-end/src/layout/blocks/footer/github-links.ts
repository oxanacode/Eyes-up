import CreateElement from '../../elements/create-element';
import developers from '../../../data/developers';

import { Tag } from '../../../types/enums';

class GithubLinks {
  public static createGithubLinks() {
    return [
      {
        link: developers.Irina.gitHubLink,
        name: developers.Irina.nickname,
      },
      {
        link: developers.Nikita.gitHubLink,
        name: developers.Nikita.nickname,
      },
      {
        link: developers.Oxana.gitHubLink,
        name: developers.Oxana.nickname,
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
