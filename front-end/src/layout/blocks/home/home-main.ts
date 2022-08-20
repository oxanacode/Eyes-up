import CreateElement from '../../elements/create-element';
import HomePromo from './home-promo';
import HomeSection from './home-section';
import State from '../../../scripts/state/state';
import translation from '../../../data/translation';
import HomeRegistration from './home-registration';

import { Tag } from '../../../types/enums';

class HomeMain {
  public static createHomeMain() {
    const main = CreateElement.createElement(Tag.main, [
      { name: 'class', value: 'home' },
    ]);
    const promo = HomePromo.createHomePromo();
    const lessons = HomeSection.createHomeSection(
      'lessons',
      translation.homeLessonsTitle[State.currentLang],
      translation.homeLessonsText[State.currentLang]
    );
    const games = HomeSection.createHomeSection(
      'games',
      translation.homeGamesTitle[State.currentLang],
      translation.homeGamesText[State.currentLang]
    );
    const progress = HomeSection.createHomeSection(
      'progress',
      translation.homeProgressTitle[State.currentLang],
      translation.homeProgressText[State.currentLang]
    );
    const registration = HomeRegistration.createHomeRegistration();
    const wrapper = CreateElement.createElement(Tag.main, [
      { name: 'class', value: 'home-wrapper' },
    ]);

    main.append(promo, lessons, games, progress, registration);
    wrapper.append(main);

    return wrapper;
  }
}

export default HomeMain;
