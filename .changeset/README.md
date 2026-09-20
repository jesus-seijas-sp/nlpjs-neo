# Changesets

Every user-visible change needs a changeset. Run `pnpm changeset` from the repo root, pick the
packages you touched, pick a bump type, and write a line describing the change. The generated
markdown file goes into this folder and is committed with the change.

On push to `main`, the release workflow collects the pending changesets, opens a "Release
Packages" pull request that applies the version bumps and changelog entries, and merges it. The
next run of the workflow publishes the bumped packages to npm.

Full docs: https://github.com/changesets/changesets
