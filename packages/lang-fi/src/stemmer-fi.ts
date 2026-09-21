import { Among, SnowballStemmer } from '@nlpjs-neo/core';

class StemmerFi extends SnowballStemmer {
  declare B_ending_removed: boolean;
  declare S_x: string;
  declare static a_0: Among<StemmerFi>[];
  declare static a_1: Among<StemmerFi>[];
  declare static a_2: Among<StemmerFi>[];
  declare static a_3: Among<StemmerFi>[];
  declare static a_4: Among<StemmerFi>[];
  declare static a_5: Among<StemmerFi>[];
  declare static a_6: Among<StemmerFi>[];
  declare static a_7: Among<StemmerFi>[];
  declare static a_8: Among<StemmerFi>[];
  declare static a_9: Among<StemmerFi>[];
  declare static g_AEI: number[];
  declare static g_V1: number[];
  declare static g_V2: number[];
  declare static g_particle_end: number[];
  declare static methodObject: StemmerFi;

  constructor(container?) {
    super(container);
    this.name = 'stemmer-fi';
    this.B_ending_removed = false;
    this.S_x = '';
    this.I_p2 = 0;
    this.I_p1 = 0;
  }

  copy_from(other) {
    this.B_ending_removed = other.B_ending_removed;
    this.S_x = other.S_x;
    this.I_p2 = other.I_p2;
    this.I_p1 = other.I_p1;
    super.copy_from(other);
  }

  r_mark_regions() {
    this.I_p1 = this.limit;
    this.I_p2 = this.limit;
    // goto
    if (!this.goto_in_grouping(StemmerFi.g_V1, 97, 246)) {
      return false;
    }
    // gopast
    if (!this.gopast_out_grouping(StemmerFi.g_V1, 97, 246)) {
      return false;
    }
    this.I_p1 = this.cursor;
    // goto
    if (!this.goto_in_grouping(StemmerFi.g_V1, 97, 246)) {
      return false;
    }
    // gopast
    if (!this.gopast_out_grouping(StemmerFi.g_V1, 97, 246)) {
      return false;
    }
    this.I_p2 = this.cursor;
    return true;
  }

  r_particle_etc() {
    let among_var;
    let v_1;
    let v_2;
    v_1 = this.limit - this.cursor;
    if (this.cursor < this.I_p1) {
      return false;
    }
    this.cursor = this.I_p1;
    v_2 = this.limit_backward;
    this.limit_backward = this.cursor;
    this.cursor = this.limit - v_1;
    this.ket = this.cursor;
    among_var = this.find_among_b(StemmerFi.a_0, 10);
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
        if (!this.in_grouping_b(StemmerFi.g_particle_end, 97, 246)) {
          return false;
        }
        break;
      case 2:
        if (!this.r_R2()) {
          return false;
        }
        break;
    }
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  r_possessive() {
    let among_var;
    let v_1;
    let v_2;
    let v_3;
    v_1 = this.limit - this.cursor;
    if (this.cursor < this.I_p1) {
      return false;
    }
    this.cursor = this.I_p1;
    v_2 = this.limit_backward;
    this.limit_backward = this.cursor;
    this.cursor = this.limit - v_1;
    this.ket = this.cursor;
    among_var = this.find_among_b(StemmerFi.a_4, 9);
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
        // not
        {
          v_3 = this.limit - this.cursor;
          lab0: {
            if (!this.eq_s_b(1, 'k')) {
              break lab0;
            }
            return false;
          }
          this.cursor = this.limit - v_3;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_del()) {
          return false;
        }
        this.ket = this.cursor;
        if (!this.eq_s_b(3, 'kse')) {
          return false;
        }
        this.bra = this.cursor;
        if (!this.slice_from('ksi')) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 4:
        if (this.find_among_b(StemmerFi.a_1, 6) === 0) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 5:
        if (this.find_among_b(StemmerFi.a_2, 6) === 0) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 6:
        if (this.find_among_b(StemmerFi.a_3, 2) === 0) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  r_LONG() {
    if (this.find_among_b(StemmerFi.a_5, 7) === 0) {
      return false;
    }
    return true;
  }

  r_VI() {
    if (!this.eq_s_b(1, 'i')) {
      return false;
    }
    if (!this.in_grouping_b(StemmerFi.g_V2, 97, 246)) {
      return false;
    }
    return true;
  }

  r_case_ending() {
    let among_var;
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    v_1 = this.limit - this.cursor;
    if (this.cursor < this.I_p1) {
      return false;
    }
    this.cursor = this.I_p1;
    v_2 = this.limit_backward;
    this.limit_backward = this.cursor;
    this.cursor = this.limit - v_1;
    this.ket = this.cursor;
    among_var = this.find_among_b(StemmerFi.a_6, 30);
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
        if (!this.eq_s_b(1, 'a')) {
          return false;
        }
        break;
      case 2:
        if (!this.eq_s_b(1, 'e')) {
          return false;
        }
        break;
      case 3:
        if (!this.eq_s_b(1, 'i')) {
          return false;
        }
        break;
      case 4:
        if (!this.eq_s_b(1, 'o')) {
          return false;
        }
        break;
      case 5:
        if (!this.eq_s_b(1, '\u00E4')) {
          return false;
        }
        break;
      case 6:
        if (!this.eq_s_b(1, '\u00F6')) {
          return false;
        }
        break;
      case 7:
        // try
        v_3 = this.limit - this.cursor;
        lab0: {
          // and
          v_4 = this.limit - this.cursor;
          // or
          lab1: {
            v_5 = this.limit - this.cursor;
            lab2: {
              if (!this.r_LONG()) {
                break lab2;
              }
              break lab1;
            }
            this.cursor = this.limit - v_5;
            if (!this.eq_s_b(2, 'ie')) {
              this.cursor = this.limit - v_3;
              break lab0;
            }
          }
          this.cursor = this.limit - v_4;
          if (this.cursor <= this.limit_backward) {
            this.cursor = this.limit - v_3;
            break lab0;
          }
          this.cursor--;
          this.bra = this.cursor;
        }
        break;
      case 8:
        if (!this.in_grouping_b(StemmerFi.g_V1, 97, 246)) {
          return false;
        }
        if (!this.out_grouping_b(StemmerFi.g_V1, 97, 246)) {
          return false;
        }
        break;
      case 9:
        if (!this.eq_s_b(1, 'e')) {
          return false;
        }
        break;
    }
    if (!this.slice_del()) {
      return false;
    }
    // set ending_removed
    this.B_ending_removed = true;
    return true;
  }

  r_other_endings() {
    let among_var;
    let v_1;
    let v_2;
    let v_3;
    v_1 = this.limit - this.cursor;
    if (this.cursor < this.I_p2) {
      return false;
    }
    this.cursor = this.I_p2;
    v_2 = this.limit_backward;
    this.limit_backward = this.cursor;
    this.cursor = this.limit - v_1;
    this.ket = this.cursor;
    among_var = this.find_among_b(StemmerFi.a_7, 14);
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
        // not
        {
          v_3 = this.limit - this.cursor;
          lab0: {
            if (!this.eq_s_b(2, 'po')) {
              break lab0;
            }
            return false;
          }
          this.cursor = this.limit - v_3;
        }
        break;
    }
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  r_i_plural() {
    let v_1;
    let v_2;
    v_1 = this.limit - this.cursor;
    if (this.cursor < this.I_p1) {
      return false;
    }
    this.cursor = this.I_p1;
    v_2 = this.limit_backward;
    this.limit_backward = this.cursor;
    this.cursor = this.limit - v_1;
    this.ket = this.cursor;
    if (this.find_among_b(StemmerFi.a_8, 2) === 0) {
      this.limit_backward = v_2;
      return false;
    }
    this.bra = this.cursor;
    this.limit_backward = v_2;
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  r_t_plural() {
    let among_var;
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    v_1 = this.limit - this.cursor;
    if (this.cursor < this.I_p1) {
      return false;
    }
    this.cursor = this.I_p1;
    v_2 = this.limit_backward;
    this.limit_backward = this.cursor;
    this.cursor = this.limit - v_1;
    this.ket = this.cursor;
    if (!this.eq_s_b(1, 't')) {
      this.limit_backward = v_2;
      return false;
    }
    this.bra = this.cursor;
    // test
    v_3 = this.limit - this.cursor;
    if (!this.in_grouping_b(StemmerFi.g_V1, 97, 246)) {
      this.limit_backward = v_2;
      return false;
    }
    this.cursor = this.limit - v_3;
    if (!this.slice_del()) {
      return false;
    }
    this.limit_backward = v_2;
    v_4 = this.limit - this.cursor;
    if (this.cursor < this.I_p2) {
      return false;
    }
    this.cursor = this.I_p2;
    v_5 = this.limit_backward;
    this.limit_backward = this.cursor;
    this.cursor = this.limit - v_4;
    this.ket = this.cursor;
    among_var = this.find_among_b(StemmerFi.a_9, 2);
    if (among_var === 0) {
      this.limit_backward = v_5;
      return false;
    }
    this.bra = this.cursor;
    this.limit_backward = v_5;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        // not
        {
          v_6 = this.limit - this.cursor;
          lab0: {
            if (!this.eq_s_b(2, 'po')) {
              break lab0;
            }
            return false;
          }
          this.cursor = this.limit - v_6;
        }
        break;
    }
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  r_tidy() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    let v_7;
    let v_8;
    v_1 = this.limit - this.cursor;
    if (this.cursor < this.I_p1) {
      return false;
    }
    this.cursor = this.I_p1;
    v_2 = this.limit_backward;
    this.limit_backward = this.cursor;
    this.cursor = this.limit - v_1;
    // do
    v_3 = this.limit - this.cursor;
    lab0: {
      // and
      v_4 = this.limit - this.cursor;
      if (!this.r_LONG()) {
        break lab0;
      }
      this.cursor = this.limit - v_4;
      this.ket = this.cursor;
      if (this.cursor <= this.limit_backward) {
        break lab0;
      }
      this.cursor--;
      this.bra = this.cursor;
      if (!this.slice_del()) {
        return false;
      }
    }
    this.cursor = this.limit - v_3;
    // do
    v_5 = this.limit - this.cursor;
    lab1: {
      this.ket = this.cursor;
      if (!this.in_grouping_b(StemmerFi.g_AEI, 97, 228)) {
        break lab1;
      }
      this.bra = this.cursor;
      if (!this.out_grouping_b(StemmerFi.g_V1, 97, 246)) {
        break lab1;
      }
      if (!this.slice_del()) {
        return false;
      }
    }
    this.cursor = this.limit - v_5;
    // do
    v_6 = this.limit - this.cursor;
    lab2: {
      this.ket = this.cursor;
      if (!this.eq_s_b(1, 'j')) {
        break lab2;
      }
      this.bra = this.cursor;
      // or
      lab3: {
        v_7 = this.limit - this.cursor;
        lab4: {
          if (!this.eq_s_b(1, 'o')) {
            break lab4;
          }
          break lab3;
        }
        this.cursor = this.limit - v_7;
        if (!this.eq_s_b(1, 'u')) {
          break lab2;
        }
      }
      if (!this.slice_del()) {
        return false;
      }
    }
    this.cursor = this.limit - v_6;
    // do
    v_8 = this.limit - this.cursor;
    lab5: {
      this.ket = this.cursor;
      if (!this.eq_s_b(1, 'o')) {
        break lab5;
      }
      this.bra = this.cursor;
      if (!this.eq_s_b(1, 'j')) {
        break lab5;
      }
      if (!this.slice_del()) {
        return false;
      }
    }
    this.cursor = this.limit - v_8;
    this.limit_backward = v_2;
    // goto
    if (!this.goto_out_grouping_b(StemmerFi.g_V1, 97, 246)) {
      return false;
    }
    this.ket = this.cursor;
    if (this.cursor <= this.limit_backward) {
      return false;
    }
    this.cursor--;
    this.bra = this.cursor;
    // -> x
    this.S_x = this.slice_to(this.S_x);
    if (this.S_x === '') {
      return false;
    }
    // name x
    if (!this.eq_s_b(this.S_x)) {
      return false;
    }
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  innerStem() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    let v_7;
    let v_8;
    let v_9;
    // do
    v_1 = this.cursor;
    lab0: {
      if (!this.r_mark_regions()) {
        break lab0;
      }
    }
    this.cursor = v_1;
    // unset ending_removed
    this.B_ending_removed = false;
    // backwards
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    // do
    v_2 = this.limit - this.cursor;
    lab1: {
      if (!this.r_particle_etc()) {
        break lab1;
      }
    }
    this.cursor = this.limit - v_2;
    // do
    v_3 = this.limit - this.cursor;
    lab2: {
      if (!this.r_possessive()) {
        break lab2;
      }
    }
    this.cursor = this.limit - v_3;
    // do
    v_4 = this.limit - this.cursor;
    lab3: {
      if (!this.r_case_ending()) {
        break lab3;
      }
    }
    this.cursor = this.limit - v_4;
    // do
    v_5 = this.limit - this.cursor;
    lab4: {
      if (!this.r_other_endings()) {
        break lab4;
      }
    }
    this.cursor = this.limit - v_5;
    // or
    lab5: {
      v_6 = this.limit - this.cursor;
      lab6: {
        // Boolean test ending_removed
        if (!this.B_ending_removed) {
          break lab6;
        }
        // do
        v_7 = this.limit - this.cursor;
        lab7: {
          if (!this.r_i_plural()) {
            break lab7;
          }
        }
        this.cursor = this.limit - v_7;
        break lab5;
      }
      this.cursor = this.limit - v_6;
      // do
      v_8 = this.limit - this.cursor;
      lab8: {
        if (!this.r_t_plural()) {
          break lab8;
        }
      }
      this.cursor = this.limit - v_8;
    }
    // do
    v_9 = this.limit - this.cursor;
    lab9: {
      if (!this.r_tidy()) {
        break lab9;
      }
    }
    this.cursor = this.limit - v_9;
    this.cursor = this.limit_backward;
    return true;
  }
}

StemmerFi.methodObject = new StemmerFi();
StemmerFi.a_0 = [
  new Among('pa', -1, 1),
  new Among('sti', -1, 2),
  new Among('kaan', -1, 1),
  new Among('han', -1, 1),
  new Among('kin', -1, 1),
  new Among('h\u00E4n', -1, 1),
  new Among('k\u00E4\u00E4n', -1, 1),
  new Among('ko', -1, 1),
  new Among('p\u00E4', -1, 1),
  new Among('k\u00F6', -1, 1),
];

StemmerFi.a_1 = [
  new Among('lla', -1, -1),
  new Among('na', -1, -1),
  new Among('ssa', -1, -1),
  new Among('ta', -1, -1),
  new Among('lta', 3, -1),
  new Among('sta', 3, -1),
];

StemmerFi.a_2 = [
  new Among('ll\u00E4', -1, -1),
  new Among('n\u00E4', -1, -1),
  new Among('ss\u00E4', -1, -1),
  new Among('t\u00E4', -1, -1),
  new Among('lt\u00E4', 3, -1),
  new Among('st\u00E4', 3, -1),
];

StemmerFi.a_3 = [new Among('lle', -1, -1), new Among('ine', -1, -1)];

StemmerFi.a_4 = [
  new Among('nsa', -1, 3),
  new Among('mme', -1, 3),
  new Among('nne', -1, 3),
  new Among('ni', -1, 2),
  new Among('si', -1, 1),
  new Among('an', -1, 4),
  new Among('en', -1, 6),
  new Among('\u00E4n', -1, 5),
  new Among('ns\u00E4', -1, 3),
];

StemmerFi.a_5 = [
  new Among('aa', -1, -1),
  new Among('ee', -1, -1),
  new Among('ii', -1, -1),
  new Among('oo', -1, -1),
  new Among('uu', -1, -1),
  new Among('\u00E4\u00E4', -1, -1),
  new Among('\u00F6\u00F6', -1, -1),
];

StemmerFi.a_6 = [
  new Among('a', -1, 8),
  new Among('lla', 0, -1),
  new Among('na', 0, -1),
  new Among('ssa', 0, -1),
  new Among('ta', 0, -1),
  new Among('lta', 4, -1),
  new Among('sta', 4, -1),
  new Among('tta', 4, 9),
  new Among('lle', -1, -1),
  new Among('ine', -1, -1),
  new Among('ksi', -1, -1),
  new Among('n', -1, 7),
  new Among('han', 11, 1),
  new Among(
    'den',
    11,
    -1,
    (instance) => instance.r_VI(),
    StemmerFi.methodObject
  ),
  new Among(
    'seen',
    11,
    -1,
    (instance) => instance.r_LONG(),
    StemmerFi.methodObject
  ),
  new Among('hen', 11, 2),
  new Among(
    'tten',
    11,
    -1,
    (instance) => instance.r_VI(),
    StemmerFi.methodObject
  ),
  new Among('hin', 11, 3),
  new Among(
    'siin',
    11,
    -1,
    (instance) => instance.r_VI(),
    StemmerFi.methodObject
  ),
  new Among('hon', 11, 4),
  new Among('h\u00E4n', 11, 5),
  new Among('h\u00F6n', 11, 6),
  new Among('\u00E4', -1, 8),
  new Among('ll\u00E4', 22, -1),
  new Among('n\u00E4', 22, -1),
  new Among('ss\u00E4', 22, -1),
  new Among('t\u00E4', 22, -1),
  new Among('lt\u00E4', 26, -1),
  new Among('st\u00E4', 26, -1),
  new Among('tt\u00E4', 26, 9),
];

StemmerFi.a_7 = [
  new Among('eja', -1, -1),
  new Among('mma', -1, 1),
  new Among('imma', 1, -1),
  new Among('mpa', -1, 1),
  new Among('impa', 3, -1),
  new Among('mmi', -1, 1),
  new Among('immi', 5, -1),
  new Among('mpi', -1, 1),
  new Among('impi', 7, -1),
  new Among('ej\u00E4', -1, -1),
  new Among('mm\u00E4', -1, 1),
  new Among('imm\u00E4', 10, -1),
  new Among('mp\u00E4', -1, 1),
  new Among('imp\u00E4', 12, -1),
];

StemmerFi.a_8 = [new Among('i', -1, -1), new Among('j', -1, -1)];

StemmerFi.a_9 = [new Among('mma', -1, 1), new Among('imma', 0, -1)];

StemmerFi.g_AEI = [17, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8];

StemmerFi.g_V1 = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32];

StemmerFi.g_V2 = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32];

StemmerFi.g_particle_end = [
  17, 97, 24, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32,
];

export default StemmerFi;
