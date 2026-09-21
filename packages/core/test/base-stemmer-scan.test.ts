import { BaseStemmer } from '../src/index.js';

/** A grouping table over the characters min to max, as Snowball builds it. */
function grouping(chars: string, min: number, max: number): number[] {
  const table: number[] = Array.from(
    { length: ((max - min) >> 3) + 1 },
    () => 0
  );
  for (const char of chars) {
    const bit = char.charCodeAt(0) - min;
    table[bit >> 3] |= 1 << (bit & 7);
  }
  return table;
}

const MIN = 97;
const MAX = 122;
const vowels = grouping('aeiou', MIN, MAX);

function stemmerAt(word: string, cursor: number): BaseStemmer {
  const stemmer = new BaseStemmer();
  stemmer.setCurrent(word);
  stemmer.cursor = cursor;
  return stemmer;
}

describe('BaseStemmer scanning', () => {
  describe('gopast', () => {
    test('It should move past the next character of the grouping', () => {
      const stemmer = stemmerAt('strong', 0);
      expect(stemmer.gopast_in_grouping(vowels, MIN, MAX)).toBe(true);
      expect(stemmer.cursor).toBe(4);
    });
    test('It should move past the next character outside the grouping', () => {
      const stemmer = stemmerAt('aaba', 0);
      expect(stemmer.gopast_out_grouping(vowels, MIN, MAX)).toBe(true);
      expect(stemmer.cursor).toBe(3);
    });
    test('It should answer false at the limit when there is none', () => {
      const stemmer = stemmerAt('rhythm', 0);
      expect(stemmer.gopast_in_grouping(vowels, MIN, MAX)).toBe(false);
      expect(stemmer.cursor).toBe(6);
    });
    test('It should scan backwards from the cursor', () => {
      const stemmer = stemmerAt('strong', 6);
      expect(stemmer.gopast_in_grouping_b(vowels, MIN, MAX)).toBe(true);
      expect(stemmer.cursor).toBe(3);
      const other = stemmerAt('aaba', 4);
      expect(other.gopast_out_grouping_b(vowels, MIN, MAX)).toBe(true);
      expect(other.cursor).toBe(2);
    });
    test('It should stop at the backward limit', () => {
      const stemmer = stemmerAt('rhythm', 6);
      stemmer.limit_backward = 2;
      expect(stemmer.gopast_in_grouping_b(vowels, MIN, MAX)).toBe(false);
      expect(stemmer.cursor).toBe(2);
    });
  });

  describe('goto', () => {
    test('It should stop before the next character of the grouping', () => {
      const stemmer = stemmerAt('strong', 0);
      expect(stemmer.goto_in_grouping(vowels, MIN, MAX)).toBe(true);
      expect(stemmer.cursor).toBe(3);
    });
    test('It should stop before the next character outside the grouping', () => {
      const stemmer = stemmerAt('aaba', 0);
      expect(stemmer.goto_out_grouping(vowels, MIN, MAX)).toBe(true);
      expect(stemmer.cursor).toBe(2);
    });
    test('It should answer false at the limit when there is none', () => {
      const stemmer = stemmerAt('rhythm', 0);
      expect(stemmer.goto_in_grouping(vowels, MIN, MAX)).toBe(false);
      expect(stemmer.cursor).toBe(6);
    });
    test('It should scan backwards from the cursor', () => {
      const stemmer = stemmerAt('strong', 6);
      expect(stemmer.goto_in_grouping_b(vowels, MIN, MAX)).toBe(true);
      expect(stemmer.cursor).toBe(4);
      const other = stemmerAt('aaba', 4);
      expect(other.goto_out_grouping_b(vowels, MIN, MAX)).toBe(true);
      expect(other.cursor).toBe(3);
    });
    test('It should stop at the backward limit', () => {
      const stemmer = stemmerAt('rhythm', 6);
      stemmer.limit_backward = 2;
      expect(stemmer.goto_out_grouping_b(vowels, MIN, MAX)).toBe(true);
      expect(stemmer.cursor).toBe(6);
      const none = stemmerAt('rhythm', 6);
      none.limit_backward = 2;
      expect(none.goto_in_grouping_b(vowels, MIN, MAX)).toBe(false);
      expect(none.cursor).toBe(2);
    });
  });
});
