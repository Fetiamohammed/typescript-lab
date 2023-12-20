import { roundPrice } from './priceRounder';

test('roundPrice rounds up to two decimal places and adds Swedish currency symbol', () => {
  expect(roundPrice(232.10542)).toBe('232.11 SEK');
  expect(roundPrice(14)).toBe('14.00 SEK');
  expect(roundPrice(1024.2048)).toBe('1024.21 SEK');
});

test('roundPrice handles zero and negative values correctly', () => {
  expect(roundPrice(0)).toBe('0.00 SEK');
  expect(roundPrice(-15.12345)).toBe('-15.12 SEK');
  expect(roundPrice(-10)).toBe('-10.00 SEK');
});

test('roundPrice rounds up properly for values with many decimal places', () => {
  expect(roundPrice(99.9999999)).toBe('100.00 SEK');
});
