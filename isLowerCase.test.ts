import { isLowerCase } from './isLowerCase';

test('isLowerCase returns true for a string with only lowercase letters', () => {
  expect(isLowerCase('abcdef')).toBe(true);
  expect(isLowerCase('lowercase')).toBe(true);
  expect(isLowerCase('abcdefghijklmnopqrstuvwxyz')).toBe(true);
});

test('isLowerCase returns false for a string with uppercase letters', () => {
  expect(isLowerCase('MixedCase')).toBe(false);
  expect(isLowerCase('UpperCase')).toBe(false);
  expect(isLowerCase('ABCDef')).toBe(false);
});

test('isLowerCase returns false for a string with numbers and symbols', () => {
  expect(isLowerCase('abc123')).toBe(false);
  expect(isLowerCase('special!characters')).toBe(false);
  expect(isLowerCase('123456')).toBe(false);
});

test('isLowerCase returns false for an empty string', () => {
  expect(isLowerCase('')).toBe(true);
});

test('isLowerCase returns false for a string with only special characters', () => {
  expect(isLowerCase('!@#$%^&*()')).toBe(false);
});

test('isLowerCase returns true for a string with a single lowercase letter', () => {
  expect(isLowerCase('a')).toBe(true);
  expect(isLowerCase('z')).toBe(true);
});

test('isLowerCase returns false for a string with a single uppercase letter', () => {
  expect(isLowerCase('A')).toBe(false);
  expect(isLowerCase('Z')).toBe(false);
});
