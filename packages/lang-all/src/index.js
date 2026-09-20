/*
 * Copyright (c) AXA Group Operations Spain S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const {
  LangAr,
  NormalizerAr,
  SentimentAr,
  StemmerAr,
  StopwordsAr,
  TokenizerAr,
} = require('@nlpjs-neo/lang-ar');
const {
  LangBn,
  NormalizerBn,
  SentimentBn,
  StemmerBn,
  StopwordsBn,
  TokenizerBn,
} = require('@nlpjs-neo/lang-bn');
const {
  LangCa,
  NormalizerCa,
  SentimentCa,
  StemmerCa,
  StopwordsCa,
  TokenizerCa,
} = require('@nlpjs-neo/lang-ca');
const {
  LangCs,
  NormalizerCs,
  SentimentCs,
  StemmerCs,
  StopwordsCs,
  TokenizerCs,
} = require('@nlpjs-neo/lang-cs');
const {
  LangDa,
  NormalizerDa,
  SentimentDa,
  StemmerDa,
  StopwordsDa,
  TokenizerDa,
} = require('@nlpjs-neo/lang-da');
const {
  LangDe,
  NormalizerDe,
  SentimentDe,
  StemmerDe,
  StopwordsDe,
  TokenizerDe,
} = require('@nlpjs-neo/lang-de');
const {
  LangEl,
  NormalizerEl,
  SentimentEl,
  StemmerEl,
  StopwordsEl,
  TokenizerEl,
} = require('@nlpjs-neo/lang-el');
const {
  LangEn,
  NormalizerEn,
  SentimentEn,
  StemmerEn,
  StopwordsEn,
  TokenizerEn,
} = require('@nlpjs-neo/lang-en');
const {
  LangEs,
  NormalizerEs,
  SentimentEs,
  StemmerEs,
  StopwordsEs,
  TokenizerEs,
} = require('@nlpjs-neo/lang-es');
const {
  LangEu,
  NormalizerEu,
  SentimentEu,
  StemmerEu,
  StopwordsEu,
  TokenizerEu,
} = require('@nlpjs-neo/lang-eu');
const {
  LangFa,
  NormalizerFa,
  SentimentFa,
  StemmerFa,
  StopwordsFa,
  TokenizerFa,
} = require('@nlpjs-neo/lang-fa');
const {
  LangFi,
  NormalizerFi,
  SentimentFi,
  StemmerFi,
  StopwordsFi,
  TokenizerFi,
} = require('@nlpjs-neo/lang-fi');
const {
  LangFr,
  NormalizerFr,
  SentimentFr,
  StemmerFr,
  StopwordsFr,
  TokenizerFr,
} = require('@nlpjs-neo/lang-fr');
const {
  LangGa,
  NormalizerGa,
  SentimentGa,
  StemmerGa,
  StopwordsGa,
  TokenizerGa,
} = require('@nlpjs-neo/lang-ga');
const {
  LangGl,
  NormalizerGl,
  SentimentGl,
  StemmerGl,
  StopwordsGl,
  TokenizerGl,
} = require('@nlpjs-neo/lang-gl');
const {
  LangHi,
  NormalizerHi,
  SentimentHi,
  StemmerHi,
  StopwordsHi,
  TokenizerHi,
} = require('@nlpjs-neo/lang-hi');
const {
  LangHu,
  NormalizerHu,
  SentimentHu,
  StemmerHu,
  StopwordsHu,
  TokenizerHu,
} = require('@nlpjs-neo/lang-hu');
const {
  LangHy,
  NormalizerHy,
  SentimentHy,
  StemmerHy,
  StopwordsHy,
  TokenizerHy,
} = require('@nlpjs-neo/lang-hy');
const {
  LangId,
  NormalizerId,
  SentimentId,
  StemmerId,
  StopwordsId,
  TokenizerId,
} = require('@nlpjs-neo/lang-id');
const {
  LangIt,
  NormalizerIt,
  SentimentIt,
  StemmerIt,
  StopwordsIt,
  TokenizerIt,
} = require('@nlpjs-neo/lang-it');
const {
  LangJa,
  NormalizerJa,
  SentimentJa,
  StemmerJa,
  StopwordsJa,
  TokenizerJa,
} = require('@nlpjs-neo/lang-ja');
const {
  LangKo,
  NormalizerKo,
  SentimentKo,
  StemmerKo,
  StopwordsKo,
  TokenizerKo,
} = require('@nlpjs-neo/lang-ko');
const {
  LangLt,
  NormalizerLt,
  SentimentLt,
  StemmerLt,
  StopwordsLt,
  TokenizerLt,
} = require('@nlpjs-neo/lang-lt');
const {
  LangMs,
  NormalizerMs,
  SentimentMs,
  StemmerMs,
  StopwordsMs,
  TokenizerMs,
} = require('@nlpjs-neo/lang-ms');
const {
  LangNe,
  NormalizerNe,
  SentimentNe,
  StemmerNe,
  StopwordsNe,
  TokenizerNe,
} = require('@nlpjs-neo/lang-ne');
const {
  LangNl,
  NormalizerNl,
  SentimentNl,
  StemmerNl,
  StopwordsNl,
  TokenizerNl,
} = require('@nlpjs-neo/lang-nl');
const {
  LangNo,
  NormalizerNo,
  SentimentNo,
  StemmerNo,
  StopwordsNo,
  TokenizerNo,
} = require('@nlpjs-neo/lang-no');
const {
  LangPl,
  NormalizerPl,
  SentimentPl,
  StemmerPl,
  StopwordsPl,
  TokenizerPl,
} = require('@nlpjs-neo/lang-pl');
const {
  LangPt,
  NormalizerPt,
  SentimentPt,
  StemmerPt,
  StopwordsPt,
  TokenizerPt,
} = require('@nlpjs-neo/lang-pt');
const {
  LangRo,
  NormalizerRo,
  SentimentRo,
  StemmerRo,
  StopwordsRo,
  TokenizerRo,
} = require('@nlpjs-neo/lang-ro');
const {
  LangRu,
  NormalizerRu,
  SentimentRu,
  StemmerRu,
  StopwordsRu,
  TokenizerRu,
} = require('@nlpjs-neo/lang-ru');
const {
  LangSl,
  NormalizerSl,
  SentimentSl,
  StemmerSl,
  StopwordsSl,
  TokenizerSl,
} = require('@nlpjs-neo/lang-sl');
const {
  LangSr,
  NormalizerSr,
  SentimentSr,
  StemmerSr,
  StopwordsSr,
  TokenizerSr,
} = require('@nlpjs-neo/lang-sr');
const {
  LangSv,
  NormalizerSv,
  SentimentSv,
  StemmerSv,
  StopwordsSv,
  TokenizerSv,
} = require('@nlpjs-neo/lang-sv');
const {
  LangTa,
  NormalizerTa,
  SentimentTa,
  StemmerTa,
  StopwordsTa,
  TokenizerTa,
} = require('@nlpjs-neo/lang-ta');
const {
  LangTh,
  NormalizerTh,
  SentimentTh,
  StemmerTh,
  StopwordsTh,
  TokenizerTh,
} = require('@nlpjs-neo/lang-th');
const {
  LangTl,
  NormalizerTl,
  SentimentTl,
  StemmerTl,
  StopwordsTl,
  TokenizerTl,
} = require('@nlpjs-neo/lang-tl');
const {
  LangTr,
  NormalizerTr,
  SentimentTr,
  StemmerTr,
  StopwordsTr,
  TokenizerTr,
} = require('@nlpjs-neo/lang-tr');
const {
  LangUk,
  NormalizerUk,
  SentimentUk,
  StemmerUk,
  StopwordsUk,
  TokenizerUk,
} = require('@nlpjs-neo/lang-uk');
const {
  LangZh,
  NormalizerZh,
  SentimentZh,
  StemmerZh,
  StopwordsZh,
  TokenizerZh,
} = require('@nlpjs-neo/lang-zh');
const LangAll = require('./lang-all');

const {
  langDict,
  getNormalizer,
  getTokenizer,
  getStemmer,
  getStopwords,
  getSentiment,
  normalize,
  tokenize,
  stem,
  removeStopwords,
  dict,
  bow,
} = require('./lang-functions');

module.exports = {
  LangAll,

  LangAr,
  NormalizerAr,
  SentimentAr,
  StemmerAr,
  StopwordsAr,
  TokenizerAr,

  LangBn,
  NormalizerBn,
  SentimentBn,
  StemmerBn,
  StopwordsBn,
  TokenizerBn,

  LangCa,
  NormalizerCa,
  SentimentCa,
  StemmerCa,
  StopwordsCa,
  TokenizerCa,

  LangCs,
  NormalizerCs,
  SentimentCs,
  StemmerCs,
  StopwordsCs,
  TokenizerCs,

  LangDa,
  NormalizerDa,
  SentimentDa,
  StemmerDa,
  StopwordsDa,
  TokenizerDa,

  LangDe,
  NormalizerDe,
  SentimentDe,
  StemmerDe,
  StopwordsDe,
  TokenizerDe,

  LangEl,
  NormalizerEl,
  SentimentEl,
  StemmerEl,
  StopwordsEl,
  TokenizerEl,

  LangEn,
  NormalizerEn,
  SentimentEn,
  StemmerEn,
  StopwordsEn,
  TokenizerEn,

  LangEs,
  NormalizerEs,
  SentimentEs,
  StemmerEs,
  StopwordsEs,
  TokenizerEs,

  LangEu,
  NormalizerEu,
  SentimentEu,
  StemmerEu,
  StopwordsEu,
  TokenizerEu,

  LangFa,
  NormalizerFa,
  SentimentFa,
  StemmerFa,
  StopwordsFa,
  TokenizerFa,

  LangFi,
  NormalizerFi,
  SentimentFi,
  StemmerFi,
  StopwordsFi,
  TokenizerFi,

  LangFr,
  NormalizerFr,
  SentimentFr,
  StemmerFr,
  StopwordsFr,
  TokenizerFr,

  LangGa,
  NormalizerGa,
  SentimentGa,
  StemmerGa,
  StopwordsGa,
  TokenizerGa,

  LangGl,
  NormalizerGl,
  SentimentGl,
  StemmerGl,
  StopwordsGl,
  TokenizerGl,

  LangHi,
  NormalizerHi,
  SentimentHi,
  StemmerHi,
  StopwordsHi,
  TokenizerHi,

  LangHu,
  NormalizerHu,
  SentimentHu,
  StemmerHu,
  StopwordsHu,
  TokenizerHu,

  LangHy,
  NormalizerHy,
  SentimentHy,
  StemmerHy,
  StopwordsHy,
  TokenizerHy,

  LangIt,
  NormalizerIt,
  SentimentIt,
  StemmerIt,
  StopwordsIt,
  TokenizerIt,

  LangId,
  NormalizerId,
  SentimentId,
  StemmerId,
  StopwordsId,
  TokenizerId,

  LangJa,
  NormalizerJa,
  SentimentJa,
  StemmerJa,
  StopwordsJa,
  TokenizerJa,

  LangKo,
  NormalizerKo,
  SentimentKo,
  StemmerKo,
  StopwordsKo,
  TokenizerKo,

  LangLt,
  NormalizerLt,
  SentimentLt,
  StemmerLt,
  StopwordsLt,
  TokenizerLt,

  LangMs,
  NormalizerMs,
  SentimentMs,
  StemmerMs,
  StopwordsMs,
  TokenizerMs,

  LangNe,
  NormalizerNe,
  SentimentNe,
  StemmerNe,
  StopwordsNe,
  TokenizerNe,

  LangNl,
  NormalizerNl,
  SentimentNl,
  StemmerNl,
  StopwordsNl,
  TokenizerNl,

  LangNo,
  NormalizerNo,
  SentimentNo,
  StemmerNo,
  StopwordsNo,
  TokenizerNo,

  LangPl,
  NormalizerPl,
  SentimentPl,
  StemmerPl,
  StopwordsPl,
  TokenizerPl,

  LangPt,
  NormalizerPt,
  SentimentPt,
  StemmerPt,
  StopwordsPt,
  TokenizerPt,

  LangRo,
  NormalizerRo,
  SentimentRo,
  StemmerRo,
  StopwordsRo,
  TokenizerRo,

  LangRu,
  NormalizerRu,
  SentimentRu,
  StemmerRu,
  StopwordsRu,
  TokenizerRu,

  LangSl,
  NormalizerSl,
  SentimentSl,
  StemmerSl,
  StopwordsSl,
  TokenizerSl,

  LangSr,
  NormalizerSr,
  SentimentSr,
  StemmerSr,
  StopwordsSr,
  TokenizerSr,

  LangSv,
  NormalizerSv,
  SentimentSv,
  StemmerSv,
  StopwordsSv,
  TokenizerSv,

  LangTa,
  NormalizerTa,
  SentimentTa,
  StemmerTa,
  StopwordsTa,
  TokenizerTa,

  LangTh,
  NormalizerTh,
  SentimentTh,
  StemmerTh,
  StopwordsTh,
  TokenizerTh,

  LangTl,
  NormalizerTl,
  SentimentTl,
  StemmerTl,
  StopwordsTl,
  TokenizerTl,

  LangTr,
  NormalizerTr,
  SentimentTr,
  StemmerTr,
  StopwordsTr,
  TokenizerTr,

  LangUk,
  NormalizerUk,
  SentimentUk,
  StemmerUk,
  StopwordsUk,
  TokenizerUk,

  LangZh,
  NormalizerZh,
  SentimentZh,
  StemmerZh,
  StopwordsZh,
  TokenizerZh,

  langDict,
  getNormalizer,
  getTokenizer,
  getStemmer,
  getStopwords,
  getSentiment,
  normalize,
  tokenize,
  stem,
  removeStopwords,
  dict,
  bow,
};
