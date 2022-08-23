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
    const range = `{${min},${max}}`;
    const rules: Array<string> = [...Object.values(pattern)];
    const start = `^[${pattern.latinUpper}${pattern.cyrillicUpper}]`;
    const regExp = `${start}[${rules.join('')}]${range}`;

    return new RegExp(regExp, 'g');
  }
}

export default RegExpService;
