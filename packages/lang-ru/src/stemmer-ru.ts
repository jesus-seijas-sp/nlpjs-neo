import { Among, SnowballStemmer } from '@nlpjs-neo/core';
import type { ContainerHolder } from '@nlpjs-neo/core';

/**
 * Stemmer written by tools/snowball from russian.sbl of Snowball 2.2.0. Do not edit it by hand:
 * change the Snowball program and generate it again.
 */
class StemmerRu extends SnowballStemmer {
  constructor(container?: ContainerHolder) {
    super(container);
    this.name = 'stemmer-ru';
    this.I_pV = 0;
    this.I_p2 = 0;
  }

  r_mark_regions(): boolean {
    this.I_pV = this.limit;
    this.I_p2 = this.limit;
    const v_1 = this.cursor;
    lab0: {
      if (!this.gopast_in_grouping(StemmerRu.g_v, 1072, 1103)) {
        break lab0;
      }
      this.I_pV = this.cursor;
      if (!this.gopast_out_grouping(StemmerRu.g_v, 1072, 1103)) {
        break lab0;
      }
      if (!this.gopast_in_grouping(StemmerRu.g_v, 1072, 1103)) {
        break lab0;
      }
      if (!this.gopast_out_grouping(StemmerRu.g_v, 1072, 1103)) {
        break lab0;
      }
      this.I_p2 = this.cursor;
    }
    this.cursor = v_1;
    return true;
  }

  r_perfective_gerund(): boolean {
    const among_var = this.find_slice_b(StemmerRu.a_0);
    if (among_var === 0) {
      return false;
    }
    switch (among_var) {
      case 1:
        if (!this.eq_s_b('\u0430') && !this.eq_s_b('\u044F')) {
          return false;
        }
        this.slice_del();
        break;
      case 2:
        this.slice_del();
        break;
    }
    return true;
  }

  r_adjective(): boolean {
    const among_var = this.find_slice_b(StemmerRu.a_1);
    if (among_var === 0) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_del();
        break;
    }
    return true;
  }

  r_adjectival(): boolean {
    if (!this.r_adjective()) {
      return false;
    }
    const v_1 = this.limit - this.cursor;
    lab0: {
      const among_var = this.find_slice_b(StemmerRu.a_2);
      if (among_var === 0) {
        this.cursor = this.limit - v_1;
        break lab0;
      }
      switch (among_var) {
        case 1:
          if (!this.eq_s_b('\u0430') && !this.eq_s_b('\u044F')) {
            this.cursor = this.limit - v_1;
            break lab0;
          }
          this.slice_del();
          break;
        case 2:
          this.slice_del();
          break;
      }
    }
    return true;
  }

  r_reflexive(): boolean {
    const among_var = this.find_slice_b(StemmerRu.a_3);
    if (among_var === 0) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_del();
        break;
    }
    return true;
  }

  r_verb(): boolean {
    const among_var = this.find_slice_b(StemmerRu.a_4);
    if (among_var === 0) {
      return false;
    }
    switch (among_var) {
      case 1:
        if (!this.eq_s_b('\u0430') && !this.eq_s_b('\u044F')) {
          return false;
        }
        this.slice_del();
        break;
      case 2:
        this.slice_del();
        break;
    }
    return true;
  }

  r_noun(): boolean {
    const among_var = this.find_slice_b(StemmerRu.a_5);
    if (among_var === 0) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_del();
        break;
    }
    return true;
  }

  r_derivational(): boolean {
    const among_var = this.find_slice_b(StemmerRu.a_6);
    if (among_var === 0) {
      return false;
    }
    if (!this.r_R2()) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_del();
        break;
    }
    return true;
  }

  r_tidy_up(): boolean {
    const among_var = this.find_slice_b(StemmerRu.a_7);
    if (among_var === 0) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_del();
        this.ket = this.cursor;
        if (!this.eq_s_b('\u043D')) {
          return false;
        }
        this.bra = this.cursor;
        if (!this.eq_s_b('\u043D')) {
          return false;
        }
        this.slice_del();
        break;
      case 2:
        if (!this.eq_s_b('\u043D')) {
          return false;
        }
        this.slice_del();
        break;
      case 3:
        this.slice_del();
        break;
    }
    return true;
  }

  innerStem(): boolean {
    const v_1 = this.cursor;
    for (;;) {
      const v_2 = this.cursor;
      lab1: {
        lab2: for (;;) {
          const v_3 = this.cursor;
          lab3: {
            this.bra = this.cursor;
            if (!this.eq_s('\u0451')) {
              break lab3;
            }
            this.ket = this.cursor;
            this.cursor = v_3;
            break lab2;
          }
          this.cursor = v_3;
          if (this.cursor >= this.limit) {
            break lab1;
          }
          this.cursor++;
        }
        this.slice_from('\u0435');
        continue;
      }
      this.cursor = v_2;
      break;
    }
    this.cursor = v_1;
    this.r_mark_regions();
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    if (this.cursor < this.I_pV) {
      return false;
    }
    const v_4 = this.limit_backward;
    this.limit_backward = this.I_pV;
    const v_5 = this.limit - this.cursor;
    lab4: {
      lab5: {
        const v_6 = this.limit - this.cursor;
        lab6: {
          if (!this.r_perfective_gerund()) {
            break lab6;
          }
          break lab5;
        }
        this.cursor = this.limit - v_6;
        const v_7 = this.limit - this.cursor;
        lab7: {
          if (!this.r_reflexive()) {
            this.cursor = this.limit - v_7;
            break lab7;
          }
        }
        lab8: {
          const v_8 = this.limit - this.cursor;
          lab9: {
            if (!this.r_adjectival()) {
              break lab9;
            }
            break lab8;
          }
          this.cursor = this.limit - v_8;
          lab10: {
            if (!this.r_verb()) {
              break lab10;
            }
            break lab8;
          }
          this.cursor = this.limit - v_8;
          if (!this.r_noun()) {
            break lab4;
          }
        }
      }
    }
    this.cursor = this.limit - v_5;
    const v_9 = this.limit - this.cursor;
    lab11: {
      this.ket = this.cursor;
      if (!this.eq_s_b('\u0438')) {
        this.cursor = this.limit - v_9;
        break lab11;
      }
      this.bra = this.cursor;
      this.slice_del();
    }
    this.do_backward(this.r_derivational);
    this.do_backward(this.r_tidy_up);
    this.limit_backward = v_4;
    this.cursor = this.limit_backward;
    return true;
  }

  static g_v: number[] = [33, 65, 8, 232];

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
}

export default StemmerRu;
