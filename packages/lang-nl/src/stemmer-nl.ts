import { Among, BaseStemmer } from '@nlpjs-neo/core';

class StemmerNl extends BaseStemmer {
  declare B_e_found: boolean;
  declare I_p1: number;
  declare I_p2: number;
  declare static a_0: Among<StemmerNl>[];
  declare static a_1: Among<StemmerNl>[];
  declare static a_2: Among<StemmerNl>[];
  declare static a_3: Among<StemmerNl>[];
  declare static a_4: Among<StemmerNl>[];
  declare static a_5: Among<StemmerNl>[];
  declare static g_v: number[];
  declare static g_v_I: number[];
  declare static g_v_j: number[];
  declare static methodObject: StemmerNl;

  constructor(container?) {
    super(container);
    this.name = 'stemmer-nl';
    this.I_p2 = 0;
    this.I_p1 = 0;
    this.B_e_found = false;
  }

  copy_from(other) {
    this.I_p2 = other.I_p2;
    this.I_p1 = other.I_p1;
    this.B_e_found = other.B_e_found;
    super.copy_from(other);
  }

  r_prelude() {
    let among_var;
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    // test
    v_1 = this.cursor;
    // repeat
    replab0: for (;;) {
      v_2 = this.cursor;
      lab1: {
        this.bra = this.cursor;
        among_var = this.find_among(StemmerNl.a_0, 11);
        if (among_var === 0) {
          break lab1;
        }
        this.ket = this.cursor;
        switch (among_var) {
          case 0:
            break lab1;
          case 1:
            if (!this.slice_from('a')) {
              return false;
            }
            break;
          case 2:
            if (!this.slice_from('e')) {
              return false;
            }
            break;
          case 3:
            if (!this.slice_from('i')) {
              return false;
            }
            break;
          case 4:
            if (!this.slice_from('o')) {
              return false;
            }
            break;
          case 5:
            if (!this.slice_from('u')) {
              return false;
            }
            break;
          case 6:
            if (this.cursor >= this.limit) {
              break lab1;
            }
            this.cursor++;
            break;
        }
        continue replab0;
      }
      this.cursor = v_2;
      break;
    }
    this.cursor = v_1;
    // try
    v_3 = this.cursor;
    lab2: {
      this.bra = this.cursor;
      if (!this.eq_s(1, 'y')) {
        this.cursor = v_3;
        break lab2;
      }
      this.ket = this.cursor;
      if (!this.slice_from('Y')) {
        return false;
      }
    }
    // repeat
    replab3: for (;;) {
      v_4 = this.cursor;
      lab4: {
        // goto
        golab5: for (;;) {
          v_5 = this.cursor;
          lab6: {
            if (!this.in_grouping(StemmerNl.g_v, 97, 232)) {
              break lab6;
            }
            this.bra = this.cursor;
            // or
            lab7: {
              v_6 = this.cursor;
              lab8: {
                if (!this.eq_s(1, 'i')) {
                  break lab8;
                }
                this.ket = this.cursor;
                if (!this.in_grouping(StemmerNl.g_v, 97, 232)) {
                  break lab8;
                }
                if (!this.slice_from('I')) {
                  return false;
                }
                break lab7;
              }
              this.cursor = v_6;
              if (!this.eq_s(1, 'y')) {
                break lab6;
              }
              this.ket = this.cursor;
              if (!this.slice_from('Y')) {
                return false;
              }
            }
            this.cursor = v_5;
            break golab5;
          }
          this.cursor = v_5;
          if (this.cursor >= this.limit) {
            break lab4;
          }
          this.cursor++;
        }
        continue replab3;
      }
      this.cursor = v_4;
      break;
    }
    return true;
  }

  r_mark_regions() {
    this.I_p1 = this.limit;
    this.I_p2 = this.limit;
    // gopast
    golab0: for (;;) {
      lab1: {
        if (!this.in_grouping(StemmerNl.g_v, 97, 232)) {
          break lab1;
        }
        break golab0;
      }
      if (this.cursor >= this.limit) {
        return false;
      }
      this.cursor++;
    }
    // gopast
    golab2: for (;;) {
      lab3: {
        if (!this.out_grouping(StemmerNl.g_v, 97, 232)) {
          break lab3;
        }
        break golab2;
      }
      if (this.cursor >= this.limit) {
        return false;
      }
      this.cursor++;
    }
    this.I_p1 = this.cursor;
    // try
    lab4: {
      if (!(this.I_p1 < 3)) {
        break lab4;
      }
      this.I_p1 = 3;
    }
    // gopast
    golab5: for (;;) {
      lab6: {
        if (!this.in_grouping(StemmerNl.g_v, 97, 232)) {
          break lab6;
        }
        break golab5;
      }
      if (this.cursor >= this.limit) {
        return false;
      }
      this.cursor++;
    }
    // gopast
    golab7: for (;;) {
      lab8: {
        if (!this.out_grouping(StemmerNl.g_v, 97, 232)) {
          break lab8;
        }
        break golab7;
      }
      if (this.cursor >= this.limit) {
        return false;
      }
      this.cursor++;
    }
    this.I_p2 = this.cursor;
    return true;
  }

  r_postlude() {
    let among_var;
    let v_1;
    // repeat
    replab0: for (;;) {
      v_1 = this.cursor;
      lab1: {
        this.bra = this.cursor;
        among_var = this.find_among(StemmerNl.a_1, 3);
        if (among_var === 0) {
          break lab1;
        }
        this.ket = this.cursor;
        switch (among_var) {
          case 0:
            break lab1;
          case 1:
            if (!this.slice_from('y')) {
              return false;
            }
            break;
          case 2:
            if (!this.slice_from('i')) {
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

  r_R1() {
    if (!(this.I_p1 <= this.cursor)) {
      return false;
    }
    return true;
  }

  r_R2() {
    if (!(this.I_p2 <= this.cursor)) {
      return false;
    }
    return true;
  }

  r_undouble() {
    let v_1;
    // test
    v_1 = this.limit - this.cursor;
    if (this.find_among_b(StemmerNl.a_2, 3) === 0) {
      return false;
    }
    this.cursor = this.limit - v_1;
    this.ket = this.cursor;
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

  r_e_ending() {
    let v_1;
    // unset e_found
    this.B_e_found = false;
    this.ket = this.cursor;
    if (!this.eq_s_b(1, 'e')) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    // test
    v_1 = this.limit - this.cursor;
    if (!this.out_grouping_b(StemmerNl.g_v, 97, 232)) {
      return false;
    }
    this.cursor = this.limit - v_1;
    if (!this.slice_del()) {
      return false;
    }
    // set e_found
    this.B_e_found = true;
    if (!this.r_undouble()) {
      return false;
    }
    return true;
  }

  r_en_ending() {
    let v_1;
    let v_2;
    if (!this.r_R1()) {
      return false;
    }
    // and
    v_1 = this.limit - this.cursor;
    if (!this.out_grouping_b(StemmerNl.g_v, 97, 232)) {
      return false;
    }
    this.cursor = this.limit - v_1;
    // not
    {
      v_2 = this.limit - this.cursor;
      lab0: {
        if (!this.eq_s_b(3, 'gem')) {
          break lab0;
        }
        return false;
      }
      this.cursor = this.limit - v_2;
    }
    if (!this.slice_del()) {
      return false;
    }
    if (!this.r_undouble()) {
      return false;
    }
    return true;
  }

  r_standard_suffix() {
    let among_var;
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    let v_7;
    let v_8;
    let v_9;
    let v_10;
    // do
    v_1 = this.limit - this.cursor;
    lab0: {
      this.ket = this.cursor;
      among_var = this.find_among_b(StemmerNl.a_3, 5);
      if (among_var === 0) {
        break lab0;
      }
      this.bra = this.cursor;
      switch (among_var) {
        case 0:
          break lab0;
        case 1:
          if (!this.r_R1()) {
            break lab0;
          }
          if (!this.slice_from('heid')) {
            return false;
          }
          break;
        case 2:
          if (!this.r_en_ending()) {
            break lab0;
          }
          break;
        case 3:
          if (!this.r_R1()) {
            break lab0;
          }
          if (!this.out_grouping_b(StemmerNl.g_v_j, 97, 232)) {
            break lab0;
          }
          if (!this.slice_del()) {
            return false;
          }
          break;
      }
    }
    this.cursor = this.limit - v_1;
    // do
    v_2 = this.limit - this.cursor;
    lab1: {
      if (!this.r_e_ending()) {
        break lab1;
      }
    }
    this.cursor = this.limit - v_2;
    // do
    v_3 = this.limit - this.cursor;
    lab2: {
      this.ket = this.cursor;
      if (!this.eq_s_b(4, 'heid')) {
        break lab2;
      }
      this.bra = this.cursor;
      if (!this.r_R2()) {
        break lab2;
      }
      // not
      {
        v_4 = this.limit - this.cursor;
        lab3: {
          if (!this.eq_s_b(1, 'c')) {
            break lab3;
          }
          break lab2;
        }
        this.cursor = this.limit - v_4;
      }
      if (!this.slice_del()) {
        return false;
      }
      this.ket = this.cursor;
      if (!this.eq_s_b(2, 'en')) {
        break lab2;
      }
      this.bra = this.cursor;
      if (!this.r_en_ending()) {
        break lab2;
      }
    }
    this.cursor = this.limit - v_3;
    // do
    v_5 = this.limit - this.cursor;
    lab4: {
      this.ket = this.cursor;
      among_var = this.find_among_b(StemmerNl.a_4, 6);
      if (among_var === 0) {
        break lab4;
      }
      this.bra = this.cursor;
      switch (among_var) {
        case 0:
          break lab4;
        case 1:
          if (!this.r_R2()) {
            break lab4;
          }
          if (!this.slice_del()) {
            return false;
          }
          // or
          lab5: {
            v_6 = this.limit - this.cursor;
            lab6: {
              this.ket = this.cursor;
              if (!this.eq_s_b(2, 'ig')) {
                break lab6;
              }
              this.bra = this.cursor;
              if (!this.r_R2()) {
                break lab6;
              }
              // not
              {
                v_7 = this.limit - this.cursor;
                lab7: {
                  if (!this.eq_s_b(1, 'e')) {
                    break lab7;
                  }
                  break lab6;
                }
                this.cursor = this.limit - v_7;
              }
              if (!this.slice_del()) {
                return false;
              }
              break lab5;
            }
            this.cursor = this.limit - v_6;
            if (!this.r_undouble()) {
              break lab4;
            }
          }
          break;
        case 2:
          if (!this.r_R2()) {
            break lab4;
          }
          // not
          {
            v_8 = this.limit - this.cursor;
            lab8: {
              if (!this.eq_s_b(1, 'e')) {
                break lab8;
              }
              break lab4;
            }
            this.cursor = this.limit - v_8;
          }
          if (!this.slice_del()) {
            return false;
          }
          break;
        case 3:
          if (!this.r_R2()) {
            break lab4;
          }
          if (!this.slice_del()) {
            return false;
          }
          if (!this.r_e_ending()) {
            break lab4;
          }
          break;
        case 4:
          if (!this.r_R2()) {
            break lab4;
          }
          if (!this.slice_del()) {
            return false;
          }
          break;
        case 5:
          if (!this.r_R2()) {
            break lab4;
          }
          // Boolean test e_found
          if (!this.B_e_found) {
            break lab4;
          }
          if (!this.slice_del()) {
            return false;
          }
          break;
      }
    }
    this.cursor = this.limit - v_5;
    // do
    v_9 = this.limit - this.cursor;
    lab9: {
      if (!this.out_grouping_b(StemmerNl.g_v_I, 73, 232)) {
        break lab9;
      }
      // test
      v_10 = this.limit - this.cursor;
      if (this.find_among_b(StemmerNl.a_5, 4) === 0) {
        break lab9;
      }
      if (!this.out_grouping_b(StemmerNl.g_v, 97, 232)) {
        break lab9;
      }
      this.cursor = this.limit - v_10;
      this.ket = this.cursor;
      if (this.cursor <= this.limit_backward) {
        break lab9;
      }
      this.cursor--;
      this.bra = this.cursor;
      if (!this.slice_del()) {
        return false;
      }
    }
    this.cursor = this.limit - v_9;
    return true;
  }

  innerStem() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    // do
    v_1 = this.cursor;
    lab0: {
      if (!this.r_prelude()) {
        break lab0;
      }
    }
    this.cursor = v_1;
    // do
    v_2 = this.cursor;
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
    v_3 = this.limit - this.cursor;
    lab2: {
      if (!this.r_standard_suffix()) {
        break lab2;
      }
    }
    this.cursor = this.limit - v_3;
    this.cursor = this.limit_backward; // do
    v_4 = this.cursor;
    lab3: {
      if (!this.r_postlude()) {
        break lab3;
      }
    }
    this.cursor = v_4;
    return true;
  }
}

StemmerNl.methodObject = new StemmerNl();

StemmerNl.a_0 = [
  new Among('', -1, 6),
  new Among('\u00E1', 0, 1),
  new Among('\u00E4', 0, 1),
  new Among('\u00E9', 0, 2),
  new Among('\u00EB', 0, 2),
  new Among('\u00ED', 0, 3),
  new Among('\u00EF', 0, 3),
  new Among('\u00F3', 0, 4),
  new Among('\u00F6', 0, 4),
  new Among('\u00FA', 0, 5),
  new Among('\u00FC', 0, 5),
];

StemmerNl.a_1 = [
  new Among('', -1, 3),
  new Among('I', 0, 2),
  new Among('Y', 0, 1),
];

StemmerNl.a_2 = [
  new Among('dd', -1, -1),
  new Among('kk', -1, -1),
  new Among('tt', -1, -1),
];

StemmerNl.a_3 = [
  new Among('ene', -1, 2),
  new Among('se', -1, 3),
  new Among('en', -1, 2),
  new Among('heden', 2, 1),
  new Among('s', -1, 3),
];

StemmerNl.a_4 = [
  new Among('end', -1, 1),
  new Among('ig', -1, 2),
  new Among('ing', -1, 1),
  new Among('lijk', -1, 3),
  new Among('baar', -1, 4),
  new Among('bar', -1, 5),
];

StemmerNl.a_5 = [
  new Among('aa', -1, -1),
  new Among('ee', -1, -1),
  new Among('oo', -1, -1),
  new Among('uu', -1, -1),
];

StemmerNl.g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128];

StemmerNl.g_v_I = [
  1, 0, 0, 17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128,
];

StemmerNl.g_v_j = [17, 67, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128];

export default StemmerNl;
