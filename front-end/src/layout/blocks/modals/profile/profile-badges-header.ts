import CreateElement from '../../../elements/create-element';
import MainTitle from '../../../elements/main-title';
import ProfileBadgesCloseBtn from './profile-badges-close-btn';
import State from '../../../../scripts/state/state';
import translation from '../../../../data/translation';

import { Tag } from '../../../../types/enums';

class BadgesProfileHeader {
  public static createBadgesProfileHeader(modalToHide: HTMLElement, parentModal: HTMLElement): HTMLElement {
    const header = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-header' }]);
    const closeBtn = ProfileBadgesCloseBtn.createProfileBadgesCloseBtn(modalToHide, parentModal);
    const title = MainTitle.createMainTitle(translation.badgesTitle[State.currentLang]);
    const plag = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-header-plag' }]);

    header.append(closeBtn, title, plag);

    return header;
  }
}

export default BadgesProfileHeader;
