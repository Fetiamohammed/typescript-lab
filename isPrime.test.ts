import { isPrime } from './isPrime';

test('isPrime returns false for a non-prime number', () => {
  expect(isPrime(4)).toBe(false);
});

