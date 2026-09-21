import { Among, SnowballStemmer } from '@nlpjs-neo/core';
import type { ContainerHolder } from '@nlpjs-neo/core';

/**
 * Stemmer written by tools/snowball from swedish.sbl of Snowball 2.2.0. Do not edit it by hand:
 * change the Snowball program and generate it again.
 */
class StemmerSv extends SnowballStemmer {
  declare I_x: number;

  constructor(container?: ContainerHolder) {
    super(container);
    this.name = 'stemmer-sv';
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
    if (!this.goto_in_grouping(StemmerSv.g_v, 97, 246)) {
      return false;
    }
    if (!this.gopast_out_grouping(StemmerSv.g_v, 97, 246)) {
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
    const among_var = this.find_slice_b(StemmerSv.a_0);
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
        if (!this.in_grouping_b(StemmerSv.g_s_ending, 98, 121)) {
          return false;
        }
        this.slice_del();
        break;
    }
    return true;
  }

  r_consonant_pair(): boolean {
    if (this.cursor < this.I_p1) {
      return false;
    }
    const v_1 = this.limit_backward;
    this.limit_backward = this.I_p1;
    const v_2 = this.limit - this.cursor;
    if (this.find_among_b(StemmerSv.a_1) === 0) {
      this.limit_backward = v_1;
      return false;
    }
    this.cursor = this.limit - v_2;
    this.ket = this.cursor;
    if (this.cursor <= this.limit_backward) {
      this.limit_backward = v_1;
      return false;
    }
    this.cursor--;
    this.bra = this.cursor;
    this.slice_del();
    this.limit_backward = v_1;
    return true;
  }

  r_other_suffix(): boolean {
    if (this.cursor < this.I_p1) {
      return false;
    }
    const v_1 = this.limit_backward;
    this.limit_backward = this.I_p1;
    const among_var = this.find_slice_b(StemmerSv.a_2);
    if (among_var === 0) {
      this.limit_backward = v_1;
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_del();
        break;
      case 2:
        this.slice_from('l\u00F6s');
        break;
      case 3:
        this.slice_from('full');
        break;
    }
    this.limit_backward = v_1;
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
    17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 32,
  ];

  static g_s_ending: number[] = [119, 127, 149];

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
}

export default StemmerSv;
