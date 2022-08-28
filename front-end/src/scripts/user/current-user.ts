import { UserData } from '../../types/types';

class CurrentUser implements UserData {
  constructor(
    public login: string,
    public password: string,
    public avatar: number,
    public testing: string,
    public lessonsEn: string,
    public lessonsRu: string,
    public typingAdventure: string,
    public typingHero: string,
    public badges: string
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

export default CurrentUser;
