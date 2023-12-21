import { getGenitive } from './getGenitive';

test('getGenitive adds apostrophe-s for names ending in a consonant', () => {
  expect(getGenitive('Jonathan')).toBe("Jonathan's");
  expect(getGenitive('Hampus')).toBe("Hampus's");
  expect(getGenitive('Claes')).toBe("Claes's");
});

test('getGenitive adds s for names ending in a vowel', () => {
  expect(getGenitive('Anna')).toBe("Anna");
  expect(getGenitive('Johanna')).toBe("Johanna");
});
