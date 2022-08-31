import CreateElement from '../../elements/create-element';
import State from '../../../scripts/state/state';
import Subtitle from '../../elements/subtitle';
import AboutDesc from './about-desc';
import TechBlock from './tech-block';
import DevBlock from './dev-block';
import CreditsBlock from './credits-block';
import aboutTranslation from '../../../data/about-translation';
import links from '../../../data/links';

import { Tag } from '../../../types/enums';

class AboutMain {
  public static createAboutMain(): HTMLElement {
    const main = CreateElement.createElement(Tag.main, [{ name: 'class', value: 'about' }]);
    const greetingTitle = Subtitle.createSubtitle(
      'subtitle about-subtitle',
      aboutTranslation.greeting[State.currentLang]
    );
    const projectDesc = AboutDesc.createAboutDesc(
      aboutTranslation.project[State.currentLang],
      aboutTranslation.features[State.currentLang],
      links.PRLink
    );
    const techTitle = Subtitle.createSubtitle(
      'subtitle about-subtitle',
      aboutTranslation.technologies[State.currentLang]
    );
    const techBlock = TechBlock.createTechBlock();
    const devTitle = Subtitle.createSubtitle('subtitle about-subtitle', aboutTranslation.developers[State.currentLang]);
    const devBlock = DevBlock.createDevBlock();
    const creditsTitle = Subtitle.createSubtitle(
      'subtitle about-subtitle',
      aboutTranslation.credits[State.currentLang]
    );
    const creditsBlock = CreditsBlock.createCreditsBlock();

    main.append(greetingTitle, projectDesc, techTitle, techBlock, devTitle, devBlock, creditsTitle, creditsBlock);

    return main;
  }
}

export default AboutMain;
