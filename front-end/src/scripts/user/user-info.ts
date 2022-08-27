import { UserData } from '../../types/types';

class UserInfo implements UserData {
  constructor(
    public login: string,
    public password: string,
    public avatar: number,
    public testing = '',
    public lessonsEn = '',
    public lessonsRu = '',
    public typingAdventure = '',
    public typingHero = '',
    public badges = ''
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

export default UserInfo;
