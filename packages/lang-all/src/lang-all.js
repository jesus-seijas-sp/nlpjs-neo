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
const { LangAr } = require('@nlpjs-neo/lang-ar');
const { LangBn } = require('@nlpjs-neo/lang-bn');
const { LangCa } = require('@nlpjs-neo/lang-ca');
const { LangCs } = require('@nlpjs-neo/lang-cs');
const { LangDa } = require('@nlpjs-neo/lang-da');
const { LangDe } = require('@nlpjs-neo/lang-de');
const { LangEl } = require('@nlpjs-neo/lang-el');
const { LangEn } = require('@nlpjs-neo/lang-en');
const { LangEs } = require('@nlpjs-neo/lang-es');
const { LangEu } = require('@nlpjs-neo/lang-eu');
const { LangFa } = require('@nlpjs-neo/lang-fa');
const { LangFi } = require('@nlpjs-neo/lang-fi');
const { LangFr } = require('@nlpjs-neo/lang-fr');
const { LangGa } = require('@nlpjs-neo/lang-ga');
const { LangGl } = require('@nlpjs-neo/lang-gl');
const { LangHi } = require('@nlpjs-neo/lang-hi');
const { LangHu } = require('@nlpjs-neo/lang-hu');
const { LangHy } = require('@nlpjs-neo/lang-hy');
const { LangId } = require('@nlpjs-neo/lang-id');
const { LangIt } = require('@nlpjs-neo/lang-it');
const { LangJa } = require('@nlpjs-neo/lang-ja');
const { LangKo } = require('@nlpjs-neo/lang-ko');
const { LangLt } = require('@nlpjs-neo/lang-lt');
const { LangMs } = require('@nlpjs-neo/lang-ms');
const { LangNe } = require('@nlpjs-neo/lang-ne');
const { LangNl } = require('@nlpjs-neo/lang-nl');
const { LangNo } = require('@nlpjs-neo/lang-no');
const { LangPl } = require('@nlpjs-neo/lang-pl');
const { LangPt } = require('@nlpjs-neo/lang-pt');
const { LangRo } = require('@nlpjs-neo/lang-ro');
const { LangRu } = require('@nlpjs-neo/lang-ru');
const { LangSl } = require('@nlpjs-neo/lang-sl');
const { LangSr } = require('@nlpjs-neo/lang-sr');
const { LangSv } = require('@nlpjs-neo/lang-sv');
const { LangTa } = require('@nlpjs-neo/lang-ta');
const { LangTh } = require('@nlpjs-neo/lang-th');
const { LangTl } = require('@nlpjs-neo/lang-tl');
const { LangTr } = require('@nlpjs-neo/lang-tr');
const { LangUk } = require('@nlpjs-neo/lang-uk');
const { LangZh } = require('@nlpjs-neo/lang-zh');

class LangAll {
  register(container) {
    container.use(LangAr);
    container.use(LangBn);
    container.use(LangCa);
    container.use(LangCs);
    container.use(LangDa);
    container.use(LangDe);
    container.use(LangEl);
    container.use(LangEn);
    container.use(LangEs);
    container.use(LangEu);
    container.use(LangFa);
    container.use(LangFi);
    container.use(LangFr);
    container.use(LangGa);
    container.use(LangGl);
    container.use(LangHi);
    container.use(LangHu);
    container.use(LangHy);
    container.use(LangId);
    container.use(LangIt);
    container.use(LangJa);
    container.use(LangKo);
    container.use(LangLt);
    container.use(LangMs);
    container.use(LangNe);
    container.use(LangNl);
    container.use(LangNo);
    container.use(LangPl);
    container.use(LangPt);
    container.use(LangRo);
    container.use(LangRu);
    container.use(LangSl);
    container.use(LangSr);
    container.use(LangSv);
    container.use(LangTa);
    container.use(LangTh);
    container.use(LangTl);
    container.use(LangTr);
    container.use(LangUk);
    container.use(LangZh);
  }
}

module.exports = LangAll;
