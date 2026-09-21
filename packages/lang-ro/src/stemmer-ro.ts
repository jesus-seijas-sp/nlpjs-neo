import { Among, SnowballStemmer } from '@nlpjs-neo/core';

class StemmerRo extends SnowballStemmer {
  declare B_standard_suffix_removed: boolean;
  declare static a_0: Among<StemmerRo>[];
  declare static a_1: Among<StemmerRo>[];
  declare static a_2: Among<StemmerRo>[];
  declare static a_3: Among<StemmerRo>[];
  declare static a_4: Among<StemmerRo>[];
  declare static a_5: Among<StemmerRo>[];
  declare static g_v: number[];
  declare static methodObject: StemmerRo;

  constructor(container?) {
    super(container);
    this.name = 'stemmer-ro';
    this.B_standard_suffix_removed = false;
    this.I_p2 = 0;
    this.I_p1 = 0;
    this.I_pV = 0;
  }

  copy_from(other) {
    this.B_standard_suffix_removed = other.B_standard_suffix_removed;
    this.I_p2 = other.I_p2;
    this.I_p1 = other.I_p1;
    this.I_pV = other.I_pV;
    super.copy_from(other);
  }

  r_prelude() {
    let v_1;
    let v_2;
    let v_3;
    // repeat
    replab0: for (;;) {
      v_1 = this.cursor;
      lab1: {
        // goto
        golab2: for (;;) {
          v_2 = this.cursor;
          lab3: {
            if (!this.in_grouping(StemmerRo.g_v, 97, 259)) {
              break lab3;
            }
            this.bra = this.cursor;
            // or
            lab4: {
              v_3 = this.cursor;
              lab5: {
                if (!this.eq_s(1, 'u')) {
                  break lab5;
                }
                this.ket = this.cursor;
                if (!this.in_grouping(StemmerRo.g_v, 97, 259)) {
                  break lab5;
                }
                if (!this.slice_from('U')) {
                  return false;
                }
                break lab4;
              }
              this.cursor = v_3;
              if (!this.eq_s(1, 'i')) {
                break lab3;
              }
              this.ket = this.cursor;
              if (!this.in_grouping(StemmerRo.g_v, 97, 259)) {
                break lab3;
              }
              if (!this.slice_from('I')) {
                return false;
              }
            }
            this.cursor = v_2;
            break golab2;
          }
          this.cursor = v_2;
          if (this.cursor >= this.limit) {
            break lab1;
          }
          this.cursor++;
        }
        continue replab0;
      }
      this.cursor = v_1;
      break;
    }
    return true;
  }

  r_mark_regions() {
    let v_1;
    let v_2;
    let v_3;
    let v_6;
    let v_8;
    this.I_pV = this.limit;
    this.I_p1 = this.limit;
    this.I_p2 = this.limit;
    // do
    v_1 = this.cursor;
    lab0: {
      // or
      lab1: {
        v_2 = this.cursor;
        lab2: {
          if (!this.in_grouping(StemmerRo.g_v, 97, 259)) {
            break lab2;
          }
          // or
          lab3: {
            v_3 = this.cursor;
            lab4: {
              if (!this.out_grouping(StemmerRo.g_v, 97, 259)) {
                break lab4;
              }
              // gopast
              golab5: for (;;) {
                lab6: {
                  if (!this.in_grouping(StemmerRo.g_v, 97, 259)) {
                    break lab6;
                  }
                  break golab5;
                }
                if (this.cursor >= this.limit) {
                  break lab4;
                }
                this.cursor++;
              }
              break lab3;
            }
            this.cursor = v_3;
            if (!this.in_grouping(StemmerRo.g_v, 97, 259)) {
              break lab2;
            }
            // gopast
            golab7: for (;;) {
              lab8: {
                if (!this.out_grouping(StemmerRo.g_v, 97, 259)) {
                  break lab8;
                }
                break golab7;
              }
              if (this.cursor >= this.limit) {
                break lab2;
              }
              this.cursor++;
            }
          }
          break lab1;
        }
        this.cursor = v_2;
        if (!this.out_grouping(StemmerRo.g_v, 97, 259)) {
          break lab0;
        }
        // or
        lab9: {
          v_6 = this.cursor;
          lab10: {
            if (!this.out_grouping(StemmerRo.g_v, 97, 259)) {
              break lab10;
            }
            // gopast
            golab11: for (;;) {
              lab12: {
                if (!this.in_grouping(StemmerRo.g_v, 97, 259)) {
                  break lab12;
                }
                break golab11;
              }
              if (this.cursor >= this.limit) {
                break lab10;
              }
              this.cursor++;
            }
            break lab9;
          }
          this.cursor = v_6;
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
    // do
    v_8 = this.cursor;
    lab13: {
      // gopast
      golab14: for (;;) {
        lab15: {
          if (!this.in_grouping(StemmerRo.g_v, 97, 259)) {
            break lab15;
          }
          break golab14;
        }
        if (this.cursor >= this.limit) {
          break lab13;
        }
        this.cursor++;
      }
      // gopast
      golab16: for (;;) {
        lab17: {
          if (!this.out_grouping(StemmerRo.g_v, 97, 259)) {
            break lab17;
          }
          break golab16;
        }
        if (this.cursor >= this.limit) {
          break lab13;
        }
        this.cursor++;
      }
      this.I_p1 = this.cursor;
      // gopast
      golab18: for (;;) {
        lab19: {
          if (!this.in_grouping(StemmerRo.g_v, 97, 259)) {
            break lab19;
          }
          break golab18;
        }
        if (this.cursor >= this.limit) {
          break lab13;
        }
        this.cursor++;
      }
      // gopast
      golab20: for (;;) {
        lab21: {
          if (!this.out_grouping(StemmerRo.g_v, 97, 259)) {
            break lab21;
          }
          break golab20;
        }
        if (this.cursor >= this.limit) {
          break lab13;
        }
        this.cursor++;
      }
      this.I_p2 = this.cursor;
    }
    this.cursor = v_8;
    return true;
  }

  r_postlude() {
    let among_var;
    let v_1;
    // repeat
    replab0: for (;;) {
      v_1 = this.cursor;
      lab1: {
        this.bra = this.cursor;
        among_var = this.find_among(StemmerRo.a_0, 3);
        if (among_var === 0) {
          break lab1;
        }
        this.ket = this.cursor;
        switch (among_var) {
          case 0:
            break lab1;
          case 1:
            if (!this.slice_from('i')) {
              return false;
            }
            break;
          case 2:
            if (!this.slice_from('u')) {
              return false;
            }
            break;
          case 3:
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

  r_step_0() {
    let among_var;
    let v_1;
    this.ket = this.cursor;
    among_var = this.find_among_b(StemmerRo.a_1, 16);
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
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 4:
        if (!this.slice_from('i')) {
          return false;
        }
        break;
      case 5:
        // not
        {
          v_1 = this.limit - this.cursor;
          lab0: {
            if (!this.eq_s_b(2, 'ab')) {
              break lab0;
            }
            return false;
          }
          this.cursor = this.limit - v_1;
        }
        if (!this.slice_from('i')) {
          return false;
        }
        break;
      case 6:
        if (!this.slice_from('at')) {
          return false;
        }
        break;
      case 7:
        if (!this.slice_from('a\u0163i')) {
          return false;
        }
        break;
    }
    return true;
  }

  r_combo_suffix() {
    let among_var;
    let v_1;
    // test
    v_1 = this.limit - this.cursor;
    this.ket = this.cursor;
    among_var = this.find_among_b(StemmerRo.a_2, 46);
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
        if (!this.slice_from('abil')) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from('ibil')) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from('iv')) {
          return false;
        }
        break;
      case 4:
        if (!this.slice_from('ic')) {
          return false;
        }
        break;
      case 5:
        if (!this.slice_from('at')) {
          return false;
        }
        break;
      case 6:
        if (!this.slice_from('it')) {
          return false;
        }
        break;
    }
    // set standard_suffix_removed
    this.B_standard_suffix_removed = true;
    this.cursor = this.limit - v_1;
    return true;
  }

  r_standard_suffix() {
    let among_var;
    let v_1;
    // unset standard_suffix_removed
    this.B_standard_suffix_removed = false;
    // repeat
    replab0: for (;;) {
      v_1 = this.limit - this.cursor;
      lab1: {
        if (!this.r_combo_suffix()) {
          break lab1;
        }
        continue replab0;
      }
      this.cursor = this.limit - v_1;
      break;
    }
    this.ket = this.cursor;
    among_var = this.find_among_b(StemmerRo.a_3, 62);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R2()) {
      return false;
    }
    switch (among_var) {
      case 0:
        return false;
      case 1:
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        if (!this.eq_s_b(1, '\u0163')) {
          return false;
        }
        this.bra = this.cursor;
        if (!this.slice_from('t')) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from('ist')) {
          return false;
        }
        break;
    }
    // set standard_suffix_removed
    this.B_standard_suffix_removed = true;
    return true;
  }

  r_verb_suffix() {
    let among_var;
    let v_1;
    let v_2;
    let v_3;
    v_1 = this.limit - this.cursor;
    if (this.cursor < this.I_pV) {
      return false;
    }
    this.cursor = this.I_pV;
    v_2 = this.limit_backward;
    this.limit_backward = this.cursor;
    this.cursor = this.limit - v_1;
    this.ket = this.cursor;
    among_var = this.find_among_b(StemmerRo.a_4, 94);
    if (among_var === 0) {
      this.limit_backward = v_2;
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        this.limit_backward = v_2;
        return false;
      case 1:
        // or
        lab0: {
          v_3 = this.limit - this.cursor;
          lab1: {
            if (!this.out_grouping_b(StemmerRo.g_v, 97, 259)) {
              break lab1;
            }
            break lab0;
          }
          this.cursor = this.limit - v_3;
          if (!this.eq_s_b(1, 'u')) {
            this.limit_backward = v_2;
            return false;
          }
        }
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
    this.limit_backward = v_2;
    return true;
  }

  r_vowel_suffix() {
    let among_var;
    this.ket = this.cursor;
    among_var = this.find_among_b(StemmerRo.a_5, 5);
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
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  innerStem() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    let v_7;
    let v_8;
    // do
    v_1 = this.cursor;
    lab0: {
      if (!this.r_prelude()) {
        break lab0;
      }
    }
    this.cursor = v_1;
    // do
    v_2 = this.cursor;
    lab1: {
      if (!this.r_mark_regions()) {
        break lab1;
      }
    }
    this.cursor = v_2;
    // backwards
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    // do
    v_3 = this.limit - this.cursor;
    lab2: {
      if (!this.r_step_0()) {
        break lab2;
      }
    }
    this.cursor = this.limit - v_3;
    // do
    v_4 = this.limit - this.cursor;
    lab3: {
      if (!this.r_standard_suffix()) {
        break lab3;
      }
    }
    this.cursor = this.limit - v_4;
    // do
    v_5 = this.limit - this.cursor;
    lab4: {
      // or
      lab5: {
        v_6 = this.limit - this.cursor;
        lab6: {
          // Boolean test standard_suffix_removed
          if (!this.B_standard_suffix_removed) {
            break lab6;
          }
          break lab5;
        }
        this.cursor = this.limit - v_6;
        if (!this.r_verb_suffix()) {
          break lab4;
        }
      }
    }
    this.cursor = this.limit - v_5;
    // do
    v_7 = this.limit - this.cursor;
    lab7: {
      if (!this.r_vowel_suffix()) {
        break lab7;
      }
    }
    this.cursor = this.limit - v_7;
    this.cursor = this.limit_backward; // do
    v_8 = this.cursor;
    lab8: {
      if (!this.r_postlude()) {
        break lab8;
      }
    }
    this.cursor = v_8;
    return true;
  }
}

StemmerRo.methodObject = new StemmerRo();

StemmerRo.a_0 = [
  new Among('', -1, 3),
  new Among('I', 0, 1),
  new Among('U', 0, 2),
];

StemmerRo.a_1 = [
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

StemmerRo.a_2 = [
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

StemmerRo.a_3 = [
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

StemmerRo.a_4 = [
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

StemmerRo.a_5 = [
  new Among('a', -1, 1),
  new Among('e', -1, 1),
  new Among('ie', 1, 1),
  new Among('i', -1, 1),
  new Among('\u0103', -1, 1),
];

StemmerRo.g_v = [
  17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 32, 0, 0, 4,
];

export default StemmerRo;
