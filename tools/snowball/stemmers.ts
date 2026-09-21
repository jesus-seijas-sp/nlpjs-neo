/**
 * The stemmers that are written in Snowball: each names the program and the
 * TypeScript file made from it.
 */
import { basename, join } from 'node:path';
import { generate } from './generate.ts';
import { parseProgram } from './sbl.ts';

export interface Stemmer {
  /** The Snowball program. */
  sbl: string;
  /** The TypeScript file to write. */
  out: string;
  className: string;
  name: string;
}

export const STEMMERS: Stemmer[] = [
  {
    sbl: 'tools/snowball/algorithms/english.sbl',
    out: 'packages/lang-en-min/src/stemmer-en.generated.ts',
    className: 'SnowballStemmerEn',
    name: 'stemmer-en',
  },
  {
    sbl: 'tools/snowball/algorithms/catalan.sbl',
    out: 'packages/lang-ca/src/stemmer-ca.ts',
    className: 'StemmerCa',
    name: 'stemmer-ca',
  },
  {
    sbl: 'tools/snowball/algorithms/basque.sbl',
    out: 'packages/lang-eu/src/stemmer-eu.ts',
    className: 'StemmerEu',
    name: 'stemmer-eu',
  },
  {
    sbl: 'tools/snowball/algorithms/irish.sbl',
    out: 'packages/lang-ga/src/stemmer-ga.ts',
    className: 'StemmerGa',
    name: 'stemmer-ga',
  },
  {
    sbl: 'tools/snowball/algorithms/armenian.sbl',
    out: 'packages/lang-hy/src/stemmer-hy.ts',
    className: 'StemmerHy',
    name: 'stemmer-hy',
  },
  {
    sbl: 'tools/snowball/algorithms/indonesian.sbl',
    out: 'packages/lang-id/src/stemmer-id.ts',
    className: 'StemmerId',
    name: 'stemmer-id',
  },
  {
    sbl: 'tools/snowball/algorithms/nepali.sbl',
    out: 'packages/lang-ne/src/stemmer-ne.ts',
    className: 'StemmerNe',
    name: 'stemmer-ne',
  },
  {
    sbl: 'tools/snowball/algorithms/tamil.sbl',
    out: 'packages/lang-ta/src/stemmer-ta.ts',
    className: 'StemmerTa',
    name: 'stemmer-ta',
  },
  {
    sbl: 'tools/snowball/algorithms/turkish.sbl',
    out: 'packages/lang-tr/src/stemmer-tr.ts',
    className: 'StemmerTr',
    name: 'stemmer-tr',
  },
  {
    sbl: 'tools/snowball/algorithms/spanish.sbl',
    out: 'packages/lang-es/src/stemmer-es.generated.ts',
    className: 'SnowballStemmerEs',
    name: 'stemmer-es',
  },
];

/** The TypeScript that the tool writes for a stemmer; `root` is the root of the repository. */
export function render(root: string, stemmer: Stemmer): string {
  return generate(parseProgram(join(root, stemmer.sbl)), {
    className: stemmer.className,
    name: stemmer.name,
    source: basename(stemmer.sbl),
    inheritRegions: true,
  });
}
