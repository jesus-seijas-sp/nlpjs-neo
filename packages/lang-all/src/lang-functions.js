const { Language } = require('@nlpjs-neo/language');
const langAr = require('@nlpjs-neo/lang-ar');
const langBr = require('@nlpjs-neo/lang-bn');
const langCa = require('@nlpjs-neo/lang-ca');
const langCs = require('@nlpjs-neo/lang-cs');
const langDa = require('@nlpjs-neo/lang-da');
const langDe = require('@nlpjs-neo/lang-de');
const langEl = require('@nlpjs-neo/lang-el');
const langEn = require('@nlpjs-neo/lang-en');
const langEs = require('@nlpjs-neo/lang-es');
const langEu = require('@nlpjs-neo/lang-eu');
const langFa = require('@nlpjs-neo/lang-fa');
const langFi = require('@nlpjs-neo/lang-fi');
const langFr = require('@nlpjs-neo/lang-fr');
const langGa = require('@nlpjs-neo/lang-ga');
const langGl = require('@nlpjs-neo/lang-gl');
const langHi = require('@nlpjs-neo/lang-hi');
const langHu = require('@nlpjs-neo/lang-hu');
const langHy = require('@nlpjs-neo/lang-hy');
const langId = require('@nlpjs-neo/lang-id');
const langIt = require('@nlpjs-neo/lang-it');
const langJa = require('@nlpjs-neo/lang-ja');
const langKo = require('@nlpjs-neo/lang-ko');
const langLt = require('@nlpjs-neo/lang-lt');
const langMs = require('@nlpjs-neo/lang-ms');
const langNe = require('@nlpjs-neo/lang-ne');
const langNl = require('@nlpjs-neo/lang-nl');
const langNo = require('@nlpjs-neo/lang-no');
const langPl = require('@nlpjs-neo/lang-pl');
const langPt = require('@nlpjs-neo/lang-pt');
const langRo = require('@nlpjs-neo/lang-ro');
const langRu = require('@nlpjs-neo/lang-ru');
const langSl = require('@nlpjs-neo/lang-sl');
const langSr = require('@nlpjs-neo/lang-sr');
const langSv = require('@nlpjs-neo/lang-sv');
const langTa = require('@nlpjs-neo/lang-ta');
const langTh = require('@nlpjs-neo/lang-th');
const langTl = require('@nlpjs-neo/lang-tl');
const langTr = require('@nlpjs-neo/lang-tr');
const langUk = require('@nlpjs-neo/lang-uk');
const langZh = require('@nlpjs-neo/lang-zh');

const langs = {
  ar: langAr,
  br: langBr,
  ca: langCa,
  cs: langCs,
  da: langDa,
  de: langDe,
  el: langEl,
  en: langEn,
  es: langEs,
  eu: langEu,
  fa: langFa,
  fi: langFi,
  fr: langFr,
  ga: langGa,
  gl: langGl,
  hi: langHi,
  hu: langHu,
  hy: langHy,
  id: langId,
  it: langIt,
  ja: langJa,
  ko: langKo,
  lt: langLt,
  ms: langMs,
  ne: langNe,
  nl: langNl,
  no: langNo,
  pl: langPl,
  pt: langPt,
  ro: langRo,
  ru: langRu,
  sl: langSl,
  sr: langSr,
  sv: langSv,
  ta: langTa,
  th: langTh,
  tl: langTl,
  tr: langTr,
  uk: langUk,
  zh: langZh,
};

const language = new Language();
const langDict = {};
const keys = Object.keys(language.languagesAlpha2);

for (let i = 0; i < keys.length; i += 1) {
  const key = keys[i];
  const langData = language.languagesAlpha2[key];
  langDict[key] = key;
  langDict[langData.alpha3] = key;
  langDict[langData.name.toLowerCase()] = key;
}

function getLangClass(inputLanguage, className) {
  let locale = langDict[inputLanguage.toLowerCase()];
  if (!locale) {
    locale = langDict[inputLanguage.toLowerCase().slice(0, 2)] || 'en';
  }
  const lang = langs[locale];
  if (!lang) {
    throw new Error(
      `Language classes not found for language "${inputLanguage}"`
    );
  }
  const localeCapitalized = `${locale.charAt(0).toUpperCase()}${locale.slice(
    1
  )}`;
  return lang[`${className}${localeCapitalized}`];
}

function getNormalizer(inputLanguage = 'en') {
  const Clazz = getLangClass(inputLanguage, 'Normalizer');
  if (Clazz) {
    return new Clazz();
  }
  return undefined;
}

function getTokenizer(inputLanguage = 'en') {
  const Clazz = getLangClass(inputLanguage, 'Tokenizer');
  if (Clazz) {
    return new Clazz();
  }
  return undefined;
}

function getStemmer(inputLanguage = 'en') {
  const Clazz = getLangClass(inputLanguage, 'Stemmer');
  if (Clazz) {
    return new Clazz();
  }
  return undefined;
}

function getStopwords(inputLanguage = 'en') {
  const Clazz = getLangClass(inputLanguage, 'Stopwords');
  if (Clazz) {
    return new Clazz();
  }
  return undefined;
}

function getSentiment(inputLanguage = 'en') {
  const Clazz = getLangClass(inputLanguage, 'Sentiment');
  if (Clazz) {
    return new Clazz();
  }
  return undefined;
}

function normalize(text, locale = 'en') {
  const normalizer = getNormalizer(locale);
  return normalizer.normalize(text);
}

function tokenize(text, locale = 'en', shouldNormalize = false) {
  const tokenizer = getTokenizer(locale);
  return tokenizer.tokenize(text, shouldNormalize);
}

function stem(text, locale = 'en') {
  const stemmer = getStemmer(locale);
  if (Array.isArray(text)) {
    return stemmer.stem(text);
  }
  const normalizer = getNormalizer(locale);
  const tokenizer = getTokenizer(locale);
  return stemmer.stem(tokenizer.tokenize(normalizer.normalize(text)));
}

function removeStopwords(tokens, locale = 'en') {
  const stopwords = getStopwords(locale);
  return stopwords.removeStopwords(tokens);
}

function dict(sentences, locale = 'en', useStemmer = false) {
  const freqs = {};
  for (let i = 0; i < sentences.length; i += 1) {
    const current = useStemmer
      ? stem(sentences[i], locale)
      : tokenize(sentences[i], locale).map((x) => x.toLowerCase());
    for (let j = 0; j < current.length; j += 1) {
      freqs[current[j]] = (freqs[current[j]] || 0) + 1;
    }
  }
  const positions = {};
  const words = Object.keys(freqs);
  for (let i = 0; i < words.length; i += 1) {
    positions[words[i]] = i;
  }
  return {
    locale,
    useStemmer,
    freqs,
    positions,
    keys: words,
    length: words.length,
  };
}

function bow(sentence, voc) {
  const current = voc.useStemmer
    ? stem(sentence, voc.locale)
    : tokenize(sentence, voc.locale).map((x) => x.toLowerCase());
  const result = new Array(voc.length).fill(0);
  for (let i = 0; i < current.length; i += 1) {
    const index = voc.positions[current[i]];
    if (index !== undefined) {
      result[index] = 1;
    }
  }
  return result;
}

module.exports = {
  langs,
  language,
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
