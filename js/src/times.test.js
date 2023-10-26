const times = require('./times');

describe('times', () => {
  test('multiplies two positive numbers', () => {
    expect(times(2, 3)).toBe(6);
  });

  test('multiplies a positive and a negative number', () => {
    expect(times(-2, 3)).toBe(-6);
  });

  test('multiplies two negative numbers', () => {
    expect(times(-2, -3)).toBe(6);
  });

  test('multiplies a number by zero', () => {
    expect(times(2, 0)).toBe(0);
  });
});
