class ParseBadges {
  public static getBadges(badges: string): Array<number> {
    return JSON.parse(badges);
  }

  public static setBadges(badges: Array<number>): string {
    return JSON.stringify(badges);
  }
}

export default ParseBadges;
