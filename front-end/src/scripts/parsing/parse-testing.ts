import { UserTesting } from '../../types/interfaces';

class ParseTesting {
  public static getTesting(testing: string): UserTesting {
    return JSON.parse(testing);
  }

  public static setTesting(testing: UserTesting): string {
    return JSON.stringify(testing);
  }
}

export default ParseTesting;
