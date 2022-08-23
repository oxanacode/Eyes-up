import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import PromoBtn from './promo-btn';

import { RenderHandler } from '../../../types/types';
import { Tag } from '../../../types/enums';

class HomePromo {
  public static createHomePromo(render: RenderHandler): HTMLElement {
    const promo = CreateElement.createElement(Tag.section, [
      { name: 'class', value: 'home-promo' },
    ]);
    const title = CreateElement.createElement(Tag.h2, [
      { name: 'class', value: 'promo-title' },
    ]);
    const text = CreateElement.createElement(Tag.par, [
      { name: 'class', value: 'promo-text' },
    ]);
    const button = PromoBtn.createPromoBtn(
      translation.promoBtn[State.currentLang],
      render
    );
    const imgContainer = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'home-promo-bg' },
    ]);
    const contentContainer = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'promo-content-container' },
    ]);

    title.textContent = translation.promoTitle[State.currentLang];
    text.textContent = translation.promoText[State.currentLang];
    contentContainer.append(title, text, button);
    promo.append(contentContainer, imgContainer);

    return promo;
  }
}

export default HomePromo;
