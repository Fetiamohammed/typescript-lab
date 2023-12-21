import { isLowerCase } from './isLowerCase';

test('isLowerCase returns true for a string with only lowercase letters', () => {
  expect(isLowerCase('abcdef')).toBe(true);
});

test('isLowerCase returns false for a string with uppercase letters', () => {
  expect(isLowerCase('MixedCase')).toBe(false);
});
