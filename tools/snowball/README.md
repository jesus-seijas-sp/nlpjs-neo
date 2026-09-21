# Snowball to TypeScript

The stemmers of most languages come from [Snowball](https://snowballstem.org/), a small
language for writing stemming algorithms. This tool compiles a Snowball program (`.sbl`) into a
TypeScript class that runs on `BaseStemmer` and `SnowballStemmer` of `@nlpjs-neo/core`.

```bash
pnpm stemmers              # generate every stemmer listed in tools/snowball/build.ts
pnpm stemmers lang-en-min  # only the ones whose output path contains this
```

## Why

The stemmers used to be output of the old Snowball JavaScript generator, edited by hand over the
years. Nobody could tell what was Snowball and what was ours, they carried their own lint
exemptions, and updating an algorithm meant rewriting it. Now the algorithm is the Snowball
program, kept with the tool, and the generated file is never edited.

## How a package uses it

```
tools/snowball/algorithms/english.sbl     the Snowball program
packages/lang-en-min/
  src/stemmer-en.generated.ts             what the tool writes (do not edit)
  src/stemmer-en.ts                       our class: extends the generated one and adds what is ours
```

The programs of all the languages live together in `tools/snowball/algorithms/`, so one place has
every algorithm, and a package holds only TypeScript.

What is ours goes in the class that extends the generated one. For English that is the
tokenizer, which expands `I'll` before the words are stemmed:

```ts
class StemmerEn extends SnowballStemmerEn {
  getTokenizer() { /* ... */ }
}
```

A change to the algorithm itself is made in the `.sbl` file, with a comment that says what
differs from Snowball, and then `pnpm stemmers` writes the TypeScript again.

## What is generated so far

English (`lang-en-min`, with our tokenizer on top), and Catalan, Basque, Irish, Armenian,
Indonesian, Nepali, Tamil and Turkish, whose stemmers had nothing of ours in them: their generated
file is the stemmer (`stemmer-xx.ts`). All of them are the current programs of Snowball, except
English, which is 2.2.0. `stemmers.ts` lists them, and a test checks that each committed file is
what the tool writes.

## Adding a language

Put the `.sbl` in `tools/snowball/algorithms/`, add an entry to `STEMMERS` in `build.ts`, and run
`pnpm stemmers`. The Snowball programs of every language are in
<https://github.com/snowballstem/snowball/tree/master/algorithms>.

## What the generated code looks like

- A routine is a method, and `stem` is `innerStem`. Variables are fields (`I_p1`, `B_Y_found`).
- A command that can fail is a labelled block, and the failure is a `break` out of it.
- The shapes that repeat are calls of the runtime: `[substring]` is `find_slice`, `do <rule>` is
  `do_backward(this.r_Step_2)`, and an `or` of tests that leave the cursor alone, or a `not` of one,
  is a single condition (`!this.eq_s_b('y') && !this.eq_s_b('Y')`).
- `gopast` and `goto` on a grouping are calls (`gopast_in_grouping`, `goto_out_grouping_b`).
- A routine that ends on a test returns it, and one that only tests a region (`R1`, `R2`, `RV`) is
  left out, because `SnowballStemmer` has it.
- Among tables and groupings are static fields.

## Layout

The generator writes the code laid out as the formatter of the repository wants it (80 columns,
single quotes, the number tables packed), so there is no formatting step: what `pnpm stemmers`
writes passes `oxfmt --check` as it is. A test keeps the committed file equal to what the tool
writes.

## Checking it

`test/snowball.test.ts` compiles the current English program of Snowball and stems a sample of
the official test vocabulary with it; every stem is the official one. The other tests read small
programs and run what they generate.

## Where the English program comes from

`tools/snowball/algorithms/english.sbl` is the program of Snowball 2.2.0, which is the one the
old stemmer was generated from, so the stemmer answers what it always did (tested over 100,000
words). The current program of Snowball (`test/fixtures/english.sbl`) stems 57 of the 42,000
words of the official vocabulary differently, such as `added`, which it stems to `add`. Replacing
the file with that one is a change of behavior, and is left as a decision.

## Not supported yet

`$` on a string variable (`$s C`), a guarded `among` with a single string, and the
`among` that comes before `substring` (a legacy form). None of the programs of the languages here
uses them; the tool stops with an error where it meets one.

## License

Snowball is BSD licensed (`LICENSE-SNOWBALL`). The `.sbl` programs keep that license.
