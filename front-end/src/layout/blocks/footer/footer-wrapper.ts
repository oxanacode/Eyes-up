import CreateElement from '../../elements/create-element';
import RssLink from './rss-link';
import FooterCopy from './footer-copy';
import GithubLinks from './github-links';

import { Tag } from '../../../types/enums';

class FooterWrapper {
  public static createRssCopyWrapper() {
    const wrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'rsslink-copy-wrapper' },
    ]);
    const rssLink = RssLink.CreateRssLink();
    const copy = FooterCopy.createCopy();

    wrapper.append(rssLink, copy);
    return wrapper;
  }

  public static createGithubsWrapper() {
    const wrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'github-links-wrapper' },
    ]);

    wrapper.append(...GithubLinks.createGithubLinks());
    return wrapper;
  }

  public static createContentWrapper() {
    const wrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'footer-wrapper' },
    ]);

    const rssCopy = FooterWrapper.createRssCopyWrapper();
    const githubs = FooterWrapper.createGithubsWrapper();
    wrapper.append(rssCopy, githubs);
    return wrapper;
  }
}

export default FooterWrapper;
