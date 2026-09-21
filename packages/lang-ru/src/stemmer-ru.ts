import { Among, SnowballStemmer } from '@nlpjs-neo/core';

class StemmerRu extends SnowballStemmer {
  constructor(container?) {
    super(container);
    this.name = 'stemmer-ru';
    this.I_p2 = 0;
    this.I_pV = 0;
  }

  copy_from(other) {
    this.I_p2 = other.I_p2;
    this.I_pV = other.I_pV;
    super.copy_from(other);
  }

  r_mark_regions() {
    this.I_pV = this.limit;
    this.I_p2 = this.limit;
    // do
    const v_1 = this.cursor;
    lab0: {
      // gopast
      if (!this.gopast_in_grouping(StemmerRu.g_v, 1072, 1103)) {
        break lab0;
      }
      this.I_pV = this.cursor;
      // gopast
      if (!this.gopast_out_grouping(StemmerRu.g_v, 1072, 1103)) {
        break lab0;
      }
      // gopast
      if (!this.gopast_in_grouping(StemmerRu.g_v, 1072, 1103)) {
        break lab0;
      }
      // gopast
      if (!this.gopast_out_grouping(StemmerRu.g_v, 1072, 1103)) {
        break lab0;
      }
      this.I_p2 = this.cursor;
    }
    this.cursor = v_1;
    return true;
  }

  r_perfective_gerund() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerRu.a_0, 9);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        // or
        lab0: {
          const v_1 = this.limit - this.cursor;
          lab1: {
            if (!this.eq_s_b(1, '\u0430')) {
              break lab1;
            }
            break lab0;
          }
          this.cursor = this.limit - v_1;
          if (!this.eq_s_b(1, '\u044F')) {
            return false;
          }
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  r_adjective() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerRu.a_1, 26);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  r_adjectival() {
    if (!this.r_adjective()) {
      return false;
    }
    // try
    const v_1 = this.limit - this.cursor;
    lab0: {
      this.ket = this.cursor;
      const among_var = this.find_among_b(StemmerRu.a_2, 8);
      if (among_var === 0) {
        this.cursor = this.limit - v_1;
        break lab0;
      }
      this.bra = this.cursor;
      switch (among_var) {
        case 0:
          this.cursor = this.limit - v_1;
          break lab0;
        case 1:
          // or
          lab1: {
            const v_2 = this.limit - this.cursor;
            lab2: {
              if (!this.eq_s_b(1, '\u0430')) {
                break lab2;
              }
              break lab1;
            }
            this.cursor = this.limit - v_2;
            if (!this.eq_s_b(1, '\u044F')) {
              this.cursor = this.limit - v_1;
              break lab0;
            }
          }
          if (!this.slice_del()) {
            return false;
          }
          break;
        case 2:
          if (!this.slice_del()) {
            return false;
          }
          break;
      }
    }
    return true;
  }

  r_reflexive() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerRu.a_3, 2);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  r_verb() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerRu.a_4, 46);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        // or
        lab0: {
          const v_1 = this.limit - this.cursor;
          lab1: {
            if (!this.eq_s_b(1, '\u0430')) {
              break lab1;
            }
            break lab0;
          }
          this.cursor = this.limit - v_1;
          if (!this.eq_s_b(1, '\u044F')) {
            return false;
          }
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  r_noun() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerRu.a_5, 36);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  r_derivational() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerRu.a_6, 2);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R2()) {
      return false;
    }
    switch (among_var) {
      case 0:
        return false;
      case 1:
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  r_tidy_up() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerRu.a_7, 4);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        if (!this.slice_del()) {
          return false;
        }
        this.ket = this.cursor;
        if (!this.eq_s_b(1, '\u043D')) {
          return false;
        }
        this.bra = this.cursor;
        if (!this.eq_s_b(1, '\u043D')) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.eq_s_b(1, '\u043D')) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_del()) {
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
      if (!this.r_mark_regions()) {
        break lab0;
      }
    }
    this.cursor = v_1;
    // backwards
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    const v_2 = this.limit - this.cursor;
    if (this.cursor < this.I_pV) {
      return false;
    }
    this.cursor = this.I_pV;
    const v_3 = this.limit_backward;
    this.limit_backward = this.cursor;
    this.cursor = this.limit - v_2;
    // do
    const v_4 = this.limit - this.cursor;
    lab1: {
      // or
      lab2: {
        const v_5 = this.limit - this.cursor;
        lab3: {
          if (!this.r_perfective_gerund()) {
            break lab3;
          }
          break lab2;
        }
        this.cursor = this.limit - v_5;
        // try
        const v_6 = this.limit - this.cursor;
        lab4: {
          if (!this.r_reflexive()) {
            this.cursor = this.limit - v_6;
            break lab4;
          }
        }
        // or
        lab5: {
          const v_7 = this.limit - this.cursor;
          lab6: {
            if (!this.r_adjectival()) {
              break lab6;
            }
            break lab5;
          }
          this.cursor = this.limit - v_7;
          lab7: {
            if (!this.r_verb()) {
              break lab7;
            }
            break lab5;
          }
          this.cursor = this.limit - v_7;
          if (!this.r_noun()) {
            break lab1;
          }
        }
      }
    }
    this.cursor = this.limit - v_4;
    // try
    const v_8 = this.limit - this.cursor;
    lab8: {
      this.ket = this.cursor;
      if (!this.eq_s_b(1, '\u0438')) {
        this.cursor = this.limit - v_8;
        break lab8;
      }
      this.bra = this.cursor;
      if (!this.slice_del()) {
        return false;
      }
    }
    // do
    const v_9 = this.limit - this.cursor;
    lab9: {
      if (!this.r_derivational()) {
        break lab9;
      }
    }
    this.cursor = this.limit - v_9;
    // do
    const v_10 = this.limit - this.cursor;
    lab10: {
      if (!this.r_tidy_up()) {
        break lab10;
      }
    }
    this.cursor = this.limit - v_10;
    this.limit_backward = v_3;
    this.cursor = this.limit_backward;
    return true;
  }

  static a_0: Among<StemmerRu>[] = [
    new Among('\u0432', -1, 1),
    new Among('\u0438\u0432', 0, 2),
    new Among('\u044B\u0432', 0, 2),
    new Among('\u0432\u0448\u0438', -1, 1),
    new Among('\u0438\u0432\u0448\u0438', 3, 2),
    new Among('\u044B\u0432\u0448\u0438', 3, 2),
    new Among('\u0432\u0448\u0438\u0441\u044C', -1, 1),
    new Among('\u0438\u0432\u0448\u0438\u0441\u044C', 6, 2),
    new Among('\u044B\u0432\u0448\u0438\u0441\u044C', 6, 2),
  ];

  static a_1: Among<StemmerRu>[] = [
    new Among('\u0435\u0435', -1, 1),
    new Among('\u0438\u0435', -1, 1),
    new Among('\u043E\u0435', -1, 1),
    new Among('\u044B\u0435', -1, 1),
    new Among('\u0438\u043C\u0438', -1, 1),
    new Among('\u044B\u043C\u0438', -1, 1),
    new Among('\u0435\u0439', -1, 1),
    new Among('\u0438\u0439', -1, 1),
    new Among('\u043E\u0439', -1, 1),
    new Among('\u044B\u0439', -1, 1),
    new Among('\u0435\u043C', -1, 1),
    new Among('\u0438\u043C', -1, 1),
    new Among('\u043E\u043C', -1, 1),
    new Among('\u044B\u043C', -1, 1),
    new Among('\u0435\u0433\u043E', -1, 1),
    new Among('\u043E\u0433\u043E', -1, 1),
    new Among('\u0435\u043C\u0443', -1, 1),
    new Among('\u043E\u043C\u0443', -1, 1),
    new Among('\u0438\u0445', -1, 1),
    new Among('\u044B\u0445', -1, 1),
    new Among('\u0435\u044E', -1, 1),
    new Among('\u043E\u044E', -1, 1),
    new Among('\u0443\u044E', -1, 1),
    new Among('\u044E\u044E', -1, 1),
    new Among('\u0430\u044F', -1, 1),
    new Among('\u044F\u044F', -1, 1),
  ];

  static a_2: Among<StemmerRu>[] = [
    new Among('\u0435\u043C', -1, 1),
    new Among('\u043D\u043D', -1, 1),
    new Among('\u0432\u0448', -1, 1),
    new Among('\u0438\u0432\u0448', 2, 2),
    new Among('\u044B\u0432\u0448', 2, 2),
    new Among('\u0449', -1, 1),
    new Among('\u044E\u0449', 5, 1),
    new Among('\u0443\u044E\u0449', 6, 2),
  ];

  static a_3: Among<StemmerRu>[] = [
    new Among('\u0441\u044C', -1, 1),
    new Among('\u0441\u044F', -1, 1),
  ];

  static a_4: Among<StemmerRu>[] = [
    new Among('\u043B\u0430', -1, 1),
    new Among('\u0438\u043B\u0430', 0, 2),
    new Among('\u044B\u043B\u0430', 0, 2),
    new Among('\u043D\u0430', -1, 1),
    new Among('\u0435\u043D\u0430', 3, 2),
    new Among('\u0435\u0442\u0435', -1, 1),
    new Among('\u0438\u0442\u0435', -1, 2),
    new Among('\u0439\u0442\u0435', -1, 1),
    new Among('\u0435\u0439\u0442\u0435', 7, 2),
    new Among('\u0443\u0439\u0442\u0435', 7, 2),
    new Among('\u043B\u0438', -1, 1),
    new Among('\u0438\u043B\u0438', 10, 2),
    new Among('\u044B\u043B\u0438', 10, 2),
    new Among('\u0439', -1, 1),
    new Among('\u0435\u0439', 13, 2),
    new Among('\u0443\u0439', 13, 2),
    new Among('\u043B', -1, 1),
    new Among('\u0438\u043B', 16, 2),
    new Among('\u044B\u043B', 16, 2),
    new Among('\u0435\u043C', -1, 1),
    new Among('\u0438\u043C', -1, 2),
    new Among('\u044B\u043C', -1, 2),
    new Among('\u043D', -1, 1),
    new Among('\u0435\u043D', 22, 2),
    new Among('\u043B\u043E', -1, 1),
    new Among('\u0438\u043B\u043E', 24, 2),
    new Among('\u044B\u043B\u043E', 24, 2),
    new Among('\u043D\u043E', -1, 1),
    new Among('\u0435\u043D\u043E', 27, 2),
    new Among('\u043D\u043D\u043E', 27, 1),
    new Among('\u0435\u0442', -1, 1),
    new Among('\u0443\u0435\u0442', 30, 2),
    new Among('\u0438\u0442', -1, 2),
    new Among('\u044B\u0442', -1, 2),
    new Among('\u044E\u0442', -1, 1),
    new Among('\u0443\u044E\u0442', 34, 2),
    new Among('\u044F\u0442', -1, 2),
    new Among('\u043D\u044B', -1, 1),
    new Among('\u0435\u043D\u044B', 37, 2),
    new Among('\u0442\u044C', -1, 1),
    new Among('\u0438\u0442\u044C', 39, 2),
    new Among('\u044B\u0442\u044C', 39, 2),
    new Among('\u0435\u0448\u044C', -1, 1),
    new Among('\u0438\u0448\u044C', -1, 2),
    new Among('\u044E', -1, 2),
    new Among('\u0443\u044E', 44, 2),
  ];

  static a_5: Among<StemmerRu>[] = [
    new Among('\u0430', -1, 1),
    new Among('\u0435\u0432', -1, 1),
    new Among('\u043E\u0432', -1, 1),
    new Among('\u0435', -1, 1),
    new Among('\u0438\u0435', 3, 1),
    new Among('\u044C\u0435', 3, 1),
    new Among('\u0438', -1, 1),
    new Among('\u0435\u0438', 6, 1),
    new Among('\u0438\u0438', 6, 1),
    new Among('\u0430\u043C\u0438', 6, 1),
    new Among('\u044F\u043C\u0438', 6, 1),
    new Among('\u0438\u044F\u043C\u0438', 10, 1),
    new Among('\u0439', -1, 1),
    new Among('\u0435\u0439', 12, 1),
    new Among('\u0438\u0435\u0439', 13, 1),
    new Among('\u0438\u0439', 12, 1),
    new Among('\u043E\u0439', 12, 1),
    new Among('\u0430\u043C', -1, 1),
    new Among('\u0435\u043C', -1, 1),
    new Among('\u0438\u0435\u043C', 18, 1),
    new Among('\u043E\u043C', -1, 1),
    new Among('\u044F\u043C', -1, 1),
    new Among('\u0438\u044F\u043C', 21, 1),
    new Among('\u043E', -1, 1),
    new Among('\u0443', -1, 1),
    new Among('\u0430\u0445', -1, 1),
    new Among('\u044F\u0445', -1, 1),
    new Among('\u0438\u044F\u0445', 26, 1),
    new Among('\u044B', -1, 1),
    new Among('\u044C', -1, 1),
    new Among('\u044E', -1, 1),
    new Among('\u0438\u044E', 30, 1),
    new Among('\u044C\u044E', 30, 1),
    new Among('\u044F', -1, 1),
    new Among('\u0438\u044F', 33, 1),
    new Among('\u044C\u044F', 33, 1),
  ];

  static a_6: Among<StemmerRu>[] = [
    new Among('\u043E\u0441\u0442', -1, 1),
    new Among('\u043E\u0441\u0442\u044C', -1, 1),
  ];

  static a_7: Among<StemmerRu>[] = [
    new Among('\u0435\u0439\u0448\u0435', -1, 1),
    new Among('\u043D', -1, 2),
    new Among('\u0435\u0439\u0448', -1, 1),
    new Among('\u044C', -1, 3),
  ];

  static g_v: number[] = [33, 65, 8, 232];
}

export default StemmerRu;
