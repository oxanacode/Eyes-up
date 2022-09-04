import CreateElement from '../../../elements/create-element';
import GamesStats from './games-stats';
import LessonsStats from './lessons-stats';

import { Tag } from '../../../../types/enums';
import { User } from '../../../../types/interfaces';

class ProfileStats {
  public static createProfileStats(user: User): HTMLElement {
    const wrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'profile-stats-wrapper' }]);
    const lessons = LessonsStats.createLessonsStats(user);
    const games = GamesStats.createGamesStats(user);

    wrapper.append(lessons, games);

    return wrapper;
  }
}

export default ProfileStats;
