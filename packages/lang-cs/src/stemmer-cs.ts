import { Among, SnowballStemmer } from '@nlpjs-neo/core';

class StemmerCs extends SnowballStemmer {
  constructor(container) {
    super(container);
    this.name = 'stemmer-cs';
    this.I_p1 = 0;
    this.I_pV = 0;
  }

  r_mark_regions() {
    this.I_pV = this.limit;
    this.I_p1 = this.limit;
    const v_1 = this.cursor;
    lab0: {
      if (!this.gopast_out_grouping(StemmerCs.g_v, 97, 367)) {
        break lab0;
      }
      this.I_pV = this.cursor;
      if (!this.gopast_out_grouping(StemmerCs.g_v, 97, 367)) {
        break lab0;
      }
      if (!this.gopast_in_grouping(StemmerCs.g_v, 97, 367)) {
        break lab0;
      }
      this.I_p1 = this.cursor;
    }
    this.cursor = v_1;
    return true;
  }
  r_palatalise() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerCs.a_0);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_RV()) {
      return false;
    }
    switch (among_var) {
      case 0:
        return false;
      case 1:
        this.slice_from('k');
        break;
      case 2:
        this.slice_from('h');
        break;
      case 3:
        this.slice_from('ck');
        break;
      case 4:
        this.slice_from('sk');
        break;
    }
    return true;
  }
  r_do_possessive() {
    let v_1;
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerCs.a_1);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_RV()) {
      return false;
    }
    switch (among_var) {
      case 0:
        return false;
      case 1:
        this.slice_del();
        break;
      case 2:
        this.slice_del();
        v_1 = this.limit - this.cursor;
        lab0: {
          if (!this.r_palatalise()) {
            this.cursor = this.limit - v_1;
            break lab0;
          }
        }
        break;
    }
    return true;
  }
  r_do_case() {
    let v_1;
    let v_2;
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerCs.a_2);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        this.slice_del();
        break;
      case 2:
        this.slice_del();
        v_1 = this.limit - this.cursor;
        lab0: {
          if (!this.r_palatalise()) {
            this.cursor = this.limit - v_1;
            break lab0;
          }
        }
        break;
      case 3:
        this.slice_from('e');
        v_2 = this.limit - this.cursor;
        lab1: {
          if (!this.r_palatalise()) {
            this.cursor = this.limit - v_2;
            break lab1;
          }
        }
        break;
    }
    return true;
  }
  r_do_derivational() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerCs.a_3);
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
        this.slice_del();
        break;
      case 2:
        this.slice_from('i');
        if (!this.r_palatalise()) {
          return false;
        }
        break;
      case 3:
        this.slice_from('e');
        if (!this.r_palatalise()) {
          return false;
        }
        break;
      case 4:
        this.slice_from('\u00E9');
        if (!this.r_palatalise()) {
          return false;
        }
        break;
      case 5:
        this.slice_from('\u011B');
        if (!this.r_palatalise()) {
          return false;
        }
        break;
      case 6:
        this.slice_from('\u00ED');
        if (!this.r_palatalise()) {
          return false;
        }
        break;
    }
    return true;
  }
  r_do_deriv_single() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerCs.a_4);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        this.slice_del();
        break;
    }
    return true;
  }
  r_do_augmentative() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerCs.a_5);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        this.slice_del();
        break;
      case 2:
        this.slice_from('i');
        if (!this.r_palatalise()) {
          return false;
        }
        break;
    }
    return true;
  }
  r_do_diminutive() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerCs.a_6);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        this.slice_del();
        break;
      case 2:
        this.slice_from('e');
        if (!this.r_palatalise()) {
          return false;
        }
        break;
      case 3:
        this.slice_from('\u00E9');
        if (!this.r_palatalise()) {
          return false;
        }
        break;
      case 4:
        this.slice_from('i');
        if (!this.r_palatalise()) {
          return false;
        }
        break;
      case 5:
        this.slice_from('\u00ED');
        if (!this.r_palatalise()) {
          return false;
        }
        break;
      case 6:
        this.slice_from('\u00E1');
        break;
      case 7:
        this.slice_from('a');
        break;
      case 8:
        this.slice_from('o');
        break;
      case 9:
        this.slice_from('u');
        break;
    }
    return true;
  }
  r_do_comparative() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerCs.a_7);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        this.slice_from('\u011B');
        if (!this.r_palatalise()) {
          return false;
        }
        break;
      case 2:
        this.slice_from('e');
        if (!this.r_palatalise()) {
          return false;
        }
        break;
    }
    return true;
  }
  r_do_aggressive() {
    const v_1 = this.limit - this.cursor;
    this.r_do_comparative();
    this.cursor = this.limit - v_1;
    const v_2 = this.limit - this.cursor;
    this.r_do_diminutive();
    this.cursor = this.limit - v_2;
    const v_3 = this.limit - this.cursor;
    this.r_do_augmentative();
    this.cursor = this.limit - v_3;
    lab3: {
      const v_4 = this.limit - this.cursor;
      lab4: {
        if (!this.r_do_derivational()) {
          break lab4;
        }
        break lab3;
      }
      this.cursor = this.limit - v_4;
      if (!this.r_do_deriv_single()) {
        return false;
      }
    }
    return true;
  }
  innerStem() {
    if (this.current.length <= 4) {
      return true;
    }

    const v_1 = this.cursor;
    this.r_mark_regions();
    this.cursor = v_1;
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    if (!this.r_do_case()) {
      return false;
    }
    if (!this.r_do_possessive()) {
      return false;
    }
    if (!this.r_do_aggressive()) {
      return false;
    }
    this.cursor = this.limit_backward;
    return true;
  }

  static a_0: Among<StemmerCs>[] = [
    new Among('ce', -1, 1),
    new Among('ze', -1, 2),
    new Among('\u017Ee', -1, 2),
    new Among('ci', -1, 1),
    new Among('\u010Dti', -1, 3),
    new Among('\u0161ti', -1, 4),
    new Among('zi', -1, 2),
    new Among('\u010Di', -1, 1),
    new Among('\u017Ei', -1, 2),
    new Among('\u010Dt\u00E9', -1, 3),
    new Among('\u0161t\u00E9', -1, 4),
    new Among('\u010D', -1, 1),
    new Among('\u010Dt\u011B', -1, 3),
    new Among('\u0161t\u011B', -1, 4),
  ];

  static a_1: Among<StemmerCs>[] = [
    new Among('in', -1, 2),
    new Among('ov', -1, 1),
    new Among('\u016Fv', -1, 1),
  ];

  static a_2: Among<StemmerCs>[] = [
    new Among('a', -1, 1),
    new Among('ama', 0, 1),
    new Among('ata', 0, 1),
    new Among('e', -1, 2),
    new Among('\u011Bte', 3, 2),
    new Among('ech', -1, 2),
    new Among('atech', 5, 1),
    new Among('ich', -1, 2),
    new Among('\u00E1ch', -1, 1),
    new Among('\u00EDch', -1, 2),
    new Among('\u00FDch', -1, 1),
    new Among('i', -1, 2),
    new Among('mi', 11, 1),
    new Among('ami', 12, 1),
    new Among('emi', 12, 2),
    new Among('\u00EDmi', 12, 2),
    new Among('\u00FDmi', 12, 1),
    new Among('\u011Bmi', 12, 2),
    new Among('\u011Bti', 11, 2),
    new Among('ovi', 11, 1),
    new Among('em', -1, 3),
    new Among('\u011Btem', 20, 1),
    new Among('\u00E1m', -1, 1),
    new Among('\u00E9m', -1, 2),
    new Among('\u00EDm', -1, 2),
    new Among('\u00FDm', -1, 1),
    new Among('at\u016Fm', -1, 1),
    new Among('o', -1, 1),
    new Among('iho', 27, 2),
    new Among('\u00E9ho', 27, 2),
    new Among('\u00EDho', 27, 2),
    new Among('es', -1, 2),
    new Among('os', -1, 1),
    new Among('us', -1, 1),
    new Among('at', -1, 1),
    new Among('u', -1, 1),
    new Among('imu', 35, 2),
    new Among('\u00E9mu', 35, 2),
    new Among('ou', 35, 1),
    new Among('y', -1, 1),
    new Among('aty', 39, 1),
    new Among('\u00E1', -1, 1),
    new Among('\u00E9', -1, 1),
    new Among('ov\u00E9', 42, 1),
    new Among('\u00ED', -1, 2),
    new Among('\u00FD', -1, 1),
    new Among('\u011B', -1, 2),
    new Among('\u016F', -1, 1),
  ];

  static a_3: Among<StemmerCs>[] = [
    new Among('ob', -1, 1),
    new Among('itb', -1, 2),
    new Among('ec', -1, 3),
    new Among('inec', 2, 2),
    new Among('obinec', 3, 1),
    new Among('ovec', 2, 1),
    new Among('ic', -1, 2),
    new Among('enic', 6, 3),
    new Among('och', -1, 1),
    new Among('\u00E1sek', -1, 1),
    new Among('nk', -1, 1),
    new Among('isk', -1, 2),
    new Among('ovisk', 11, 1),
    new Among('tk', -1, 1),
    new Among('vk', -1, 1),
    new Among('n\u00EDk', -1, 1),
    new Among('ovn\u00EDk', 15, 1),
    new Among('ov\u00EDk', -1, 1),
    new Among('\u010Dk', -1, 1),
    new Among('i\u0161k', -1, 2),
    new Among('u\u0161k', -1, 1),
    new Among('dl', -1, 1),
    new Among('itel', -1, 2),
    new Among('ul', -1, 1),
    new Among('an', -1, 1),
    new Among('\u010Dan', 24, 1),
    new Among('en', -1, 3),
    new Among('in', -1, 2),
    new Among('\u0161tin', 27, 1),
    new Among('ovin', 27, 1),
    new Among('teln', -1, 1),
    new Among('\u00E1rn', -1, 1),
    new Among('\u00EDrn', -1, 6),
    new Among('oun', -1, 1),
    new Among('loun', 33, 1),
    new Among('ovn', -1, 1),
    new Among('yn', -1, 1),
    new Among('kyn', 36, 1),
    new Among('\u00E1n', -1, 1),
    new Among('i\u00E1n', 38, 2),
    new Among('\u00EDn', -1, 6),
    new Among('\u010Dn', -1, 1),
    new Among('\u011Bn', -1, 5),
    new Among('as', -1, 1),
    new Among('it', -1, 2),
    new Among('ot', -1, 1),
    new Among('ist', -1, 2),
    new Among('ost', -1, 1),
    new Among('nost', 47, 1),
    new Among('out', -1, 1),
    new Among('ovi\u0161t', -1, 1),
    new Among('iv', -1, 2),
    new Among('ov', -1, 1),
    new Among('tv', -1, 1),
    new Among('ctv', 53, 1),
    new Among('stv', 53, 1),
    new Among('ovstv', 55, 1),
    new Among('ovtv', 53, 1),
    new Among('a\u010D', -1, 1),
    new Among('\u00E1\u010D', -1, 1),
    new Among('o\u0148', -1, 1),
    new Among('\u00E1\u0159', -1, 1),
    new Among('k\u00E1\u0159', 61, 1),
    new Among('ion\u00E1\u0159', 61, 2),
    new Among('\u00E9\u0159', -1, 4),
    new Among('n\u00E9\u0159', 64, 1),
    new Among('\u00ED\u0159', -1, 6),
    new Among('ou\u0161', -1, 1),
  ];

  static a_4: Among<StemmerCs>[] = [
    new Among('c', -1, 1),
    new Among('k', -1, 1),
    new Among('l', -1, 1),
    new Among('n', -1, 1),
    new Among('t', -1, 1),
    new Among('\u010D', -1, 1),
  ];

  static a_5: Among<StemmerCs>[] = [
    new Among('isk', -1, 2),
    new Among('\u00E1k', -1, 1),
    new Among('izn', -1, 2),
    new Among('ajzn', -1, 1),
  ];

  static a_6: Among<StemmerCs>[] = [
    new Among('k', -1, 1),
    new Among('ak', 0, 7),
    new Among('ek', 0, 2),
    new Among('anek', 2, 1),
    new Among('enek', 2, 2),
    new Among('inek', 2, 4),
    new Among('onek', 2, 1),
    new Among('unek', 2, 1),
    new Among('\u00E1nek', 2, 1),
    new Among('a\u010Dek', 2, 1),
    new Among('e\u010Dek', 2, 2),
    new Among('i\u010Dek', 2, 4),
    new Among('o\u010Dek', 2, 1),
    new Among('u\u010Dek', 2, 1),
    new Among('\u00E1\u010Dek', 2, 1),
    new Among('\u00E9\u010Dek', 2, 3),
    new Among('\u00ED\u010Dek', 2, 5),
    new Among('ou\u0161ek', 2, 1),
    new Among('ik', 0, 4),
    new Among('ank', 0, 1),
    new Among('enk', 0, 1),
    new Among('ink', 0, 1),
    new Among('onk', 0, 1),
    new Among('unk', 0, 1),
    new Among('\u00E1nk', 0, 1),
    new Among('\u00E9nk', 0, 1),
    new Among('\u00EDnk', 0, 1),
    new Among('ok', 0, 8),
    new Among('\u00E1tk', 0, 1),
    new Among('uk', 0, 9),
    new Among('\u00E1k', 0, 6),
    new Among('\u00E9k', 0, 3),
    new Among('\u00EDk', 0, 5),
    new Among('a\u010Dk', 0, 1),
    new Among('e\u010Dk', 0, 1),
    new Among('i\u010Dk', 0, 1),
    new Among('o\u010Dk', 0, 1),
    new Among('u\u010Dk', 0, 1),
    new Among('\u00E1\u010Dk', 0, 1),
    new Among('\u00E9\u010Dk', 0, 1),
    new Among('\u00ED\u010Dk', 0, 1),
    new Among('u\u0161k', 0, 1),
  ];

  static a_7: Among<StemmerCs>[] = [
    new Among('ej\u0161', -1, 2),
    new Among('\u011Bj\u0161', -1, 1),
  ];

  static g_v: number[] = [
    17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 4, 18, 0, 0, 0, 4,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 64,
  ];
}

export default StemmerCs;
