import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';

class RssLink {
  public static CreateRssLink(): HTMLElement {
    const rssLink = CreateElement.createElement(Tag.link, [
      { name: 'class', value: 'rss-link' },
      { name: 'href', value: 'https://rs.school/js/' },
    ]);
    const rssLogoWrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'rss-img' },
    ]);

    rssLink.append(rssLogoWrapper);
    return rssLink;
  }
}

export default RssLink;
