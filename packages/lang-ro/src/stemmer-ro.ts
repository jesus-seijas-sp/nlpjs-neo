import { Among, SnowballStemmer } from '@nlpjs-neo/core';
import type { ContainerHolder } from '@nlpjs-neo/core';

/**
 * Stemmer written by tools/snowball from romanian.sbl of Snowball 2.2.0. Do not edit it by hand:
 * change the Snowball program and generate it again.
 */
class StemmerRo extends SnowballStemmer {
  declare B_standard_suffix_removed: boolean;

  constructor(container?: ContainerHolder) {
    super(container);
    this.name = 'stemmer-ro';
    this.I_pV = 0;
    this.I_p1 = 0;
    this.I_p2 = 0;
    this.B_standard_suffix_removed = false;
  }

  r_prelude(): boolean {
    for (;;) {
      const v_1 = this.cursor;
      lab0: {
        lab1: for (;;) {
          const v_2 = this.cursor;
          lab2: {
            if (!this.in_grouping(StemmerRo.g_v, 97, 259)) {
              break lab2;
            }
            this.bra = this.cursor;
            lab3: {
              const v_3 = this.cursor;
              lab4: {
                if (!this.eq_s('u')) {
                  break lab4;
                }
                this.ket = this.cursor;
                if (!this.in_grouping(StemmerRo.g_v, 97, 259)) {
                  break lab4;
                }
                this.slice_from('U');
                break lab3;
              }
              this.cursor = v_3;
              if (!this.eq_s('i')) {
                break lab2;
              }
              this.ket = this.cursor;
              if (!this.in_grouping(StemmerRo.g_v, 97, 259)) {
                break lab2;
              }
              this.slice_from('I');
            }
            this.cursor = v_2;
            break lab1;
          }
          this.cursor = v_2;
          if (this.cursor >= this.limit) {
            break lab0;
          }
          this.cursor++;
        }
        continue;
      }
      this.cursor = v_1;
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
          if (!this.in_grouping(StemmerRo.g_v, 97, 259)) {
            break lab2;
          }
          lab3: {
            const v_3 = this.cursor;
            lab4: {
              if (!this.out_grouping(StemmerRo.g_v, 97, 259)) {
                break lab4;
              }
              if (!this.gopast_in_grouping(StemmerRo.g_v, 97, 259)) {
                break lab4;
              }
              break lab3;
            }
            this.cursor = v_3;
            if (!this.in_grouping(StemmerRo.g_v, 97, 259)) {
              break lab2;
            }
            if (!this.gopast_out_grouping(StemmerRo.g_v, 97, 259)) {
              break lab2;
            }
          }
          break lab1;
        }
        this.cursor = v_2;
        if (!this.out_grouping(StemmerRo.g_v, 97, 259)) {
          break lab0;
        }
        lab5: {
          const v_4 = this.cursor;
          lab6: {
            if (!this.out_grouping(StemmerRo.g_v, 97, 259)) {
              break lab6;
            }
            if (!this.gopast_in_grouping(StemmerRo.g_v, 97, 259)) {
              break lab6;
            }
            break lab5;
          }
          this.cursor = v_4;
          if (!this.in_grouping(StemmerRo.g_v, 97, 259)) {
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
      if (!this.gopast_in_grouping(StemmerRo.g_v, 97, 259)) {
        break lab7;
      }
      if (!this.gopast_out_grouping(StemmerRo.g_v, 97, 259)) {
        break lab7;
      }
      this.I_p1 = this.cursor;
      if (!this.gopast_in_grouping(StemmerRo.g_v, 97, 259)) {
        break lab7;
      }
      if (!this.gopast_out_grouping(StemmerRo.g_v, 97, 259)) {
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
        const among_var = this.find_slice(StemmerRo.a_0);
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

  r_step_0(): boolean {
    const among_var = this.find_slice_b(StemmerRo.a_1);
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
      case 4:
        this.slice_from('i');
        break;
      case 5:
        if (this.eq_s_b('ab')) {
          return false;
        }
        this.slice_from('i');
        break;
      case 6:
        this.slice_from('at');
        break;
      case 7:
        this.slice_from('a\u0163i');
        break;
    }
    return true;
  }

  r_combo_suffix(): boolean {
    const v_1 = this.limit - this.cursor;
    const among_var = this.find_slice_b(StemmerRo.a_2);
    if (among_var === 0) {
      return false;
    }
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_from('abil');
        break;
      case 2:
        this.slice_from('ibil');
        break;
      case 3:
        this.slice_from('iv');
        break;
      case 4:
        this.slice_from('ic');
        break;
      case 5:
        this.slice_from('at');
        break;
      case 6:
        this.slice_from('it');
        break;
    }
    this.B_standard_suffix_removed = true;
    this.cursor = this.limit - v_1;
    return true;
  }

  r_standard_suffix(): boolean {
    this.B_standard_suffix_removed = false;
    for (;;) {
      const v_1 = this.limit - this.cursor;
      lab0: {
        if (!this.r_combo_suffix()) {
          break lab0;
        }
        continue;
      }
      this.cursor = this.limit - v_1;
      break;
    }
    const among_var = this.find_slice_b(StemmerRo.a_3);
    if (among_var === 0) {
      return false;
    }
    if (!this.r_R2()) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_del();
        break;
      case 2:
        if (!this.eq_s_b('\u0163')) {
          return false;
        }
        this.bra = this.cursor;
        this.slice_from('t');
        break;
      case 3:
        this.slice_from('ist');
        break;
    }
    this.B_standard_suffix_removed = true;
    return true;
  }

  r_verb_suffix(): boolean {
    if (this.cursor < this.I_pV) {
      return false;
    }
    const v_1 = this.limit_backward;
    this.limit_backward = this.I_pV;
    const among_var = this.find_slice_b(StemmerRo.a_4);
    if (among_var === 0) {
      this.limit_backward = v_1;
      return false;
    }
    switch (among_var) {
      case 1:
        if (!this.out_grouping_b(StemmerRo.g_v, 97, 259) && !this.eq_s_b('u')) {
          this.limit_backward = v_1;
          return false;
        }
        this.slice_del();
        break;
      case 2:
        this.slice_del();
        break;
    }
    this.limit_backward = v_1;
    return true;
  }

  r_vowel_suffix(): boolean {
    const among_var = this.find_slice_b(StemmerRo.a_5);
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
    }
    return true;
  }

  innerStem(): boolean {
    this.do_forward(this.r_prelude);
    this.r_mark_regions();
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    this.do_backward(this.r_step_0);
    this.do_backward(this.r_standard_suffix);
    const v_4 = this.limit - this.cursor;
    lab0: {
      if (!this.B_standard_suffix_removed) {
        if (!this.r_verb_suffix()) {
          break lab0;
        }
      }
    }
    this.cursor = this.limit - v_4;
    this.do_backward(this.r_vowel_suffix);
    this.cursor = this.limit_backward;
    this.do_forward(this.r_postlude);
    return true;
  }

  static g_v: number[] = [
    17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 32, 0, 0, 4,
  ];

  static a_0: Among<StemmerRo>[] = [
    new Among('', -1, 3),
    new Among('I', 0, 1),
    new Among('U', 0, 2),
  ];

  static a_1: Among<StemmerRo>[] = [
    new Among('ea', -1, 3),
    new Among('a\u0163ia', -1, 7),
    new Among('aua', -1, 2),
    new Among('iua', -1, 4),
    new Among('a\u0163ie', -1, 7),
    new Among('ele', -1, 3),
    new Among('ile', -1, 5),
    new Among('iile', 6, 4),
    new Among('iei', -1, 4),
    new Among('atei', -1, 6),
    new Among('ii', -1, 4),
    new Among('ului', -1, 1),
    new Among('ul', -1, 1),
    new Among('elor', -1, 3),
    new Among('ilor', -1, 4),
    new Among('iilor', 14, 4),
  ];

  static a_2: Among<StemmerRo>[] = [
    new Among('icala', -1, 4),
    new Among('iciva', -1, 4),
    new Among('ativa', -1, 5),
    new Among('itiva', -1, 6),
    new Among('icale', -1, 4),
    new Among('a\u0163iune', -1, 5),
    new Among('i\u0163iune', -1, 6),
    new Among('atoare', -1, 5),
    new Among('itoare', -1, 6),
    new Among('\u0103toare', -1, 5),
    new Among('icitate', -1, 4),
    new Among('abilitate', -1, 1),
    new Among('ibilitate', -1, 2),
    new Among('ivitate', -1, 3),
    new Among('icive', -1, 4),
    new Among('ative', -1, 5),
    new Among('itive', -1, 6),
    new Among('icali', -1, 4),
    new Among('atori', -1, 5),
    new Among('icatori', 18, 4),
    new Among('itori', -1, 6),
    new Among('\u0103tori', -1, 5),
    new Among('icitati', -1, 4),
    new Among('abilitati', -1, 1),
    new Among('ivitati', -1, 3),
    new Among('icivi', -1, 4),
    new Among('ativi', -1, 5),
    new Among('itivi', -1, 6),
    new Among('icit\u0103i', -1, 4),
    new Among('abilit\u0103i', -1, 1),
    new Among('ivit\u0103i', -1, 3),
    new Among('icit\u0103\u0163i', -1, 4),
    new Among('abilit\u0103\u0163i', -1, 1),
    new Among('ivit\u0103\u0163i', -1, 3),
    new Among('ical', -1, 4),
    new Among('ator', -1, 5),
    new Among('icator', 35, 4),
    new Among('itor', -1, 6),
    new Among('\u0103tor', -1, 5),
    new Among('iciv', -1, 4),
    new Among('ativ', -1, 5),
    new Among('itiv', -1, 6),
    new Among('ical\u0103', -1, 4),
    new Among('iciv\u0103', -1, 4),
    new Among('ativ\u0103', -1, 5),
    new Among('itiv\u0103', -1, 6),
  ];

  static a_3: Among<StemmerRo>[] = [
    new Among('ica', -1, 1),
    new Among('abila', -1, 1),
    new Among('ibila', -1, 1),
    new Among('oasa', -1, 1),
    new Among('ata', -1, 1),
    new Among('ita', -1, 1),
    new Among('anta', -1, 1),
    new Among('ista', -1, 3),
    new Among('uta', -1, 1),
    new Among('iva', -1, 1),
    new Among('ic', -1, 1),
    new Among('ice', -1, 1),
    new Among('abile', -1, 1),
    new Among('ibile', -1, 1),
    new Among('isme', -1, 3),
    new Among('iune', -1, 2),
    new Among('oase', -1, 1),
    new Among('ate', -1, 1),
    new Among('itate', 17, 1),
    new Among('ite', -1, 1),
    new Among('ante', -1, 1),
    new Among('iste', -1, 3),
    new Among('ute', -1, 1),
    new Among('ive', -1, 1),
    new Among('ici', -1, 1),
    new Among('abili', -1, 1),
    new Among('ibili', -1, 1),
    new Among('iuni', -1, 2),
    new Among('atori', -1, 1),
    new Among('osi', -1, 1),
    new Among('ati', -1, 1),
    new Among('itati', 30, 1),
    new Among('iti', -1, 1),
    new Among('anti', -1, 1),
    new Among('isti', -1, 3),
    new Among('uti', -1, 1),
    new Among('i\u015Fti', -1, 3),
    new Among('ivi', -1, 1),
    new Among('it\u0103i', -1, 1),
    new Among('o\u015Fi', -1, 1),
    new Among('it\u0103\u0163i', -1, 1),
    new Among('abil', -1, 1),
    new Among('ibil', -1, 1),
    new Among('ism', -1, 3),
    new Among('ator', -1, 1),
    new Among('os', -1, 1),
    new Among('at', -1, 1),
    new Among('it', -1, 1),
    new Among('ant', -1, 1),
    new Among('ist', -1, 3),
    new Among('ut', -1, 1),
    new Among('iv', -1, 1),
    new Among('ic\u0103', -1, 1),
    new Among('abil\u0103', -1, 1),
    new Among('ibil\u0103', -1, 1),
    new Among('oas\u0103', -1, 1),
    new Among('at\u0103', -1, 1),
    new Among('it\u0103', -1, 1),
    new Among('ant\u0103', -1, 1),
    new Among('ist\u0103', -1, 3),
    new Among('ut\u0103', -1, 1),
    new Among('iv\u0103', -1, 1),
  ];

  static a_4: Among<StemmerRo>[] = [
    new Among('ea', -1, 1),
    new Among('ia', -1, 1),
    new Among('esc', -1, 1),
    new Among('\u0103sc', -1, 1),
    new Among('ind', -1, 1),
    new Among('\u00E2nd', -1, 1),
    new Among('are', -1, 1),
    new Among('ere', -1, 1),
    new Among('ire', -1, 1),
    new Among('\u00E2re', -1, 1),
    new Among('se', -1, 2),
    new Among('ase', 10, 1),
    new Among('sese', 10, 2),
    new Among('ise', 10, 1),
    new Among('use', 10, 1),
    new Among('\u00E2se', 10, 1),
    new Among('e\u015Fte', -1, 1),
    new Among('\u0103\u015Fte', -1, 1),
    new Among('eze', -1, 1),
    new Among('ai', -1, 1),
    new Among('eai', 19, 1),
    new Among('iai', 19, 1),
    new Among('sei', -1, 2),
    new Among('e\u015Fti', -1, 1),
    new Among('\u0103\u015Fti', -1, 1),
    new Among('ui', -1, 1),
    new Among('ezi', -1, 1),
    new Among('\u00E2i', -1, 1),
    new Among('a\u015Fi', -1, 1),
    new Among('se\u015Fi', -1, 2),
    new Among('ase\u015Fi', 29, 1),
    new Among('sese\u015Fi', 29, 2),
    new Among('ise\u015Fi', 29, 1),
    new Among('use\u015Fi', 29, 1),
    new Among('\u00E2se\u015Fi', 29, 1),
    new Among('i\u015Fi', -1, 1),
    new Among('u\u015Fi', -1, 1),
    new Among('\u00E2\u015Fi', -1, 1),
    new Among('a\u0163i', -1, 2),
    new Among('ea\u0163i', 38, 1),
    new Among('ia\u0163i', 38, 1),
    new Among('e\u0163i', -1, 2),
    new Among('i\u0163i', -1, 2),
    new Among('\u00E2\u0163i', -1, 2),
    new Among('ar\u0103\u0163i', -1, 1),
    new Among('ser\u0103\u0163i', -1, 2),
    new Among('aser\u0103\u0163i', 45, 1),
    new Among('seser\u0103\u0163i', 45, 2),
    new Among('iser\u0103\u0163i', 45, 1),
    new Among('user\u0103\u0163i', 45, 1),
    new Among('\u00E2ser\u0103\u0163i', 45, 1),
    new Among('ir\u0103\u0163i', -1, 1),
    new Among('ur\u0103\u0163i', -1, 1),
    new Among('\u00E2r\u0103\u0163i', -1, 1),
    new Among('am', -1, 1),
    new Among('eam', 54, 1),
    new Among('iam', 54, 1),
    new Among('em', -1, 2),
    new Among('asem', 57, 1),
    new Among('sesem', 57, 2),
    new Among('isem', 57, 1),
    new Among('usem', 57, 1),
    new Among('\u00E2sem', 57, 1),
    new Among('im', -1, 2),
    new Among('\u00E2m', -1, 2),
    new Among('\u0103m', -1, 2),
    new Among('ar\u0103m', 65, 1),
    new Among('ser\u0103m', 65, 2),
    new Among('aser\u0103m', 67, 1),
    new Among('seser\u0103m', 67, 2),
    new Among('iser\u0103m', 67, 1),
    new Among('user\u0103m', 67, 1),
    new Among('\u00E2ser\u0103m', 67, 1),
    new Among('ir\u0103m', 65, 1),
    new Among('ur\u0103m', 65, 1),
    new Among('\u00E2r\u0103m', 65, 1),
    new Among('au', -1, 1),
    new Among('eau', 76, 1),
    new Among('iau', 76, 1),
    new Among('indu', -1, 1),
    new Among('\u00E2ndu', -1, 1),
    new Among('ez', -1, 1),
    new Among('easc\u0103', -1, 1),
    new Among('ar\u0103', -1, 1),
    new Among('ser\u0103', -1, 2),
    new Among('aser\u0103', 84, 1),
    new Among('seser\u0103', 84, 2),
    new Among('iser\u0103', 84, 1),
    new Among('user\u0103', 84, 1),
    new Among('\u00E2ser\u0103', 84, 1),
    new Among('ir\u0103', -1, 1),
    new Among('ur\u0103', -1, 1),
    new Among('\u00E2r\u0103', -1, 1),
    new Among('eaz\u0103', -1, 1),
  ];

  static a_5: Among<StemmerRo>[] = [
    new Among('a', -1, 1),
    new Among('e', -1, 1),
    new Among('ie', 1, 1),
    new Among('i', -1, 1),
    new Among('\u0103', -1, 1),
  ];
}

export default StemmerRo;
