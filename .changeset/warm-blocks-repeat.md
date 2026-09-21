---
'@nlpjs-neo/evaluator': minor
---

Templates gain sections, `_iterator_` arrays and native values.

`{{#items}} ... {{/#}}` repeats its content for each item of an array, and sees
`_current_`, `_index_` and `_parent_`. An array item with `_iterator_: '#items'`
is repeated for each item of that context array. `compile` takes a `native`
option so that a string which is exactly one `{{ expression }}` answers the
value itself, a number or an object included. Without it, strings still answer
text, as before.

An object inside a longer string is now printed as JSON instead of
`[object Object]`.
