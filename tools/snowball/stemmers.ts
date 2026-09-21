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
  /** Character set of the numbers of the stringdefs, when it is not Unicode. */
  charset?: string;
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
  {
    sbl: 'tools/snowball/algorithms/arabic.sbl',
    out: 'packages/lang-ar/src/stemmer-ar.ts',
    className: 'StemmerAr',
    name: 'stemmer-ar',
  },
  {
    sbl: 'tools/snowball/algorithms/danish.sbl',
    out: 'packages/lang-da/src/stemmer-da.ts',
    className: 'StemmerDa',
    name: 'stemmer-da',
  },
  {
    sbl: 'tools/snowball/algorithms/german.sbl',
    out: 'packages/lang-de/src/stemmer-de.ts',
    className: 'StemmerDe',
    name: 'stemmer-de',
  },
  {
    sbl: 'tools/snowball/algorithms/finnish.sbl',
    out: 'packages/lang-fi/src/stemmer-fi.ts',
    className: 'StemmerFi',
    name: 'stemmer-fi',
  },
  {
    sbl: 'tools/snowball/algorithms/french.sbl',
    out: 'packages/lang-fr/src/stemmer-fr.ts',
    className: 'StemmerFr',
    name: 'stemmer-fr',
  },
  {
    sbl: 'tools/snowball/algorithms/hungarian.sbl',
    out: 'packages/lang-hu/src/stemmer-hu.ts',
    className: 'StemmerHu',
    name: 'stemmer-hu',
  },
  {
    sbl: 'tools/snowball/algorithms/italian.sbl',
    out: 'packages/lang-it/src/stemmer-it.ts',
    className: 'StemmerIt',
    name: 'stemmer-it',
  },
  {
    sbl: 'tools/snowball/algorithms/lithuanian.sbl',
    out: 'packages/lang-lt/src/stemmer-lt.ts',
    className: 'StemmerLt',
    name: 'stemmer-lt',
  },
  {
    sbl: 'tools/snowball/algorithms/dutch.sbl',
    out: 'packages/lang-nl/src/stemmer-nl.ts',
    className: 'StemmerNl',
    name: 'stemmer-nl',
  },
  {
    sbl: 'tools/snowball/algorithms/norwegian.sbl',
    out: 'packages/lang-no/src/stemmer-no.ts',
    className: 'StemmerNo',
    name: 'stemmer-no',
  },
  {
    sbl: 'tools/snowball/algorithms/portuguese.sbl',
    out: 'packages/lang-pt/src/stemmer-pt.ts',
    className: 'StemmerPt',
    name: 'stemmer-pt',
  },
  {
    sbl: 'tools/snowball/algorithms/romanian.sbl',
    out: 'packages/lang-ro/src/stemmer-ro.ts',
    className: 'StemmerRo',
    name: 'stemmer-ro',
  },
  {
    sbl: 'tools/snowball/algorithms/russian.sbl',
    out: 'packages/lang-ru/src/stemmer-ru.ts',
    className: 'StemmerRu',
    name: 'stemmer-ru',
  },
  {
    sbl: 'tools/snowball/algorithms/serbian.sbl',
    out: 'packages/lang-sr/src/stemmer-sr.ts',
    className: 'StemmerSr',
    name: 'stemmer-sr',
  },
  {
    sbl: 'tools/snowball/algorithms/swedish.sbl',
    out: 'packages/lang-sv/src/stemmer-sv.ts',
    className: 'StemmerSv',
    name: 'stemmer-sv',
  },
  {
    sbl: 'tools/snowball/algorithms/czech.sbl',
    out: 'packages/lang-cs/src/stemmer-cs.ts',
    className: 'StemmerCs',
    name: 'stemmer-cs',
    charset: 'iso-8859-2',
  },
];

/** The TypeScript that the tool writes for a stemmer; `root` is the root of the repository. */
export function render(root: string, stemmer: Stemmer): string {
  return generate(
    parseProgram(join(root, stemmer.sbl), { charset: stemmer.charset }),
    {
      className: stemmer.className,
      name: stemmer.name,
      source: basename(stemmer.sbl),
      inheritRegions: true,
    }
  );
}
