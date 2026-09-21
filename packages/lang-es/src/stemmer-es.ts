import { Among, SnowballStemmer } from '@nlpjs-neo/core';
import dictionary from './dictionary-es.json' with { type: 'json' };

/**
 * The amongs of one table as a trie, keyed by character and read backwards,
 * so the longest match of a suffix is found in one walk rather than by the
 * binary search of `find_among_b`.
 */
interface AmongTree {
  /** Value the stemmer returns when a word ends here. */
  result?: number;
  [char: string]: AmongTree | number | undefined;
}

class StemmerEs extends SnowballStemmer {
  declare static a_0_tree: AmongTree;
  declare static a_1_tree: AmongTree;
  declare static a_2_tree: AmongTree;
  declare static a_4_tree: AmongTree;
  declare static a_5_tree: AmongTree;
  declare static a_6_tree: AmongTree;
  declare static a_7_tree: AmongTree;
  declare static a_8_tree: AmongTree;
  declare static a_9_tree: AmongTree;

  constructor(container?) {
    super(container, dictionary);
    this.name = 'stemmer-es';
    this.I_p2 = 0;
    this.I_p1 = 0;
    this.I_pV = 0;
    StemmerEs.a_0_tree = this.buildAmongTree(StemmerEs.a_0);
    StemmerEs.a_1_tree = this.buildAmongTree(StemmerEs.a_1);
    StemmerEs.a_2_tree = this.buildAmongTree(StemmerEs.a_2);
    StemmerEs.a_4_tree = this.buildAmongTree(StemmerEs.a_4);
    StemmerEs.a_5_tree = this.buildAmongTree(StemmerEs.a_5);
    StemmerEs.a_6_tree = this.buildAmongTree(StemmerEs.a_6);
    StemmerEs.a_7_tree = this.buildAmongTree(StemmerEs.a_7);
    StemmerEs.a_8_tree = this.buildAmongTree(StemmerEs.a_8);
    StemmerEs.a_9_tree = this.buildAmongTree(StemmerEs.a_9);
  }

  findAmongBTree(tree: AmongTree): number {
    const reversed = this.current.split('').reverse();
    let node = tree;
    let l = 0;
    let longest = 0;
    let result = 0;
    const maxLength = this.current.length - this.limit_backward;
    for (let i = 0; i < reversed.length; i += 1) {
      l += 1;
      if (l > maxLength) {
        this.cursor -= longest;
        return result;
      }
      const current = reversed[i];
      if (!node[current]) {
        this.cursor -= longest;
        return result;
      }
      node = node[current] as AmongTree;
      if (node.result) {
        longest = l;
        result = node.result;
      }
    }
    this.cursor -= l;
    return node.result;
  }

  buildAmongTree(amongs: Among<StemmerEs>[]): AmongTree {
    const result: AmongTree = {};
    for (let i = 0; i < amongs.length; i += 1) {
      const among =
        typeof amongs[i] === 'string'
          ? { s: amongs[i] as unknown as string, result: -1 }
          : amongs[i];
      const reversed = among.s.split('').reverse();
      let node = result;
      for (let j = 0; j < reversed.length; j += 1) {
        const current = reversed[j];
        if (!node[current]) {
          node[current] = {};
        }
        node = node[current] as AmongTree;
      }
      node.result = among.result;
    }
    return result;
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
          if (!this.in_grouping(StemmerEs.g_v, 97, 252)) {
            break lab2;
          }
          // or
          lab3: {
            const v_3 = this.cursor;
            lab4: {
              if (!this.out_grouping(StemmerEs.g_v, 97, 252)) {
                break lab4;
              }
              // gopast
              if (!this.gopast_in_grouping(StemmerEs.g_v, 97, 252)) {
                break lab4;
              }
              break lab3;
            }
            this.cursor = v_3;
            if (!this.in_grouping(StemmerEs.g_v, 97, 252)) {
              break lab2;
            }
            // gopast
            if (!this.gopast_out_grouping(StemmerEs.g_v, 97, 252)) {
              break lab2;
            }
          }
          break lab1;
        }
        this.cursor = v_2;
        if (!this.out_grouping(StemmerEs.g_v, 97, 252)) {
          break lab0;
        }
        // or
        lab9: {
          const v_6 = this.cursor;
          lab10: {
            if (!this.out_grouping(StemmerEs.g_v, 97, 252)) {
              break lab10;
            }
            // gopast
            if (!this.gopast_in_grouping(StemmerEs.g_v, 97, 252)) {
              break lab10;
            }
            break lab9;
          }
          this.cursor = v_6;
          if (!this.in_grouping(StemmerEs.g_v, 97, 252)) {
            break lab0;
          }
          if (this.cursor >= this.limit) {
            break lab0;
          }
          this.cursor++;
        }
      }
      this.I_pV = this.cursor;
    }
    this.cursor = v_1;
    // do
    const v_8 = this.cursor;
    lab13: {
      // gopast
      if (!this.gopast_in_grouping(StemmerEs.g_v, 97, 252)) {
        break lab13;
      }
      // gopast
      if (!this.gopast_out_grouping(StemmerEs.g_v, 97, 252)) {
        break lab13;
      }
      this.I_p1 = this.cursor;
      // gopast
      if (!this.gopast_in_grouping(StemmerEs.g_v, 97, 252)) {
        break lab13;
      }
      // gopast
      if (!this.gopast_out_grouping(StemmerEs.g_v, 97, 252)) {
        break lab13;
      }
      this.I_p2 = this.cursor;
    }
    this.cursor = v_8;
    return true;
  }

  r_postlude() {
    // repeat
    replab0: for (;;) {
      const v_1 = this.cursor;
      lab1: {
        this.bra = this.cursor;
        const among_var = this.find_among(StemmerEs.a_0, 6);
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
      this.cursor = v_1;
      break;
    }
    return true;
  }

  r_R2b() {
    if (this.cursor < this.current.length / 2) {
      return false;
    }
    return true;
  }

  r_attached_pronoun() {
    this.ket = this.cursor;
    if (this.findAmongBTree(StemmerEs.a_1_tree) === 0) {
      return false;
    }
    this.bra = this.cursor;
    const among_var = this.find_among_b(StemmerEs.a_2);
    if (among_var === 0) {
      return false;
    }
    if (!this.r_RV()) {
      return false;
    }
    switch (among_var) {
      case 0:
        return false;
      case 1:
        this.bra = this.cursor;
        if (!this.slice_from('iendo')) {
          return false;
        }
        break;
      case 2:
        this.bra = this.cursor;
        if (!this.slice_from('ando')) {
          return false;
        }
        break;
      case 3:
        this.bra = this.cursor;
        if (!this.slice_from('ar')) {
          return false;
        }
        break;
      case 4:
        this.bra = this.cursor;
        if (!this.slice_from('er')) {
          return false;
        }
        break;
      case 5:
        this.bra = this.cursor;
        if (!this.slice_from('ir')) {
          return false;
        }
        break;
      case 6:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 7:
        if (!this.eq_s_b(1, 'u')) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  r_standard_suffix() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    this.ket = this.cursor;
    let among_var = this.find_among_b(StemmerEs.a_6, 46);
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
        if (!this.r_R2b()) {
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
          if (!this.r_R2()) {
            this.cursor = this.limit - v_1;
            break lab0;
          }
          if (!this.slice_del()) {
            return false;
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
        if (!this.slice_from('ente')) {
          return false;
        }
        break;
      case 6:
        if (!this.r_R1()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        // try
        v_2 = this.limit - this.cursor;
        lab1: {
          this.ket = this.cursor;
          among_var = this.find_among_b(StemmerEs.a_3, 4);
          if (among_var === 0) {
            this.cursor = this.limit - v_2;
            break lab1;
          }
          this.bra = this.cursor;
          if (!this.r_R2()) {
            this.cursor = this.limit - v_2;
            break lab1;
          }
          if (!this.slice_del()) {
            return false;
          }
          switch (among_var) {
            case 0:
              this.cursor = this.limit - v_2;
              break lab1;
            case 1:
              this.ket = this.cursor;
              if (!this.eq_s_b(2, 'at')) {
                this.cursor = this.limit - v_2;
                break lab1;
              }
              this.bra = this.cursor;
              if (!this.r_R2()) {
                this.cursor = this.limit - v_2;
                break lab1;
              }
              if (!this.slice_del()) {
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
        v_3 = this.limit - this.cursor;
        lab2: {
          this.ket = this.cursor;
          among_var = this.find_among_b(StemmerEs.a_4, 3);
          if (among_var === 0) {
            this.cursor = this.limit - v_3;
            break lab2;
          }
          this.bra = this.cursor;
          switch (among_var) {
            case 0:
              this.cursor = this.limit - v_3;
              break lab2;
            case 1:
              if (!this.r_R2()) {
                this.cursor = this.limit - v_3;
                break lab2;
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
        v_4 = this.limit - this.cursor;
        lab3: {
          this.ket = this.cursor;
          among_var = this.find_among_b(StemmerEs.a_5, 3);
          if (among_var === 0) {
            this.cursor = this.limit - v_4;
            break lab3;
          }
          this.bra = this.cursor;
          switch (among_var) {
            case 0:
              this.cursor = this.limit - v_4;
              break lab3;
            case 1:
              if (!this.r_R2()) {
                this.cursor = this.limit - v_4;
                break lab3;
              }
              if (!this.slice_del()) {
                return false;
              }
              break;
          }
        }
        break;
      case 9:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        // try
        v_5 = this.limit - this.cursor;
        lab4: {
          this.ket = this.cursor;
          if (!this.eq_s_b(2, 'at')) {
            this.cursor = this.limit - v_5;
            break lab4;
          }
          this.bra = this.cursor;
          if (!this.r_R2()) {
            this.cursor = this.limit - v_5;
            break lab4;
          }
          if (!this.slice_del()) {
            return false;
          }
        }
        break;
    }
    return true;
  }

  r_y_verb_suffix() {
    const v_1 = this.limit - this.cursor;
    if (this.cursor < this.I_pV) {
      return false;
    }
    this.cursor = this.I_pV;
    const v_2 = this.limit_backward;
    this.limit_backward = this.cursor;
    this.cursor = this.limit - v_1;
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerEs.a_7, 11);
    if (among_var === 0) {
      this.limit_backward = v_2;
      return false;
    }
    this.bra = this.cursor;
    this.limit_backward = v_2;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        if (!this.eq_s_b(1, 'u')) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
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

    const among_var = this.findAmongBTree(StemmerEs.a_8_tree);
    if (among_var === 0) {
      this.limit_backward = v_2;
      return false;
    }
    this.bra = this.cursor;
    this.limit_backward = v_2;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        // try
        v_3 = this.limit - this.cursor;
        lab0: {
          if (!this.eq_s_b(1, 'u')) {
            this.cursor = this.limit - v_3;
            break lab0;
          }
          // test
          const v_4 = this.limit - this.cursor;
          if (!this.eq_s_b(1, 'g')) {
            this.cursor = this.limit - v_3;
            break lab0;
          }
          this.cursor = this.limit - v_4;
        }
        this.bra = this.cursor;
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  r_residual_suffix() {
    let v_1;

    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerEs.a_9, 5);

    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        if (!this.r_RV()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.r_RV()) {
          return false;
        }
        if (!this.slice_del()) {
          return false;
        }
        // try
        v_1 = this.limit - this.cursor;
        lab0: {
          this.ket = this.cursor;
          if (!this.eq_s_b(1, 'u')) {
            this.cursor = this.limit - v_1;
            break lab0;
          }
          this.bra = this.cursor;
          // test
          const v_2 = this.limit - this.cursor;
          if (!this.eq_s_b(1, 'g')) {
            this.cursor = this.limit - v_1;
            break lab0;
          }
          this.cursor = this.limit - v_2;
          if (!this.r_RV()) {
            this.cursor = this.limit - v_1;
            break lab0;
          }
          if (!this.slice_del()) {
            return false;
          }
        }
        break;
    }
    return true;
  }

  innerbStem() {
    // do
    const v_1 = this.cursor;
    this.r_mark_regions();
    this.cursor = v_1;
    // backwards
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    // do
    const v_2 = this.limit - this.cursor;
    this.r_attached_pronoun();
    this.cursor = this.limit - v_2;
    // do
    const v_3 = this.limit - this.cursor;
    lab2: {
      // or
      lab3: {
        const v_4 = this.limit - this.cursor;
        lab4: {
          if (!this.r_standard_suffix()) {
            break lab4;
          }
          break lab3;
        }
        this.cursor = this.limit - v_4;
        lab5: {
          if (!this.r_y_verb_suffix()) {
            break lab5;
          }
          break lab3;
        }
        this.cursor = this.limit - v_4;
        if (!this.r_verb_suffix()) {
          break lab2;
        }
      }
    }
    this.cursor = this.limit - v_3;
    // do
    const v_5 = this.limit - this.cursor;
    this.r_residual_suffix();
    this.cursor = this.limit - v_5;
    this.cursor = this.limit_backward; // do
    const v_6 = this.cursor;
    this.r_postlude();
    this.cursor = v_6;
    return true;
  }

  innerStem() {
    const current = this.getCurrent();
    if (current.endsWith('rme')) {
      this.setCurrent(current.slice(0, -2));
    } else if (current.endsWith('rte')) {
      this.setCurrent(current.slice(0, -2));
    } else if (current.endsWith('rse')) {
      this.setCurrent(current.slice(0, -2));
    } else if (current.endsWith('rnos')) {
      this.setCurrent(current.slice(0, -3));
    }
    this.innerbStem();
    const b = current;
    const a = this.getCurrent();
    if (a.length > 4) {
      if (a === b) {
        if (a.endsWith('s') || a.endsWith('i')) {
          this.setCurrent(a.slice(0, -1));
        }
      } else if (a.endsWith('zc') || a.endsWith('qu')) {
        this.setCurrent(`${a.slice(0, -2)}c`);
      } else if (a.endsWith('z')) {
        this.setCurrent(`${a.slice(0, -1)}c`);
      } else if (a.endsWith('i')) {
        this.setCurrent(`${a.slice(0, -1)}`);
      }
    }
    if (a.length <= 4) {
      if (a.endsWith('z')) {
        this.setCurrent(`${a.slice(0, -1)}c`);
      }
    }
  }

  static a_0: Among<StemmerEs>[] = [
    new Among('', -1, 6),
    new Among('a', 0, 1),
    new Among('e', 0, 2),
    new Among('i', 0, 3),
    new Among('o', 0, 4),
    new Among('u', 0, 5),
  ];

  static a_1: Among<StemmerEs>[] = [
    new Among('la', -1, -1),
    new Among('sela', 0, -1),
    new Among('le', -1, -1),
    new Among('me', -1, -1),
    new Among('se', -1, -1),
    new Among('lo', -1, -1),
    new Among('selo', 5, -1),
    new Among('las', -1, -1),
    new Among('selas', 7, -1),
    new Among('les', -1, -1),
    new Among('los', -1, -1),
    new Among('selos', 10, -1),
    new Among('nos', -1, -1),
  ];

  static a_2: Among<StemmerEs>[] = [
    new Among('ando', -1, 6),
    new Among('iendo', -1, 6),
    new Among('yendo', -1, 7),
    new Among('ar', -1, 6),
    new Among('er', -1, 6),
    new Among('ir', -1, 6),
  ];

  static a_3: Among<StemmerEs>[] = [
    new Among('ic', -1, -1),
    new Among('ad', -1, -1),
    new Among('os', -1, -1),
    new Among('iv', -1, 1),
  ];

  static a_4: Among<StemmerEs>[] = [
    new Among('able', -1, 1),
    new Among('ible', -1, 1),
    new Among('ante', -1, 1),
  ];

  static a_5: Among<StemmerEs>[] = [
    new Among('ic', -1, 1),
    new Among('abil', -1, 1),
    new Among('iv', -1, 1),
  ];

  static a_6: Among<StemmerEs>[] = [
    new Among('ica', -1, 1),
    new Among('ancia', -1, 2),
    new Among('encia', -1, 5),
    new Among('adora', -1, 2),
    new Among('osa', -1, 1),
    new Among('ista', -1, 1),
    new Among('iva', -1, 9),
    new Among('anza', -1, 1),
    new Among('logia', -1, 3),
    new Among('idad', -1, 8),
    new Among('able', -1, 1),
    new Among('ible', -1, 1),
    new Among('ante', -1, 2),
    new Among('mente', -1, 7),
    new Among('amente', 13, 6),
    new Among('acion', -1, 2),
    new Among('ucion', -1, 4),
    new Among('ico', -1, 1),
    new Among('ismo', -1, 1),
    new Among('oso', -1, 1),
    new Among('amiento', -1, 1),
    new Among('imiento', -1, 1),
    new Among('ivo', -1, 9),
    new Among('ador', -1, 2),
    new Among('icas', -1, 1),
    new Among('ancias', -1, 2),
    new Among('encias', -1, 5),
    new Among('adoras', -1, 2),
    new Among('osas', -1, 1),
    new Among('istas', -1, 1),
    new Among('ivas', -1, 9),
    new Among('anzas', -1, 1),
    new Among('logias', -1, 3),
    new Among('idades', -1, 8),
    new Among('ables', -1, 1),
    new Among('ibles', -1, 1),
    new Among('aciones', -1, 2),
    new Among('uciones', -1, 4),
    new Among('adores', -1, 2),
    new Among('antes', -1, 2),
    new Among('icos', -1, 1),
    new Among('ismos', -1, 1),
    new Among('osos', -1, 1),
    new Among('amientos', -1, 1),
    new Among('imientos', -1, 1),
    new Among('ivos', -1, 9),
  ];

  static a_7: Among<StemmerEs>[] = [
    new Among('ya', -1, 1),
    new Among('ye', -1, 1),
    new Among('yan', -1, 1),
    new Among('yen', -1, 1),
    new Among('yeron', -1, 1),
    new Among('yendo', -1, 1),
    new Among('yo', -1, 1),
    new Among('yas', -1, 1),
    new Among('yes', -1, 1),
    new Among('yais', -1, 1),
    new Among('yamos', -1, 1),
  ];

  static a_8: Among<StemmerEs>[] = [
    new Among('aba', -1, 2),
    new Among('ada', -1, 2),
    new Among('ida', -1, 2),
    new Among('ara', -1, 2),
    new Among('iera', -1, 2),
    new Among('ia', -1, 2),
    new Among('aria', 'ia', 2),
    new Among('eria', 'ia', 2),
    new Among('iria', 'ia', 2),
    new Among('ad', -1, 2),
    new Among('ed', -1, 2),
    new Among('id', -1, 2),
    new Among('ase', -1, 2),
    new Among('iese', -1, 2),
    new Among('aste', -1, 2),
    new Among('iste', -1, 2),
    new Among('an', -1, 2),
    new Among('aban', 'an', 2),
    new Among('aran', 'an', 2),
    new Among('ieran', 'an', 2),
    new Among('ian', 'an', 2),
    new Among('arian', 'ian', 2),
    new Among('erian', 'ian', 2),
    new Among('irian', 'ian', 2),
    new Among('en', -1, 1),
    new Among('asen', 'en', 2),
    new Among('iesen', 'en', 2),
    new Among('aron', -1, 2),
    new Among('ieron', -1, 2),
    new Among('aran', -1, 2),
    new Among('eran', -1, 2),
    new Among('iran', -1, 2),
    new Among('ado', -1, 2),
    new Among('ido', -1, 2),
    new Among('ando', -1, 2),
    new Among('iendo', -1, 2),
    new Among('ar', -1, 2),
    new Among('er', -1, 2),
    new Among('ir', -1, 2),
    new Among('as', -1, 2),
    new Among('abas', 'as', 2),
    new Among('adas', 'as', 2),
    new Among('idas', 'as', 2),
    new Among('aras', 'as', 2),
    new Among('ieras', 'as', 2),
    // conditional
    new Among('ias', 'as', 2),
    new Among('arias', 'ias', 2),
    new Among('erias', 'ias', 2),
    new Among('irias', 'ias', 2),
    // subjunctive
    new Among('es', -1, 1),
    new Among('ases', 'es', 2),
    new Among('ieses', 'es', 2),
    new Among('abais', -1, 2),
    new Among('arais', -1, 2),
    new Among('ierais', -1, 2),
    new Among('iais', -1, 2),
    new Among('ariais', 'iais', 2),
    new Among('eriais', 'iais', 2),
    new Among('iriais', 'iais', 2),
    new Among('ieremos', -1, 2),
    new Among('iereis', -1, 2),
    new Among('ieren', -1, 2),
    new Among('ieres', -1, 2),
    new Among('iere', -1, 2),
    new Among('aseis', -1, 2),
    new Among('ieseis', -1, 2),
    new Among('asteis', -1, 2),
    new Among('isteis', -1, 2),
    new Among('ais', -1, 2),
    new Among('eis', -1, 1),
    new Among('areis', 'eis', 2),
    new Among('ereis', 'eis', 2),
    new Among('ireis', 'eis', 2),
    new Among('ados', -1, 2),
    new Among('idos', -1, 2),
    new Among('amos', -1, 2),
    new Among('abamos', 'amos', 2),
    new Among('aramos', 'amos', 2),
    new Among('ieramos', 'amos', 2),
    new Among('iamos', 'amos', 2),
    new Among('ariamos', 'iamos', 2),
    new Among('eriamos', 'iamos', 2),
    new Among('iriamos', 'iamos', 2),
    new Among('emos', -1, 1),
    new Among('aremos', 'emos', 2),
    new Among('eremos', 'emos', 2),
    new Among('iremos', 'emos', 2),
    new Among('asemos', 'emos', 2),
    new Among('iesemos', 'emos', 2),
    new Among('aras', -1, 2),
    new Among('eras', -1, 2),
    new Among('iras', -1, 2),
    new Among('is', -1, 2),
    new Among('aren', -1, 2),
    new Among('ares', -1, 2),
    new Among('eren', -1, 2),
    new Among('esen', -1, 2),
    new Among('ea', -1, 2),
    new Among('ee', -1, 2),
    new Among('eo', -1, 2),
    // future
    new Among('era', -1, 2),
    new Among('ira', -1, 2),
    new Among('are', -1, 2),
    new Among('ere', -1, 2),
    new Among('ire', -1, 2),
    // perfect past
    new Among('io', -1, 2),
    new Among('imos', -1, 2),
    new Among('s', -1, 2),
    new Among('os', -1, 2),
    new Among('ios', -1, 2),
  ];

  static a_9: Among<StemmerEs>[] = [
    new Among('a', -1, 1),
    new Among('e', -1, 2),
    new Among('o', -1, 1),
    new Among('os', -1, 1),
    new Among('i', -1, 1),
  ];

  static g_v: number[] = [
    17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 4, 10,
  ];
}

export default StemmerEs;
