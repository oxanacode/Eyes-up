import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';

class RssLink {
  public static CreateRssLink(): HTMLElement {
    const rssLink = CreateElement.createElement(Tag.link, [
      { name: 'class', value: 'rss-link' },
      { name: 'href', value: 'https://rs.school/js/' },
      { name: 'target', value: '_blank' },
    ]);
    const rssLogoText = CreateElement.createElement(Tag.par, [
      { name: 'class', value: 'rss-logo-text' },
    ]);
    rssLogoText.textContent = 'RS logo';

    rssLink.append(rssLogoText);

    return rssLink;
  }
}

export default RssLink;
