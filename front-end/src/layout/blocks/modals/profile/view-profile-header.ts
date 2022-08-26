import CreateElement from '../../../elements/create-element';
import CloseBtn from '../close-btn';
import State from '../../../../scripts/state/state';
import EditProfileBtn from './edit-profile-btn';
import MainTitle from '../../../elements/main-title';
import translation from '../../../../data/translation';

import { Tag } from '../../../../types/enums';

class ViewProfileHeader {
  public static createViewProfileHeader(modalToClose: HTMLElement, modalToHide: HTMLElement): HTMLElement {
    const header = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-header' }]);
    const closeBtn = CloseBtn.createCloseBtn('small-btn small-btn-bg close-btn close-profile-btn', modalToClose);
    const title = MainTitle.createMainTitle(translation.profileTitle[State.currentLang]);
    const editBtn = EditProfileBtn.createEditProfileBtn(modalToHide);

    header.append(closeBtn, title, editBtn);

    return header;
  }
}

export default ViewProfileHeader;
