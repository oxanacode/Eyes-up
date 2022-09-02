import CreateElement from '../../../elements/create-element';
import Subtitle from '../../../elements/subtitle';
import AllBadgesBtn from './all-badges-btn';
import State from '../../../../scripts/state/state';
import translation from '../../../../data/translation';

import { Tag } from '../../../../types/enums';
import { User } from '../../../../types/interfaces';

class ProfileBadgesTitle {
  public static createProfileBadgesTitle(
    dataBlock: HTMLElement,
    condirmationWrapper: HTMLElement,
    profileBadges: HTMLElement,
    viewProfile: HTMLElement,
    user: User
  ): HTMLElement {
    const titleWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-badges-title' }]);
    const title = Subtitle.createSubtitle(
      'subtitle profile-subtitle',
      translation.profileBadgesTitle[State.currentLang]
    );
    const badgesBtn = AllBadgesBtn.createAllBadgesBtn(dataBlock, condirmationWrapper, profileBadges, viewProfile, user);

    titleWrapper.append(title, badgesBtn);

    return titleWrapper;
  }
}

export default ProfileBadgesTitle;
