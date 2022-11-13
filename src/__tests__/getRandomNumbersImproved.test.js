import { getNew } from '../helpers/getRandomNumbersImproved';

describe('the getting random numbers between 2 and 9', () => {
  const randomNumber = getNew(2, 9);
  test('the getNew function', () => {
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
