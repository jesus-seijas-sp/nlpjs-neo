---
'@nlpjs-neo/core': minor
'@nlpjs-neo/lang-ar': patch
'@nlpjs-neo/lang-ca': patch
'@nlpjs-neo/lang-cs': patch
'@nlpjs-neo/lang-da': patch
'@nlpjs-neo/lang-de': patch
'@nlpjs-neo/lang-en-min': patch
'@nlpjs-neo/lang-es': patch
'@nlpjs-neo/lang-eu': patch
'@nlpjs-neo/lang-fi': patch
'@nlpjs-neo/lang-fr': patch
'@nlpjs-neo/lang-ga': patch
'@nlpjs-neo/lang-hu': patch
'@nlpjs-neo/lang-hy': patch
'@nlpjs-neo/lang-id': patch
'@nlpjs-neo/lang-it': patch
'@nlpjs-neo/lang-lt': patch
'@nlpjs-neo/lang-ne': patch
'@nlpjs-neo/lang-nl': patch
'@nlpjs-neo/lang-no': patch
'@nlpjs-neo/lang-pl': patch
'@nlpjs-neo/lang-pt': patch
'@nlpjs-neo/lang-ro': patch
'@nlpjs-neo/lang-ru': patch
'@nlpjs-neo/lang-sl': patch
'@nlpjs-neo/lang-sr': patch
'@nlpjs-neo/lang-sv': patch
'@nlpjs-neo/lang-ta': patch
'@nlpjs-neo/lang-tr': patch
---

Tidy the generated Snowball stemmers. What they answer does not change.

The stemmers of 28 languages no longer hide behind a blanket lint disable and
obey the rules it silenced. The try blocks the generator wrote as a flag and a
loop that runs once are labelled blocks, the line references to a Snowball
source this repository does not have are gone from the comments, and numbers
and strings are compared with `===`.

Core adds `SnowballStemmer`, the base of the stemmers that work on regions of
the word. It holds the regions `I_p1`, `I_p2` and `I_pV` and the rules `r_R1`,
`r_R2` and `r_RV` that ask whether the cursor is inside one, which the stemmers
of 18 languages each repeated. They extend it now and no longer carry their
own copies.
