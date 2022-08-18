import CreateElement from '../../elements/create-element';

import { Tag } from '../../../types/enums';

class RssLink {
  public static CreateRssLink(): HTMLElement {
    const rssLink = CreateElement.createElement(Tag.link, [
      { name: 'class', value: 'rss-link' },
      { name: 'href', value: 'https://rs.school/js/' },
    ]);
    const rssImg = CreateElement.createElement(Tag.link, [
      { name: 'class', value: 'rss-image' },
      { name: 'src', value: './assets/images/logos/logo-rss.svg' },
      { name: 'alt', value: 'rolling-scopes-school' },
    ]);

    rssLink.append(rssImg);
    return rssLink;
  }
}

export default RssLink;
