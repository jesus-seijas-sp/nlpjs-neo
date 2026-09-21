import { Among, SnowballStemmer } from '@nlpjs-neo/core';
import type { ContainerHolder } from '@nlpjs-neo/core';

class StemmerDe extends SnowballStemmer {
  declare I_x: number;

  constructor(container?: ContainerHolder) {
    super(container);
    this.name = 'stemmer-de';
    this.I_x = 0;
    this.I_p2 = 0;
    this.I_p1 = 0;
  }

  copy_from(other: StemmerDe) {
    this.I_x = other.I_x;
    this.I_p2 = other.I_p2;
    this.I_p1 = other.I_p1;
    super.copy_from(other);
  }

  r_prelude(): boolean {
    // test
    const v_1 = this.cursor;
    // repeat
    replab0: for (;;) {
      const v_2 = this.cursor;
      lab1: {
        // or
        lab2: {
          const v_3 = this.cursor;
          lab3: {
            this.bra = this.cursor;
            if (!this.eq_s(1, '\u00DF')) {
              break lab3;
            }
            this.ket = this.cursor;
            if (!this.slice_from('ss')) {
              return false;
            }
            break lab2;
          }
          this.cursor = v_3;
          if (this.cursor >= this.limit) {
            break lab1;
          }
          this.cursor++;
        }
        continue replab0;
      }
      this.cursor = v_2;
      break;
    }
    this.cursor = v_1;
    // repeat
    replab4: for (;;) {
      const v_4 = this.cursor;
      lab5: {
        // goto
        golab6: for (;;) {
          const v_5 = this.cursor;
          lab7: {
            if (!this.in_grouping(StemmerDe.g_v, 97, 252)) {
              break lab7;
            }
            this.bra = this.cursor;
            // or
            lab8: {
              const v_6 = this.cursor;
              lab9: {
                if (!this.eq_s(1, 'u')) {
                  break lab9;
                }
                this.ket = this.cursor;
                if (!this.in_grouping(StemmerDe.g_v, 97, 252)) {
                  break lab9;
                }
                if (!this.slice_from('U')) {
                  return false;
                }
                break lab8;
              }
              this.cursor = v_6;
              if (!this.eq_s(1, 'y')) {
                break lab7;
              }
              this.ket = this.cursor;
              if (!this.in_grouping(StemmerDe.g_v, 97, 252)) {
                break lab7;
              }
              if (!this.slice_from('Y')) {
                return false;
              }
            }
            this.cursor = v_5;
            break golab6;
          }
          this.cursor = v_5;
          if (this.cursor >= this.limit) {
            break lab5;
          }
          this.cursor++;
        }
        continue replab4;
      }
      this.cursor = v_4;
      break;
    }
    return true;
  }

  r_mark_regions(): boolean {
    this.I_p1 = this.limit;
    this.I_p2 = this.limit;
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
    // gopast
    if (!this.gopast_in_grouping(StemmerDe.g_v, 97, 252)) {
      return false;
    }
    // gopast
    if (!this.gopast_out_grouping(StemmerDe.g_v, 97, 252)) {
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
    // gopast
    if (!this.gopast_in_grouping(StemmerDe.g_v, 97, 252)) {
      return false;
    }
    // gopast
    if (!this.gopast_out_grouping(StemmerDe.g_v, 97, 252)) {
      return false;
    }
    this.I_p2 = this.cursor;
    return true;
  }

  r_postlude(): boolean {
    // repeat
    replab0: for (;;) {
      const v_1 = this.cursor;
      lab1: {
        this.bra = this.cursor;
        const among_var = this.find_among(StemmerDe.a_0, 6);
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
            if (!this.slice_from('u')) {
              return false;
            }
            break;
          case 3:
            if (!this.slice_from('a')) {
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
      this.cursor = v_1;
      break;
    }
    return true;
  }

  r_standard_suffix(): boolean {
    let among_var: number;

    let v_2;

    let v_5;

    let v_8;

    // do
    const v_1 = this.limit - this.cursor;
    lab0: {
      this.ket = this.cursor;
      among_var = this.find_among_b(StemmerDe.a_1, 7);
      if (among_var === 0) {
        break lab0;
      }
      this.bra = this.cursor;
      if (!this.r_R1()) {
        break lab0;
      }
      switch (among_var) {
        case 0:
          break lab0;
        case 1:
          if (!this.slice_del()) {
            return false;
          }
          break;
        case 2:
          if (!this.slice_del()) {
            return false;
          }
          // try
          v_2 = this.limit - this.cursor;
          lab1: {
            this.ket = this.cursor;
            if (!this.eq_s_b(1, 's')) {
              this.cursor = this.limit - v_2;
              break lab1;
            }
            this.bra = this.cursor;
            if (!this.eq_s_b(3, 'nis')) {
              this.cursor = this.limit - v_2;
              break lab1;
            }
            if (!this.slice_del()) {
              return false;
            }
          }
          break;
        case 3:
          if (!this.in_grouping_b(StemmerDe.g_s_ending, 98, 116)) {
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
    const v_3 = this.limit - this.cursor;
    lab2: {
      this.ket = this.cursor;
      among_var = this.find_among_b(StemmerDe.a_2, 4);
      if (among_var === 0) {
        break lab2;
      }
      this.bra = this.cursor;
      if (!this.r_R1()) {
        break lab2;
      }
      switch (among_var) {
        case 0:
          break lab2;
        case 1:
          if (!this.slice_del()) {
            return false;
          }
          break;
        case 2:
          if (!this.in_grouping_b(StemmerDe.g_st_ending, 98, 116)) {
            break lab2;
          }
          {
            const c = this.cursor - 3;
            if (this.limit_backward > c || c > this.limit) {
              break lab2;
            }
            this.cursor = c;
          }
          if (!this.slice_del()) {
            return false;
          }
          break;
      }
    }
    this.cursor = this.limit - v_3;
    // do
    const v_4 = this.limit - this.cursor;
    lab3: {
      this.ket = this.cursor;
      among_var = this.find_among_b(StemmerDe.a_4, 8);
      if (among_var === 0) {
        break lab3;
      }
      this.bra = this.cursor;
      if (!this.r_R2()) {
        break lab3;
      }
      switch (among_var) {
        case 0:
          break lab3;
        case 1:
          if (!this.slice_del()) {
            return false;
          }
          // try
          v_5 = this.limit - this.cursor;
          lab4: {
            this.ket = this.cursor;
            if (!this.eq_s_b(2, 'ig')) {
              this.cursor = this.limit - v_5;
              break lab4;
            }
            this.bra = this.cursor;
            // not
            {
              const v_6 = this.limit - this.cursor;
              lab5: {
                if (!this.eq_s_b(1, 'e')) {
                  break lab5;
                }
                this.cursor = this.limit - v_5;
                break lab4;
              }
              this.cursor = this.limit - v_6;
            }
            if (!this.r_R2()) {
              this.cursor = this.limit - v_5;
              break lab4;
            }
            if (!this.slice_del()) {
              return false;
            }
          }
          break;
        case 2:
          // not
          {
            const v_7 = this.limit - this.cursor;
            lab6: {
              if (!this.eq_s_b(1, 'e')) {
                break lab6;
              }
              break lab3;
            }
            this.cursor = this.limit - v_7;
          }
          if (!this.slice_del()) {
            return false;
          }
          break;
        case 3:
          if (!this.slice_del()) {
            return false;
          }
          // try
          v_8 = this.limit - this.cursor;
          lab7: {
            this.ket = this.cursor;
            // or
            lab8: {
              const v_9 = this.limit - this.cursor;
              lab9: {
                if (!this.eq_s_b(2, 'er')) {
                  break lab9;
                }
                break lab8;
              }
              this.cursor = this.limit - v_9;
              if (!this.eq_s_b(2, 'en')) {
                this.cursor = this.limit - v_8;
                break lab7;
              }
            }
            this.bra = this.cursor;
            if (!this.r_R1()) {
              this.cursor = this.limit - v_8;
              break lab7;
            }
            if (!this.slice_del()) {
              return false;
            }
          }
          break;
        case 4:
          if (!this.slice_del()) {
            return false;
          }
          // try
          const v_10 = this.limit - this.cursor;
          lab10: {
            this.ket = this.cursor;
            among_var = this.find_among_b(StemmerDe.a_3, 2);
            if (among_var === 0) {
              this.cursor = this.limit - v_10;
              break lab10;
            }
            this.bra = this.cursor;
            if (!this.r_R2()) {
              this.cursor = this.limit - v_10;
              break lab10;
            }
            switch (among_var) {
              case 0:
                this.cursor = this.limit - v_10;
                break lab10;
              case 1:
                if (!this.slice_del()) {
                  return false;
                }
                break;
            }
          }
          break;
      }
    }
    this.cursor = this.limit - v_4;
    return true;
  }

  innerStem(): boolean {
    // do
    const v_1 = this.cursor;
    this.r_prelude();
    this.cursor = v_1;
    // do
    const v_2 = this.cursor;
    this.r_mark_regions();
    this.cursor = v_2;
    // backwards
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    // do
    const v_3 = this.limit - this.cursor;
    this.r_standard_suffix();
    this.cursor = this.limit - v_3;
    this.cursor = this.limit_backward; // do
    const v_4 = this.cursor;
    this.r_postlude();
    this.cursor = v_4;
    return true;
  }

  static a_0: Among<StemmerDe>[] = [
    new Among('', -1, 6),
    new Among('U', 0, 2),
    new Among('Y', 0, 1),
    new Among('\u00E4', 0, 3),
    new Among('\u00F6', 0, 4),
    new Among('\u00FC', 0, 5),
  ];

  static a_1: Among<StemmerDe>[] = [
    new Among('e', -1, 2),
    new Among('em', -1, 1),
    new Among('en', -1, 2),
    new Among('ern', -1, 1),
    new Among('er', -1, 1),
    new Among('s', -1, 3),
    new Among('es', 5, 2),
  ];

  static a_2: Among<StemmerDe>[] = [
    new Among('en', -1, 1),
    new Among('er', -1, 1),
    new Among('st', -1, 2),
    new Among('est', 2, 1),
  ];

  static a_3: Among<StemmerDe>[] = [
    new Among('ig', -1, 1),
    new Among('lich', -1, 1),
  ];

  static a_4: Among<StemmerDe>[] = [
    new Among('end', -1, 1),
    new Among('ig', -1, 2),
    new Among('ung', -1, 1),
    new Among('lich', -1, 3),
    new Among('isch', -1, 2),
    new Among('ik', -1, 2),
    new Among('heit', -1, 3),
    new Among('keit', -1, 4),
  ];

  static g_v: number[] = [
    17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32, 8,
  ];

  static g_s_ending: number[] = [117, 30, 5];

  static g_st_ending: number[] = [117, 30, 4];
}

export default StemmerDe;
