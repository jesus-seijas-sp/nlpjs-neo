import { Among, SnowballStemmer } from '@nlpjs-neo/core';
import type { ContainerHolder } from '@nlpjs-neo/core';

/**
 * Stemmer written by tools/snowball from norwegian.sbl. Do not edit it by hand:
 * change the Snowball program and generate it again.
 */
class StemmerNo extends SnowballStemmer {
  declare I_x: number;

  constructor(container?: ContainerHolder) {
    super(container);
    this.name = 'stemmer-no';
    this.I_p1 = 0;
    this.I_x = 0;
  }

  r_mark_regions(): boolean {
    this.I_p1 = this.limit;
    const v_1 = this.cursor;
    if (this.cursor + 3 > this.limit) {
      return false;
    }
    this.cursor += 3;
    this.I_x = this.cursor;
    this.cursor = v_1;
    if (!this.goto_in_grouping(StemmerNo.g_v, 97, 248)) {
      return false;
    }
    if (!this.gopast_out_grouping(StemmerNo.g_v, 97, 248)) {
      return false;
    }
    this.I_p1 = this.cursor;
    lab0: {
      if (this.I_p1 >= this.I_x) {
        break lab0;
      }
      this.I_p1 = this.I_x;
    }
    return true;
  }

  r_main_suffix(): boolean {
    if (this.cursor < this.I_p1) {
      return false;
    }
    const v_1 = this.limit_backward;
    this.limit_backward = this.I_p1;
    const among_var = this.find_slice_b(StemmerNo.a_0);
    if (among_var === 0) {
      this.limit_backward = v_1;
      return false;
    }
    this.limit_backward = v_1;
    switch (among_var) {
      case 1:
        this.slice_del();
        break;
      case 2:
        if (!this.in_grouping_b(StemmerNo.g_s_ending, 98, 122)) {
          if (!this.eq_s_b('k')) {
            return false;
          }
          if (!this.out_grouping_b(StemmerNo.g_v, 97, 248)) {
            return false;
          }
        }
        this.slice_del();
        break;
      case 3:
        this.slice_from('er');
        break;
    }
    return true;
  }

  r_consonant_pair(): boolean {
    const v_1 = this.limit - this.cursor;
    if (this.cursor < this.I_p1) {
      return false;
    }
    const v_2 = this.limit_backward;
    this.limit_backward = this.I_p1;
    if (this.find_slice_b(StemmerNo.a_1) === 0) {
      this.limit_backward = v_2;
      return false;
    }
    this.limit_backward = v_2;
    this.cursor = this.limit - v_1;
    if (this.cursor <= this.limit_backward) {
      return false;
    }
    this.cursor--;
    this.bra = this.cursor;
    this.slice_del();
    return true;
  }

  r_other_suffix(): boolean {
    if (this.cursor < this.I_p1) {
      return false;
    }
    const v_1 = this.limit_backward;
    this.limit_backward = this.I_p1;
    const among_var = this.find_slice_b(StemmerNo.a_2);
    if (among_var === 0) {
      this.limit_backward = v_1;
      return false;
    }
    this.limit_backward = v_1;
    switch (among_var) {
      case 1:
        this.slice_del();
        break;
    }
    return true;
  }

  innerStem(): boolean {
    this.do_forward(this.r_mark_regions);
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    this.do_backward(this.r_main_suffix);
    this.do_backward(this.r_consonant_pair);
    this.do_backward(this.r_other_suffix);
    this.cursor = this.limit_backward;
    return true;
  }

  static g_v: number[] = [
    17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 128,
  ];

  static g_s_ending: number[] = [119, 125, 149, 1];

  static a_0: Among<StemmerNo>[] = [
    new Among('a', -1, 1),
    new Among('e', -1, 1),
    new Among('ede', 1, 1),
    new Among('ande', 1, 1),
    new Among('ende', 1, 1),
    new Among('ane', 1, 1),
    new Among('ene', 1, 1),
    new Among('hetene', 6, 1),
    new Among('erte', 1, 3),
    new Among('en', -1, 1),
    new Among('heten', 9, 1),
    new Among('ar', -1, 1),
    new Among('er', -1, 1),
    new Among('heter', 12, 1),
    new Among('s', -1, 2),
    new Among('as', 14, 1),
    new Among('es', 14, 1),
    new Among('edes', 16, 1),
    new Among('endes', 16, 1),
    new Among('enes', 16, 1),
    new Among('hetenes', 19, 1),
    new Among('ens', 14, 1),
    new Among('hetens', 21, 1),
    new Among('ers', 14, 1),
    new Among('ets', 14, 1),
    new Among('et', -1, 1),
    new Among('het', 25, 1),
    new Among('ert', -1, 3),
    new Among('ast', -1, 1),
  ];

  static a_1: Among<StemmerNo>[] = [
    new Among('dt', -1, -1),
    new Among('vt', -1, -1),
  ];

  static a_2: Among<StemmerNo>[] = [
    new Among('leg', -1, 1),
    new Among('eleg', 0, 1),
    new Among('ig', -1, 1),
    new Among('eig', 2, 1),
    new Among('lig', 2, 1),
    new Among('elig', 4, 1),
    new Among('els', -1, 1),
    new Among('lov', -1, 1),
    new Among('elov', 7, 1),
    new Among('slov', 7, 1),
    new Among('hetslov', 9, 1),
  ];
}

export default StemmerNo;
