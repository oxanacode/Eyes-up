class LocalStorageService {
  public static setItem<T>(key: string, value: T): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  public static getItem<T>(key: string): T | null {
    const data: string | null = window.localStorage.getItem(key);

    if (data !== null) {
      return JSON.parse(window.localStorage.getItem(key) as string);
    }

    return null;
  }

  public static removeItem(key: string): void {
    window.localStorage.removeItem(key);
  }
}

export default LocalStorageService;
