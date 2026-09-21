/**
 * Generates the stemmers that are written in Snowball.
 *
 * Every entry of `STEMMERS` names a Snowball program and the TypeScript file
 * made from it. Run it with `pnpm stemmers`, and commit the result.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { generate } from './generate.ts';
import { parseProgram } from './sbl.ts';

interface Stemmer {
  /** The Snowball program. */
  sbl: string;
  /** The TypeScript file to write. */
  out: string;
  className: string;
  name: string;
}

const STEMMERS: Stemmer[] = [
  {
    sbl: 'packages/lang-en-min/snowball/english.sbl',
    out: 'packages/lang-en-min/src/stemmer-en.generated.ts',
    className: 'SnowballStemmerEn',
    name: 'stemmer-en',
  },
];

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const only = process.argv.slice(2);
const written: string[] = [];

for (const stemmer of STEMMERS) {
  if (only.length > 0 && !only.some((part) => stemmer.out.includes(part))) {
    continue;
  }
  const program = parseProgram(join(root, stemmer.sbl));
  const code = generate(program, {
    className: stemmer.className,
    name: stemmer.name,
    source: basename(stemmer.sbl),
    inheritRegions: true,
  });
  const out = join(root, stemmer.out);
  writeFileSync(out, code);
  written.push(out);
  console.log(`${stemmer.sbl} -> ${stemmer.out}`);
}

// The generator writes code that is valid but not laid out by the formatter.
const formatter = join(
  root,
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'oxfmt.cmd' : 'oxfmt'
);
if (written.length > 0 && existsSync(formatter)) {
  execFileSync(formatter, written, {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });
}
