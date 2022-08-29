class Random {
  static createRandomNumber(num: number): number {
    const randomNum = Math.random() * num;

    return Math.trunc(randomNum);
  }

  static createRandomNums(length: number, maxNum: number) {
    const nums: number[] = [];

    for (let i = 0; nums.length < length; i += 1) {
      const newNum = Random.createRandomNumber(maxNum);
      if (!nums.includes(newNum)) nums.push(newNum);
    }

    return nums;
  }

  static randomBeastHp(lvl: number) {
    const multiplier = lvl * 100;
    const randomResult = Math.random() * 100 + multiplier;
    const finalHp = Math.trunc(randomResult / 10) * 10;

    return finalHp;
  }
}

export default Random;
