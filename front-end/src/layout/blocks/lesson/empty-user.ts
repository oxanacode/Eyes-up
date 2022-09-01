import { Data } from '../../../types/enums';

class EmptyUser {
  public static createEmptyUser() {
    return {
      _id: Data.noData,
      __v: 0,
      login: Data.noData,
      password: Data.noData,
      avatar: 1,
      testing: Data.noData,
      lessonsEn: Data.noData,
      lessonsRu: Data.noData,
      typingAdventure: Data.noData,
      typingHero: Data.noData,
      badges: Data.noData,
    };
  }
}

export default EmptyUser;
