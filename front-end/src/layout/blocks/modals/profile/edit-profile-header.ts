import CreateElement from '../../../elements/create-element';
import State from '../../../../scripts/state/state';
import MainTitle from '../../../elements/main-title';
import translation from '../../../../data/translation';
import CloseEditProfileBtn from './close-edit-profile-btn';

import { Tag } from '../../../../types/enums';

class EditProfileHeader {
  public static createEditProfileHeader(modalToHide: HTMLElement): HTMLElement {
    const header = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-header' }]);
    const closeBtn = CloseEditProfileBtn.createCloseEditProfileBtn(modalToHide);
    const title = MainTitle.createMainTitle(translation.profileEditTitle[State.currentLang]);

    header.append(closeBtn, title);

    return header;
  }
}

export default EditProfileHeader;
