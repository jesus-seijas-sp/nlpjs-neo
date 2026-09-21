import { Among, SnowballStemmer } from '@nlpjs-neo/core';

class StemmerPt extends SnowballStemmer {
  constructor(container?) {
    super(container);
    this.name = 'stemmer-pt';
    this.I_p2 = 0;
    this.I_p1 = 0;
    this.I_pV = 0;
  }

  r_prelude() {
    // repeat
    replab0: for (;;) {
      const v_1 = this.cursor;
      lab1: {
        this.bra = this.cursor;
        const among_var = this.find_among(StemmerPt.a_0, 3);
        if (among_var === 0) {
          break lab1;
        }
        this.ket = this.cursor;
        switch (among_var) {
          case 0:
            break lab1;
          case 1:
            if (!this.slice_from('a~')) {
              return false;
            }
            break;
          case 2:
            if (!this.slice_from('o~')) {
              return false;
            }
            break;
          case 3:
            if (this.cursor >= this.limit) {
              break lab1;
            }
            this.cursor++;
            break;
        }
        continue replab0;
      }
      this.cursor = v_1;
      break;
    }
    return true;
  }

  r_mark_regions() {
    this.I_pV = this.limit;
    this.I_p1 = this.limit;
    this.I_p2 = this.limit;
    // do
    const v_1 = this.cursor;
    lab0: {
      // or
      lab1: {
        const v_2 = this.cursor;
        lab2: {
          if (!this.in_grouping(StemmerPt.g_v, 97, 250)) {
            break lab2;
          }
          // or
          lab3: {
            const v_3 = this.cursor;
            lab4: {
              if (!this.out_grouping(StemmerPt.g_v, 97, 250)) {
                break lab4;
              }
              // gopast
              if (!this.gopast_in_grouping(StemmerPt.g_v, 97, 250)) {
                break lab4;
              }
              break lab3;
            }
            this.cursor = v_3;
            if (!this.in_grouping(StemmerPt.g_v, 97, 250)) {
              break lab2;
            }
            // gopast
            if (!this.gopast_out_grouping(StemmerPt.g_v, 97, 250)) {
              break lab2;
            }
          }
          break lab1;
        }
        this.cursor = v_2;
        if (!this.out_grouping(StemmerPt.g_v, 97, 250)) {
          break lab0;
        }
        // or
        lab9: {
          const v_6 = this.cursor;
          lab10: {
            if (!this.out_grouping(StemmerPt.g_v, 97, 250)) {
              break lab10;
            }
            // gopast
            if (!this.gopast_in_grouping(StemmerPt.g_v, 97, 250)) {
              break lab10;
            }
            break lab9;
          }
          this.cursor = v_6;
          if (!this.in_grouping(StemmerPt.g_v, 97, 250)) {
            break lab0;
          }
          if (this.cursor >= this.limit) {
            break lab0;
          }
          this.cursor++;
        }
      }
      this.I_pV = this.cursor;
    }
    this.cursor = v_1;
    // do
    const v_8 = this.cursor;
    lab13: {
      // gopast
      if (!this.gopast_in_grouping(StemmerPt.g_v, 97, 250)) {
        break lab13;
      }
      // gopast
      if (!this.gopast_out_grouping(StemmerPt.g_v, 97, 250)) {
        break lab13;
      }
      this.I_p1 = this.cursor;
      // gopast
      if (!this.gopast_in_grouping(StemmerPt.g_v, 97, 250)) {
        break lab13;
      }
      // gopast
      if (!this.gopast_out_grouping(StemmerPt.g_v, 97, 250)) {
        break lab13;
      }
      this.I_p2 = this.cursor;
    }
    this.cursor = v_8;
    return true;
  }

  r_postlude() {
    // repeat
    replab0: for (;;) {
      const v_1 = this.cursor;
      lab1: {
        this.bra = this.cursor;
        const among_var = this.find_among(StemmerPt.a_1, 3);
        if (among_var === 0) {
          break lab1;
        }
        this.ket = this.cursor;
        switch (among_var) {
          case 0:
            break lab1;
          case 1:
            if (!this.slice_from('\u00E3')) {
              return false;
            }
            break;
          case 2:
            if (!this.slice_from('\u00F5')) {
              return false;
            }
            break;
          case 3:
            if (this.cursor >= this.limit) {
              break lab1;
            }
            this.cursor++;
            break;
        }
        continue replab0;
      }
      this.cursor = v_1;
      break;
    }
    return true;
  }

  r_standard_suffix() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    this.ket = this.cursor;
    let among_var = this.find_among_b(StemmerPt.a_5, 45);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from('log')) {
          return false;
        }
        break;
      case 3:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from('u')) {
          return false;
        }
        break;
      case 4:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from('ente')) {
          return false;
        }
        break;
      case 5:
        if (!this.r_R1()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        // try
        v_1 = this.limit - this.cursor;
        lab0: {
          this.ket = this.cursor;
          among_var = this.find_among_b(StemmerPt.a_2, 4);
          if (among_var === 0) {
            this.cursor = this.limit - v_1;
            break lab0;
          }
          this.bra = this.cursor;
          if (!this.r_R2()) {
            this.cursor = this.limit - v_1;
            break lab0;
          }
          if (!this.slice_del()) {
            return false;
          }
          switch (among_var) {
            case 0:
              this.cursor = this.limit - v_1;
              break lab0;
            case 1:
              this.ket = this.cursor;
              if (!this.eq_s_b(2, 'at')) {
                this.cursor = this.limit - v_1;
                break lab0;
              }
              this.bra = this.cursor;
              if (!this.r_R2()) {
                this.cursor = this.limit - v_1;
                break lab0;
              }
              if (!this.slice_del()) {
                return false;
              }
              break;
          }
        }
        break;
      case 6:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        // try
        v_2 = this.limit - this.cursor;
        lab1: {
          this.ket = this.cursor;
          among_var = this.find_among_b(StemmerPt.a_3, 3);
          if (among_var === 0) {
            this.cursor = this.limit - v_2;
            break lab1;
          }
          this.bra = this.cursor;
          switch (among_var) {
            case 0:
              this.cursor = this.limit - v_2;
              break lab1;
            case 1:
              if (!this.r_R2()) {
                this.cursor = this.limit - v_2;
                break lab1;
              }
              if (!this.slice_del()) {
                return false;
              }
              break;
          }
        }
        break;
      case 7:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        // try
        v_3 = this.limit - this.cursor;
        lab2: {
          this.ket = this.cursor;
          among_var = this.find_among_b(StemmerPt.a_4, 3);
          if (among_var === 0) {
            this.cursor = this.limit - v_3;
            break lab2;
          }
          this.bra = this.cursor;
          switch (among_var) {
            case 0:
              this.cursor = this.limit - v_3;
              break lab2;
            case 1:
              if (!this.r_R2()) {
                this.cursor = this.limit - v_3;
                break lab2;
              }
              if (!this.slice_del()) {
                return false;
              }
              break;
          }
        }
        break;
      case 8:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        // try
        v_4 = this.limit - this.cursor;
        lab3: {
          this.ket = this.cursor;
          if (!this.eq_s_b(2, 'at')) {
            this.cursor = this.limit - v_4;
            break lab3;
          }
          this.bra = this.cursor;
          if (!this.r_R2()) {
            this.cursor = this.limit - v_4;
            break lab3;
          }
          if (!this.slice_del()) {
            return false;
          }
        }
        break;
      case 9:
        if (!this.r_RV()) {
          return false;
        }
        if (!this.eq_s_b(1, 'e')) {
          return false;
        }
        if (!this.slice_from('ir')) {
          return false;
        }
        break;
    }
    return true;
  }

  r_verb_suffix() {
    const v_1 = this.limit - this.cursor;
    if (this.cursor < this.I_pV) {
      return false;
    }
    this.cursor = this.I_pV;
    const v_2 = this.limit_backward;
    this.limit_backward = this.cursor;
    this.cursor = this.limit - v_1;
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerPt.a_6, 120);
    if (among_var === 0) {
      this.limit_backward = v_2;
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        this.limit_backward = v_2;
        return false;
      case 1:
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    this.limit_backward = v_2;
    return true;
  }

  r_residual_suffix() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerPt.a_7, 7);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        if (!this.r_RV()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  r_residual_form() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerPt.a_8, 4);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        if (!this.r_RV()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        this.ket = this.cursor;
        // or
        lab0: {
          const v_1 = this.limit - this.cursor;
          lab1: {
            if (!this.eq_s_b(1, 'u')) {
              break lab1;
            }
            this.bra = this.cursor;
            // test
            const v_2 = this.limit - this.cursor;
            if (!this.eq_s_b(1, 'g')) {
              break lab1;
            }
            this.cursor = this.limit - v_2;
            break lab0;
          }
          this.cursor = this.limit - v_1;
          if (!this.eq_s_b(1, 'i')) {
            return false;
          }
          this.bra = this.cursor;
          // test
          const v_3 = this.limit - this.cursor;
          if (!this.eq_s_b(1, 'c')) {
            return false;
          }
          this.cursor = this.limit - v_3;
        }
        if (!this.r_RV()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from('c')) {
          return false;
        }
        break;
    }
    return true;
  }

  innerStem() {
    // do
    const v_1 = this.cursor;
    lab0: {
      if (!this.r_prelude()) {
        break lab0;
      }
    }
    this.cursor = v_1;
    // do
    const v_2 = this.cursor;
    lab1: {
      if (!this.r_mark_regions()) {
        break lab1;
      }
    }
    this.cursor = v_2;
    // backwards
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    // do
    const v_3 = this.limit - this.cursor;
    lab2: {
      // or
      lab3: {
        const v_4 = this.limit - this.cursor;
        lab4: {
          // and
          const v_5 = this.limit - this.cursor;
          // or
          lab5: {
            const v_6 = this.limit - this.cursor;
            lab6: {
              if (!this.r_standard_suffix()) {
                break lab6;
              }
              break lab5;
            }
            this.cursor = this.limit - v_6;
            if (!this.r_verb_suffix()) {
              break lab4;
            }
          }
          this.cursor = this.limit - v_5;
          // do
          const v_7 = this.limit - this.cursor;
          lab7: {
            this.ket = this.cursor;
            if (!this.eq_s_b(1, 'i')) {
              break lab7;
            }
            this.bra = this.cursor;
            // test
            const v_8 = this.limit - this.cursor;
            if (!this.eq_s_b(1, 'c')) {
              break lab7;
            }
            this.cursor = this.limit - v_8;
            if (!this.r_RV()) {
              break lab7;
            }
            if (!this.slice_del()) {
              return false;
            }
          }
          this.cursor = this.limit - v_7;
          break lab3;
        }
        this.cursor = this.limit - v_4;
        if (!this.r_residual_suffix()) {
          break lab2;
        }
      }
    }
    this.cursor = this.limit - v_3;
    // do
    const v_9 = this.limit - this.cursor;
    lab8: {
      if (!this.r_residual_form()) {
        break lab8;
      }
    }
    this.cursor = this.limit - v_9;
    this.cursor = this.limit_backward; // do
    const v_10 = this.cursor;
    lab9: {
      if (!this.r_postlude()) {
        break lab9;
      }
    }
    this.cursor = v_10;
    return true;
  }

  static a_0: Among<StemmerPt>[] = [
    new Among('', -1, 3),
    new Among('\u00E3', 0, 1),
    new Among('\u00F5', 0, 2),
  ];

  static a_1: Among<StemmerPt>[] = [
    new Among('', -1, 3),
    new Among('a~', 0, 1),
    new Among('o~', 0, 2),
  ];

  static a_2: Among<StemmerPt>[] = [
    new Among('ic', -1, -1),
    new Among('ad', -1, -1),
    new Among('os', -1, -1),
    new Among('iv', -1, 1),
  ];

  static a_3: Among<StemmerPt>[] = [
    new Among('ante', -1, 1),
    new Among('avel', -1, 1),
    new Among('\u00EDvel', -1, 1),
  ];

  static a_4: Among<StemmerPt>[] = [
    new Among('ic', -1, 1),
    new Among('abil', -1, 1),
    new Among('iv', -1, 1),
  ];

  static a_5: Among<StemmerPt>[] = [
    new Among('ica', -1, 1),
    new Among('\u00E2ncia', -1, 1),
    new Among('\u00EAncia', -1, 4),
    new Among('ira', -1, 9),
    new Among('adora', -1, 1),
    new Among('osa', -1, 1),
    new Among('ista', -1, 1),
    new Among('iva', -1, 8),
    new Among('eza', -1, 1),
    new Among('log\u00EDa', -1, 2),
    new Among('idade', -1, 7),
    new Among('ante', -1, 1),
    new Among('mente', -1, 6),
    new Among('amente', 12, 5),
    new Among('\u00E1vel', -1, 1),
    new Among('\u00EDvel', -1, 1),
    new Among('uci\u00F3n', -1, 3),
    new Among('ico', -1, 1),
    new Among('ismo', -1, 1),
    new Among('oso', -1, 1),
    new Among('amento', -1, 1),
    new Among('imento', -1, 1),
    new Among('ivo', -1, 8),
    new Among('a\u00E7a~o', -1, 1),
    new Among('ador', -1, 1),
    new Among('icas', -1, 1),
    new Among('\u00EAncias', -1, 4),
    new Among('iras', -1, 9),
    new Among('adoras', -1, 1),
    new Among('osas', -1, 1),
    new Among('istas', -1, 1),
    new Among('ivas', -1, 8),
    new Among('ezas', -1, 1),
    new Among('log\u00EDas', -1, 2),
    new Among('idades', -1, 7),
    new Among('uciones', -1, 3),
    new Among('adores', -1, 1),
    new Among('antes', -1, 1),
    new Among('a\u00E7o~es', -1, 1),
    new Among('icos', -1, 1),
    new Among('ismos', -1, 1),
    new Among('osos', -1, 1),
    new Among('amentos', -1, 1),
    new Among('imentos', -1, 1),
    new Among('ivos', -1, 8),
  ];

  static a_6: Among<StemmerPt>[] = [
    new Among('ada', -1, 1),
    new Among('ida', -1, 1),
    new Among('ia', -1, 1),
    new Among('aria', 2, 1),
    new Among('eria', 2, 1),
    new Among('iria', 2, 1),
    new Among('ara', -1, 1),
    new Among('era', -1, 1),
    new Among('ira', -1, 1),
    new Among('ava', -1, 1),
    new Among('asse', -1, 1),
    new Among('esse', -1, 1),
    new Among('isse', -1, 1),
    new Among('aste', -1, 1),
    new Among('este', -1, 1),
    new Among('iste', -1, 1),
    new Among('ei', -1, 1),
    new Among('arei', 16, 1),
    new Among('erei', 16, 1),
    new Among('irei', 16, 1),
    new Among('am', -1, 1),
    new Among('iam', 20, 1),
    new Among('ariam', 21, 1),
    new Among('eriam', 21, 1),
    new Among('iriam', 21, 1),
    new Among('aram', 20, 1),
    new Among('eram', 20, 1),
    new Among('iram', 20, 1),
    new Among('avam', 20, 1),
    new Among('em', -1, 1),
    new Among('arem', 29, 1),
    new Among('erem', 29, 1),
    new Among('irem', 29, 1),
    new Among('assem', 29, 1),
    new Among('essem', 29, 1),
    new Among('issem', 29, 1),
    new Among('ado', -1, 1),
    new Among('ido', -1, 1),
    new Among('ando', -1, 1),
    new Among('endo', -1, 1),
    new Among('indo', -1, 1),
    new Among('ara~o', -1, 1),
    new Among('era~o', -1, 1),
    new Among('ira~o', -1, 1),
    new Among('ar', -1, 1),
    new Among('er', -1, 1),
    new Among('ir', -1, 1),
    new Among('as', -1, 1),
    new Among('adas', 47, 1),
    new Among('idas', 47, 1),
    new Among('ias', 47, 1),
    new Among('arias', 50, 1),
    new Among('erias', 50, 1),
    new Among('irias', 50, 1),
    new Among('aras', 47, 1),
    new Among('eras', 47, 1),
    new Among('iras', 47, 1),
    new Among('avas', 47, 1),
    new Among('es', -1, 1),
    new Among('ardes', 58, 1),
    new Among('erdes', 58, 1),
    new Among('irdes', 58, 1),
    new Among('ares', 58, 1),
    new Among('eres', 58, 1),
    new Among('ires', 58, 1),
    new Among('asses', 58, 1),
    new Among('esses', 58, 1),
    new Among('isses', 58, 1),
    new Among('astes', 58, 1),
    new Among('estes', 58, 1),
    new Among('istes', 58, 1),
    new Among('is', -1, 1),
    new Among('ais', 71, 1),
    new Among('eis', 71, 1),
    new Among('areis', 73, 1),
    new Among('ereis', 73, 1),
    new Among('ireis', 73, 1),
    new Among('\u00E1reis', 73, 1),
    new Among('\u00E9reis', 73, 1),
    new Among('\u00EDreis', 73, 1),
    new Among('\u00E1sseis', 73, 1),
    new Among('\u00E9sseis', 73, 1),
    new Among('\u00EDsseis', 73, 1),
    new Among('\u00E1veis', 73, 1),
    new Among('\u00EDeis', 73, 1),
    new Among('ar\u00EDeis', 84, 1),
    new Among('er\u00EDeis', 84, 1),
    new Among('ir\u00EDeis', 84, 1),
    new Among('ados', -1, 1),
    new Among('idos', -1, 1),
    new Among('amos', -1, 1),
    new Among('\u00E1ramos', 90, 1),
    new Among('\u00E9ramos', 90, 1),
    new Among('\u00EDramos', 90, 1),
    new Among('\u00E1vamos', 90, 1),
    new Among('\u00EDamos', 90, 1),
    new Among('ar\u00EDamos', 95, 1),
    new Among('er\u00EDamos', 95, 1),
    new Among('ir\u00EDamos', 95, 1),
    new Among('emos', -1, 1),
    new Among('aremos', 99, 1),
    new Among('eremos', 99, 1),
    new Among('iremos', 99, 1),
    new Among('\u00E1ssemos', 99, 1),
    new Among('\u00EAssemos', 99, 1),
    new Among('\u00EDssemos', 99, 1),
    new Among('imos', -1, 1),
    new Among('armos', -1, 1),
    new Among('ermos', -1, 1),
    new Among('irmos', -1, 1),
    new Among('\u00E1mos', -1, 1),
    new Among('ar\u00E1s', -1, 1),
    new Among('er\u00E1s', -1, 1),
    new Among('ir\u00E1s', -1, 1),
    new Among('eu', -1, 1),
    new Among('iu', -1, 1),
    new Among('ou', -1, 1),
    new Among('ar\u00E1', -1, 1),
    new Among('er\u00E1', -1, 1),
    new Among('ir\u00E1', -1, 1),
  ];

  static a_7: Among<StemmerPt>[] = [
    new Among('a', -1, 1),
    new Among('i', -1, 1),
    new Among('o', -1, 1),
    new Among('os', -1, 1),
    new Among('\u00E1', -1, 1),
    new Among('\u00ED', -1, 1),
    new Among('\u00F3', -1, 1),
  ];

  static a_8: Among<StemmerPt>[] = [
    new Among('e', -1, 1),
    new Among('\u00E7', -1, 2),
    new Among('\u00E9', -1, 1),
    new Among('\u00EA', -1, 1),
  ];

  static g_v: number[] = [
    17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 19, 12, 2,
  ];
}

export default StemmerPt;
