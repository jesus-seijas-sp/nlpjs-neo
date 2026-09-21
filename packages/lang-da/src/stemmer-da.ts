import { Among, SnowballStemmer } from '@nlpjs-neo/core';
import type { ContainerHolder } from '@nlpjs-neo/core';

/**
 * Stemmer written by tools/snowball from danish.sbl of Snowball 2.2.0. Do not edit it by hand:
 * change the Snowball program and generate it again.
 */
class StemmerDa extends SnowballStemmer {
  declare S_ch: string;
  declare I_x: number;

  constructor(container?: ContainerHolder) {
    super(container);
    this.name = 'stemmer-da';
    this.S_ch = '';
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
    if (!this.goto_in_grouping(StemmerDa.g_v, 97, 248)) {
      return false;
    }
    if (!this.gopast_out_grouping(StemmerDa.g_v, 97, 248)) {
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
    const among_var = this.find_slice_b(StemmerDa.a_0);
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
        if (!this.in_grouping_b(StemmerDa.g_s_ending, 97, 229)) {
          return false;
        }
        this.slice_del();
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
    if (this.find_slice_b(StemmerDa.a_1) === 0) {
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
    const v_1 = this.limit - this.cursor;
    lab0: {
      this.ket = this.cursor;
      if (!this.eq_s_b('st')) {
        break lab0;
      }
      this.bra = this.cursor;
      if (!this.eq_s_b('ig')) {
        break lab0;
      }
      this.slice_del();
    }
    this.cursor = this.limit - v_1;
    if (this.cursor < this.I_p1) {
      return false;
    }
    const v_2 = this.limit_backward;
    this.limit_backward = this.I_p1;
    const among_var = this.find_slice_b(StemmerDa.a_2);
    if (among_var === 0) {
      this.limit_backward = v_2;
      return false;
    }
    this.limit_backward = v_2;
    switch (among_var) {
      case 1:
        this.slice_del();
        this.do_backward(this.r_consonant_pair);
        break;
      case 2:
        this.slice_from('l\u00F8s');
        break;
    }
    return true;
  }

  r_undouble(): boolean {
    if (this.cursor < this.I_p1) {
      return false;
    }
    const v_1 = this.limit_backward;
    this.limit_backward = this.I_p1;
    this.ket = this.cursor;
    if (!this.in_grouping_b(StemmerDa.g_c, 98, 122)) {
      this.limit_backward = v_1;
      return false;
    }
    this.bra = this.cursor;
    this.S_ch = this.slice_to();
    this.limit_backward = v_1;
    if (!this.eq_s_b(this.S_ch)) {
      return false;
    }
    this.slice_del();
    return true;
  }

  innerStem(): boolean {
    this.do_forward(this.r_mark_regions);
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    this.do_backward(this.r_main_suffix);
    this.do_backward(this.r_consonant_pair);
    this.do_backward(this.r_other_suffix);
    this.do_backward(this.r_undouble);
    this.cursor = this.limit_backward;
    return true;
  }

  static g_c: number[] = [119, 223, 119, 1];

  static g_v: number[] = [
    17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 128,
  ];

  static g_s_ending: number[] = [
    239, 254, 42, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
  ];

  static a_0: Among<StemmerDa>[] = [
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

  static a_1: Among<StemmerDa>[] = [
    new Among('gd', -1, -1),
    new Among('dt', -1, -1),
    new Among('gt', -1, -1),
    new Among('kt', -1, -1),
  ];

  static a_2: Among<StemmerDa>[] = [
    new Among('ig', -1, 1),
    new Among('lig', 0, 1),
    new Among('elig', 1, 1),
    new Among('els', -1, 1),
    new Among('l\u00F8st', -1, 2),
  ];
}

export default StemmerDa;
