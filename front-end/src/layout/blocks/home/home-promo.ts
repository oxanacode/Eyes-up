import CreateElement from '../../elements/create-element';
import BigButton from '../../elements/big-btn';
import translation from '../../../data/translation';
import State from '../../../scripts/state/state';
import ManageState from '../../../scripts/state/manage-state';

import { RenderHandler } from '../../../types/types';
import { Tag, Page } from '../../../types/enums';

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
    const button = BigButton.createBigBtn(
      translation.promoBtn[State.currentLang]
    );
    const imgContainer = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'home-promo-bg' },
    ]);
    const contentContainer = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'promo-content-container' },
    ]);

    button.addEventListener('click', () => {
      State.currentPage = Page.layout;
      ManageState.saveState();
      render();
    });
    title.textContent = translation.promoTitle[State.currentLang];
    text.textContent = translation.promoText[State.currentLang];
    contentContainer.append(title, text, button);
    promo.append(contentContainer, imgContainer);

    return promo;
  }
}

export default HomePromo;
