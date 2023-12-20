import { validateZip } from './zipValidator';

test('valid postal code should return true', () => {
  expect(validateZip('12345')).toBe(true);
});

test('postal code with less than 5 digits should return false', () => {
  expect(validateZip('1234')).toBe(false);
});

test('postal code with more than 5 digits should return false', () => {
  expect(validateZip('123456')).toBe(false);
});

test('non-numeric postal code should return false', () => {
  expect(validateZip('abcde')).toBe(false);
});
