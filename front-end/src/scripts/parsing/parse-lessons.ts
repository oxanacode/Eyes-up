import { UserLessons } from '../../types/interfaces';

class ParseLessons {
  public static getLessons(lessons: string): UserLessons {
    return JSON.parse(lessons);
  }

  public static setLessons(lessons: UserLessons): string {
    return JSON.stringify(lessons);
  }
}

export default ParseLessons;
