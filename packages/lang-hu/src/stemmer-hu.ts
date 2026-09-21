import { Among, SnowballStemmer } from '@nlpjs-neo/core';
import type { ContainerHolder } from '@nlpjs-neo/core';

/**
 * Stemmer written by tools/snowball from hungarian.sbl. Do not edit it by hand:
 * change the Snowball program and generate it again.
 */
class StemmerHu extends SnowballStemmer {
  constructor(container?: ContainerHolder) {
    super(container);
    this.name = 'stemmer-hu';
    this.I_p1 = 0;
  }

  r_mark_regions(): boolean {
    this.I_p1 = this.limit;
    lab0: {
      const v_1 = this.cursor;
      lab1: {
        if (!this.in_grouping(StemmerHu.g_v, 97, 369)) {
          break lab1;
        }
        if (!this.goto_out_grouping(StemmerHu.g_v, 97, 369)) {
          break lab1;
        }
        if (this.find_among(StemmerHu.a_0) === 0) {
          if (this.cursor >= this.limit) {
            break lab1;
          }
          this.cursor++;
        }
        this.I_p1 = this.cursor;
        break lab0;
      }
      this.cursor = v_1;
      if (!this.out_grouping(StemmerHu.g_v, 97, 369)) {
        return false;
      }
      if (!this.gopast_in_grouping(StemmerHu.g_v, 97, 369)) {
        return false;
      }
      this.I_p1 = this.cursor;
    }
    return true;
  }

  r_v_ending(): boolean {
    const among_var = this.find_slice_b(StemmerHu.a_1);
    if (among_var === 0) {
      return false;
    }
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_from('a');
        break;
      case 2:
        this.slice_from('e');
        break;
    }
    return true;
  }

  r_double(): boolean {
    const v_1 = this.limit - this.cursor;
    if (this.find_among_b(StemmerHu.a_2) === 0) {
      return false;
    }
    this.cursor = this.limit - v_1;
    return true;
  }

  r_undouble(): boolean {
    if (this.cursor <= this.limit_backward) {
      return false;
    }
    this.cursor--;
    this.ket = this.cursor;
    if (this.cursor - 1 < this.limit_backward) {
      return false;
    }
    this.cursor -= 1;
    this.bra = this.cursor;
    this.slice_del();
    return true;
  }

  r_instrum(): boolean {
    const among_var = this.find_slice_b(StemmerHu.a_3);
    if (among_var === 0) {
      return false;
    }
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 1:
        if (!this.r_double()) {
          return false;
        }
        break;
    }
    this.slice_del();
    return this.r_undouble();
  }

  r_case(): boolean {
    if (this.find_slice_b(StemmerHu.a_4) === 0) {
      return false;
    }
    if (!this.r_R1()) {
      return false;
    }
    this.slice_del();
    return this.r_v_ending();
  }

  r_case_special(): boolean {
    const among_var = this.find_slice_b(StemmerHu.a_5);
    if (among_var === 0) {
      return false;
    }
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_from('e');
        break;
      case 2:
        this.slice_from('a');
        break;
    }
    return true;
  }

  r_case_other(): boolean {
    const among_var = this.find_slice_b(StemmerHu.a_6);
    if (among_var === 0) {
      return false;
    }
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_del();
        break;
      case 2:
        this.slice_from('a');
        break;
      case 3:
        this.slice_from('e');
        break;
    }
    return true;
  }

  r_factive(): boolean {
    const among_var = this.find_slice_b(StemmerHu.a_7);
    if (among_var === 0) {
      return false;
    }
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 1:
        if (!this.r_double()) {
          return false;
        }
        break;
    }
    this.slice_del();
    return this.r_undouble();
  }

  r_plural(): boolean {
    const among_var = this.find_slice_b(StemmerHu.a_8);
    if (among_var === 0) {
      return false;
    }
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_from('a');
        break;
      case 2:
        this.slice_from('e');
        break;
      case 3:
        this.slice_del();
        break;
    }
    return true;
  }

  r_owned(): boolean {
    const among_var = this.find_slice_b(StemmerHu.a_9);
    if (among_var === 0) {
      return false;
    }
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_del();
        break;
      case 2:
        this.slice_from('e');
        break;
      case 3:
        this.slice_from('a');
        break;
    }
    return true;
  }

  r_sing_owner(): boolean {
    const among_var = this.find_slice_b(StemmerHu.a_10);
    if (among_var === 0) {
      return false;
    }
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_del();
        break;
      case 2:
        this.slice_from('a');
        break;
      case 3:
        this.slice_from('e');
        break;
    }
    return true;
  }

  r_plur_owner(): boolean {
    const among_var = this.find_slice_b(StemmerHu.a_11);
    if (among_var === 0) {
      return false;
    }
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_del();
        break;
      case 2:
        this.slice_from('a');
        break;
      case 3:
        this.slice_from('e');
        break;
    }
    return true;
  }

  innerStem(): boolean {
    this.do_forward(this.r_mark_regions);
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    this.do_backward(this.r_instrum);
    this.do_backward(this.r_case);
    this.do_backward(this.r_case_special);
    this.do_backward(this.r_case_other);
    this.do_backward(this.r_factive);
    this.do_backward(this.r_owned);
    this.do_backward(this.r_sing_owner);
    this.do_backward(this.r_plur_owner);
    this.do_backward(this.r_plural);
    this.cursor = this.limit_backward;
    return true;
  }

  static g_v: number[] = [
    17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 36, 10, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
  ];

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
    new Among('el', -1, 1),
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
    new Among('\u00FCl', -1, -1),
    new Among('b\u0151l', -1, -1),
    new Among('r\u0151l', -1, -1),
    new Among('t\u0151l', -1, -1),
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
    new Among('\u00E1nk\u00E9nt', -1, 2),
  ];

  static a_6: Among<StemmerHu>[] = [
    new Among('stul', -1, 1),
    new Among('astul', 0, 1),
    new Among('\u00E1stul', 0, 2),
    new Among('st\u00FCl', -1, 1),
    new Among('est\u00FCl', 3, 1),
    new Among('\u00E9st\u00FCl', 3, 3),
  ];

  static a_7: Among<StemmerHu>[] = [
    new Among('\u00E1', -1, 1),
    new Among('\u00E9', -1, 1),
  ];

  static a_8: Among<StemmerHu>[] = [
    new Among('k', -1, 3),
    new Among('ak', 0, 3),
    new Among('ek', 0, 3),
    new Among('ok', 0, 3),
    new Among('\u00E1k', 0, 1),
    new Among('\u00E9k', 0, 2),
    new Among('\u00F6k', 0, 3),
  ];

  static a_9: Among<StemmerHu>[] = [
    new Among('\u00E9i', -1, 1),
    new Among('\u00E1\u00E9i', 0, 3),
    new Among('\u00E9\u00E9i', 0, 2),
    new Among('\u00E9', -1, 1),
    new Among('k\u00E9', 3, 1),
    new Among('ak\u00E9', 4, 1),
    new Among('ek\u00E9', 4, 1),
    new Among('ok\u00E9', 4, 1),
    new Among('\u00E1k\u00E9', 4, 3),
    new Among('\u00E9k\u00E9', 4, 2),
    new Among('\u00F6k\u00E9', 4, 1),
    new Among('\u00E9\u00E9', 3, 2),
  ];

  static a_10: Among<StemmerHu>[] = [
    new Among('a', -1, 1),
    new Among('ja', 0, 1),
    new Among('d', -1, 1),
    new Among('ad', 2, 1),
    new Among('ed', 2, 1),
    new Among('od', 2, 1),
    new Among('\u00E1d', 2, 2),
    new Among('\u00E9d', 2, 3),
    new Among('\u00F6d', 2, 1),
    new Among('e', -1, 1),
    new Among('je', 9, 1),
    new Among('nk', -1, 1),
    new Among('unk', 11, 1),
    new Among('\u00E1nk', 11, 2),
    new Among('\u00E9nk', 11, 3),
    new Among('\u00FCnk', 11, 1),
    new Among('uk', -1, 1),
    new Among('juk', 16, 1),
    new Among('\u00E1juk', 17, 2),
    new Among('\u00FCk', -1, 1),
    new Among('j\u00FCk', 19, 1),
    new Among('\u00E9j\u00FCk', 20, 3),
    new Among('m', -1, 1),
    new Among('am', 22, 1),
    new Among('em', 22, 1),
    new Among('om', 22, 1),
    new Among('\u00E1m', 22, 2),
    new Among('\u00E9m', 22, 3),
    new Among('o', -1, 1),
    new Among('\u00E1', -1, 2),
    new Among('\u00E9', -1, 3),
  ];

  static a_11: Among<StemmerHu>[] = [
    new Among('id', -1, 1),
    new Among('aid', 0, 1),
    new Among('jaid', 1, 1),
    new Among('eid', 0, 1),
    new Among('jeid', 3, 1),
    new Among('\u00E1id', 0, 2),
    new Among('\u00E9id', 0, 3),
    new Among('i', -1, 1),
    new Among('ai', 7, 1),
    new Among('jai', 8, 1),
    new Among('ei', 7, 1),
    new Among('jei', 10, 1),
    new Among('\u00E1i', 7, 2),
    new Among('\u00E9i', 7, 3),
    new Among('itek', -1, 1),
    new Among('eitek', 14, 1),
    new Among('jeitek', 15, 1),
    new Among('\u00E9itek', 14, 3),
    new Among('ik', -1, 1),
    new Among('aik', 18, 1),
    new Among('jaik', 19, 1),
    new Among('eik', 18, 1),
    new Among('jeik', 21, 1),
    new Among('\u00E1ik', 18, 2),
    new Among('\u00E9ik', 18, 3),
    new Among('ink', -1, 1),
    new Among('aink', 25, 1),
    new Among('jaink', 26, 1),
    new Among('eink', 25, 1),
    new Among('jeink', 28, 1),
    new Among('\u00E1ink', 25, 2),
    new Among('\u00E9ink', 25, 3),
    new Among('aitok', -1, 1),
    new Among('jaitok', 32, 1),
    new Among('\u00E1itok', -1, 2),
    new Among('im', -1, 1),
    new Among('aim', 35, 1),
    new Among('jaim', 36, 1),
    new Among('eim', 35, 1),
    new Among('jeim', 38, 1),
    new Among('\u00E1im', 35, 2),
    new Among('\u00E9im', 35, 3),
  ];
}

export default StemmerHu;
