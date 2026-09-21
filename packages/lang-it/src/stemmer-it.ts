import { Among, SnowballStemmer } from '@nlpjs-neo/core';
import type { ContainerHolder } from '@nlpjs-neo/core';

/**
 * Stemmer written by tools/snowball from italian.sbl of Snowball 2.2.0. Do not edit it by hand:
 * change the Snowball program and generate it again.
 */
class StemmerIt extends SnowballStemmer {
  constructor(container?: ContainerHolder) {
    super(container);
    this.name = 'stemmer-it';
    this.I_pV = 0;
    this.I_p1 = 0;
    this.I_p2 = 0;
  }

  r_prelude(): boolean {
    const v_1 = this.cursor;
    for (;;) {
      const v_2 = this.cursor;
      lab0: {
        const among_var = this.find_slice(StemmerIt.a_0);
        switch (among_var) {
          case 1:
            this.slice_from('\u00E0');
            break;
          case 2:
            this.slice_from('\u00E8');
            break;
          case 3:
            this.slice_from('\u00EC');
            break;
          case 4:
            this.slice_from('\u00F2');
            break;
          case 5:
            this.slice_from('\u00F9');
            break;
          case 6:
            this.slice_from('qU');
            break;
          case 7:
            if (this.cursor >= this.limit) {
              break lab0;
            }
            this.cursor++;
            break;
        }
        continue;
      }
      this.cursor = v_2;
      break;
    }
    this.cursor = v_1;
    for (;;) {
      const v_3 = this.cursor;
      lab1: {
        lab2: for (;;) {
          const v_4 = this.cursor;
          lab3: {
            if (!this.in_grouping(StemmerIt.g_v, 97, 249)) {
              break lab3;
            }
            this.bra = this.cursor;
            lab4: {
              const v_5 = this.cursor;
              lab5: {
                if (!this.eq_s('u')) {
                  break lab5;
                }
                this.ket = this.cursor;
                if (!this.in_grouping(StemmerIt.g_v, 97, 249)) {
                  break lab5;
                }
                this.slice_from('U');
                break lab4;
              }
              this.cursor = v_5;
              if (!this.eq_s('i')) {
                break lab3;
              }
              this.ket = this.cursor;
              if (!this.in_grouping(StemmerIt.g_v, 97, 249)) {
                break lab3;
              }
              this.slice_from('I');
            }
            this.cursor = v_4;
            break lab2;
          }
          this.cursor = v_4;
          if (this.cursor >= this.limit) {
            break lab1;
          }
          this.cursor++;
        }
        continue;
      }
      this.cursor = v_3;
      break;
    }
    return true;
  }

  r_mark_regions(): boolean {
    this.I_pV = this.limit;
    this.I_p1 = this.limit;
    this.I_p2 = this.limit;
    const v_1 = this.cursor;
    lab0: {
      lab1: {
        const v_2 = this.cursor;
        lab2: {
          if (!this.in_grouping(StemmerIt.g_v, 97, 249)) {
            break lab2;
          }
          lab3: {
            const v_3 = this.cursor;
            lab4: {
              if (!this.out_grouping(StemmerIt.g_v, 97, 249)) {
                break lab4;
              }
              if (!this.gopast_in_grouping(StemmerIt.g_v, 97, 249)) {
                break lab4;
              }
              break lab3;
            }
            this.cursor = v_3;
            if (!this.in_grouping(StemmerIt.g_v, 97, 249)) {
              break lab2;
            }
            if (!this.gopast_out_grouping(StemmerIt.g_v, 97, 249)) {
              break lab2;
            }
          }
          break lab1;
        }
        this.cursor = v_2;
        if (!this.out_grouping(StemmerIt.g_v, 97, 249)) {
          break lab0;
        }
        lab5: {
          const v_4 = this.cursor;
          lab6: {
            if (!this.out_grouping(StemmerIt.g_v, 97, 249)) {
              break lab6;
            }
            if (!this.gopast_in_grouping(StemmerIt.g_v, 97, 249)) {
              break lab6;
            }
            break lab5;
          }
          this.cursor = v_4;
          if (!this.in_grouping(StemmerIt.g_v, 97, 249)) {
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
    const v_5 = this.cursor;
    lab7: {
      if (!this.gopast_in_grouping(StemmerIt.g_v, 97, 249)) {
        break lab7;
      }
      if (!this.gopast_out_grouping(StemmerIt.g_v, 97, 249)) {
        break lab7;
      }
      this.I_p1 = this.cursor;
      if (!this.gopast_in_grouping(StemmerIt.g_v, 97, 249)) {
        break lab7;
      }
      if (!this.gopast_out_grouping(StemmerIt.g_v, 97, 249)) {
        break lab7;
      }
      this.I_p2 = this.cursor;
    }
    this.cursor = v_5;
    return true;
  }

  r_postlude(): boolean {
    for (;;) {
      const v_1 = this.cursor;
      lab0: {
        const among_var = this.find_slice(StemmerIt.a_1);
        switch (among_var) {
          case 1:
            this.slice_from('i');
            break;
          case 2:
            this.slice_from('u');
            break;
          case 3:
            if (this.cursor >= this.limit) {
              break lab0;
            }
            this.cursor++;
            break;
        }
        continue;
      }
      this.cursor = v_1;
      break;
    }
    return true;
  }

  r_attached_pronoun(): boolean {
    if (this.find_slice_b(StemmerIt.a_3) === 0) {
      return false;
    }
    const among_var = this.find_among_b(StemmerIt.a_2);
    if (among_var === 0) {
      return false;
    }
    if (!this.r_RV()) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_del();
        break;
      case 2:
        this.slice_from('e');
        break;
    }
    return true;
  }

  r_standard_suffix(): boolean {
    let among_var: number;
    among_var = this.find_slice_b(StemmerIt.a_6);
    if (among_var === 0) {
      return false;
    }
    switch (among_var) {
      case 1:
        if (!this.r_R2()) {
          return false;
        }
        this.slice_del();
        break;
      case 2: {
        if (!this.r_R2()) {
          return false;
        }
        this.slice_del();
        const v_1 = this.limit - this.cursor;
        lab0: {
          this.ket = this.cursor;
          if (!this.eq_s_b('ic')) {
            this.cursor = this.limit - v_1;
            break lab0;
          }
          this.bra = this.cursor;
          if (!this.r_R2()) {
            this.cursor = this.limit - v_1;
            break lab0;
          }
          this.slice_del();
        }
        break;
      }
      case 3:
        if (!this.r_R2()) {
          return false;
        }
        this.slice_from('log');
        break;
      case 4:
        if (!this.r_R2()) {
          return false;
        }
        this.slice_from('u');
        break;
      case 5:
        if (!this.r_R2()) {
          return false;
        }
        this.slice_from('ente');
        break;
      case 6:
        if (!this.r_RV()) {
          return false;
        }
        this.slice_del();
        break;
      case 7: {
        if (!this.r_R1()) {
          return false;
        }
        this.slice_del();
        const v_2 = this.limit - this.cursor;
        lab1: {
          among_var = this.find_slice_b(StemmerIt.a_4);
          if (among_var === 0) {
            this.cursor = this.limit - v_2;
            break lab1;
          }
          if (!this.r_R2()) {
            this.cursor = this.limit - v_2;
            break lab1;
          }
          this.slice_del();
          switch (among_var) {
            case 1:
              this.ket = this.cursor;
              if (!this.eq_s_b('at')) {
                this.cursor = this.limit - v_2;
                break lab1;
              }
              this.bra = this.cursor;
              if (!this.r_R2()) {
                this.cursor = this.limit - v_2;
                break lab1;
              }
              this.slice_del();
              break;
          }
        }
        break;
      }
      case 8: {
        if (!this.r_R2()) {
          return false;
        }
        this.slice_del();
        const v_3 = this.limit - this.cursor;
        lab2: {
          among_var = this.find_slice_b(StemmerIt.a_5);
          if (among_var === 0) {
            this.cursor = this.limit - v_3;
            break lab2;
          }
          switch (among_var) {
            case 1:
              if (!this.r_R2()) {
                this.cursor = this.limit - v_3;
                break lab2;
              }
              this.slice_del();
              break;
          }
        }
        break;
      }
      case 9: {
        if (!this.r_R2()) {
          return false;
        }
        this.slice_del();
        const v_4 = this.limit - this.cursor;
        lab3: {
          this.ket = this.cursor;
          if (!this.eq_s_b('at')) {
            this.cursor = this.limit - v_4;
            break lab3;
          }
          this.bra = this.cursor;
          if (!this.r_R2()) {
            this.cursor = this.limit - v_4;
            break lab3;
          }
          this.slice_del();
          this.ket = this.cursor;
          if (!this.eq_s_b('ic')) {
            this.cursor = this.limit - v_4;
            break lab3;
          }
          this.bra = this.cursor;
          if (!this.r_R2()) {
            this.cursor = this.limit - v_4;
            break lab3;
          }
          this.slice_del();
        }
        break;
      }
    }
    return true;
  }

  r_verb_suffix(): boolean {
    if (this.cursor < this.I_pV) {
      return false;
    }
    const v_1 = this.limit_backward;
    this.limit_backward = this.I_pV;
    const among_var = this.find_slice_b(StemmerIt.a_7);
    if (among_var === 0) {
      this.limit_backward = v_1;
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_del();
        break;
    }
    this.limit_backward = v_1;
    return true;
  }

  r_vowel_suffix(): boolean {
    const v_1 = this.limit - this.cursor;
    lab0: {
      this.ket = this.cursor;
      if (!this.in_grouping_b(StemmerIt.g_AEIO, 97, 242)) {
        this.cursor = this.limit - v_1;
        break lab0;
      }
      this.bra = this.cursor;
      if (!this.r_RV()) {
        this.cursor = this.limit - v_1;
        break lab0;
      }
      this.slice_del();
      this.ket = this.cursor;
      if (!this.eq_s_b('i')) {
        this.cursor = this.limit - v_1;
        break lab0;
      }
      this.bra = this.cursor;
      if (!this.r_RV()) {
        this.cursor = this.limit - v_1;
        break lab0;
      }
      this.slice_del();
    }
    const v_2 = this.limit - this.cursor;
    lab1: {
      this.ket = this.cursor;
      if (!this.eq_s_b('h')) {
        this.cursor = this.limit - v_2;
        break lab1;
      }
      this.bra = this.cursor;
      if (!this.in_grouping_b(StemmerIt.g_CG, 99, 103)) {
        this.cursor = this.limit - v_2;
        break lab1;
      }
      if (!this.r_RV()) {
        this.cursor = this.limit - v_2;
        break lab1;
      }
      this.slice_del();
    }
    return true;
  }

  innerStem(): boolean {
    this.do_forward(this.r_prelude);
    this.r_mark_regions();
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    this.do_backward(this.r_attached_pronoun);
    const v_3 = this.limit - this.cursor;
    lab0: {
      lab1: {
        const v_4 = this.limit - this.cursor;
        lab2: {
          if (!this.r_standard_suffix()) {
            break lab2;
          }
          break lab1;
        }
        this.cursor = this.limit - v_4;
        if (!this.r_verb_suffix()) {
          break lab0;
        }
      }
    }
    this.cursor = this.limit - v_3;
    this.do_backward(this.r_vowel_suffix);
    this.cursor = this.limit_backward;
    this.do_forward(this.r_postlude);
    return true;
  }

  static g_v: number[] = [
    17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128, 8, 2, 1,
  ];

  static g_AEIO: number[] = [
    17, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128, 8, 2,
  ];

  static g_CG: number[] = [17];

  static a_0: Among<StemmerIt>[] = [
    new Among('', -1, 7),
    new Among('qu', 0, 6),
    new Among('\u00E1', 0, 1),
    new Among('\u00E9', 0, 2),
    new Among('\u00ED', 0, 3),
    new Among('\u00F3', 0, 4),
    new Among('\u00FA', 0, 5),
  ];

  static a_1: Among<StemmerIt>[] = [
    new Among('', -1, 3),
    new Among('I', 0, 1),
    new Among('U', 0, 2),
  ];

  static a_2: Among<StemmerIt>[] = [
    new Among('ando', -1, 1),
    new Among('endo', -1, 1),
    new Among('ar', -1, 2),
    new Among('er', -1, 2),
    new Among('ir', -1, 2),
  ];

  static a_3: Among<StemmerIt>[] = [
    new Among('la', -1, -1),
    new Among('cela', 0, -1),
    new Among('gliela', 0, -1),
    new Among('mela', 0, -1),
    new Among('tela', 0, -1),
    new Among('vela', 0, -1),
    new Among('le', -1, -1),
    new Among('cele', 6, -1),
    new Among('gliele', 6, -1),
    new Among('mele', 6, -1),
    new Among('tele', 6, -1),
    new Among('vele', 6, -1),
    new Among('ne', -1, -1),
    new Among('cene', 12, -1),
    new Among('gliene', 12, -1),
    new Among('mene', 12, -1),
    new Among('sene', 12, -1),
    new Among('tene', 12, -1),
    new Among('vene', 12, -1),
    new Among('ci', -1, -1),
    new Among('li', -1, -1),
    new Among('celi', 20, -1),
    new Among('glieli', 20, -1),
    new Among('meli', 20, -1),
    new Among('teli', 20, -1),
    new Among('veli', 20, -1),
    new Among('gli', 20, -1),
    new Among('mi', -1, -1),
    new Among('si', -1, -1),
    new Among('ti', -1, -1),
    new Among('vi', -1, -1),
    new Among('lo', -1, -1),
    new Among('celo', 31, -1),
    new Among('glielo', 31, -1),
    new Among('melo', 31, -1),
    new Among('telo', 31, -1),
    new Among('velo', 31, -1),
  ];

  static a_4: Among<StemmerIt>[] = [
    new Among('ic', -1, -1),
    new Among('abil', -1, -1),
    new Among('os', -1, -1),
    new Among('iv', -1, 1),
  ];

  static a_5: Among<StemmerIt>[] = [
    new Among('ic', -1, 1),
    new Among('abil', -1, 1),
    new Among('iv', -1, 1),
  ];

  static a_6: Among<StemmerIt>[] = [
    new Among('ica', -1, 1),
    new Among('logia', -1, 3),
    new Among('osa', -1, 1),
    new Among('ista', -1, 1),
    new Among('iva', -1, 9),
    new Among('anza', -1, 1),
    new Among('enza', -1, 5),
    new Among('ice', -1, 1),
    new Among('atrice', 7, 1),
    new Among('iche', -1, 1),
    new Among('logie', -1, 3),
    new Among('abile', -1, 1),
    new Among('ibile', -1, 1),
    new Among('usione', -1, 4),
    new Among('azione', -1, 2),
    new Among('uzione', -1, 4),
    new Among('atore', -1, 2),
    new Among('ose', -1, 1),
    new Among('ante', -1, 1),
    new Among('mente', -1, 1),
    new Among('amente', 19, 7),
    new Among('iste', -1, 1),
    new Among('ive', -1, 9),
    new Among('anze', -1, 1),
    new Among('enze', -1, 5),
    new Among('ici', -1, 1),
    new Among('atrici', 25, 1),
    new Among('ichi', -1, 1),
    new Among('abili', -1, 1),
    new Among('ibili', -1, 1),
    new Among('ismi', -1, 1),
    new Among('usioni', -1, 4),
    new Among('azioni', -1, 2),
    new Among('uzioni', -1, 4),
    new Among('atori', -1, 2),
    new Among('osi', -1, 1),
    new Among('anti', -1, 1),
    new Among('amenti', -1, 6),
    new Among('imenti', -1, 6),
    new Among('isti', -1, 1),
    new Among('ivi', -1, 9),
    new Among('ico', -1, 1),
    new Among('ismo', -1, 1),
    new Among('oso', -1, 1),
    new Among('amento', -1, 6),
    new Among('imento', -1, 6),
    new Among('ivo', -1, 9),
    new Among('it\u00E0', -1, 8),
    new Among('ist\u00E0', -1, 1),
    new Among('ist\u00E8', -1, 1),
    new Among('ist\u00EC', -1, 1),
  ];

  static a_7: Among<StemmerIt>[] = [
    new Among('isca', -1, 1),
    new Among('enda', -1, 1),
    new Among('ata', -1, 1),
    new Among('ita', -1, 1),
    new Among('uta', -1, 1),
    new Among('ava', -1, 1),
    new Among('eva', -1, 1),
    new Among('iva', -1, 1),
    new Among('erebbe', -1, 1),
    new Among('irebbe', -1, 1),
    new Among('isce', -1, 1),
    new Among('ende', -1, 1),
    new Among('are', -1, 1),
    new Among('ere', -1, 1),
    new Among('ire', -1, 1),
    new Among('asse', -1, 1),
    new Among('ate', -1, 1),
    new Among('avate', 16, 1),
    new Among('evate', 16, 1),
    new Among('ivate', 16, 1),
    new Among('ete', -1, 1),
    new Among('erete', 20, 1),
    new Among('irete', 20, 1),
    new Among('ite', -1, 1),
    new Among('ereste', -1, 1),
    new Among('ireste', -1, 1),
    new Among('ute', -1, 1),
    new Among('erai', -1, 1),
    new Among('irai', -1, 1),
    new Among('isci', -1, 1),
    new Among('endi', -1, 1),
    new Among('erei', -1, 1),
    new Among('irei', -1, 1),
    new Among('assi', -1, 1),
    new Among('ati', -1, 1),
    new Among('iti', -1, 1),
    new Among('eresti', -1, 1),
    new Among('iresti', -1, 1),
    new Among('uti', -1, 1),
    new Among('avi', -1, 1),
    new Among('evi', -1, 1),
    new Among('ivi', -1, 1),
    new Among('isco', -1, 1),
    new Among('ando', -1, 1),
    new Among('endo', -1, 1),
    new Among('Yamo', -1, 1),
    new Among('iamo', -1, 1),
    new Among('avamo', -1, 1),
    new Among('evamo', -1, 1),
    new Among('ivamo', -1, 1),
    new Among('eremo', -1, 1),
    new Among('iremo', -1, 1),
    new Among('assimo', -1, 1),
    new Among('ammo', -1, 1),
    new Among('emmo', -1, 1),
    new Among('eremmo', 54, 1),
    new Among('iremmo', 54, 1),
    new Among('immo', -1, 1),
    new Among('ano', -1, 1),
    new Among('iscano', 58, 1),
    new Among('avano', 58, 1),
    new Among('evano', 58, 1),
    new Among('ivano', 58, 1),
    new Among('eranno', -1, 1),
    new Among('iranno', -1, 1),
    new Among('ono', -1, 1),
    new Among('iscono', 65, 1),
    new Among('arono', 65, 1),
    new Among('erono', 65, 1),
    new Among('irono', 65, 1),
    new Among('erebbero', -1, 1),
    new Among('irebbero', -1, 1),
    new Among('assero', -1, 1),
    new Among('essero', -1, 1),
    new Among('issero', -1, 1),
    new Among('ato', -1, 1),
    new Among('ito', -1, 1),
    new Among('uto', -1, 1),
    new Among('avo', -1, 1),
    new Among('evo', -1, 1),
    new Among('ivo', -1, 1),
    new Among('ar', -1, 1),
    new Among('ir', -1, 1),
    new Among('er\u00E0', -1, 1),
    new Among('ir\u00E0', -1, 1),
    new Among('er\u00F2', -1, 1),
    new Among('ir\u00F2', -1, 1),
  ];
}

export default StemmerIt;
