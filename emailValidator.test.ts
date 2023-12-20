// emailValidator.test.ts
import { validateEmail } from './emailValidator';

test('valid email should return true', () => {
  expect(validateEmail('jonatan@gmail.com')).toBe(true);
});

test('invalid email without top-level domain should return false', () => {
  expect(validateEmail('jonatan@gmail')).toBe(false);
});

test('invalid email without "@" symbol should return false', () => {
  expect(validateEmail('jonatan.com')).toBe(false);
});
