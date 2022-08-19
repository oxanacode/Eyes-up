import CreateElement from '../../elements/create-element';
import BigButton from '../../elements/big-button';
import State from '../../../scripts/state';
import translation from '../../../data/translation';
import ChangePage from '../../../scripts/layout/change-page';

import { Tag, Page } from '../../../types/enums';

class HomePromo {
  public static createHomePromo(): HTMLElement {
    const promo = CreateElement.createElement(Tag.section, [
      { name: 'class', value: 'home-promo' },
    ]);
    const title = CreateElement.createElement(Tag.h2, [
      { name: 'class', value: 'promo-title' },
    ]);
    const text = CreateElement.createElement(Tag.par, [
      { name: 'class', value: 'promo-text' },
    ]);
    const button = BigButton.createBigButton(
      translation.promoBtn[State.currentLang]
    );

    button.addEventListener('click', () => {
      ChangePage.changePage(Page.lessons);
    });
    title.textContent = translation.promoTitle[State.currentLang];
    text.textContent = translation.promoText[State.currentLang];
    promo.append(title, text, button);

    return promo;
  }
}

export default HomePromo;
