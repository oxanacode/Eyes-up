import { RegExpPattern } from '../../types/interfaces';

class RegExpService {
  public static createPasswordRegExp(
    pattern: RegExpPattern,
    min: number,
    max: number
  ): RegExp {
    const range = `{${min},${max}}`;
    const rules: Array<string> = [...Object.values(pattern)];
    const regExp = `${rules
      .map((rule: string) => `(?=.*[${rule}])`)
      .join('')}[${rules.join('')}]${range}`;

    return new RegExp(regExp, 'g');
  }

  public static createLoginRegExp(
    pattern: RegExpPattern,
    min: number,
    max: number
  ): RegExp {
    const range = `{${min - 1},${max - 1}}`;
    const rules: Array<string> = [...Object.values(pattern)];
    const start = `^[${pattern.latin}${pattern.cyrillic}]`;
    const regExp = `${start}+[${rules.join('')}]${range}`;

    return new RegExp(regExp, 'ig');
  }
}

export default RegExpService;
