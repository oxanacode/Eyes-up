import CreateElement from '../../elements/create-element';
import BigButton from '../../elements/big-btn';
import translation from '../../../data/translation';
import MainTitle from '../../elements/main-title';
import State from '../../../scripts/state/state';

import { Tag } from '../../../types/enums';

class HomeRegistration {
  public static createHomeRegistration(): HTMLElement {
    const registration = CreateElement.createElement(Tag.section, [
      { name: 'class', value: 'home-registration' },
    ]);
    const title = MainTitle.createMainTitle(
      translation.homeRegistrationTitle[State.currentLang]
    );
    const text = CreateElement.createElement(Tag.par, [
      { name: 'class', value: 'home-text-registration' },
    ]);
    const button = BigButton.createBigBtn(
      translation.homeRegistrationBtn[State.currentLang]
    );

    button.addEventListener('click', () => {
      // Open SignUp Modal
    });
    text.textContent = translation.homeRegistrationText[State.currentLang];
    registration.append(title, text, button);

    return registration;
  }
}

export default HomeRegistration;
