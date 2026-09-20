# How to Contribute

## Reporting Issues

Should you run into issues with the project, please don't hesitate to let us know by
[filing an issue](https://github.com/axa-group/nlp.js/issues/new).

Pull requests containing only failing tests demonstrating an issue are also welcomed. Having these tests will help avoiding future regressions of this specific issue once it's fixed.

## Pull Requests

We accept [pull requests](https://github.com/axa-group/nlp.js/pull/new/master)!

Generally we like to see pull requests that:

- Maintain the existing code style
- Are focused on a single change (i.e. avoid large refactoring or style adjustments in untouched code if not the primary goal of the pull request)
- Have [conventional commits](https://conventionalcommits.org/)
- Have tests
- Don't decrease the current code coverage

## Running tests

To run tests locally, first install all dependencies.

```shell
pnpm install
```

From the root directory, run the tests.

```shell
pnpm test
```

## Changesets

Any pull request that changes published code needs a changeset. From the root directory:

```shell
pnpm changeset
```

Pick the packages you touched, pick a bump type for each, and write one line describing the
change. Commit the generated file in `.changeset/` along with your code. If the change is
internal only (tests, CI, docs), run `pnpm changeset add --empty` instead.

## Releases

Releases are automated. When a pull request with changesets lands on `main`, the Release
workflow opens a "Release Packages" pull request that applies the version bumps and writes the
changelog entries, then merges it. The follow-up run publishes the bumped packages to npm using
trusted publishing over GitHub OIDC, so no npm token is stored in this repository.
