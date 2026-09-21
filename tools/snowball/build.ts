/**
 * Generates the stemmers that are written in Snowball, the ones `stemmers.ts`
 * lists. Run it with `pnpm stemmers`, and commit the result.
 */
import { writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { render, STEMMERS } from './stemmers.ts';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const only = process.argv.slice(2);

for (const stemmer of STEMMERS) {
  if (only.length > 0 && !only.some((part) => stemmer.out.includes(part))) {
    continue;
  }
  writeFileSync(join(root, stemmer.out), render(root, stemmer));
  console.log(`${stemmer.sbl} -> ${stemmer.out}`);
}
