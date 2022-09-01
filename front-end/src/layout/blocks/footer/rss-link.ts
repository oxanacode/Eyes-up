import CreateElement from '../../elements/create-element';
import links from '../../../data/links';

import { Tag } from '../../../types/enums';

class RssLink {
  public static CreateRssLink(): HTMLElement {
    const rssLink = CreateElement.createElement(Tag.link, [
      { name: 'class', value: 'rss-link' },
      { name: 'href', value: links.RSSLink },
      { name: 'target', value: '_blank' },
    ]);
    const rssLogoText = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'rss-logo-text' }]);
    rssLogoText.textContent = 'RS logo';

    rssLink.append(rssLogoText);

    return rssLink;
  }
}

export default RssLink;
