import { Among, BaseStemmer } from '@nlpjs-neo/core';
import type { ContainerHolder } from '@nlpjs-neo/core';

/**
 * Indonesian stemmer, from a Snowball program. A word loses its particle
 * (kah, lah, pun), its possessive pronoun (nya, ku, mu), its suffix (i, an,
 * kan) and its prefixes, as long as more than two syllables are left.
 */
class StemmerId extends BaseStemmer {
  /** Kind of prefix taken off, which decides what suffixes may follow. */
  declare I_prefix: number;
  /** Syllables of the word that are left. */
  declare I_measure: number;
  /**
   * The first order prefixes. The guards of a table that is walked forward run
   * on the stemmer the table holds, so this one is built for each instance.
   */
  declare a_3: Among<StemmerId>[];
  /** The second order prefixes, built for each instance for the same reason. */
  declare a_4: Among<StemmerId>[];

  static a_0: Among<StemmerId>[] = [
    new Among('kah', -1, 1),
    new Among('lah', -1, 1),
    new Among('pun', -1, 1),
  ];

  static a_1: Among<StemmerId>[] = [
    new Among('nya', -1, 1),
    new Among('ku', -1, 1),
    new Among('mu', -1, 1),
  ];

  static a_2: Among<StemmerId>[] = [
    new Among('i', -1, 1, (stemmer) => stemmer.r_SUFFIX_I_OK()),
    new Among('an', -1, 1, (stemmer) => stemmer.r_SUFFIX_AN_OK()),
    new Among('kan', 1, 1, (stemmer) => stemmer.r_SUFFIX_KAN_OK()),
  ];

  static g_vowel: number[] = [17, 65, 16];

  constructor(container?: ContainerHolder) {
    super(container);
    this.name = 'stemmer-id';
    this.I_prefix = 0;
    this.I_measure = 0;
    const vowel = (stemmer: StemmerId) => stemmer.r_VOWEL();
    const ker = (stemmer: StemmerId) => stemmer.r_KER();
    this.a_3 = [
      new Among('di', -1, 1),
      new Among('ke', -1, 2),
      new Among('me', -1, 1),
      new Among('mem', 2, 5),
      new Among('men', 2, 1),
      new Among('meng', 4, 1),
      new Among('meny', 4, 3, vowel, this),
      new Among('pem', -1, 6),
      new Among('pen', -1, 2),
      new Among('peng', 8, 2),
      new Among('peny', 8, 4, vowel, this),
      new Among('ter', -1, 1),
    ];
    this.a_4 = [
      new Among('be', -1, 3, ker, this),
      new Among('belajar', 0, 4),
      new Among('ber', 0, 3),
      new Among('pe', -1, 1),
      new Among('pelajar', 3, 2),
      new Among('per', 3, 1),
    ];
  }

  r_remove_particle(): boolean {
    this.ket = this.cursor;
    if (this.find_among_b(StemmerId.a_0) === 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.slice_del()) {
      return false;
    }
    this.I_measure -= 1;
    return true;
  }

  r_remove_possessive_pronoun(): boolean {
    this.ket = this.cursor;
    if (this.find_among_b(StemmerId.a_1) === 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.slice_del()) {
      return false;
    }
    this.I_measure -= 1;
    return true;
  }

  r_SUFFIX_KAN_OK(): boolean {
    // and
    if (!(this.I_prefix !== 3)) {
      return false;
    }
    if (!(this.I_prefix !== 2)) {
      return false;
    }
    return true;
  }

  r_SUFFIX_AN_OK(): boolean {
    if (!(this.I_prefix !== 1)) {
      return false;
    }
    return true;
  }

  r_SUFFIX_I_OK(): boolean {
    if (!(this.I_prefix <= 2)) {
      return false;
    }
    // not
    {
      const v_1 = this.limit - this.cursor;
      lab0: {
        if (!this.eq_s_b('s')) {
          break lab0;
        }
        return false;
      }
      this.cursor = this.limit - v_1;
    }
    return true;
  }

  r_remove_suffix(): boolean {
    this.ket = this.cursor;
    if (this.find_among_b(StemmerId.a_2) === 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.slice_del()) {
      return false;
    }
    this.I_measure -= 1;
    return true;
  }

  r_VOWEL(): boolean {
    if (!this.in_grouping(StemmerId.g_vowel, 97, 117)) {
      return false;
    }
    return true;
  }

  r_KER(): boolean {
    if (!this.out_grouping(StemmerId.g_vowel, 97, 117)) {
      return false;
    }
    if (!this.eq_s('er')) {
      return false;
    }
    return true;
  }

  r_remove_first_order_prefix(): boolean {
    this.bra = this.cursor;
    const among_var = this.find_among(this.a_3);
    if (among_var === 0) {
      return false;
    }
    this.ket = this.cursor;
    switch (among_var) {
      case 1:
        if (!this.slice_del()) {
          return false;
        }
        this.I_prefix = 1;
        this.I_measure -= 1;
        break;
      case 2:
        if (!this.slice_del()) {
          return false;
        }
        this.I_prefix = 3;
        this.I_measure -= 1;
        break;
      case 3:
        this.I_prefix = 1;
        if (!this.slice_from('s')) {
          return false;
        }
        this.I_measure -= 1;
        break;
      case 4:
        this.I_prefix = 3;
        if (!this.slice_from('s')) {
          return false;
        }
        this.I_measure -= 1;
        break;
      case 5:
        this.I_prefix = 1;
        this.I_measure -= 1;
        // or
        lab0: {
          const v_1 = this.cursor;
          lab1: {
            // and
            const v_2 = this.cursor;
            if (!this.in_grouping(StemmerId.g_vowel, 97, 117)) {
              break lab1;
            }
            this.cursor = v_2;
            if (!this.slice_from('p')) {
              return false;
            }
            break lab0;
          }
          this.cursor = v_1;
          if (!this.slice_del()) {
            return false;
          }
        }
        break;
      case 6:
        this.I_prefix = 3;
        this.I_measure -= 1;
        // or
        lab2: {
          const v_3 = this.cursor;
          lab3: {
            // and
            const v_4 = this.cursor;
            if (!this.in_grouping(StemmerId.g_vowel, 97, 117)) {
              break lab3;
            }
            this.cursor = v_4;
            if (!this.slice_from('p')) {
              return false;
            }
            break lab2;
          }
          this.cursor = v_3;
          if (!this.slice_del()) {
            return false;
          }
        }
        break;
    }
    return true;
  }

  r_remove_second_order_prefix(): boolean {
    this.bra = this.cursor;
    const among_var = this.find_among(this.a_4);
    if (among_var === 0) {
      return false;
    }
    this.ket = this.cursor;
    switch (among_var) {
      case 1:
        if (!this.slice_del()) {
          return false;
        }
        this.I_prefix = 2;
        this.I_measure -= 1;
        break;
      case 2:
        if (!this.slice_from('ajar')) {
          return false;
        }
        this.I_measure -= 1;
        break;
      case 3:
        if (!this.slice_del()) {
          return false;
        }
        this.I_prefix = 4;
        this.I_measure -= 1;
        break;
      case 4:
        if (!this.slice_from('ajar')) {
          return false;
        }
        this.I_prefix = 4;
        this.I_measure -= 1;
        break;
    }
    return true;
  }

  innerStem(): boolean {
    this.I_measure = 0;
    // do
    const v_1 = this.cursor;
    {
      // repeat
      for (;;) {
        const v_2 = this.cursor;
        lab1: {
          // gopast
          if (!this.gopast_in_grouping(StemmerId.g_vowel, 97, 117)) {
            break lab1;
          }
          this.I_measure += 1;
          continue;
        }
        this.cursor = v_2;
        break;
      }
    }
    this.cursor = v_1;
    if (!(this.I_measure > 2)) {
      return false;
    }
    this.I_prefix = 0;
    // backwards
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    // do
    const v_4 = this.limit - this.cursor;
    this.r_remove_particle();
    this.cursor = this.limit - v_4;
    if (!(this.I_measure > 2)) {
      return false;
    }
    // do
    const v_5 = this.limit - this.cursor;
    this.r_remove_possessive_pronoun();
    this.cursor = this.limit - v_5;
    this.cursor = this.limit_backward;
    if (!(this.I_measure > 2)) {
      return false;
    }
    // or
    lab4: {
      const v_6 = this.cursor;
      lab5: {
        // test
        const v_7 = this.cursor;
        if (!this.r_remove_first_order_prefix()) {
          break lab5;
        }
        // do
        const v_8 = this.cursor;
        lab6: {
          // test
          const v_9 = this.cursor;
          if (!(this.I_measure > 2)) {
            break lab6;
          }
          // backwards
          this.limit_backward = this.cursor;
          this.cursor = this.limit;
          if (!this.r_remove_suffix()) {
            break lab6;
          }
          this.cursor = this.limit_backward;
          this.cursor = v_9;
          if (!(this.I_measure > 2)) {
            break lab6;
          }
          if (!this.r_remove_second_order_prefix()) {
            break lab6;
          }
        }
        this.cursor = v_8;
        this.cursor = v_7;
        break lab4;
      }
      this.cursor = v_6;
      // do
      const v_10 = this.cursor;
      this.r_remove_second_order_prefix();
      this.cursor = v_10;
      // do
      const v_11 = this.cursor;
      lab7: {
        if (!(this.I_measure > 2)) {
          break lab7;
        }
        // backwards
        this.limit_backward = this.cursor;
        this.cursor = this.limit;
        if (!this.r_remove_suffix()) {
          break lab7;
        }
        this.cursor = this.limit_backward;
      }
      this.cursor = v_11;
    }
    return true;
  }
}

export default StemmerId;
