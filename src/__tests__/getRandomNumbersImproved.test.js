import { getNew, getRandomSpecifiedWIthHalf } from '../helpers/getRandomNumbersImproved';

describe('the getNew function', () => {
  const randomNumber = getNew(2, 9);
  test('the getting random numbers between 2 and 9', () => {
    const expectedNumbers = randomNumber >= 2 && randomNumber < 10;
    expect(expectedNumbers).toBe(true);
  });
  test('not to be 9.5', () => {
    expect(randomNumber).not.toBe(9.5);
  });
  test('not to be 0 or 1', () => {
    expect(randomNumber).not.toBe(0 || 1);
  });
});
describe('the getRandomSpecifiedWIthHalf function', () => {
  const excludedNumbers = [0.5, 1, 1.5, 9.5];
  const randomNumber = getRandomSpecifiedWIthHalf(excludedNumbers, 0, 9);
  test('exclude specified numbers', () => {
    expect(randomNumber).not.toBe(0.5 || 1 || 1.5 || 9.5);
  });
  test('get numbers between 0 and 9', () => {
    const expectedNumbers = randomNumber >= 0 && randomNumber <= 9;
    expect(expectedNumbers).toBe(true);
  });
  test('get 9', () => {
    for (let x = 0; x < 1000; x++) {
      const value = getRandomSpecifiedWIthHalf(excludedNumbers, 0, 9);
      //   console.log(value);
      expect(value).not.toBe(9);
      //   if the test does not pass it is because i got a 9
    }
  });
  test('get 0', () => {
    for (let x = 0; x < 1000; x++) {
      const value = getRandomSpecifiedWIthHalf(excludedNumbers, 0, 9);
      //   console.log(value);
      expect(value).not.toBe(0);
      //   if the test does not pass it is because i got a 0
    }
  });
});
