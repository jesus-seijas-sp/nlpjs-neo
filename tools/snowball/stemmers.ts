/**
 * The stemmers that are written in Snowball: each names where its program is,
 * what it says of its origin, and the TypeScript file made from it.
 */
import { ARABIC, CZECH, SPANISH } from './edits.ts';
import { generate } from './generate.ts';
import { parseSource } from './sbl.ts';
import { loadProgram, type Source } from './sources.ts';

export interface Stemmer {
  /** Where the Snowball program is, and our changes to it. */
  source: Source;
  /** What the header of the generated file says the program is. */
  origin: string;
  /** The TypeScript file to write. */
  out: string;
  className: string;
  name: string;
  /** Character set of the numbers of the stringdefs, when it is not Unicode. */
  charset?: string;
}

export const STEMMERS: Stemmer[] = [
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/v2.2.0/algorithms/english.sbl',
      sha256:
        '10493352edae52d38759a442168e929635d9e731e444b1bdc79eb30e2da60cb1',
    },
    origin: 'english.sbl of Snowball 2.2.0',
    out: 'packages/lang-en-min/src/stemmer-en.generated.ts',
    className: 'SnowballStemmerEn',
    name: 'stemmer-en',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/411550ddb8ea049bc3e8d39bf56454e8a9ef0be6/algorithms/catalan.sbl',
      sha256:
        '4cc048a2bab5a619f71266d6efcbc189761f0794d4a83d3797788eded81fef9c',
    },
    origin: 'catalan.sbl of Snowball at commit 411550d',
    out: 'packages/lang-ca/src/stemmer-ca.ts',
    className: 'StemmerCa',
    name: 'stemmer-ca',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/411550ddb8ea049bc3e8d39bf56454e8a9ef0be6/algorithms/basque.sbl',
      sha256:
        'f11a00f12105dba9bcf8f57cf4dd63bf65d1d0528a72b86e4a8f5d55bdd3fd03',
    },
    origin: 'basque.sbl of Snowball at commit 411550d',
    out: 'packages/lang-eu/src/stemmer-eu.ts',
    className: 'StemmerEu',
    name: 'stemmer-eu',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/411550ddb8ea049bc3e8d39bf56454e8a9ef0be6/algorithms/irish.sbl',
      sha256:
        '54481cdd8dcf849ed306c39ea1651e7ca96a39498ffb88b40d7568772a1bec3f',
    },
    origin: 'irish.sbl of Snowball at commit 411550d',
    out: 'packages/lang-ga/src/stemmer-ga.ts',
    className: 'StemmerGa',
    name: 'stemmer-ga',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/411550ddb8ea049bc3e8d39bf56454e8a9ef0be6/algorithms/armenian.sbl',
      sha256:
        '3fcb6fb60a8722469ad95b49737a206790156efd76add087733209a278befd71',
    },
    origin: 'armenian.sbl of Snowball at commit 411550d',
    out: 'packages/lang-hy/src/stemmer-hy.ts',
    className: 'StemmerHy',
    name: 'stemmer-hy',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/411550ddb8ea049bc3e8d39bf56454e8a9ef0be6/algorithms/indonesian.sbl',
      sha256:
        '1900b5d9a2d9c616b1249f75f731c12915c98a0db6be2ffd38fef5066573c71d',
    },
    origin: 'indonesian.sbl of Snowball at commit 411550d',
    out: 'packages/lang-id/src/stemmer-id.ts',
    className: 'StemmerId',
    name: 'stemmer-id',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/411550ddb8ea049bc3e8d39bf56454e8a9ef0be6/algorithms/nepali.sbl',
      sha256:
        'fa2f63d722259a9b11729409b0fae4ab46ba36e9def696939db84bc8b76a39bf',
    },
    origin: 'nepali.sbl of Snowball at commit 411550d',
    out: 'packages/lang-ne/src/stemmer-ne.ts',
    className: 'StemmerNe',
    name: 'stemmer-ne',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/411550ddb8ea049bc3e8d39bf56454e8a9ef0be6/algorithms/tamil.sbl',
      sha256:
        '7d14bb3e9ef6932f5a74dfca6732e0443c0272f9cb84c780a028d8d88518cbb6',
    },
    origin: 'tamil.sbl of Snowball at commit 411550d',
    out: 'packages/lang-ta/src/stemmer-ta.ts',
    className: 'StemmerTa',
    name: 'stemmer-ta',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/411550ddb8ea049bc3e8d39bf56454e8a9ef0be6/algorithms/turkish.sbl',
      sha256:
        'bbfa3db376246ec52c11d78275ce271baa3d01b46f10e654688c855e06047e44',
    },
    origin: 'turkish.sbl of Snowball at commit 411550d',
    out: 'packages/lang-tr/src/stemmer-tr.ts',
    className: 'StemmerTr',
    name: 'stemmer-tr',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/v2.2.0/algorithms/spanish.sbl',
      sha256:
        'f75c503f8c669da762b1e7692ff18e31c3858b20e77a8937546b3870b0585cfe',
      edits: SPANISH,
    },
    origin:
      'spanish.sbl of Snowball 2.2.0 with our changes (tools/snowball/edits.ts)',
    out: 'packages/lang-es/src/stemmer-es.generated.ts',
    className: 'SnowballStemmerEs',
    name: 'stemmer-es',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/v2.2.0/algorithms/arabic.sbl',
      sha256:
        'ff7495f0ce6738f29684c66399c32c018eb3f25a01c30bd2e69180db484b8f56',
      edits: ARABIC,
    },
    origin:
      'arabic.sbl of Snowball 2.2.0 with our changes (tools/snowball/edits.ts)',
    out: 'packages/lang-ar/src/stemmer-ar.ts',
    className: 'StemmerAr',
    name: 'stemmer-ar',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/v2.2.0/algorithms/danish.sbl',
      sha256:
        '03e163d32c78f976afc6455f287083cc78b339afa271d73b575e711c04cacc19',
    },
    origin: 'danish.sbl of Snowball 2.2.0',
    out: 'packages/lang-da/src/stemmer-da.ts',
    className: 'StemmerDa',
    name: 'stemmer-da',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/v2.2.0/algorithms/german.sbl',
      sha256:
        'da77e92ed1b84507204e307ccfc4df1e163108994e987a82aa9e63e8cbc89d78',
    },
    origin: 'german.sbl of Snowball 2.2.0',
    out: 'packages/lang-de/src/stemmer-de.ts',
    className: 'StemmerDe',
    name: 'stemmer-de',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/v2.2.0/algorithms/finnish.sbl',
      sha256:
        '917156c9da56a18b1e81b8d8051bcf2d1ea58f5dc09b35a38dbff8d74ae7920b',
    },
    origin: 'finnish.sbl of Snowball 2.2.0',
    out: 'packages/lang-fi/src/stemmer-fi.ts',
    className: 'StemmerFi',
    name: 'stemmer-fi',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/v2.2.0/algorithms/french.sbl',
      sha256:
        '119074de7759bbbb3e1472382dac93b6017426732034bd85962635cc5a707e5b',
    },
    origin: 'french.sbl of Snowball 2.2.0',
    out: 'packages/lang-fr/src/stemmer-fr.ts',
    className: 'StemmerFr',
    name: 'stemmer-fr',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/v2.2.0/algorithms/hungarian.sbl',
      sha256:
        'b3a1a2c5121b6522054f1191c1627e34afd73baa7ec448af2095ea6e14fe1df3',
    },
    origin: 'hungarian.sbl of Snowball 2.2.0',
    out: 'packages/lang-hu/src/stemmer-hu.ts',
    className: 'StemmerHu',
    name: 'stemmer-hu',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/v2.2.0/algorithms/italian.sbl',
      sha256:
        '5046fbe37e26938a32d7782266479358e3e61cd24831afb0eb0c2573421381c6',
    },
    origin: 'italian.sbl of Snowball 2.2.0',
    out: 'packages/lang-it/src/stemmer-it.ts',
    className: 'StemmerIt',
    name: 'stemmer-it',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/v2.2.0/algorithms/lithuanian.sbl',
      sha256:
        'a03da5b6336c7373eb330ff9014536c4f733512d7830512c7c4d9236fefe23ea',
    },
    origin: 'lithuanian.sbl of Snowball 2.2.0',
    out: 'packages/lang-lt/src/stemmer-lt.ts',
    className: 'StemmerLt',
    name: 'stemmer-lt',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/v2.2.0/algorithms/dutch.sbl',
      sha256:
        '2552f3db19f94bb352df84f31be5db25103bdb5d6577932be6ea4220ca7910ee',
    },
    origin: 'dutch.sbl of Snowball 2.2.0',
    out: 'packages/lang-nl/src/stemmer-nl.ts',
    className: 'StemmerNl',
    name: 'stemmer-nl',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/v2.2.0/algorithms/norwegian.sbl',
      sha256:
        '7cfa1644a3fce7b14e027a790281bcf2ac84d198845b7ef06ad8a3236c23e69f',
    },
    origin: 'norwegian.sbl of Snowball 2.2.0',
    out: 'packages/lang-no/src/stemmer-no.ts',
    className: 'StemmerNo',
    name: 'stemmer-no',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/v2.2.0/algorithms/portuguese.sbl',
      sha256:
        '5709ba2a1ca960ffd2a53185ed53bef03cd42de74d869ed94493917fe1eb8135',
    },
    origin: 'portuguese.sbl of Snowball 2.2.0',
    out: 'packages/lang-pt/src/stemmer-pt.ts',
    className: 'StemmerPt',
    name: 'stemmer-pt',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/v2.2.0/algorithms/romanian.sbl',
      sha256:
        '2bcdf2d072d0a718652c22f9c1e4e5636e37c534467bfd6f31ecbdcd72f58ca0',
    },
    origin: 'romanian.sbl of Snowball 2.2.0',
    out: 'packages/lang-ro/src/stemmer-ro.ts',
    className: 'StemmerRo',
    name: 'stemmer-ro',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/v2.2.0/algorithms/russian.sbl',
      sha256:
        'f1b54ea9315b434c4595529e95dd6ad024490785aa56d5013de988a0d3d27fc9',
    },
    origin: 'russian.sbl of Snowball 2.2.0',
    out: 'packages/lang-ru/src/stemmer-ru.ts',
    className: 'StemmerRu',
    name: 'stemmer-ru',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/v2.2.0/algorithms/serbian.sbl',
      sha256:
        '08d8bc64c088ba8fbfe25be2c931150d5883aee38de39019b4229cab95489223',
    },
    origin: 'serbian.sbl of Snowball 2.2.0',
    out: 'packages/lang-sr/src/stemmer-sr.ts',
    className: 'StemmerSr',
    name: 'stemmer-sr',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/snowballstem/snowball/v2.2.0/algorithms/swedish.sbl',
      sha256:
        'cf877514abf1f67f1f91ac2c50d3b0f06bdb7006a514e4976c96c5fc8f5622be',
    },
    origin: 'swedish.sbl of Snowball 2.2.0',
    out: 'packages/lang-sv/src/stemmer-sv.ts',
    className: 'StemmerSv',
    name: 'stemmer-sv',
  },
  {
    source: {
      url: 'https://raw.githubusercontent.com/dundalek/czech-stemmer/dd88172be558da5dccec97972a5b34a41f5a827b/original/czech-do.sbl.txt',
      sha256:
        'a3e606b35d6aa7e73186da9f232b8db49bde2e868337880829848d3e6ed1f91f',
      edits: CZECH,
    },
    origin:
      "czech-do.sbl of Jim O'Regan (2012), for the stemmer of Ljiljana Dolamic",
    out: 'packages/lang-cs/src/stemmer-cs.ts',
    className: 'StemmerCs',
    name: 'stemmer-cs',
    charset: 'iso-8859-2',
  },
];

/** The TypeScript that the tool writes for a stemmer. */
export async function render(stemmer: Stemmer): Promise<string> {
  const text = await loadProgram(stemmer.source);
  return generate(
    parseSource(text, stemmer.source.url, { charset: stemmer.charset }),
    {
      className: stemmer.className,
      name: stemmer.name,
      source: stemmer.origin,
      inheritRegions: true,
    }
  );
}
