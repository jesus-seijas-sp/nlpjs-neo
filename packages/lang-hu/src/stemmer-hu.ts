import { Among, SnowballStemmer } from '@nlpjs-neo/core';

class StemmerHu extends SnowballStemmer {
  constructor(container?) {
    super(container);
    this.name = 'stemmer-hu';
    this.I_p1 = 0;
  }

  copy_from(other) {
    this.I_p1 = other.I_p1;
    super.copy_from(other);
  }

  r_mark_regions() {
    this.I_p1 = this.limit;
    // or
    lab0: {
      const v_1 = this.cursor;
      lab1: {
        if (!this.in_grouping(StemmerHu.g_v, 97, 252)) {
          break lab1;
        }
        // goto
        if (!this.goto_out_grouping(StemmerHu.g_v, 97, 252)) {
          break lab1;
        }
        // or
        lab4: {
          const v_3 = this.cursor;
          lab5: {
            if (this.find_among(StemmerHu.a_0, 8) === 0) {
              break lab5;
            }
            break lab4;
          }
          this.cursor = v_3;
          if (this.cursor >= this.limit) {
            break lab1;
          }
          this.cursor++;
        }
        this.I_p1 = this.cursor;
        break lab0;
      }
      this.cursor = v_1;
      if (!this.out_grouping(StemmerHu.g_v, 97, 252)) {
        return false;
      }
      // gopast
      if (!this.gopast_in_grouping(StemmerHu.g_v, 97, 252)) {
        return false;
      }
      this.I_p1 = this.cursor;
    }
    return true;
  }

  r_v_ending() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerHu.a_1, 2);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 0:
        return false;
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
    }
    return true;
  }

  r_double() {
    // test
    const v_1 = this.limit - this.cursor;
    if (this.find_among_b(StemmerHu.a_2, 23) === 0) {
      return false;
    }
    this.cursor = this.limit - v_1;
    return true;
  }

  r_undouble() {
    if (this.cursor <= this.limit_backward) {
      return false;
    }
    this.cursor--;
    this.ket = this.cursor;
    {
      const c = this.cursor - 1;
      if (this.limit_backward > c || c > this.limit) {
        return false;
      }
      this.cursor = c;
    }
    this.bra = this.cursor;
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  r_instrum() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerHu.a_3, 2);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 0:
        return false;
      case 1:
        if (!this.r_double()) {
          return false;
        }
        break;
      case 2:
        if (!this.r_double()) {
          return false;
        }
        break;
    }
    if (!this.slice_del()) {
      return false;
    }
    if (!this.r_undouble()) {
      return false;
    }
    return true;
  }

  r_case() {
    this.ket = this.cursor;
    if (this.find_among_b(StemmerHu.a_4, 44) === 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    if (!this.slice_del()) {
      return false;
    }
    if (!this.r_v_ending()) {
      return false;
    }
    return true;
  }

  r_case_special() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerHu.a_5, 3);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 0:
        return false;
      case 1:
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from('a')) {
          return false;
        }
        break;
    }
    return true;
  }

  r_case_other() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerHu.a_6, 6);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
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
      case 2:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 4:
        if (!this.slice_from('e')) {
          return false;
        }
        break;
    }
    return true;
  }

  r_factive() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerHu.a_7, 2);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 0:
        return false;
      case 1:
        if (!this.r_double()) {
          return false;
        }
        break;
      case 2:
        if (!this.r_double()) {
          return false;
        }
        break;
    }
    if (!this.slice_del()) {
      return false;
    }
    if (!this.r_undouble()) {
      return false;
    }
    return true;
  }

  r_plural() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerHu.a_8, 7);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 0:
        return false;
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
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 4:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 5:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 6:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 7:
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  r_owned() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerHu.a_9, 12);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
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
      case 2:
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 4:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 5:
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 6:
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 7:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 8:
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 9:
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  r_sing_owner() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerHu.a_10, 31);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
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
      case 2:
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 4:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 5:
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 6:
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 7:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 8:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 9:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 10:
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 11:
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 12:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 13:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 14:
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 15:
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 16:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 17:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 18:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 19:
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 20:
        if (!this.slice_from('e')) {
          return false;
        }
        break;
    }
    return true;
  }

  r_plur_owner() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerHu.a_11, 42);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
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
      case 2:
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 4:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 5:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 6:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 7:
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 8:
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 9:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 10:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 11:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 12:
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 13:
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 14:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 15:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 16:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 17:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 18:
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 19:
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 20:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 21:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 22:
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 23:
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 24:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 25:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 26:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 27:
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 28:
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 29:
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
    this.r_mark_regions();
    this.cursor = v_1;
    // backwards
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    // do
    const v_2 = this.limit - this.cursor;
    this.r_instrum();
    this.cursor = this.limit - v_2;
    // do
    const v_3 = this.limit - this.cursor;
    this.r_case();
    this.cursor = this.limit - v_3;
    // do
    const v_4 = this.limit - this.cursor;
    this.r_case_special();
    this.cursor = this.limit - v_4;
    // do
    const v_5 = this.limit - this.cursor;
    this.r_case_other();
    this.cursor = this.limit - v_5;
    // do
    const v_6 = this.limit - this.cursor;
    this.r_factive();
    this.cursor = this.limit - v_6;
    // do
    const v_7 = this.limit - this.cursor;
    this.r_owned();
    this.cursor = this.limit - v_7;
    // do
    const v_8 = this.limit - this.cursor;
    this.r_sing_owner();
    this.cursor = this.limit - v_8;
    // do
    const v_9 = this.limit - this.cursor;
    this.r_plur_owner();
    this.cursor = this.limit - v_9;
    // do
    const v_10 = this.limit - this.cursor;
    this.r_plural();
    this.cursor = this.limit - v_10;
    this.cursor = this.limit_backward;
    return true;
  }

  static a_0: Among<StemmerHu>[] = [
    new Among('cs', -1, -1),
    new Among('dzs', -1, -1),
    new Among('gy', -1, -1),
    new Among('ly', -1, -1),
    new Among('ny', -1, -1),
    new Among('sz', -1, -1),
    new Among('ty', -1, -1),
    new Among('zs', -1, -1),
  ];

  static a_1: Among<StemmerHu>[] = [
    new Among('\u00E1', -1, 1),
    new Among('\u00E9', -1, 2),
  ];

  static a_2: Among<StemmerHu>[] = [
    new Among('bb', -1, -1),
    new Among('cc', -1, -1),
    new Among('dd', -1, -1),
    new Among('ff', -1, -1),
    new Among('gg', -1, -1),
    new Among('jj', -1, -1),
    new Among('kk', -1, -1),
    new Among('ll', -1, -1),
    new Among('mm', -1, -1),
    new Among('nn', -1, -1),
    new Among('pp', -1, -1),
    new Among('rr', -1, -1),
    new Among('ccs', -1, -1),
    new Among('ss', -1, -1),
    new Among('zzs', -1, -1),
    new Among('tt', -1, -1),
    new Among('vv', -1, -1),
    new Among('ggy', -1, -1),
    new Among('lly', -1, -1),
    new Among('nny', -1, -1),
    new Among('tty', -1, -1),
    new Among('ssz', -1, -1),
    new Among('zz', -1, -1),
  ];

  static a_3: Among<StemmerHu>[] = [
    new Among('al', -1, 1),
    new Among('el', -1, 2),
  ];

  static a_4: Among<StemmerHu>[] = [
    new Among('ba', -1, -1),
    new Among('ra', -1, -1),
    new Among('be', -1, -1),
    new Among('re', -1, -1),
    new Among('ig', -1, -1),
    new Among('nak', -1, -1),
    new Among('nek', -1, -1),
    new Among('val', -1, -1),
    new Among('vel', -1, -1),
    new Among('ul', -1, -1),
    new Among('n\u00E1l', -1, -1),
    new Among('n\u00E9l', -1, -1),
    new Among('b\u00F3l', -1, -1),
    new Among('r\u00F3l', -1, -1),
    new Among('t\u00F3l', -1, -1),
    new Among('b\u00F5l', -1, -1),
    new Among('r\u00F5l', -1, -1),
    new Among('t\u00F5l', -1, -1),
    new Among('\u00FCl', -1, -1),
    new Among('n', -1, -1),
    new Among('an', 19, -1),
    new Among('ban', 20, -1),
    new Among('en', 19, -1),
    new Among('ben', 22, -1),
    new Among('k\u00E9ppen', 22, -1),
    new Among('on', 19, -1),
    new Among('\u00F6n', 19, -1),
    new Among('k\u00E9pp', -1, -1),
    new Among('kor', -1, -1),
    new Among('t', -1, -1),
    new Among('at', 29, -1),
    new Among('et', 29, -1),
    new Among('k\u00E9nt', 29, -1),
    new Among('ank\u00E9nt', 32, -1),
    new Among('enk\u00E9nt', 32, -1),
    new Among('onk\u00E9nt', 32, -1),
    new Among('ot', 29, -1),
    new Among('\u00E9rt', 29, -1),
    new Among('\u00F6t', 29, -1),
    new Among('hez', -1, -1),
    new Among('hoz', -1, -1),
    new Among('h\u00F6z', -1, -1),
    new Among('v\u00E1', -1, -1),
    new Among('v\u00E9', -1, -1),
  ];

  static a_5: Among<StemmerHu>[] = [
    new Among('\u00E1n', -1, 2),
    new Among('\u00E9n', -1, 1),
    new Among('\u00E1nk\u00E9nt', -1, 3),
  ];

  static a_6: Among<StemmerHu>[] = [
    new Among('stul', -1, 2),
    new Among('astul', 0, 1),
    new Among('\u00E1stul', 0, 3),
    new Among('st\u00FCl', -1, 2),
    new Among('est\u00FCl', 3, 1),
    new Among('\u00E9st\u00FCl', 3, 4),
  ];

  static a_7: Among<StemmerHu>[] = [
    new Among('\u00E1', -1, 1),
    new Among('\u00E9', -1, 2),
  ];

  static a_8: Among<StemmerHu>[] = [
    new Among('k', -1, 7),
    new Among('ak', 0, 4),
    new Among('ek', 0, 6),
    new Among('ok', 0, 5),
    new Among('\u00E1k', 0, 1),
    new Among('\u00E9k', 0, 2),
    new Among('\u00F6k', 0, 3),
  ];

  static a_9: Among<StemmerHu>[] = [
    new Among('\u00E9i', -1, 7),
    new Among('\u00E1\u00E9i', 0, 6),
    new Among('\u00E9\u00E9i', 0, 5),
    new Among('\u00E9', -1, 9),
    new Among('k\u00E9', 3, 4),
    new Among('ak\u00E9', 4, 1),
    new Among('ek\u00E9', 4, 1),
    new Among('ok\u00E9', 4, 1),
    new Among('\u00E1k\u00E9', 4, 3),
    new Among('\u00E9k\u00E9', 4, 2),
    new Among('\u00F6k\u00E9', 4, 1),
    new Among('\u00E9\u00E9', 3, 8),
  ];

  static a_10: Among<StemmerHu>[] = [
    new Among('a', -1, 18),
    new Among('ja', 0, 17),
    new Among('d', -1, 16),
    new Among('ad', 2, 13),
    new Among('ed', 2, 13),
    new Among('od', 2, 13),
    new Among('\u00E1d', 2, 14),
    new Among('\u00E9d', 2, 15),
    new Among('\u00F6d', 2, 13),
    new Among('e', -1, 18),
    new Among('je', 9, 17),
    new Among('nk', -1, 4),
    new Among('unk', 11, 1),
    new Among('\u00E1nk', 11, 2),
    new Among('\u00E9nk', 11, 3),
    new Among('\u00FCnk', 11, 1),
    new Among('uk', -1, 8),
    new Among('juk', 16, 7),
    new Among('\u00E1juk', 17, 5),
    new Among('\u00FCk', -1, 8),
    new Among('j\u00FCk', 19, 7),
    new Among('\u00E9j\u00FCk', 20, 6),
    new Among('m', -1, 12),
    new Among('am', 22, 9),
    new Among('em', 22, 9),
    new Among('om', 22, 9),
    new Among('\u00E1m', 22, 10),
    new Among('\u00E9m', 22, 11),
    new Among('o', -1, 18),
    new Among('\u00E1', -1, 19),
    new Among('\u00E9', -1, 20),
  ];

  static a_11: Among<StemmerHu>[] = [
    new Among('id', -1, 10),
    new Among('aid', 0, 9),
    new Among('jaid', 1, 6),
    new Among('eid', 0, 9),
    new Among('jeid', 3, 6),
    new Among('\u00E1id', 0, 7),
    new Among('\u00E9id', 0, 8),
    new Among('i', -1, 15),
    new Among('ai', 7, 14),
    new Among('jai', 8, 11),
    new Among('ei', 7, 14),
    new Among('jei', 10, 11),
    new Among('\u00E1i', 7, 12),
    new Among('\u00E9i', 7, 13),
    new Among('itek', -1, 24),
    new Among('eitek', 14, 21),
    new Among('jeitek', 15, 20),
    new Among('\u00E9itek', 14, 23),
    new Among('ik', -1, 29),
    new Among('aik', 18, 26),
    new Among('jaik', 19, 25),
    new Among('eik', 18, 26),
    new Among('jeik', 21, 25),
    new Among('\u00E1ik', 18, 27),
    new Among('\u00E9ik', 18, 28),
    new Among('ink', -1, 20),
    new Among('aink', 25, 17),
    new Among('jaink', 26, 16),
    new Among('eink', 25, 17),
    new Among('jeink', 28, 16),
    new Among('\u00E1ink', 25, 18),
    new Among('\u00E9ink', 25, 19),
    new Among('aitok', -1, 21),
    new Among('jaitok', 32, 20),
    new Among('\u00E1itok', -1, 22),
    new Among('im', -1, 5),
    new Among('aim', 35, 4),
    new Among('jaim', 36, 1),
    new Among('eim', 35, 4),
    new Among('jeim', 38, 1),
    new Among('\u00E1im', 35, 2),
    new Among('\u00E9im', 35, 3),
  ];

  static g_v: number[] = [
    17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 52, 14,
  ];
}

export default StemmerHu;
