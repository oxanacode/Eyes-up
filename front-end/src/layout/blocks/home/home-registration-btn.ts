import BigBtn from '../../elements/big-btn';
import ManageRegistration from '../../../scripts/layout/manage-registration';
import State from '../../../scripts/state/state';
import translation from '../../../data/translation';

import { RenderHandler } from '../../../types/types';

class HomeRegBtn {
  public static createHomeRegBtn(wrapper: HTMLElement, render: RenderHandler): HTMLElement {
    const button = BigBtn.createBigBtn(translation.homeRegistrationBtn[State.currentLang]);

    button.addEventListener('click', () => {
      ManageRegistration.homeRegistrationHandler(wrapper, render);
    });

    return button;
  }
}

export default HomeRegBtn;
