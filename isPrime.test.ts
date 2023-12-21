import { isPrime } from './isPrime';

test('isPrime returns true for prime numbers', () => {
  expect(isPrime(2)).toBe(true);
  expect(isPrime(3)).toBe(true);
  expect(isPrime(5)).toBe(true);
  expect(isPrime(7)).toBe(true);
  expect(isPrime(11)).toBe(true);
});

test('isPrime returns false for non-prime numbers', () => {
  expect(isPrime(1)).toBe(false);
  expect(isPrime(4)).toBe(false);
  expect(isPrime(6)).toBe(false);
  expect(isPrime(8)).toBe(false);
  expect(isPrime(9)).toBe(false);
});

test('isPrime returns false for negative numbers', () => {
  expect(isPrime(-2)).toBe(false);
  expect(isPrime(-7)).toBe(false);

});
test('isPrime returns false for 0 and 1', () => {
  expect(isPrime(0)).toBe(false);
  expect(isPrime(1)).toBe(false);
});
