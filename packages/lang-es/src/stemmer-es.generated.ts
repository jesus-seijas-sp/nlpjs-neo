import { Among, SnowballStemmer } from '@nlpjs-neo/core';
import type { ContainerHolder } from '@nlpjs-neo/core';

/**
 * Stemmer written by tools/snowball from spanish.sbl of Snowball 2.2.0 with our changes (tools/snowball/edits.ts). Do not edit it by hand:
 * change the Snowball program and generate it again.
 */
class SnowballStemmerEs extends SnowballStemmer {
  constructor(container?: ContainerHolder) {
    super(container);
    this.name = 'stemmer-es';
    this.I_pV = 0;
    this.I_p1 = 0;
    this.I_p2 = 0;
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
          if (!this.in_grouping(SnowballStemmerEs.g_v, 97, 117)) {
            break lab2;
          }
          lab3: {
            const v_3 = this.cursor;
            lab4: {
              if (!this.out_grouping(SnowballStemmerEs.g_v, 97, 117)) {
                break lab4;
              }
              if (!this.gopast_in_grouping(SnowballStemmerEs.g_v, 97, 117)) {
                break lab4;
              }
              break lab3;
            }
            this.cursor = v_3;
            if (!this.in_grouping(SnowballStemmerEs.g_v, 97, 117)) {
              break lab2;
            }
            if (!this.gopast_out_grouping(SnowballStemmerEs.g_v, 97, 117)) {
              break lab2;
            }
          }
          break lab1;
        }
        this.cursor = v_2;
        if (!this.out_grouping(SnowballStemmerEs.g_v, 97, 117)) {
          break lab0;
        }
        lab5: {
          const v_4 = this.cursor;
          lab6: {
            if (!this.out_grouping(SnowballStemmerEs.g_v, 97, 117)) {
              break lab6;
            }
            if (!this.gopast_in_grouping(SnowballStemmerEs.g_v, 97, 117)) {
              break lab6;
            }
            break lab5;
          }
          this.cursor = v_4;
          if (!this.in_grouping(SnowballStemmerEs.g_v, 97, 117)) {
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
      if (!this.gopast_in_grouping(SnowballStemmerEs.g_v, 97, 117)) {
        break lab7;
      }
      if (!this.gopast_out_grouping(SnowballStemmerEs.g_v, 97, 117)) {
        break lab7;
      }
      this.I_p1 = this.cursor;
      if (!this.gopast_in_grouping(SnowballStemmerEs.g_v, 97, 117)) {
        break lab7;
      }
      if (!this.gopast_out_grouping(SnowballStemmerEs.g_v, 97, 117)) {
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
        const among_var = this.find_slice(SnowballStemmerEs.a_0);
        switch (among_var) {
          case 1:
            this.slice_from('a');
            break;
          case 2:
            this.slice_from('e');
            break;
          case 3:
            this.slice_from('i');
            break;
          case 4:
            this.slice_from('o');
            break;
          case 5:
            this.slice_from('u');
            break;
          case 6:
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

  r_R2b(): boolean {
    return this.cursor * 2 >= this.current.length;
  }

  r_attached_pronoun(): boolean {
    if (this.find_slice_b(SnowballStemmerEs.a_1) === 0) {
      return false;
    }
    const among_var = this.find_among_b(SnowballStemmerEs.a_2);
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
        if (!this.eq_s_b('u')) {
          return false;
        }
        this.slice_del();
        break;
    }
    return true;
  }

  r_standard_suffix(): boolean {
    let among_var: number;
    among_var = this.find_slice_b(SnowballStemmerEs.a_6);
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
        if (!this.r_R2b()) {
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
      case 6: {
        if (!this.r_R1()) {
          return false;
        }
        this.slice_del();
        const v_2 = this.limit - this.cursor;
        lab1: {
          among_var = this.find_slice_b(SnowballStemmerEs.a_3);
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
      case 7: {
        if (!this.r_R2()) {
          return false;
        }
        this.slice_del();
        const v_3 = this.limit - this.cursor;
        lab2: {
          among_var = this.find_slice_b(SnowballStemmerEs.a_4);
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
      case 8: {
        if (!this.r_R2()) {
          return false;
        }
        this.slice_del();
        const v_4 = this.limit - this.cursor;
        lab3: {
          among_var = this.find_slice_b(SnowballStemmerEs.a_5);
          if (among_var === 0) {
            this.cursor = this.limit - v_4;
            break lab3;
          }
          switch (among_var) {
            case 1:
              if (!this.r_R2()) {
                this.cursor = this.limit - v_4;
                break lab3;
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
        const v_5 = this.limit - this.cursor;
        lab4: {
          this.ket = this.cursor;
          if (!this.eq_s_b('at')) {
            this.cursor = this.limit - v_5;
            break lab4;
          }
          this.bra = this.cursor;
          if (!this.r_R2()) {
            this.cursor = this.limit - v_5;
            break lab4;
          }
          this.slice_del();
        }
        break;
      }
    }
    return true;
  }

  r_y_verb_suffix(): boolean {
    if (this.cursor < this.I_pV) {
      return false;
    }
    const v_1 = this.limit_backward;
    this.limit_backward = this.I_pV;
    const among_var = this.find_slice_b(SnowballStemmerEs.a_7);
    if (among_var === 0) {
      this.limit_backward = v_1;
      return false;
    }
    this.limit_backward = v_1;
    switch (among_var) {
      case 1:
        if (!this.eq_s_b('u')) {
          return false;
        }
        this.slice_del();
        break;
    }
    return true;
  }

  r_verb_suffix(): boolean {
    if (this.cursor < this.I_pV) {
      return false;
    }
    const v_1 = this.limit_backward;
    this.limit_backward = this.I_pV;
    const among_var = this.find_slice_b(SnowballStemmerEs.a_8);
    if (among_var === 0) {
      this.limit_backward = v_1;
      return false;
    }
    this.limit_backward = v_1;
    switch (among_var) {
      case 1: {
        const v_2 = this.limit - this.cursor;
        lab0: {
          if (!this.eq_s_b('u')) {
            this.cursor = this.limit - v_2;
            break lab0;
          }
          const v_3 = this.limit - this.cursor;
          if (!this.eq_s_b('g')) {
            this.cursor = this.limit - v_2;
            break lab0;
          }
          this.cursor = this.limit - v_3;
        }
        this.bra = this.cursor;
        this.slice_del();
        break;
      }
      case 2:
        this.slice_del();
        break;
    }
    return true;
  }

  r_residual_suffix(): boolean {
    const among_var = this.find_slice_b(SnowballStemmerEs.a_9);
    if (among_var === 0) {
      return false;
    }
    switch (among_var) {
      case 1:
        if (!this.r_RV()) {
          return false;
        }
        this.slice_del();
        break;
      case 2: {
        if (!this.r_RV()) {
          return false;
        }
        this.slice_del();
        const v_1 = this.limit - this.cursor;
        lab0: {
          this.ket = this.cursor;
          if (!this.eq_s_b('u')) {
            this.cursor = this.limit - v_1;
            break lab0;
          }
          this.bra = this.cursor;
          const v_2 = this.limit - this.cursor;
          if (!this.eq_s_b('g')) {
            this.cursor = this.limit - v_1;
            break lab0;
          }
          this.cursor = this.limit - v_2;
          if (!this.r_RV()) {
            this.cursor = this.limit - v_1;
            break lab0;
          }
          this.slice_del();
        }
        break;
      }
    }
    return true;
  }

  innerStem(): boolean {
    this.r_mark_regions();
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    this.do_backward(this.r_attached_pronoun);
    const v_2 = this.limit - this.cursor;
    lab0: {
      lab1: {
        const v_3 = this.limit - this.cursor;
        lab2: {
          if (!this.r_standard_suffix()) {
            break lab2;
          }
          break lab1;
        }
        this.cursor = this.limit - v_3;
        lab3: {
          if (!this.r_y_verb_suffix()) {
            break lab3;
          }
          break lab1;
        }
        this.cursor = this.limit - v_3;
        if (!this.r_verb_suffix()) {
          break lab0;
        }
      }
    }
    this.cursor = this.limit - v_2;
    this.do_backward(this.r_residual_suffix);
    this.cursor = this.limit_backward;
    this.do_forward(this.r_postlude);
    return true;
  }

  static g_v: number[] = [17, 65, 16];

  static a_0: Among<SnowballStemmerEs>[] = [
    new Among('', -1, 6),
    new Among('a', 0, 1),
    new Among('e', 0, 2),
    new Among('i', 0, 3),
    new Among('o', 0, 4),
    new Among('u', 0, 5),
  ];

  static a_1: Among<SnowballStemmerEs>[] = [
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

  static a_2: Among<SnowballStemmerEs>[] = [
    new Among('ando', -1, 1),
    new Among('iendo', -1, 1),
    new Among('yendo', -1, 2),
    new Among('ar', -1, 1),
    new Among('er', -1, 1),
    new Among('ir', -1, 1),
  ];

  static a_3: Among<SnowballStemmerEs>[] = [
    new Among('ic', -1, -1),
    new Among('ad', -1, -1),
    new Among('os', -1, -1),
    new Among('iv', -1, 1),
  ];

  static a_4: Among<SnowballStemmerEs>[] = [
    new Among('able', -1, 1),
    new Among('ible', -1, 1),
    new Among('ante', -1, 1),
  ];

  static a_5: Among<SnowballStemmerEs>[] = [
    new Among('ic', -1, 1),
    new Among('abil', -1, 1),
    new Among('iv', -1, 1),
  ];

  static a_6: Among<SnowballStemmerEs>[] = [
    new Among('ica', -1, 1),
    new Among('ancia', -1, 2),
    new Among('encia', -1, 5),
    new Among('logia', -1, 3),
    new Among('adora', -1, 2),
    new Among('osa', -1, 1),
    new Among('ista', -1, 1),
    new Among('iva', -1, 9),
    new Among('anza', -1, 1),
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
    new Among('logias', -1, 3),
    new Among('adoras', -1, 2),
    new Among('osas', -1, 1),
    new Among('istas', -1, 1),
    new Among('ivas', -1, 9),
    new Among('anzas', -1, 1),
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

  static a_7: Among<SnowballStemmerEs>[] = [
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

  static a_8: Among<SnowballStemmerEs>[] = [
    new Among('aba', -1, 2),
    new Among('ada', -1, 2),
    new Among('ida', -1, 2),
    new Among('ea', -1, 2),
    new Among('ia', -1, 2),
    new Among('aria', 4, 2),
    new Among('eria', 4, 2),
    new Among('iria', 4, 2),
    new Among('ara', -1, 2),
    new Among('era', -1, 2),
    new Among('iera', 9, 2),
    new Among('ira', -1, 2),
    new Among('ad', -1, 2),
    new Among('ed', -1, 2),
    new Among('id', -1, 2),
    new Among('ee', -1, 2),
    new Among('are', -1, 2),
    new Among('ere', -1, 2),
    new Among('iere', 17, 2),
    new Among('ire', -1, 2),
    new Among('ase', -1, 2),
    new Among('iese', -1, 2),
    new Among('aste', -1, 2),
    new Among('iste', -1, 2),
    new Among('an', -1, 2),
    new Among('aban', 24, 2),
    new Among('ian', 24, 2),
    new Among('arian', 26, 2),
    new Among('erian', 26, 2),
    new Among('irian', 26, 2),
    new Among('aran', 24, 2),
    new Among('eran', 24, 2),
    new Among('ieran', 31, 2),
    new Among('iran', 24, 2),
    new Among('en', -1, 1),
    new Among('aren', 34, 2),
    new Among('eren', 34, 2),
    new Among('ieren', 36, 2),
    new Among('asen', 34, 2),
    new Among('esen', 34, 2),
    new Among('iesen', 39, 2),
    new Among('aron', -1, 2),
    new Among('ieron', -1, 2),
    new Among('ado', -1, 2),
    new Among('ido', -1, 2),
    new Among('ando', -1, 2),
    new Among('iendo', -1, 2),
    new Among('eo', -1, 2),
    new Among('io', -1, 2),
    new Among('ar', -1, 2),
    new Among('er', -1, 2),
    new Among('ir', -1, 2),
    new Among('s', -1, 2),
    new Among('as', 52, 2),
    new Among('abas', 53, 2),
    new Among('adas', 53, 2),
    new Among('idas', 53, 2),
    new Among('ias', 53, 2),
    new Among('arias', 57, 2),
    new Among('erias', 57, 2),
    new Among('irias', 57, 2),
    new Among('aras', 53, 2),
    new Among('eras', 53, 2),
    new Among('ieras', 62, 2),
    new Among('iras', 53, 2),
    new Among('es', 52, 1),
    new Among('ares', 65, 2),
    new Among('ieres', 65, 2),
    new Among('ases', 65, 2),
    new Among('ieses', 65, 2),
    new Among('is', 52, 2),
    new Among('ais', 70, 2),
    new Among('abais', 71, 2),
    new Among('iais', 71, 2),
    new Among('ariais', 73, 2),
    new Among('eriais', 73, 2),
    new Among('iriais', 73, 2),
    new Among('arais', 71, 2),
    new Among('ierais', 71, 2),
    new Among('eis', 70, 1),
    new Among('areis', 79, 2),
    new Among('ereis', 79, 2),
    new Among('iereis', 81, 2),
    new Among('ireis', 79, 2),
    new Among('aseis', 79, 2),
    new Among('ieseis', 79, 2),
    new Among('asteis', 79, 2),
    new Among('isteis', 79, 2),
    new Among('os', 52, 2),
    new Among('ados', 88, 2),
    new Among('idos', 88, 2),
    new Among('ios', 88, 2),
    new Among('amos', 88, 2),
    new Among('abamos', 92, 2),
    new Among('iamos', 92, 2),
    new Among('ariamos', 94, 2),
    new Among('eriamos', 94, 2),
    new Among('iriamos', 94, 2),
    new Among('aramos', 92, 2),
    new Among('ieramos', 92, 2),
    new Among('emos', 88, 1),
    new Among('aremos', 100, 2),
    new Among('eremos', 100, 2),
    new Among('ieremos', 102, 2),
    new Among('iremos', 100, 2),
    new Among('asemos', 100, 2),
    new Among('iesemos', 100, 2),
    new Among('imos', 88, 2),
  ];

  static a_9: Among<SnowballStemmerEs>[] = [
    new Among('a', -1, 1),
    new Among('e', -1, 2),
    new Among('i', -1, 1),
    new Among('o', -1, 1),
    new Among('os', -1, 1),
  ];
}

export default SnowballStemmerEs;
