import translation from '../../../../data/translation';
import State from '../../../../scripts/state/state';
import { Tag } from '../../../../types/enums';
import CreateElement from '../../../elements/create-element';
import Subtitle from '../../../elements/subtitle';
import AllBadgesBtn from './all-badges-btn';

class ProfileBadgesTitle {
  public static createProfileBadgesTitle(modalToShow: HTMLElement, modalToHide: HTMLElement): HTMLElement {
    const titleWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-badges-title' }]);
    const title = Subtitle.createSubtitle(
      'subtitle profile-subtitle',
      translation.profileBadgesTitle[State.currentLang]
    );
    const badgesBtn = AllBadgesBtn.createAllBadgesBtn(modalToShow, modalToHide);

    titleWrapper.append(title, badgesBtn);

    return titleWrapper;
  }
}

export default ProfileBadgesTitle;
