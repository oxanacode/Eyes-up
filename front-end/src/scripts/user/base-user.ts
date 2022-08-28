import { UserData } from '../../types/types';
import { Data } from '../../types/enums';

class BaseUser implements UserData {
  constructor(
    public login: string,
    public password: string,
    public avatar: number,
    public testing = Data.noData,
    public lessonsEn = Data.noData,
    public lessonsRu = Data.noData,
    public typingAdventure = Data.noData,
    public typingHero = Data.noData,
    public badges = Data.noData
  ) {
    this.login = login;
    this.password = password;
    this.avatar = avatar;
    this.testing = testing;
    this.lessonsEn = lessonsEn;
    this.lessonsRu = lessonsRu;
    this.typingAdventure = typingAdventure;
    this.typingHero = typingHero;
    this.badges = badges;
  }
}

export default BaseUser;
