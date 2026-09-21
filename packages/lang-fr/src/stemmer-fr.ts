import { Among, SnowballStemmer } from '@nlpjs-neo/core';

class StemmerFr extends SnowballStemmer {
  declare static a_0: Among<StemmerFr>[];
  declare static a_1: Among<StemmerFr>[];
  declare static a_2: Among<StemmerFr>[];
  declare static a_3: Among<StemmerFr>[];
  declare static a_4: Among<StemmerFr>[];
  declare static a_5: Among<StemmerFr>[];
  declare static a_6: Among<StemmerFr>[];
  declare static a_7: Among<StemmerFr>[];
  declare static a_8: Among<StemmerFr>[];
  declare static g_keep_with_s: number[];
  declare static g_v: number[];
  declare static methodObject: StemmerFr;

  constructor(container?) {
    super(container);
    this.name = 'stemmer-fr';
    this.I_p2 = 0;
    this.I_p1 = 0;
    this.I_pV = 0;
  }

  r_prelude() {
    // repeat
    replab0: for (;;) {
      const v_1 = this.cursor;
      lab1: {
        // goto
        golab2: for (;;) {
          const v_2 = this.cursor;
          lab3: {
            // or
            lab4: {
              const v_3 = this.cursor;
              lab5: {
                if (!this.in_grouping(StemmerFr.g_v, 97, 251)) {
                  break lab5;
                }
                this.bra = this.cursor;
                // or
                lab6: {
                  const v_4 = this.cursor;
                  lab7: {
                    if (!this.eq_s(1, 'u')) {
                      break lab7;
                    }
                    this.ket = this.cursor;
                    if (!this.in_grouping(StemmerFr.g_v, 97, 251)) {
                      break lab7;
                    }
                    if (!this.slice_from('U')) {
                      return false;
                    }
                    break lab6;
                  }
                  this.cursor = v_4;
                  lab8: {
                    if (!this.eq_s(1, 'i')) {
                      break lab8;
                    }
                    this.ket = this.cursor;
                    if (!this.in_grouping(StemmerFr.g_v, 97, 251)) {
                      break lab8;
                    }
                    if (!this.slice_from('I')) {
                      return false;
                    }
                    break lab6;
                  }
                  this.cursor = v_4;
                  if (!this.eq_s(1, 'y')) {
                    break lab5;
                  }
                  this.ket = this.cursor;
                  if (!this.slice_from('Y')) {
                    return false;
                  }
                }
                break lab4;
              }
              this.cursor = v_3;
              lab9: {
                this.bra = this.cursor;
                if (!this.eq_s(1, 'y')) {
                  break lab9;
                }
                this.ket = this.cursor;
                if (!this.in_grouping(StemmerFr.g_v, 97, 251)) {
                  break lab9;
                }
                if (!this.slice_from('Y')) {
                  return false;
                }
                break lab4;
              }
              this.cursor = v_3;
              if (!this.eq_s(1, 'q')) {
                break lab3;
              }
              this.bra = this.cursor;
              if (!this.eq_s(1, 'u')) {
                break lab3;
              }
              this.ket = this.cursor;
              if (!this.slice_from('U')) {
                return false;
              }
            }
            this.cursor = v_2;
            break golab2;
          }
          this.cursor = v_2;
          if (this.cursor >= this.limit) {
            break lab1;
          }
          this.cursor++;
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
          if (!this.in_grouping(StemmerFr.g_v, 97, 251)) {
            break lab2;
          }
          if (!this.in_grouping(StemmerFr.g_v, 97, 251)) {
            break lab2;
          }
          if (this.cursor >= this.limit) {
            break lab2;
          }
          this.cursor++;
          break lab1;
        }
        this.cursor = v_2;
        lab3: {
          if (this.find_among(StemmerFr.a_0, 3) === 0) {
            break lab3;
          }
          break lab1;
        }
        this.cursor = v_2;
        if (this.cursor >= this.limit) {
          break lab0;
        }
        this.cursor++;
        // gopast
        if (!this.gopast_in_grouping(StemmerFr.g_v, 97, 251)) {
          break lab0;
        }
      }
      this.I_pV = this.cursor;
    }
    this.cursor = v_1;
    // do
    const v_4 = this.cursor;
    lab6: {
      // gopast
      if (!this.gopast_in_grouping(StemmerFr.g_v, 97, 251)) {
        break lab6;
      }
      // gopast
      if (!this.gopast_out_grouping(StemmerFr.g_v, 97, 251)) {
        break lab6;
      }
      this.I_p1 = this.cursor;
      // gopast
      if (!this.gopast_in_grouping(StemmerFr.g_v, 97, 251)) {
        break lab6;
      }
      // gopast
      if (!this.gopast_out_grouping(StemmerFr.g_v, 97, 251)) {
        break lab6;
      }
      this.I_p2 = this.cursor;
    }
    this.cursor = v_4;
    return true;
  }

  r_postlude() {
    // repeat
    replab0: for (;;) {
      const v_1 = this.cursor;
      lab1: {
        this.bra = this.cursor;
        const among_var = this.find_among(StemmerFr.a_1, 4);
        if (among_var === 0) {
          break lab1;
        }
        this.ket = this.cursor;
        switch (among_var) {
          case 0:
            break lab1;
          case 1:
            if (!this.slice_from('i')) {
              return false;
            }
            break;
          case 2:
            if (!this.slice_from('u')) {
              return false;
            }
            break;
          case 3:
            if (!this.slice_from('y')) {
              return false;
            }
            break;
          case 4:
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

    let v_3;

    let v_5;

    let v_8;

    let v_11;
    this.ket = this.cursor;
    let among_var = this.find_among_b(StemmerFr.a_4, 43);
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
        if (!this.slice_del()) {
          return false;
        }
        // try
        v_1 = this.limit - this.cursor;
        lab0: {
          this.ket = this.cursor;
          if (!this.eq_s_b(2, 'ic')) {
            this.cursor = this.limit - v_1;
            break lab0;
          }
          this.bra = this.cursor;
          // or
          lab1: {
            const v_2 = this.limit - this.cursor;
            lab2: {
              if (!this.r_R2()) {
                break lab2;
              }
              if (!this.slice_del()) {
                return false;
              }
              break lab1;
            }
            this.cursor = this.limit - v_2;
            if (!this.slice_from('iqU')) {
              return false;
            }
          }
        }
        break;
      case 3:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from('log')) {
          return false;
        }
        break;
      case 4:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from('u')) {
          return false;
        }
        break;
      case 5:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from('ent')) {
          return false;
        }
        break;
      case 6:
        if (!this.r_RV()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        // try
        v_3 = this.limit - this.cursor;
        lab3: {
          this.ket = this.cursor;
          among_var = this.find_among_b(StemmerFr.a_2, 6);
          if (among_var === 0) {
            this.cursor = this.limit - v_3;
            break lab3;
          }
          this.bra = this.cursor;
          switch (among_var) {
            case 0:
              this.cursor = this.limit - v_3;
              break lab3;
            case 1:
              if (!this.r_R2()) {
                this.cursor = this.limit - v_3;
                break lab3;
              }
              if (!this.slice_del()) {
                return false;
              }
              this.ket = this.cursor;
              if (!this.eq_s_b(2, 'at')) {
                this.cursor = this.limit - v_3;
                break lab3;
              }
              this.bra = this.cursor;
              if (!this.r_R2()) {
                this.cursor = this.limit - v_3;
                break lab3;
              }
              if (!this.slice_del()) {
                return false;
              }
              break;
            case 2:
              // or
              lab4: {
                const v_4 = this.limit - this.cursor;
                lab5: {
                  if (!this.r_R2()) {
                    break lab5;
                  }
                  if (!this.slice_del()) {
                    return false;
                  }
                  break lab4;
                }
                this.cursor = this.limit - v_4;
                if (!this.r_R1()) {
                  this.cursor = this.limit - v_3;
                  break lab3;
                }
                if (!this.slice_from('eux')) {
                  return false;
                }
              }
              break;
            case 3:
              if (!this.r_R2()) {
                this.cursor = this.limit - v_3;
                break lab3;
              }
              if (!this.slice_del()) {
                return false;
              }
              break;
            case 4:
              if (!this.r_RV()) {
                this.cursor = this.limit - v_3;
                break lab3;
              }
              if (!this.slice_from('i')) {
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
        v_5 = this.limit - this.cursor;
        lab6: {
          this.ket = this.cursor;
          among_var = this.find_among_b(StemmerFr.a_3, 3);
          if (among_var === 0) {
            this.cursor = this.limit - v_5;
            break lab6;
          }
          this.bra = this.cursor;
          switch (among_var) {
            case 0:
              this.cursor = this.limit - v_5;
              break lab6;
            case 1:
              // or
              lab7: {
                const v_6 = this.limit - this.cursor;
                lab8: {
                  if (!this.r_R2()) {
                    break lab8;
                  }
                  if (!this.slice_del()) {
                    return false;
                  }
                  break lab7;
                }
                this.cursor = this.limit - v_6;
                if (!this.slice_from('abl')) {
                  return false;
                }
              }
              break;
            case 2:
              // or
              lab9: {
                const v_7 = this.limit - this.cursor;
                lab10: {
                  if (!this.r_R2()) {
                    break lab10;
                  }
                  if (!this.slice_del()) {
                    return false;
                  }
                  break lab9;
                }
                this.cursor = this.limit - v_7;
                if (!this.slice_from('iqU')) {
                  return false;
                }
              }
              break;
            case 3:
              if (!this.r_R2()) {
                this.cursor = this.limit - v_5;
                break lab6;
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
        v_8 = this.limit - this.cursor;
        lab11: {
          this.ket = this.cursor;
          if (!this.eq_s_b(2, 'at')) {
            this.cursor = this.limit - v_8;
            break lab11;
          }
          this.bra = this.cursor;
          if (!this.r_R2()) {
            this.cursor = this.limit - v_8;
            break lab11;
          }
          if (!this.slice_del()) {
            return false;
          }
          this.ket = this.cursor;
          if (!this.eq_s_b(2, 'ic')) {
            this.cursor = this.limit - v_8;
            break lab11;
          }
          this.bra = this.cursor;
          // or
          lab12: {
            const v_9 = this.limit - this.cursor;
            lab13: {
              if (!this.r_R2()) {
                break lab13;
              }
              if (!this.slice_del()) {
                return false;
              }
              break lab12;
            }
            this.cursor = this.limit - v_9;
            if (!this.slice_from('iqU')) {
              return false;
            }
          }
        }
        break;
      case 9:
        if (!this.slice_from('eau')) {
          return false;
        }
        break;
      case 10:
        if (!this.r_R1()) {
          return false;
        }
        if (!this.slice_from('al')) {
          return false;
        }
        break;
      case 11:
        // or
        lab14: {
          const v_10 = this.limit - this.cursor;
          lab15: {
            if (!this.r_R2()) {
              break lab15;
            }
            if (!this.slice_del()) {
              return false;
            }
            break lab14;
          }
          this.cursor = this.limit - v_10;
          if (!this.r_R1()) {
            return false;
          }
          if (!this.slice_from('eux')) {
            return false;
          }
        }
        break;
      case 12:
        if (!this.r_R1()) {
          return false;
        }
        if (!this.out_grouping_b(StemmerFr.g_v, 97, 251)) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 13:
        if (!this.r_RV()) {
          return false;
        }
        // fail
        if (!this.slice_from('ant')) {
          return false;
        }
        return false;
      case 14:
        if (!this.r_RV()) {
          return false;
        }
        // fail
        if (!this.slice_from('ent')) {
          return false;
        }
        return false;
      case 15:
        // test
        v_11 = this.limit - this.cursor;
        if (!this.in_grouping_b(StemmerFr.g_v, 97, 251)) {
          return false;
        }
        if (!this.r_RV()) {
          return false;
        }
        this.cursor = this.limit - v_11;
        // fail
        if (!this.slice_del()) {
          return false;
        }
        return false;
    }
    return true;
  }

  r_i_verb_suffix() {
    const v_1 = this.limit - this.cursor;
    if (this.cursor < this.I_pV) {
      return false;
    }
    this.cursor = this.I_pV;
    const v_2 = this.limit_backward;
    this.limit_backward = this.cursor;
    this.cursor = this.limit - v_1;
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerFr.a_5, 35);
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
        if (!this.out_grouping_b(StemmerFr.g_v, 97, 251)) {
          this.limit_backward = v_2;
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    this.limit_backward = v_2;
    return true;
  }

  r_verb_suffix() {
    let v_3;
    const v_1 = this.limit - this.cursor;
    if (this.cursor < this.I_pV) {
      return false;
    }
    this.cursor = this.I_pV;
    const v_2 = this.limit_backward;
    this.limit_backward = this.cursor;
    this.cursor = this.limit - v_1;
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerFr.a_6, 38);
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
        if (!this.r_R2()) {
          this.limit_backward = v_2;
          return false;
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
      case 3:
        if (!this.slice_del()) {
          return false;
        }
        // try
        v_3 = this.limit - this.cursor;
        lab0: {
          this.ket = this.cursor;
          if (!this.eq_s_b(1, 'e')) {
            this.cursor = this.limit - v_3;
            break lab0;
          }
          this.bra = this.cursor;
          if (!this.slice_del()) {
            return false;
          }
        }
        break;
    }
    this.limit_backward = v_2;
    return true;
  }

  r_residual_suffix() {
    // try
    const v_1 = this.limit - this.cursor;
    lab0: {
      this.ket = this.cursor;
      if (!this.eq_s_b(1, 's')) {
        this.cursor = this.limit - v_1;
        break lab0;
      }
      this.bra = this.cursor;
      // test
      const v_2 = this.limit - this.cursor;
      if (!this.out_grouping_b(StemmerFr.g_keep_with_s, 97, 232)) {
        this.cursor = this.limit - v_1;
        break lab0;
      }
      this.cursor = this.limit - v_2;
      if (!this.slice_del()) {
        return false;
      }
    }
    const v_3 = this.limit - this.cursor;
    if (this.cursor < this.I_pV) {
      return false;
    }
    this.cursor = this.I_pV;
    const v_4 = this.limit_backward;
    this.limit_backward = this.cursor;
    this.cursor = this.limit - v_3;
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerFr.a_7, 7);
    if (among_var === 0) {
      this.limit_backward = v_4;
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        this.limit_backward = v_4;
        return false;
      case 1:
        if (!this.r_R2()) {
          this.limit_backward = v_4;
          return false;
        }
        // or
        lab1: {
          const v_5 = this.limit - this.cursor;
          lab2: {
            if (!this.eq_s_b(1, 's')) {
              break lab2;
            }
            break lab1;
          }
          this.cursor = this.limit - v_5;
          if (!this.eq_s_b(1, 't')) {
            this.limit_backward = v_4;
            return false;
          }
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from('i')) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 4:
        if (!this.eq_s_b(2, 'gu')) {
          this.limit_backward = v_4;
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    this.limit_backward = v_4;
    return true;
  }

  r_un_double() {
    // test
    const v_1 = this.limit - this.cursor;
    if (this.find_among_b(StemmerFr.a_8, 5) === 0) {
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

  r_un_accent() {
    // atleast
    {
      let v_1 = 1;
      // atleast
      replab0: for (;;) {
        lab1: {
          if (!this.out_grouping_b(StemmerFr.g_v, 97, 251)) {
            break lab1;
          }
          v_1--;
          continue replab0;
        }
        break;
      }
      if (v_1 > 0) {
        return false;
      }
    }
    this.ket = this.cursor;
    // or
    lab2: {
      const v_3 = this.limit - this.cursor;
      lab3: {
        if (!this.eq_s_b(1, '\u00E9')) {
          break lab3;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      if (!this.eq_s_b(1, '\u00E8')) {
        return false;
      }
    }
    this.bra = this.cursor;
    if (!this.slice_from('e')) {
      return false;
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
            lab7: {
              if (!this.r_i_verb_suffix()) {
                break lab7;
              }
              break lab5;
            }
            this.cursor = this.limit - v_6;
            if (!this.r_verb_suffix()) {
              break lab4;
            }
          }
          this.cursor = this.limit - v_5;
          // try
          const v_7 = this.limit - this.cursor;
          lab8: {
            this.ket = this.cursor;
            // or
            lab9: {
              const v_8 = this.limit - this.cursor;
              lab10: {
                if (!this.eq_s_b(1, 'Y')) {
                  break lab10;
                }
                this.bra = this.cursor;
                if (!this.slice_from('i')) {
                  return false;
                }
                break lab9;
              }
              this.cursor = this.limit - v_8;
              if (!this.eq_s_b(1, '\u00E7')) {
                this.cursor = this.limit - v_7;
                break lab8;
              }
              this.bra = this.cursor;
              if (!this.slice_from('c')) {
                return false;
              }
            }
          }
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
    lab11: {
      if (!this.r_un_double()) {
        break lab11;
      }
    }
    this.cursor = this.limit - v_9;
    // do
    const v_10 = this.limit - this.cursor;
    lab12: {
      if (!this.r_un_accent()) {
        break lab12;
      }
    }
    this.cursor = this.limit - v_10;
    this.cursor = this.limit_backward; // do
    const v_11 = this.cursor;
    lab13: {
      if (!this.r_postlude()) {
        break lab13;
      }
    }
    this.cursor = v_11;
    return true;
  }
}

StemmerFr.methodObject = new StemmerFr();

StemmerFr.a_0 = [
  new Among('col', -1, -1),
  new Among('par', -1, -1),
  new Among('tap', -1, -1),
];

StemmerFr.a_1 = [
  new Among('', -1, 4),
  new Among('I', 0, 1),
  new Among('U', 0, 2),
  new Among('Y', 0, 3),
];

StemmerFr.a_2 = [
  new Among('iqU', -1, 3),
  new Among('abl', -1, 3),
  new Among('I\u00E8r', -1, 4),
  new Among('i\u00E8r', -1, 4),
  new Among('eus', -1, 2),
  new Among('iv', -1, 1),
];

StemmerFr.a_3 = [
  new Among('ic', -1, 2),
  new Among('abil', -1, 1),
  new Among('iv', -1, 3),
];

StemmerFr.a_4 = [
  new Among('iqUe', -1, 1),
  new Among('atrice', -1, 2),
  new Among('ance', -1, 1),
  new Among('ence', -1, 5),
  new Among('logie', -1, 3),
  new Among('able', -1, 1),
  new Among('isme', -1, 1),
  new Among('euse', -1, 11),
  new Among('iste', -1, 1),
  new Among('ive', -1, 8),
  new Among('if', -1, 8),
  new Among('usion', -1, 4),
  new Among('ation', -1, 2),
  new Among('ution', -1, 4),
  new Among('ateur', -1, 2),
  new Among('iqUes', -1, 1),
  new Among('atrices', -1, 2),
  new Among('ances', -1, 1),
  new Among('ences', -1, 5),
  new Among('logies', -1, 3),
  new Among('ables', -1, 1),
  new Among('ismes', -1, 1),
  new Among('euses', -1, 11),
  new Among('istes', -1, 1),
  new Among('ives', -1, 8),
  new Among('ifs', -1, 8),
  new Among('usions', -1, 4),
  new Among('ations', -1, 2),
  new Among('utions', -1, 4),
  new Among('ateurs', -1, 2),
  new Among('ments', -1, 15),
  new Among('ements', 30, 6),
  new Among('issements', 31, 12),
  new Among('it\u00E9s', -1, 7),
  new Among('ment', -1, 15),
  new Among('ement', 34, 6),
  new Among('issement', 35, 12),
  new Among('amment', 34, 13),
  new Among('emment', 34, 14),
  new Among('aux', -1, 10),
  new Among('eaux', 39, 9),
  new Among('eux', -1, 1),
  new Among('it\u00E9', -1, 7),
];

StemmerFr.a_5 = [
  new Among('ira', -1, 1),
  new Among('ie', -1, 1),
  new Among('isse', -1, 1),
  new Among('issante', -1, 1),
  new Among('i', -1, 1),
  new Among('irai', 4, 1),
  new Among('ir', -1, 1),
  new Among('iras', -1, 1),
  new Among('ies', -1, 1),
  new Among('\u00EEmes', -1, 1),
  new Among('isses', -1, 1),
  new Among('issantes', -1, 1),
  new Among('\u00EEtes', -1, 1),
  new Among('is', -1, 1),
  new Among('irais', 13, 1),
  new Among('issais', 13, 1),
  new Among('irions', -1, 1),
  new Among('issions', -1, 1),
  new Among('irons', -1, 1),
  new Among('issons', -1, 1),
  new Among('issants', -1, 1),
  new Among('it', -1, 1),
  new Among('irait', 21, 1),
  new Among('issait', 21, 1),
  new Among('issant', -1, 1),
  new Among('iraIent', -1, 1),
  new Among('issaIent', -1, 1),
  new Among('irent', -1, 1),
  new Among('issent', -1, 1),
  new Among('iront', -1, 1),
  new Among('\u00EEt', -1, 1),
  new Among('iriez', -1, 1),
  new Among('issiez', -1, 1),
  new Among('irez', -1, 1),
  new Among('issez', -1, 1),
];

StemmerFr.a_6 = [
  new Among('a', -1, 3),
  new Among('era', 0, 2),
  new Among('asse', -1, 3),
  new Among('ante', -1, 3),
  new Among('\u00E9e', -1, 2),
  new Among('ai', -1, 3),
  new Among('erai', 5, 2),
  new Among('er', -1, 2),
  new Among('as', -1, 3),
  new Among('eras', 8, 2),
  new Among('\u00E2mes', -1, 3),
  new Among('asses', -1, 3),
  new Among('antes', -1, 3),
  new Among('\u00E2tes', -1, 3),
  new Among('\u00E9es', -1, 2),
  new Among('ais', -1, 3),
  new Among('erais', 15, 2),
  new Among('ions', -1, 1),
  new Among('erions', 17, 2),
  new Among('assions', 17, 3),
  new Among('erons', -1, 2),
  new Among('ants', -1, 3),
  new Among('\u00E9s', -1, 2),
  new Among('ait', -1, 3),
  new Among('erait', 23, 2),
  new Among('ant', -1, 3),
  new Among('aIent', -1, 3),
  new Among('eraIent', 26, 2),
  new Among('\u00E8rent', -1, 2),
  new Among('assent', -1, 3),
  new Among('eront', -1, 2),
  new Among('\u00E2t', -1, 3),
  new Among('ez', -1, 2),
  new Among('iez', 32, 2),
  new Among('eriez', 33, 2),
  new Among('assiez', 33, 3),
  new Among('erez', 32, 2),
  new Among('\u00E9', -1, 2),
];

StemmerFr.a_7 = [
  new Among('e', -1, 3),
  new Among('I\u00E8re', 0, 2),
  new Among('i\u00E8re', 0, 2),
  new Among('ion', -1, 1),
  new Among('Ier', -1, 2),
  new Among('ier', -1, 2),
  new Among('\u00EB', -1, 4),
];

StemmerFr.a_8 = [
  new Among('ell', -1, -1),
  new Among('eill', -1, -1),
  new Among('enn', -1, -1),
  new Among('onn', -1, -1),
  new Among('ett', -1, -1),
];

StemmerFr.g_v = [
  17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 130, 103, 8, 5,
];

StemmerFr.g_keep_with_s = [
  1, 65, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128,
];

export default StemmerFr;
