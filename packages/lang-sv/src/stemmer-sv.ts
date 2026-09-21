import { Among, BaseStemmer } from '@nlpjs-neo/core';

class StemmerSv extends BaseStemmer {
  declare I_p1: number;
  declare I_x: number;

  constructor(container?) {
    super(container);
    this.name = 'stemmer-sv';
    this.I_x = 0;
    this.I_p1 = 0;
  }

  copy_from(other) {
    this.I_x = other.I_x;
    this.I_p1 = other.I_p1;
    super.copy_from(other);
  }

  r_mark_regions() {
    this.I_p1 = this.limit;
    // test
    const v_1 = this.cursor;
    {
      const c = this.cursor + 3;
      if (c < 0 || c > this.limit) {
        return false;
      }
      this.cursor = c;
    }
    this.I_x = this.cursor;
    this.cursor = v_1;
    // goto
    if (!this.goto_in_grouping(StemmerSv.g_v, 97, 246)) {
      return false;
    }
    // gopast
    if (!this.gopast_out_grouping(StemmerSv.g_v, 97, 246)) {
      return false;
    }
    this.I_p1 = this.cursor;
    // try
    lab4: {
      if (!(this.I_p1 < this.I_x)) {
        break lab4;
      }
      this.I_p1 = this.I_x;
    }
    return true;
  }

  r_main_suffix() {
    const v_1 = this.limit - this.cursor;
    if (this.cursor < this.I_p1) {
      return false;
    }
    this.cursor = this.I_p1;
    const v_2 = this.limit_backward;
    this.limit_backward = this.cursor;
    this.cursor = this.limit - v_1;
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerSv.a_0, 37);
    if (among_var === 0) {
      this.limit_backward = v_2;
      return false;
    }
    this.bra = this.cursor;
    this.limit_backward = v_2;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.in_grouping_b(StemmerSv.g_s_ending, 98, 121)) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  r_consonant_pair() {
    const v_1 = this.limit - this.cursor;
    if (this.cursor < this.I_p1) {
      return false;
    }
    this.cursor = this.I_p1;
    const v_2 = this.limit_backward;
    this.limit_backward = this.cursor;
    this.cursor = this.limit - v_1;
    // and
    const v_3 = this.limit - this.cursor;
    if (this.find_among_b(StemmerSv.a_1, 7) === 0) {
      this.limit_backward = v_2;
      return false;
    }
    this.cursor = this.limit - v_3;
    this.ket = this.cursor;
    if (this.cursor <= this.limit_backward) {
      this.limit_backward = v_2;
      return false;
    }
    this.cursor--;
    this.bra = this.cursor;
    if (!this.slice_del()) {
      return false;
    }
    this.limit_backward = v_2;
    return true;
  }

  r_other_suffix() {
    const v_1 = this.limit - this.cursor;
    if (this.cursor < this.I_p1) {
      return false;
    }
    this.cursor = this.I_p1;
    const v_2 = this.limit_backward;
    this.limit_backward = this.cursor;
    this.cursor = this.limit - v_1;
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerSv.a_2, 5);
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
      case 2:
        if (!this.slice_from('l\u00F6s')) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from('full')) {
          return false;
        }
        break;
    }
    this.limit_backward = v_2;
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
    // do
    const v_2 = this.limit - this.cursor;
    lab1: {
      if (!this.r_main_suffix()) {
        break lab1;
      }
    }
    this.cursor = this.limit - v_2;
    // do
    const v_3 = this.limit - this.cursor;
    lab2: {
      if (!this.r_consonant_pair()) {
        break lab2;
      }
    }
    this.cursor = this.limit - v_3;
    // do
    const v_4 = this.limit - this.cursor;
    lab3: {
      if (!this.r_other_suffix()) {
        break lab3;
      }
    }
    this.cursor = this.limit - v_4;
    this.cursor = this.limit_backward;
    return true;
  }

  static a_0: Among<StemmerSv>[] = [
    new Among('a', -1, 1),
    new Among('arna', 0, 1),
    new Among('erna', 0, 1),
    new Among('heterna', 2, 1),
    new Among('orna', 0, 1),
    new Among('ad', -1, 1),
    new Among('e', -1, 1),
    new Among('ade', 6, 1),
    new Among('ande', 6, 1),
    new Among('arne', 6, 1),
    new Among('are', 6, 1),
    new Among('aste', 6, 1),
    new Among('en', -1, 1),
    new Among('anden', 12, 1),
    new Among('aren', 12, 1),
    new Among('heten', 12, 1),
    new Among('ern', -1, 1),
    new Among('ar', -1, 1),
    new Among('er', -1, 1),
    new Among('heter', 18, 1),
    new Among('or', -1, 1),
    new Among('s', -1, 2),
    new Among('as', 21, 1),
    new Among('arnas', 22, 1),
    new Among('ernas', 22, 1),
    new Among('ornas', 22, 1),
    new Among('es', 21, 1),
    new Among('ades', 26, 1),
    new Among('andes', 26, 1),
    new Among('ens', 21, 1),
    new Among('arens', 29, 1),
    new Among('hetens', 29, 1),
    new Among('erns', 21, 1),
    new Among('at', -1, 1),
    new Among('andet', -1, 1),
    new Among('het', -1, 1),
    new Among('ast', -1, 1),
  ];

  static a_1: Among<StemmerSv>[] = [
    new Among('dd', -1, -1),
    new Among('gd', -1, -1),
    new Among('nn', -1, -1),
    new Among('dt', -1, -1),
    new Among('gt', -1, -1),
    new Among('kt', -1, -1),
    new Among('tt', -1, -1),
  ];

  static a_2: Among<StemmerSv>[] = [
    new Among('ig', -1, 1),
    new Among('lig', 0, 1),
    new Among('els', -1, 1),
    new Among('fullt', -1, 3),
    new Among('l\u00F6st', -1, 2),
  ];

  static g_v: number[] = [
    17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 32,
  ];

  static g_s_ending: number[] = [119, 127, 149];
}

export default StemmerSv;
