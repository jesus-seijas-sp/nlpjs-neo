import { Among, SnowballStemmer } from '@nlpjs-neo/core';
import type { ContainerHolder } from '@nlpjs-neo/core';

/**
 * Stemmer written by tools/snowball from english.sbl. Do not edit it by hand:
 * change the Snowball program and generate it again.
 */
class SnowballStemmerEn extends SnowballStemmer {
  declare B_Y_found: boolean;

  constructor(container?: ContainerHolder) {
    super(container);
    this.name = 'stemmer-en';
    this.I_p1 = 0;
    this.I_p2 = 0;
    this.B_Y_found = false;
  }

  r_prelude(): boolean {
    this.B_Y_found = false;
    const v_1 = this.cursor;
    lab0: {
      this.bra = this.cursor;
      if (!this.eq_s("'")) {
        break lab0;
      }
      this.ket = this.cursor;
      this.slice_del();
    }
    this.cursor = v_1;
    const v_2 = this.cursor;
    lab1: {
      this.bra = this.cursor;
      if (!this.eq_s('y')) {
        break lab1;
      }
      this.ket = this.cursor;
      this.slice_from('Y');
      this.B_Y_found = true;
    }
    this.cursor = v_2;
    const v_3 = this.cursor;
    for (;;) {
      const v_4 = this.cursor;
      lab3: {
        lab4: for (;;) {
          const v_5 = this.cursor;
          lab5: {
            if (!this.in_grouping(SnowballStemmerEn.g_v, 97, 121)) {
              break lab5;
            }
            this.bra = this.cursor;
            if (!this.eq_s('y')) {
              break lab5;
            }
            this.ket = this.cursor;
            this.cursor = v_5;
            break lab4;
          }
          this.cursor = v_5;
          if (this.cursor >= this.limit) {
            break lab3;
          }
          this.cursor++;
        }
        this.slice_from('Y');
        this.B_Y_found = true;
        continue;
      }
      this.cursor = v_4;
      break;
    }
    this.cursor = v_3;
    return true;
  }

  r_mark_regions(): boolean {
    this.I_p1 = this.limit;
    this.I_p2 = this.limit;
    const v_1 = this.cursor;
    lab0: {
      if (this.find_among(SnowballStemmerEn.a_0) === 0) {
        if (!this.gopast_in_grouping(SnowballStemmerEn.g_v, 97, 121)) {
          break lab0;
        }
        if (!this.gopast_out_grouping(SnowballStemmerEn.g_v, 97, 121)) {
          break lab0;
        }
      }
      this.I_p1 = this.cursor;
      if (!this.gopast_in_grouping(SnowballStemmerEn.g_v, 97, 121)) {
        break lab0;
      }
      if (!this.gopast_out_grouping(SnowballStemmerEn.g_v, 97, 121)) {
        break lab0;
      }
      this.I_p2 = this.cursor;
    }
    this.cursor = v_1;
    return true;
  }

  r_shortv(): boolean {
    lab0: {
      const v_1 = this.limit - this.cursor;
      lab1: {
        if (!this.out_grouping_b(SnowballStemmerEn.g_v_WXY, 89, 121)) {
          break lab1;
        }
        if (!this.in_grouping_b(SnowballStemmerEn.g_v, 97, 121)) {
          break lab1;
        }
        if (!this.out_grouping_b(SnowballStemmerEn.g_v, 97, 121)) {
          break lab1;
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      if (!this.out_grouping_b(SnowballStemmerEn.g_v, 97, 121)) {
        return false;
      }
      if (!this.in_grouping_b(SnowballStemmerEn.g_v, 97, 121)) {
        return false;
      }
      return this.cursor <= this.limit_backward;
    }
    return true;
  }

  r_Step_1a(): boolean {
    let among_var: number;
    const v_1 = this.limit - this.cursor;
    lab0: {
      among_var = this.find_slice_b(SnowballStemmerEn.a_1);
      if (among_var === 0) {
        this.cursor = this.limit - v_1;
        break lab0;
      }
      switch (among_var) {
        case 1:
          this.slice_del();
          break;
      }
    }
    among_var = this.find_slice_b(SnowballStemmerEn.a_2);
    if (among_var === 0) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_from('ss');
        break;
      case 2:
        lab1: {
          const v_2 = this.limit - this.cursor;
          lab2: {
            if (this.cursor - 2 < this.limit_backward) {
              break lab2;
            }
            this.cursor -= 2;
            this.slice_from('i');
            break lab1;
          }
          this.cursor = this.limit - v_2;
          this.slice_from('ie');
        }
        break;
      case 3:
        if (this.cursor <= this.limit_backward) {
          return false;
        }
        this.cursor--;
        if (!this.gopast_in_grouping_b(SnowballStemmerEn.g_v, 97, 121)) {
          return false;
        }
        this.slice_del();
        break;
    }
    return true;
  }

  r_Step_1b(): boolean {
    let among_var: number;
    among_var = this.find_slice_b(SnowballStemmerEn.a_3);
    if (among_var === 0) {
      return false;
    }
    switch (among_var) {
      case 1:
        if (!this.r_R1()) {
          return false;
        }
        this.slice_from('ee');
        break;
      case 2: {
        const v_1 = this.limit - this.cursor;
        if (!this.gopast_in_grouping_b(SnowballStemmerEn.g_v, 97, 121)) {
          return false;
        }
        this.cursor = this.limit - v_1;
        this.slice_del();
        const v_2 = this.limit - this.cursor;
        among_var = this.find_among_b(SnowballStemmerEn.a_4);
        this.cursor = this.limit - v_2;
        switch (among_var) {
          case 1: {
            const v_3 = this.cursor;
            this.insert(v_3, v_3, 'e');
            this.cursor = v_3;
            break;
          }
          case 2:
            this.ket = this.cursor;
            if (this.cursor <= this.limit_backward) {
              return false;
            }
            this.cursor--;
            this.bra = this.cursor;
            this.slice_del();
            break;
          case 3: {
            if (this.cursor !== this.I_p1) {
              return false;
            }
            const v_4 = this.limit - this.cursor;
            if (!this.r_shortv()) {
              return false;
            }
            this.cursor = this.limit - v_4;
            const v_5 = this.cursor;
            this.insert(v_5, v_5, 'e');
            this.cursor = v_5;
            break;
          }
        }
        break;
      }
    }
    return true;
  }

  r_Step_1c(): boolean {
    this.ket = this.cursor;
    if (!this.eq_s_b('y') && !this.eq_s_b('Y')) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.out_grouping_b(SnowballStemmerEn.g_v, 97, 121)) {
      return false;
    }
    if (this.cursor <= this.limit_backward) {
      return false;
    }
    this.slice_from('i');
    return true;
  }

  r_Step_2(): boolean {
    const among_var = this.find_slice_b(SnowballStemmerEn.a_5);
    if (among_var === 0) {
      return false;
    }
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_from('tion');
        break;
      case 2:
        this.slice_from('ence');
        break;
      case 3:
        this.slice_from('ance');
        break;
      case 4:
        this.slice_from('able');
        break;
      case 5:
        this.slice_from('ent');
        break;
      case 6:
        this.slice_from('ize');
        break;
      case 7:
        this.slice_from('ate');
        break;
      case 8:
        this.slice_from('al');
        break;
      case 9:
        this.slice_from('ful');
        break;
      case 10:
        this.slice_from('ous');
        break;
      case 11:
        this.slice_from('ive');
        break;
      case 12:
        this.slice_from('ble');
        break;
      case 13:
        if (!this.eq_s_b('l')) {
          return false;
        }
        this.slice_from('og');
        break;
      case 14:
        this.slice_from('less');
        break;
      case 15:
        if (!this.in_grouping_b(SnowballStemmerEn.g_valid_LI, 99, 116)) {
          return false;
        }
        this.slice_del();
        break;
    }
    return true;
  }

  r_Step_3(): boolean {
    const among_var = this.find_slice_b(SnowballStemmerEn.a_6);
    if (among_var === 0) {
      return false;
    }
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_from('tion');
        break;
      case 2:
        this.slice_from('ate');
        break;
      case 3:
        this.slice_from('al');
        break;
      case 4:
        this.slice_from('ic');
        break;
      case 5:
        this.slice_del();
        break;
      case 6:
        if (!this.r_R2()) {
          return false;
        }
        this.slice_del();
        break;
    }
    return true;
  }

  r_Step_4(): boolean {
    const among_var = this.find_slice_b(SnowballStemmerEn.a_7);
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
      case 2:
        if (!this.eq_s_b('s') && !this.eq_s_b('t')) {
          return false;
        }
        this.slice_del();
        break;
    }
    return true;
  }

  r_Step_5(): boolean {
    const among_var = this.find_slice_b(SnowballStemmerEn.a_8);
    if (among_var === 0) {
      return false;
    }
    switch (among_var) {
      case 1:
        if (!this.r_R2()) {
          if (!this.r_R1()) {
            return false;
          }
          {
            const v_1 = this.limit - this.cursor;
            lab0: {
              if (!this.r_shortv()) {
                break lab0;
              }
              return false;
            }
            this.cursor = this.limit - v_1;
          }
        }
        this.slice_del();
        break;
      case 2:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.eq_s_b('l')) {
          return false;
        }
        this.slice_del();
        break;
    }
    return true;
  }

  r_exception2(): boolean {
    if (this.find_slice_b(SnowballStemmerEn.a_9) === 0) {
      return false;
    }
    if (this.cursor > this.limit_backward) {
      return false;
    }
    return true;
  }

  r_exception1(): boolean {
    const among_var = this.find_slice(SnowballStemmerEn.a_10);
    if (among_var === 0) {
      return false;
    }
    if (this.cursor < this.limit) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_from('ski');
        break;
      case 2:
        this.slice_from('sky');
        break;
      case 3:
        this.slice_from('die');
        break;
      case 4:
        this.slice_from('lie');
        break;
      case 5:
        this.slice_from('tie');
        break;
      case 6:
        this.slice_from('idl');
        break;
      case 7:
        this.slice_from('gentl');
        break;
      case 8:
        this.slice_from('ugli');
        break;
      case 9:
        this.slice_from('earli');
        break;
      case 10:
        this.slice_from('onli');
        break;
      case 11:
        this.slice_from('singl');
        break;
    }
    return true;
  }

  r_postlude(): boolean {
    if (!this.B_Y_found) {
      return false;
    }
    for (;;) {
      const v_1 = this.cursor;
      lab0: {
        lab1: for (;;) {
          const v_2 = this.cursor;
          lab2: {
            this.bra = this.cursor;
            if (!this.eq_s('Y')) {
              break lab2;
            }
            this.ket = this.cursor;
            this.cursor = v_2;
            break lab1;
          }
          this.cursor = v_2;
          if (this.cursor >= this.limit) {
            break lab0;
          }
          this.cursor++;
        }
        this.slice_from('y');
        continue;
      }
      this.cursor = v_1;
      break;
    }
    return true;
  }

  innerStem(): boolean {
    lab0: {
      const v_1 = this.cursor;
      lab1: {
        if (!this.r_exception1()) {
          break lab1;
        }
        break lab0;
      }
      this.cursor = v_1;
      lab2: {
        lab3: {
          if (this.cursor + 3 > this.limit) {
            break lab3;
          }
          this.cursor += 3;
          break lab2;
        }
        break lab0;
      }
      this.cursor = v_1;
      this.r_prelude();
      this.r_mark_regions();
      this.limit_backward = this.cursor;
      this.cursor = this.limit;
      this.do_backward(this.r_Step_1a);
      lab4: {
        const v_3 = this.limit - this.cursor;
        lab5: {
          if (!this.r_exception2()) {
            break lab5;
          }
          break lab4;
        }
        this.cursor = this.limit - v_3;
        this.do_backward(this.r_Step_1b);
        this.do_backward(this.r_Step_1c);
        this.do_backward(this.r_Step_2);
        this.do_backward(this.r_Step_3);
        this.do_backward(this.r_Step_4);
        this.do_backward(this.r_Step_5);
      }
      this.cursor = this.limit_backward;
      this.do_forward(this.r_postlude);
    }
    return true;
  }

  static g_v: number[] = [17, 65, 16, 1];

  static g_v_WXY: number[] = [1, 17, 65, 208, 1];

  static g_valid_LI: number[] = [55, 141, 2];

  static a_0: Among<SnowballStemmerEn>[] = [
    new Among('arsen', -1, -1),
    new Among('commun', -1, -1),
    new Among('gener', -1, -1),
  ];

  static a_1: Among<SnowballStemmerEn>[] = [
    new Among("'", -1, 1),
    new Among("'s'", 0, 1),
    new Among("'s", -1, 1),
  ];

  static a_2: Among<SnowballStemmerEn>[] = [
    new Among('ied', -1, 2),
    new Among('s', -1, 3),
    new Among('ies', 1, 2),
    new Among('sses', 1, 1),
    new Among('ss', 1, -1),
    new Among('us', 1, -1),
  ];

  static a_3: Among<SnowballStemmerEn>[] = [
    new Among('ed', -1, 2),
    new Among('eed', 0, 1),
    new Among('ing', -1, 2),
    new Among('edly', -1, 2),
    new Among('eedly', 3, 1),
    new Among('ingly', -1, 2),
  ];

  static a_4: Among<SnowballStemmerEn>[] = [
    new Among('', -1, 3),
    new Among('bb', 0, 2),
    new Among('dd', 0, 2),
    new Among('ff', 0, 2),
    new Among('gg', 0, 2),
    new Among('bl', 0, 1),
    new Among('mm', 0, 2),
    new Among('nn', 0, 2),
    new Among('pp', 0, 2),
    new Among('rr', 0, 2),
    new Among('at', 0, 1),
    new Among('tt', 0, 2),
    new Among('iz', 0, 1),
  ];

  static a_5: Among<SnowballStemmerEn>[] = [
    new Among('anci', -1, 3),
    new Among('enci', -1, 2),
    new Among('ogi', -1, 13),
    new Among('li', -1, 15),
    new Among('bli', 3, 12),
    new Among('abli', 4, 4),
    new Among('alli', 3, 8),
    new Among('fulli', 3, 9),
    new Among('lessli', 3, 14),
    new Among('ousli', 3, 10),
    new Among('entli', 3, 5),
    new Among('aliti', -1, 8),
    new Among('biliti', -1, 12),
    new Among('iviti', -1, 11),
    new Among('tional', -1, 1),
    new Among('ational', 14, 7),
    new Among('alism', -1, 8),
    new Among('ation', -1, 7),
    new Among('ization', 17, 6),
    new Among('izer', -1, 6),
    new Among('ator', -1, 7),
    new Among('iveness', -1, 11),
    new Among('fulness', -1, 9),
    new Among('ousness', -1, 10),
  ];

  static a_6: Among<SnowballStemmerEn>[] = [
    new Among('icate', -1, 4),
    new Among('ative', -1, 6),
    new Among('alize', -1, 3),
    new Among('iciti', -1, 4),
    new Among('ical', -1, 4),
    new Among('tional', -1, 1),
    new Among('ational', 5, 2),
    new Among('ful', -1, 5),
    new Among('ness', -1, 5),
  ];

  static a_7: Among<SnowballStemmerEn>[] = [
    new Among('ic', -1, 1),
    new Among('ance', -1, 1),
    new Among('ence', -1, 1),
    new Among('able', -1, 1),
    new Among('ible', -1, 1),
    new Among('ate', -1, 1),
    new Among('ive', -1, 1),
    new Among('ize', -1, 1),
    new Among('iti', -1, 1),
    new Among('al', -1, 1),
    new Among('ism', -1, 1),
    new Among('ion', -1, 2),
    new Among('er', -1, 1),
    new Among('ous', -1, 1),
    new Among('ant', -1, 1),
    new Among('ent', -1, 1),
    new Among('ment', 15, 1),
    new Among('ement', 16, 1),
  ];

  static a_8: Among<SnowballStemmerEn>[] = [
    new Among('e', -1, 1),
    new Among('l', -1, 2),
  ];

  static a_9: Among<SnowballStemmerEn>[] = [
    new Among('succeed', -1, -1),
    new Among('proceed', -1, -1),
    new Among('exceed', -1, -1),
    new Among('canning', -1, -1),
    new Among('inning', -1, -1),
    new Among('earring', -1, -1),
    new Among('herring', -1, -1),
    new Among('outing', -1, -1),
  ];

  static a_10: Among<SnowballStemmerEn>[] = [
    new Among('andes', -1, -1),
    new Among('atlas', -1, -1),
    new Among('bias', -1, -1),
    new Among('cosmos', -1, -1),
    new Among('dying', -1, 3),
    new Among('early', -1, 9),
    new Among('gently', -1, 7),
    new Among('howe', -1, -1),
    new Among('idly', -1, 6),
    new Among('lying', -1, 4),
    new Among('news', -1, -1),
    new Among('only', -1, 10),
    new Among('singly', -1, 11),
    new Among('skies', -1, 2),
    new Among('skis', -1, 1),
    new Among('sky', -1, -1),
    new Among('tying', -1, 5),
    new Among('ugly', -1, 8),
  ];
}

export default SnowballStemmerEn;
