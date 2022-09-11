import CreateElement from '../../elements/create-element';
import translation from '../../../data/translation';
import MainTitle from '../../elements/main-title';
import HomeRegistrationWrapper from './home-registration-wrapper';
import State from '../../../scripts/state/state';

import { Tag } from '../../../types/enums';
import { RenderHandler } from '../../../types/types';

class HomeRegistration {
  public static createHomeRegistration(render: RenderHandler): HTMLElement {
    const registration = CreateElement.createElement(Tag.section, [{ name: 'class', value: 'home-registration' }]);
    const title = MainTitle.createMainTitle(translation.homeRegistrationTitle[State.currentLang]);
    const text = CreateElement.createElement(Tag.par, [{ name: 'class', value: 'home-text-registration' }]);
    const regWrapper = HomeRegistrationWrapper.createHomeRegistrationWrapper(render);

    text.textContent = translation.homeRegistrationText[State.currentLang];
    registration.append(title, text, regWrapper);

    return registration;
  }
}

export default HomeRegistration;
