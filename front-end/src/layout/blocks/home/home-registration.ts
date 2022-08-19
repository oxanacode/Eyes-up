import CreateElement from '../../elements/create-element';
import BigButton from '../../elements/big-button';
import State from '../../../scripts/state';
import translation from '../../../data/translation';
import MainTitle from '../../elements/main-title';

import { Tag } from '../../../types/enums';

class HomeRegistration {
  public static createHomeRegistration(): HTMLElement {
    const registration = CreateElement.createElement(Tag.section, [
      { name: 'class', value: 'home-promo' },
    ]);
    const title = MainTitle.createMainTitle(
      translation.homeRegistrationTitle[State.currentLang]
    );
    const text = CreateElement.createElement(Tag.par, [
      { name: 'class', value: 'promo-text' },
    ]);
    const button = BigButton.createBigButton(
      translation.homeRegistrationBtn[State.currentLang]
    );

    button.addEventListener('click', () => {
      // Open SignUp Modal
    });
    text.textContent = translation.promoText[State.currentLang];
    registration.append(title, text, button);

    return registration;
  }
}

export default HomeRegistration;
