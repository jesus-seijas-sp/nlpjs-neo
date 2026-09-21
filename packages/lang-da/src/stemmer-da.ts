import { Among, BaseStemmer } from '@nlpjs-neo/core';

class StemmerDa extends BaseStemmer {
  declare I_p1: number;
  declare I_x: number;
  declare S_ch: string;
  declare static a_0: Among<StemmerDa>[];
  declare static a_1: Among<StemmerDa>[];
  declare static a_2: Among<StemmerDa>[];
  declare static g_s_ending: number[];
  declare static g_v: number[];

  constructor(container) {
    super(container);
    this.name = 'stemmer-da';
    this.I_x = 0;
    this.I_p1 = 0;
    this.S_ch = '';
  }

  copy_from(other) {
    this.I_x = other.I_x;
    this.I_p1 = other.I_p1;
    this.S_ch = other.S_ch;
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
    if (!this.goto_in_grouping(StemmerDa.g_v, 97, 248)) {
      return false;
    }
    // gopast
    if (!this.gopast_out_grouping(StemmerDa.g_v, 97, 248)) {
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
    const among_var = this.find_among_b(StemmerDa.a_0, 32);
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
        if (!this.in_grouping_b(StemmerDa.g_s_ending, 97, 229)) {
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
    // test
    const v_1 = this.limit - this.cursor;
    const v_2 = this.limit - this.cursor;
    if (this.cursor < this.I_p1) {
      return false;
    }
    this.cursor = this.I_p1;
    const v_3 = this.limit_backward;
    this.limit_backward = this.cursor;
    this.cursor = this.limit - v_2;
    this.ket = this.cursor;
    if (this.find_among_b(StemmerDa.a_1, 4) === 0) {
      this.limit_backward = v_3;
      return false;
    }
    this.bra = this.cursor;
    this.limit_backward = v_3;
    this.cursor = this.limit - v_1;
    if (this.cursor <= this.limit_backward) {
      return false;
    }
    this.cursor--;
    this.bra = this.cursor;
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  r_other_suffix() {
    let v_4;
    // do
    const v_1 = this.limit - this.cursor;
    lab0: {
      this.ket = this.cursor;
      if (!this.eq_s_b(2, 'st')) {
        break lab0;
      }
      this.bra = this.cursor;
      if (!this.eq_s_b(2, 'ig')) {
        break lab0;
      }
      if (!this.slice_del()) {
        return false;
      }
    }
    this.cursor = this.limit - v_1;
    const v_2 = this.limit - this.cursor;
    if (this.cursor < this.I_p1) {
      return false;
    }
    this.cursor = this.I_p1;
    const v_3 = this.limit_backward;
    this.limit_backward = this.cursor;
    this.cursor = this.limit - v_2;
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerDa.a_2, 5);
    if (among_var === 0) {
      this.limit_backward = v_3;
      return false;
    }
    this.bra = this.cursor;
    this.limit_backward = v_3;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        if (!this.slice_del()) {
          return false;
        }
        // do
        v_4 = this.limit - this.cursor;
        lab1: {
          if (!this.r_consonant_pair()) {
            break lab1;
          }
        }
        this.cursor = this.limit - v_4;
        break;
      case 2:
        if (!this.slice_from('l\u00F8s')) {
          return false;
        }
        break;
    }
    return true;
  }

  r_undouble() {
    const v_1 = this.limit - this.cursor;
    if (this.cursor < this.I_p1) {
      return false;
    }
    this.cursor = this.I_p1;
    const v_2 = this.limit_backward;
    this.limit_backward = this.cursor;
    this.cursor = this.limit - v_1;
    this.ket = this.cursor;
    if (!this.out_grouping_b(StemmerDa.g_v, 97, 248)) {
      this.limit_backward = v_2;
      return false;
    }
    this.bra = this.cursor;
    // -> ch
    this.S_ch = this.slice_to(this.S_ch);
    if (this.S_ch === '') {
      return false;
    }
    this.limit_backward = v_2;
    // name ch
    if (!this.eq_s_b(this.S_ch)) {
      return false;
    }
    if (!this.slice_del()) {
      return false;
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
    // do
    const v_5 = this.limit - this.cursor;
    lab4: {
      if (!this.r_undouble()) {
        break lab4;
      }
    }
    this.cursor = this.limit - v_5;
    this.cursor = this.limit_backward;
    return true;
  }
}

StemmerDa.a_0 = [
  new Among('hed', -1, 1),
  new Among('ethed', 0, 1),
  new Among('ered', -1, 1),
  new Among('e', -1, 1),
  new Among('erede', 3, 1),
  new Among('ende', 3, 1),
  new Among('erende', 5, 1),
  new Among('ene', 3, 1),
  new Among('erne', 3, 1),
  new Among('ere', 3, 1),
  new Among('en', -1, 1),
  new Among('heden', 10, 1),
  new Among('eren', 10, 1),
  new Among('er', -1, 1),
  new Among('heder', 13, 1),
  new Among('erer', 13, 1),
  new Among('s', -1, 2),
  new Among('heds', 16, 1),
  new Among('es', 16, 1),
  new Among('endes', 18, 1),
  new Among('erendes', 19, 1),
  new Among('enes', 18, 1),
  new Among('ernes', 18, 1),
  new Among('eres', 18, 1),
  new Among('ens', 16, 1),
  new Among('hedens', 24, 1),
  new Among('erens', 24, 1),
  new Among('ers', 16, 1),
  new Among('ets', 16, 1),
  new Among('erets', 28, 1),
  new Among('et', -1, 1),
  new Among('eret', 30, 1),
];

StemmerDa.a_1 = [
  new Among('gd', -1, -1),
  new Among('dt', -1, -1),
  new Among('gt', -1, -1),
  new Among('kt', -1, -1),
];

StemmerDa.a_2 = [
  new Among('ig', -1, 1),
  new Among('lig', 0, 1),
  new Among('elig', 1, 1),
  new Among('els', -1, 1),
  new Among('l\u00F8st', -1, 2),
];

StemmerDa.g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 128];

StemmerDa.g_s_ending = [
  239, 254, 42, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
];

export default StemmerDa;
