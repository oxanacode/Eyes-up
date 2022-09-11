import CreateElement from '../../elements/create-element';
import HomeLogoutConfirmation from '../modals/confirmation/home-logout-confirmation';
import HomeRegBtn from './home-registration-btn';

import { Tag } from '../../../types/enums';
import { RenderHandler } from '../../../types/types';

class HomeRegistrationWrapper {
  public static createHomeRegistrationWrapper(render: RenderHandler): HTMLElement {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'home-registration-wrapper' }]);
    const confirmation = HomeLogoutConfirmation.createHomeLogoutConfirmation(wrapper, render);
    const button = HomeRegBtn.createHomeRegBtn(wrapper, render);

    wrapper.append(confirmation, button);

    return wrapper;
  }
}

export default HomeRegistrationWrapper;
