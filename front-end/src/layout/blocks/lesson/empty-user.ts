class EmptyUser {
  public static createEmptyUser() {
    const NO_DATA = 'noData';

    return {
      _id: NO_DATA,
      __v: 0,
      login: NO_DATA,
      password: NO_DATA,
      avatar: 1,
      testing: NO_DATA,
      lessonsEn: NO_DATA,
      lessonsRu: NO_DATA,
      typingAdventure: NO_DATA,
      typingHero: NO_DATA,
      badges: NO_DATA,
    };
  }
}

export default EmptyUser;
