import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { generate } from '../generate.ts';
import { parseProgram, parseSource } from '../sbl.ts';
import { render, STEMMERS } from '../stemmers.ts';

const here = fileURLToPath(new URL('.', import.meta.url));
const generated = `${here}.generated`;

interface Stemmer {
  stemWord(word: string): string;
}

/** Compiles a program, loads the class it makes and returns an instance. */
async function compile(source: string, id: string): Promise<Stemmer> {
  mkdirSync(generated, { recursive: true });
  const code = generate(parseSource(source), {
    className: 'TestStemmer',
    name: 'test-stemmer',
    source: `${id}.sbl`,
  });
  const file = `${generated}/${id}.ts`;
  writeFileSync(file, code);
  const module = await import(/* @vite-ignore */ file);
  return new module.default();
}

describe('Snowball compiler', () => {
  describe('the English program of Snowball', () => {
    test('It should stem the official vocabulary as the official stemmer does', async () => {
      const program = parseProgram(`${here}fixtures/english.sbl`);
      mkdirSync(generated, { recursive: true });
      const file = `${generated}/english.ts`;
      writeFileSync(
        file,
        generate(program, {
          className: 'SnowballStemmerEn',
          name: 'stemmer-en',
          source: 'english.sbl',
          inheritRegions: true,
        })
      );
      const module = await import(/* @vite-ignore */ file);
      const stemmer: Stemmer = new module.default();
      const words = readFileSync(`${here}fixtures/english-voc.txt`, 'utf8')
        .split('\n')
        .filter(Boolean);
      const expected = readFileSync(
        `${here}fixtures/english-output.txt`,
        'utf8'
      )
        .split('\n')
        .filter(Boolean);
      expect(words.length).toBeGreaterThan(5000);
      const wrong = words
        .map((word, at) => [word, expected[at], stemmer.stemWord(word)])
        .filter(([, official, ours]) => official !== ours)
        .map(([word, official, ours]) => `${word}: ${official} / ${ours}`);
      expect(wrong).toEqual([]);
    });
  });

  describe('the stemmers of the packages', () => {
    const root = fileURLToPath(new URL('../../../', import.meta.url));

    test.each(STEMMERS.map((stemmer) => [stemmer.out, stemmer] as const))(
      'It should have %s as the tool writes it from its program',
      (_out, stemmer) => {
        const committed = readFileSync(`${root}${stemmer.out}`, 'utf8');
        expect(committed.split(String.fromCharCode(13)).join('')).toEqual(
          render(root, stemmer)
        );
      }
    );
  });

  describe('reading a program', () => {
    test('It should read the names, the groupings and the routines', () => {
      const program = parseProgram(`${here}fixtures/english.sbl`);
      expect(program.names.get('p1')).toBe('integer');
      expect(program.names.get('Y_found')).toBe('boolean');
      expect(program.names.get('Step_1a')).toBe('routine');
      expect(program.names.get('stem')).toBe('external');
      expect(program.groupings.map((g) => g.name)).toEqual([
        'aeo',
        'v',
        'v_WXY',
        'valid_LI',
      ]);
      expect(program.routines.map((r) => r.name)).toContain('exception1');
    });

    test('It should add and take away characters of a grouping', () => {
      const program = parseSource(`
        groupings ( a b )
        define a 'abcd'
        define b a - 'bc' + 'z'
      `);
      const chars = (name: string) =>
        String.fromCharCode(
          ...program.groupings.find((g) => g.name === name)!.chars
        );
      expect(chars('a')).toBe('abcd');
      expect(chars('b')).toBe('adz');
    });

    test('It should expand the string escapes and the stringdefs', () => {
      const program = parseSource(`
        routines ( r )
        externals ( stem )
        stringescapes {}
        stringdef e'  '{U+00E9}'
        define r as ('caf{e'}' '{'}')
        define stem as r
      `);
      const body = program.routines[0].body;
      expect(body.t).toBe('seq');
      const items = (body as { items: { t: string; s?: string }[] }).items;
      expect(items.map((item) => item.s)).toEqual(['café', "'"]);
    });

    test('It should refuse a name that was not declared', () => {
      expect(() =>
        parseSource('externals ( stem )\ndefine stem as missing')
      ).toThrow(/undeclared/);
    });

    test('It should refuse a string that never ends', () => {
      expect(() => parseSource("routines ( r )\ndefine r as 'abc")).toThrow(
        /not terminated/
      );
    });
  });

  describe('a program that is written for the test', () => {
    test('It should replace a suffix that is at the end of the word', async () => {
      const stemmer = await compile(
        `
        externals ( stem )
        define stem as ( backwards ( ['ing'] <- 'e' ) )
        `,
        'suffix'
      );
      expect(stemmer.stemWord('making')).toBe('make');
      expect(stemmer.stemWord('kingdom')).toBe('kingdom');
    });

    test('It should try, and put the cursor back when the attempt fails', async () => {
      const stemmer = await compile(
        `
        externals ( stem )
        define stem as ( try ( 'ab' 'x' ) ['ab'] <- 'AB' )
        `,
        'try'
      );
      expect(stemmer.stemWord('abc')).toBe('ABc');
      expect(stemmer.stemWord('abx')).toBe('abx');
    });

    test('It should walk past a grouping and count with a variable', async () => {
      const stemmer = await compile(
        `
        integers ( vowels )
        groupings ( v )
        externals ( stem )
        define v 'aeiou'
        define stem as (
          $vowels = 0
          repeat ( gopast v $vowels += 1 )
          $vowels == 3
          [] <- 'three'
        )
        `,
        'count'
      );
      expect(stemmer.stemWord('banana')).toBe('bananathree');
      expect(stemmer.stemWord('tree')).toBe('tree');
    });

    test('It should read the among that follows a substring', async () => {
      const stemmer = await compile(
        `
        externals ( stem )
        define stem as (
          backwards (
            [substring] among (
              'ies' (<- 'y')
              'es' 's' (delete)
            )
          )
        )
        `,
        'among'
      );
      expect(stemmer.stemWord('flies')).toBe('fly');
      expect(stemmer.stemWord('boxes')).toBe('box');
      expect(stemmer.stemWord('cats')).toBe('cat');
      expect(stemmer.stemWord('dog')).toBe('dog');
    });

    test('It should hop and stop at the limit', async () => {
      const stemmer = await compile(
        `
        externals ( stem )
        define stem as ( hop 2 [] <- '-' )
        `,
        'hop'
      );
      expect(stemmer.stemWord('abcd')).toBe('ab-cd');
      expect(stemmer.stemWord('a')).toBe('a');
    });
  });
});
