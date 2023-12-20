import { makeHeading } from './htmlGenerator';

test('create h1 heading', () => {
  expect(makeHeading('Hello', 1)).toBe('<h1>Hello</h1>');
});

test('create h2 heading', () => {
  expect(makeHeading('Next level', 2)).toBe('<h2>Next level</h2>');
});

test('create h3 heading', () => {
    expect(makeHeading('Try your best', 3)).toBe('<h3>Try your best</h3>');
  });

test('heading level out of range should throw error', () => {
  expect(() => makeHeading('Invalid', 7)).toThrow('Heading level must be between 1 and 6.');
});
