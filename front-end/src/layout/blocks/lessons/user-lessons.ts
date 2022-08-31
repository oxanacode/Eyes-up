import State from '../../../scripts/state/state';
import ParseLessons from '../../../scripts/parsing/parse-lessons';

import { Data, Layout } from '../../../types/enums';
import { User, UserLessons } from '../../../types/interfaces';

class UserLessonsStats {
  public static getAllLessons(user: User) {
    if (user.lessonsEn !== Data.noData && State.currentLayout === Layout.en) {
      return ParseLessons.getLessons(user.lessonsEn);
    }

    if (user.lessonsRu !== Data.noData && State.currentLayout === Layout.ru) {
      return ParseLessons.getLessons(user.lessonsEn);
    }

    return {};
  }
}

export default UserLessonsStats;
