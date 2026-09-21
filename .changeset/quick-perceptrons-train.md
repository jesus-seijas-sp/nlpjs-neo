---
'@nlpjs-neo/neural': minor
---

Train and run the neural network faster, with the same answers.

The features of an utterance are kept as two parallel arrays (`keys` and
`values` of a `SparseVector`) instead of an object keyed by number, the
feature dictionary of a `Lookup` is a `Map`, and the perceptrons walk them with
plain loops instead of a `reduce` closure. On the 60 intents and 11,514
utterances of the English MASSIVE corpus, training takes a fifth of the time
(from 5 to 8 seconds, to about 1) and running an utterance through the NLU is
about 1.5 times faster; the scores of all 2,974 test utterances are
bit-identical to what they were.

A feature named like a member of `Object` (`constructor`, `toString`) is now a
feature like any other: the plain object that held the dictionary answered
with the member, and the score of that utterance was `NaN`.

`SparseVector.data` (the values by id) is gone: read `values[i]` for `keys[i]`.
`Lookup#dict` is a `Map`.
