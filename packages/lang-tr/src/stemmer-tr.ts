import { Among, BaseStemmer } from '@nlpjs-neo/core';

class StemmerTr extends BaseStemmer {
  declare B_continue_stemming_noun_suffixes: boolean;
  declare I_strlen: number;

  constructor(container?) {
    super(container);
    this.name = 'stemmer-tr';
    this.B_continue_stemming_noun_suffixes = false;
    this.I_strlen = 0;
  }

  copy_from(other) {
    this.B_continue_stemming_noun_suffixes =
      other.B_continue_stemming_noun_suffixes;
    this.I_strlen = other.I_strlen;
    super.copy_from(other);
  }

  r_check_vowel_harmony() {
    // test
    const v_1 = this.limit - this.cursor;
    // goto
    if (!this.goto_in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
      return false;
    }
    // or
    lab2: {
      const v_3 = this.limit - this.cursor;
      lab3: {
        if (!this.eq_s_b(1, 'a')) {
          break lab3;
        }
        // goto
        if (!this.goto_in_grouping_b(StemmerTr.g_vowel1, 97, 305)) {
          break lab3;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab6: {
        if (!this.eq_s_b(1, 'e')) {
          break lab6;
        }
        // goto
        if (!this.goto_in_grouping_b(StemmerTr.g_vowel2, 101, 252)) {
          break lab6;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab9: {
        if (!this.eq_s_b(1, '\u0131')) {
          break lab9;
        }
        // goto
        if (!this.goto_in_grouping_b(StemmerTr.g_vowel3, 97, 305)) {
          break lab9;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab12: {
        if (!this.eq_s_b(1, 'i')) {
          break lab12;
        }
        // goto
        if (!this.goto_in_grouping_b(StemmerTr.g_vowel4, 101, 105)) {
          break lab12;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab15: {
        if (!this.eq_s_b(1, 'o')) {
          break lab15;
        }
        // goto
        if (!this.goto_in_grouping_b(StemmerTr.g_vowel5, 111, 117)) {
          break lab15;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab18: {
        if (!this.eq_s_b(1, '\u00F6')) {
          break lab18;
        }
        // goto
        if (!this.goto_in_grouping_b(StemmerTr.g_vowel6, 246, 252)) {
          break lab18;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab21: {
        if (!this.eq_s_b(1, 'u')) {
          break lab21;
        }
        // goto
        if (!this.goto_in_grouping_b(StemmerTr.g_vowel5, 111, 117)) {
          break lab21;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      if (!this.eq_s_b(1, '\u00FC')) {
        return false;
      }
      // goto
      if (!this.goto_in_grouping_b(StemmerTr.g_vowel6, 246, 252)) {
        return false;
      }
    }
    this.cursor = this.limit - v_1;
    return true;
  }

  r_mark_suffix_with_optional_n_consonant() {
    // or
    lab0: {
      const v_1 = this.limit - this.cursor;
      lab1: {
        // test
        const v_2 = this.limit - this.cursor;
        if (!this.eq_s_b(1, 'n')) {
          break lab1;
        }
        this.cursor = this.limit - v_2;
        if (this.cursor <= this.limit_backward) {
          break lab1;
        }
        this.cursor--;
        // test
        const v_3 = this.limit - this.cursor;
        if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
          break lab1;
        }
        this.cursor = this.limit - v_3;
        break lab0;
      }
      this.cursor = this.limit - v_1;
      // not
      {
        const v_4 = this.limit - this.cursor;
        lab2: {
          // test
          const v_5 = this.limit - this.cursor;
          if (!this.eq_s_b(1, 'n')) {
            break lab2;
          }
          this.cursor = this.limit - v_5;
          return false;
        }
        this.cursor = this.limit - v_4;
      }
      // test
      const v_6 = this.limit - this.cursor;
      if (this.cursor <= this.limit_backward) {
        return false;
      }
      this.cursor--;
      // test
      const v_7 = this.limit - this.cursor;
      if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
        return false;
      }
      this.cursor = this.limit - v_7;
      this.cursor = this.limit - v_6;
    }
    return true;
  }

  r_mark_suffix_with_optional_s_consonant() {
    // or
    lab0: {
      const v_1 = this.limit - this.cursor;
      lab1: {
        // test
        const v_2 = this.limit - this.cursor;
        if (!this.eq_s_b(1, 's')) {
          break lab1;
        }
        this.cursor = this.limit - v_2;
        if (this.cursor <= this.limit_backward) {
          break lab1;
        }
        this.cursor--;
        // test
        const v_3 = this.limit - this.cursor;
        if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
          break lab1;
        }
        this.cursor = this.limit - v_3;
        break lab0;
      }
      this.cursor = this.limit - v_1;
      // not
      {
        const v_4 = this.limit - this.cursor;
        lab2: {
          // test
          const v_5 = this.limit - this.cursor;
          if (!this.eq_s_b(1, 's')) {
            break lab2;
          }
          this.cursor = this.limit - v_5;
          return false;
        }
        this.cursor = this.limit - v_4;
      }
      // test
      const v_6 = this.limit - this.cursor;
      if (this.cursor <= this.limit_backward) {
        return false;
      }
      this.cursor--;
      // test
      const v_7 = this.limit - this.cursor;
      if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
        return false;
      }
      this.cursor = this.limit - v_7;
      this.cursor = this.limit - v_6;
    }
    return true;
  }

  r_mark_suffix_with_optional_y_consonant() {
    // or
    lab0: {
      const v_1 = this.limit - this.cursor;
      lab1: {
        // test
        const v_2 = this.limit - this.cursor;
        if (!this.eq_s_b(1, 'y')) {
          break lab1;
        }
        this.cursor = this.limit - v_2;
        if (this.cursor <= this.limit_backward) {
          break lab1;
        }
        this.cursor--;
        // test
        const v_3 = this.limit - this.cursor;
        if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
          break lab1;
        }
        this.cursor = this.limit - v_3;
        break lab0;
      }
      this.cursor = this.limit - v_1;
      // not
      {
        const v_4 = this.limit - this.cursor;
        lab2: {
          // test
          const v_5 = this.limit - this.cursor;
          if (!this.eq_s_b(1, 'y')) {
            break lab2;
          }
          this.cursor = this.limit - v_5;
          return false;
        }
        this.cursor = this.limit - v_4;
      }
      // test
      const v_6 = this.limit - this.cursor;
      if (this.cursor <= this.limit_backward) {
        return false;
      }
      this.cursor--;
      // test
      const v_7 = this.limit - this.cursor;
      if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
        return false;
      }
      this.cursor = this.limit - v_7;
      this.cursor = this.limit - v_6;
    }
    return true;
  }

  r_mark_suffix_with_optional_U_vowel() {
    // or
    lab0: {
      const v_1 = this.limit - this.cursor;
      lab1: {
        // test
        const v_2 = this.limit - this.cursor;
        if (!this.in_grouping_b(StemmerTr.g_U, 105, 305)) {
          break lab1;
        }
        this.cursor = this.limit - v_2;
        if (this.cursor <= this.limit_backward) {
          break lab1;
        }
        this.cursor--;
        // test
        const v_3 = this.limit - this.cursor;
        if (!this.out_grouping_b(StemmerTr.g_vowel, 97, 305)) {
          break lab1;
        }
        this.cursor = this.limit - v_3;
        break lab0;
      }
      this.cursor = this.limit - v_1;
      // not
      {
        const v_4 = this.limit - this.cursor;
        lab2: {
          // test
          const v_5 = this.limit - this.cursor;
          if (!this.in_grouping_b(StemmerTr.g_U, 105, 305)) {
            break lab2;
          }
          this.cursor = this.limit - v_5;
          return false;
        }
        this.cursor = this.limit - v_4;
      }
      // test
      const v_6 = this.limit - this.cursor;
      if (this.cursor <= this.limit_backward) {
        return false;
      }
      this.cursor--;
      // test
      const v_7 = this.limit - this.cursor;
      if (!this.out_grouping_b(StemmerTr.g_vowel, 97, 305)) {
        return false;
      }
      this.cursor = this.limit - v_7;
      this.cursor = this.limit - v_6;
    }
    return true;
  }

  r_mark_possessives() {
    if (this.find_among_b(StemmerTr.a_0, 10) === 0) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_U_vowel()) {
      return false;
    }
    return true;
  }

  r_mark_sU() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (!this.in_grouping_b(StemmerTr.g_U, 105, 305)) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_s_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_lArI() {
    if (this.find_among_b(StemmerTr.a_1, 2) === 0) {
      return false;
    }
    return true;
  }

  r_mark_yU() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (!this.in_grouping_b(StemmerTr.g_U, 105, 305)) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_nU() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(StemmerTr.a_2, 4) === 0) {
      return false;
    }
    return true;
  }

  r_mark_nUn() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(StemmerTr.a_3, 4) === 0) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_n_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_yA() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(StemmerTr.a_4, 2) === 0) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_nA() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(StemmerTr.a_5, 2) === 0) {
      return false;
    }
    return true;
  }

  r_mark_DA() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(StemmerTr.a_6, 4) === 0) {
      return false;
    }
    return true;
  }

  r_mark_ndA() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(StemmerTr.a_7, 2) === 0) {
      return false;
    }
    return true;
  }

  r_mark_DAn() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(StemmerTr.a_8, 4) === 0) {
      return false;
    }
    return true;
  }

  r_mark_ndAn() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(StemmerTr.a_9, 2) === 0) {
      return false;
    }
    return true;
  }

  r_mark_ylA() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(StemmerTr.a_10, 2) === 0) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_ki() {
    if (!this.eq_s_b(2, 'ki')) {
      return false;
    }
    return true;
  }

  r_mark_ncA() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(StemmerTr.a_11, 2) === 0) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_n_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_yUm() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(StemmerTr.a_12, 4) === 0) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_sUn() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(StemmerTr.a_13, 4) === 0) {
      return false;
    }
    return true;
  }

  r_mark_yUz() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(StemmerTr.a_14, 4) === 0) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_sUnUz() {
    if (this.find_among_b(StemmerTr.a_15, 4) === 0) {
      return false;
    }
    return true;
  }

  r_mark_lAr() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(StemmerTr.a_16, 2) === 0) {
      return false;
    }
    return true;
  }

  r_mark_nUz() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(StemmerTr.a_17, 4) === 0) {
      return false;
    }
    return true;
  }

  r_mark_DUr() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(StemmerTr.a_18, 8) === 0) {
      return false;
    }
    return true;
  }

  r_mark_cAsInA() {
    if (this.find_among_b(StemmerTr.a_19, 2) === 0) {
      return false;
    }
    return true;
  }

  r_mark_yDU() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(StemmerTr.a_20, 32) === 0) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_ysA() {
    if (this.find_among_b(StemmerTr.a_21, 8) === 0) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_ymUs() {
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (this.find_among_b(StemmerTr.a_22, 4) === 0) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_yken() {
    if (!this.eq_s_b(3, 'ken')) {
      return false;
    }
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_stem_nominal_verb_suffixes() {
    this.ket = this.cursor;
    // set continue_stemming_noun_suffixes
    this.B_continue_stemming_noun_suffixes = true;
    // or
    lab0: {
      const v_1 = this.limit - this.cursor;
      lab1: {
        // or
        lab2: {
          const v_2 = this.limit - this.cursor;
          lab3: {
            if (!this.r_mark_ymUs()) {
              break lab3;
            }
            break lab2;
          }
          this.cursor = this.limit - v_2;
          lab4: {
            if (!this.r_mark_yDU()) {
              break lab4;
            }
            break lab2;
          }
          this.cursor = this.limit - v_2;
          lab5: {
            if (!this.r_mark_ysA()) {
              break lab5;
            }
            break lab2;
          }
          this.cursor = this.limit - v_2;
          if (!this.r_mark_yken()) {
            break lab1;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab6: {
        if (!this.r_mark_cAsInA()) {
          break lab6;
        }
        // or
        lab7: {
          const v_3 = this.limit - this.cursor;
          lab8: {
            if (!this.r_mark_sUnUz()) {
              break lab8;
            }
            break lab7;
          }
          this.cursor = this.limit - v_3;
          lab9: {
            if (!this.r_mark_lAr()) {
              break lab9;
            }
            break lab7;
          }
          this.cursor = this.limit - v_3;
          lab10: {
            if (!this.r_mark_yUm()) {
              break lab10;
            }
            break lab7;
          }
          this.cursor = this.limit - v_3;
          lab11: {
            if (!this.r_mark_sUn()) {
              break lab11;
            }
            break lab7;
          }
          this.cursor = this.limit - v_3;
          lab12: {
            if (!this.r_mark_yUz()) {
              break lab12;
            }
            break lab7;
          }
          this.cursor = this.limit - v_3;
        }
        if (!this.r_mark_ymUs()) {
          break lab6;
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab13: {
        if (!this.r_mark_lAr()) {
          break lab13;
        }
        this.bra = this.cursor;
        if (!this.slice_del()) {
          return false;
        }
        // try
        const v_4 = this.limit - this.cursor;
        lab14: {
          this.ket = this.cursor;
          // or
          lab15: {
            const v_5 = this.limit - this.cursor;
            lab16: {
              if (!this.r_mark_DUr()) {
                break lab16;
              }
              break lab15;
            }
            this.cursor = this.limit - v_5;
            lab17: {
              if (!this.r_mark_yDU()) {
                break lab17;
              }
              break lab15;
            }
            this.cursor = this.limit - v_5;
            lab18: {
              if (!this.r_mark_ysA()) {
                break lab18;
              }
              break lab15;
            }
            this.cursor = this.limit - v_5;
            if (!this.r_mark_ymUs()) {
              this.cursor = this.limit - v_4;
              break lab14;
            }
          }
        }
        // unset continue_stemming_noun_suffixes
        this.B_continue_stemming_noun_suffixes = false;
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab19: {
        if (!this.r_mark_nUz()) {
          break lab19;
        }
        // or
        lab20: {
          const v_6 = this.limit - this.cursor;
          lab21: {
            if (!this.r_mark_yDU()) {
              break lab21;
            }
            break lab20;
          }
          this.cursor = this.limit - v_6;
          if (!this.r_mark_ysA()) {
            break lab19;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab22: {
        // or
        lab23: {
          const v_7 = this.limit - this.cursor;
          lab24: {
            if (!this.r_mark_sUnUz()) {
              break lab24;
            }
            break lab23;
          }
          this.cursor = this.limit - v_7;
          lab25: {
            if (!this.r_mark_yUz()) {
              break lab25;
            }
            break lab23;
          }
          this.cursor = this.limit - v_7;
          lab26: {
            if (!this.r_mark_sUn()) {
              break lab26;
            }
            break lab23;
          }
          this.cursor = this.limit - v_7;
          if (!this.r_mark_yUm()) {
            break lab22;
          }
        }
        this.bra = this.cursor;
        if (!this.slice_del()) {
          return false;
        }
        // try
        const v_8 = this.limit - this.cursor;
        lab27: {
          this.ket = this.cursor;
          if (!this.r_mark_ymUs()) {
            this.cursor = this.limit - v_8;
            break lab27;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      if (!this.r_mark_DUr()) {
        return false;
      }
      this.bra = this.cursor;
      if (!this.slice_del()) {
        return false;
      }
      // try
      const v_9 = this.limit - this.cursor;
      lab28: {
        this.ket = this.cursor;
        // or
        lab29: {
          const v_10 = this.limit - this.cursor;
          lab30: {
            if (!this.r_mark_sUnUz()) {
              break lab30;
            }
            break lab29;
          }
          this.cursor = this.limit - v_10;
          lab31: {
            if (!this.r_mark_lAr()) {
              break lab31;
            }
            break lab29;
          }
          this.cursor = this.limit - v_10;
          lab32: {
            if (!this.r_mark_yUm()) {
              break lab32;
            }
            break lab29;
          }
          this.cursor = this.limit - v_10;
          lab33: {
            if (!this.r_mark_sUn()) {
              break lab33;
            }
            break lab29;
          }
          this.cursor = this.limit - v_10;
          lab34: {
            if (!this.r_mark_yUz()) {
              break lab34;
            }
            break lab29;
          }
          this.cursor = this.limit - v_10;
        }
        if (!this.r_mark_ymUs()) {
          this.cursor = this.limit - v_9;
          break lab28;
        }
      }
    }
    this.bra = this.cursor;
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  r_stem_suffix_chain_before_ki() {
    this.ket = this.cursor;
    if (!this.r_mark_ki()) {
      return false;
    }
    // or
    lab0: {
      const v_1 = this.limit - this.cursor;
      lab1: {
        if (!this.r_mark_DA()) {
          break lab1;
        }
        this.bra = this.cursor;
        if (!this.slice_del()) {
          return false;
        }
        // try
        const v_2 = this.limit - this.cursor;
        lab2: {
          this.ket = this.cursor;
          // or
          lab3: {
            const v_3 = this.limit - this.cursor;
            lab4: {
              if (!this.r_mark_lAr()) {
                break lab4;
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              // try
              const v_4 = this.limit - this.cursor;
              lab5: {
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_4;
                  break lab5;
                }
              }
              break lab3;
            }
            this.cursor = this.limit - v_3;
            if (!this.r_mark_possessives()) {
              this.cursor = this.limit - v_2;
              break lab2;
            }
            this.bra = this.cursor;
            if (!this.slice_del()) {
              return false;
            }
            // try
            const v_5 = this.limit - this.cursor;
            lab6: {
              this.ket = this.cursor;
              if (!this.r_mark_lAr()) {
                this.cursor = this.limit - v_5;
                break lab6;
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              if (!this.r_stem_suffix_chain_before_ki()) {
                this.cursor = this.limit - v_5;
                break lab6;
              }
            }
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab7: {
        if (!this.r_mark_nUn()) {
          break lab7;
        }
        this.bra = this.cursor;
        if (!this.slice_del()) {
          return false;
        }
        // try
        const v_6 = this.limit - this.cursor;
        lab8: {
          this.ket = this.cursor;
          // or
          lab9: {
            const v_7 = this.limit - this.cursor;
            lab10: {
              if (!this.r_mark_lArI()) {
                break lab10;
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              break lab9;
            }
            this.cursor = this.limit - v_7;
            lab11: {
              this.ket = this.cursor;
              // or
              lab12: {
                const v_8 = this.limit - this.cursor;
                lab13: {
                  if (!this.r_mark_possessives()) {
                    break lab13;
                  }
                  break lab12;
                }
                this.cursor = this.limit - v_8;
                if (!this.r_mark_sU()) {
                  break lab11;
                }
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              // try
              const v_9 = this.limit - this.cursor;
              lab14: {
                this.ket = this.cursor;
                if (!this.r_mark_lAr()) {
                  this.cursor = this.limit - v_9;
                  break lab14;
                }
                this.bra = this.cursor;
                if (!this.slice_del()) {
                  return false;
                }
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_9;
                  break lab14;
                }
              }
              break lab9;
            }
            this.cursor = this.limit - v_7;
            if (!this.r_stem_suffix_chain_before_ki()) {
              this.cursor = this.limit - v_6;
              break lab8;
            }
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      if (!this.r_mark_ndA()) {
        return false;
      }
      // or
      lab15: {
        const v_10 = this.limit - this.cursor;
        lab16: {
          if (!this.r_mark_lArI()) {
            break lab16;
          }
          this.bra = this.cursor;
          if (!this.slice_del()) {
            return false;
          }
          break lab15;
        }
        this.cursor = this.limit - v_10;
        lab17: {
          if (!this.r_mark_sU()) {
            break lab17;
          }
          this.bra = this.cursor;
          if (!this.slice_del()) {
            return false;
          }
          // try
          const v_11 = this.limit - this.cursor;
          lab18: {
            this.ket = this.cursor;
            if (!this.r_mark_lAr()) {
              this.cursor = this.limit - v_11;
              break lab18;
            }
            this.bra = this.cursor;
            if (!this.slice_del()) {
              return false;
            }
            if (!this.r_stem_suffix_chain_before_ki()) {
              this.cursor = this.limit - v_11;
              break lab18;
            }
          }
          break lab15;
        }
        this.cursor = this.limit - v_10;
        if (!this.r_stem_suffix_chain_before_ki()) {
          return false;
        }
      }
    }
    return true;
  }

  r_stem_noun_suffixes() {
    // or
    lab0: {
      const v_1 = this.limit - this.cursor;
      lab1: {
        this.ket = this.cursor;
        if (!this.r_mark_lAr()) {
          break lab1;
        }
        this.bra = this.cursor;
        if (!this.slice_del()) {
          return false;
        }
        // try
        const v_2 = this.limit - this.cursor;
        lab2: {
          if (!this.r_stem_suffix_chain_before_ki()) {
            this.cursor = this.limit - v_2;
            break lab2;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab3: {
        this.ket = this.cursor;
        if (!this.r_mark_ncA()) {
          break lab3;
        }
        this.bra = this.cursor;
        if (!this.slice_del()) {
          return false;
        }
        // try
        const v_3 = this.limit - this.cursor;
        lab4: {
          // or
          lab5: {
            const v_4 = this.limit - this.cursor;
            lab6: {
              this.ket = this.cursor;
              if (!this.r_mark_lArI()) {
                break lab6;
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              break lab5;
            }
            this.cursor = this.limit - v_4;
            lab7: {
              this.ket = this.cursor;
              // or
              lab8: {
                const v_5 = this.limit - this.cursor;
                lab9: {
                  if (!this.r_mark_possessives()) {
                    break lab9;
                  }
                  break lab8;
                }
                this.cursor = this.limit - v_5;
                if (!this.r_mark_sU()) {
                  break lab7;
                }
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              // try
              const v_6 = this.limit - this.cursor;
              lab10: {
                this.ket = this.cursor;
                if (!this.r_mark_lAr()) {
                  this.cursor = this.limit - v_6;
                  break lab10;
                }
                this.bra = this.cursor;
                if (!this.slice_del()) {
                  return false;
                }
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_6;
                  break lab10;
                }
              }
              break lab5;
            }
            this.cursor = this.limit - v_4;
            this.ket = this.cursor;
            if (!this.r_mark_lAr()) {
              this.cursor = this.limit - v_3;
              break lab4;
            }
            this.bra = this.cursor;
            if (!this.slice_del()) {
              return false;
            }
            if (!this.r_stem_suffix_chain_before_ki()) {
              this.cursor = this.limit - v_3;
              break lab4;
            }
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab11: {
        this.ket = this.cursor;
        // or
        lab12: {
          const v_7 = this.limit - this.cursor;
          lab13: {
            if (!this.r_mark_ndA()) {
              break lab13;
            }
            break lab12;
          }
          this.cursor = this.limit - v_7;
          if (!this.r_mark_nA()) {
            break lab11;
          }
        }
        // or
        lab14: {
          const v_8 = this.limit - this.cursor;
          lab15: {
            if (!this.r_mark_lArI()) {
              break lab15;
            }
            this.bra = this.cursor;
            if (!this.slice_del()) {
              return false;
            }
            break lab14;
          }
          this.cursor = this.limit - v_8;
          lab16: {
            if (!this.r_mark_sU()) {
              break lab16;
            }
            this.bra = this.cursor;
            if (!this.slice_del()) {
              return false;
            }
            // try
            const v_9 = this.limit - this.cursor;
            lab17: {
              this.ket = this.cursor;
              if (!this.r_mark_lAr()) {
                this.cursor = this.limit - v_9;
                break lab17;
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              if (!this.r_stem_suffix_chain_before_ki()) {
                this.cursor = this.limit - v_9;
                break lab17;
              }
            }
            break lab14;
          }
          this.cursor = this.limit - v_8;
          if (!this.r_stem_suffix_chain_before_ki()) {
            break lab11;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab18: {
        this.ket = this.cursor;
        // or
        lab19: {
          const v_10 = this.limit - this.cursor;
          lab20: {
            if (!this.r_mark_ndAn()) {
              break lab20;
            }
            break lab19;
          }
          this.cursor = this.limit - v_10;
          if (!this.r_mark_nU()) {
            break lab18;
          }
        }
        // or
        lab21: {
          const v_11 = this.limit - this.cursor;
          lab22: {
            if (!this.r_mark_sU()) {
              break lab22;
            }
            this.bra = this.cursor;
            if (!this.slice_del()) {
              return false;
            }
            // try
            const v_12 = this.limit - this.cursor;
            lab23: {
              this.ket = this.cursor;
              if (!this.r_mark_lAr()) {
                this.cursor = this.limit - v_12;
                break lab23;
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              if (!this.r_stem_suffix_chain_before_ki()) {
                this.cursor = this.limit - v_12;
                break lab23;
              }
            }
            break lab21;
          }
          this.cursor = this.limit - v_11;
          if (!this.r_mark_lArI()) {
            break lab18;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab24: {
        this.ket = this.cursor;
        if (!this.r_mark_DAn()) {
          break lab24;
        }
        this.bra = this.cursor;
        if (!this.slice_del()) {
          return false;
        }
        // try
        const v_13 = this.limit - this.cursor;
        lab25: {
          this.ket = this.cursor;
          // or
          lab26: {
            const v_14 = this.limit - this.cursor;
            lab27: {
              if (!this.r_mark_possessives()) {
                break lab27;
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              // try
              const v_15 = this.limit - this.cursor;
              lab28: {
                this.ket = this.cursor;
                if (!this.r_mark_lAr()) {
                  this.cursor = this.limit - v_15;
                  break lab28;
                }
                this.bra = this.cursor;
                if (!this.slice_del()) {
                  return false;
                }
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_15;
                  break lab28;
                }
              }
              break lab26;
            }
            this.cursor = this.limit - v_14;
            lab29: {
              if (!this.r_mark_lAr()) {
                break lab29;
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              // try
              const v_16 = this.limit - this.cursor;
              lab30: {
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_16;
                  break lab30;
                }
              }
              break lab26;
            }
            this.cursor = this.limit - v_14;
            if (!this.r_stem_suffix_chain_before_ki()) {
              this.cursor = this.limit - v_13;
              break lab25;
            }
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab31: {
        this.ket = this.cursor;
        // or
        lab32: {
          const v_17 = this.limit - this.cursor;
          lab33: {
            if (!this.r_mark_nUn()) {
              break lab33;
            }
            break lab32;
          }
          this.cursor = this.limit - v_17;
          if (!this.r_mark_ylA()) {
            break lab31;
          }
        }
        this.bra = this.cursor;
        if (!this.slice_del()) {
          return false;
        }
        // try
        const v_18 = this.limit - this.cursor;
        lab34: {
          // or
          lab35: {
            const v_19 = this.limit - this.cursor;
            lab36: {
              this.ket = this.cursor;
              if (!this.r_mark_lAr()) {
                break lab36;
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              if (!this.r_stem_suffix_chain_before_ki()) {
                break lab36;
              }
              break lab35;
            }
            this.cursor = this.limit - v_19;
            lab37: {
              this.ket = this.cursor;
              // or
              lab38: {
                const v_20 = this.limit - this.cursor;
                lab39: {
                  if (!this.r_mark_possessives()) {
                    break lab39;
                  }
                  break lab38;
                }
                this.cursor = this.limit - v_20;
                if (!this.r_mark_sU()) {
                  break lab37;
                }
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              // try
              const v_21 = this.limit - this.cursor;
              lab40: {
                this.ket = this.cursor;
                if (!this.r_mark_lAr()) {
                  this.cursor = this.limit - v_21;
                  break lab40;
                }
                this.bra = this.cursor;
                if (!this.slice_del()) {
                  return false;
                }
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_21;
                  break lab40;
                }
              }
              break lab35;
            }
            this.cursor = this.limit - v_19;
            if (!this.r_stem_suffix_chain_before_ki()) {
              this.cursor = this.limit - v_18;
              break lab34;
            }
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab41: {
        this.ket = this.cursor;
        if (!this.r_mark_lArI()) {
          break lab41;
        }
        this.bra = this.cursor;
        if (!this.slice_del()) {
          return false;
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab42: {
        if (!this.r_stem_suffix_chain_before_ki()) {
          break lab42;
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab43: {
        this.ket = this.cursor;
        // or
        lab44: {
          const v_22 = this.limit - this.cursor;
          lab45: {
            if (!this.r_mark_DA()) {
              break lab45;
            }
            break lab44;
          }
          this.cursor = this.limit - v_22;
          lab46: {
            if (!this.r_mark_yU()) {
              break lab46;
            }
            break lab44;
          }
          this.cursor = this.limit - v_22;
          if (!this.r_mark_yA()) {
            break lab43;
          }
        }
        this.bra = this.cursor;
        if (!this.slice_del()) {
          return false;
        }
        // try
        const v_23 = this.limit - this.cursor;
        lab47: {
          this.ket = this.cursor;
          // or
          lab48: {
            const v_24 = this.limit - this.cursor;
            lab49: {
              if (!this.r_mark_possessives()) {
                break lab49;
              }
              this.bra = this.cursor;
              if (!this.slice_del()) {
                return false;
              }
              // try
              const v_25 = this.limit - this.cursor;
              lab50: {
                this.ket = this.cursor;
                if (!this.r_mark_lAr()) {
                  this.cursor = this.limit - v_25;
                  break lab50;
                }
              }
              break lab48;
            }
            this.cursor = this.limit - v_24;
            if (!this.r_mark_lAr()) {
              this.cursor = this.limit - v_23;
              break lab47;
            }
          }
          this.bra = this.cursor;
          if (!this.slice_del()) {
            return false;
          }
          this.ket = this.cursor;
          if (!this.r_stem_suffix_chain_before_ki()) {
            this.cursor = this.limit - v_23;
            break lab47;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      this.ket = this.cursor;
      // or
      lab51: {
        const v_26 = this.limit - this.cursor;
        lab52: {
          if (!this.r_mark_possessives()) {
            break lab52;
          }
          break lab51;
        }
        this.cursor = this.limit - v_26;
        if (!this.r_mark_sU()) {
          return false;
        }
      }
      this.bra = this.cursor;
      if (!this.slice_del()) {
        return false;
      }
      // try
      const v_27 = this.limit - this.cursor;
      lab53: {
        this.ket = this.cursor;
        if (!this.r_mark_lAr()) {
          this.cursor = this.limit - v_27;
          break lab53;
        }
        this.bra = this.cursor;
        if (!this.slice_del()) {
          return false;
        }
        if (!this.r_stem_suffix_chain_before_ki()) {
          this.cursor = this.limit - v_27;
          break lab53;
        }
      }
    }
    return true;
  }

  r_post_process_last_consonants() {
    this.ket = this.cursor;
    const among_var = this.find_among_b(StemmerTr.a_23, 4);
    if (among_var === 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        if (!this.slice_from('p')) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from('\u00E7')) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from('t')) {
          return false;
        }
        break;
      case 4:
        if (!this.slice_from('k')) {
          return false;
        }
        break;
    }
    return true;
  }

  r_append_U_to_stems_ending_with_d_or_g() {
    // test
    const v_1 = this.limit - this.cursor;
    // or
    lab0: {
      const v_2 = this.limit - this.cursor;
      lab1: {
        if (!this.eq_s_b(1, 'd')) {
          break lab1;
        }
        break lab0;
      }
      this.cursor = this.limit - v_2;
      if (!this.eq_s_b(1, 'g')) {
        return false;
      }
    }
    this.cursor = this.limit - v_1;
    // or
    lab2: {
      const v_3 = this.limit - this.cursor;
      lab3: {
        // test
        const v_4 = this.limit - this.cursor;
        // goto
        if (!this.goto_in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
          break lab3;
        }
        // or
        lab6: {
          const v_6 = this.limit - this.cursor;
          lab7: {
            if (!this.eq_s_b(1, 'a')) {
              break lab7;
            }
            break lab6;
          }
          this.cursor = this.limit - v_6;
          if (!this.eq_s_b(1, '\u0131')) {
            break lab3;
          }
        }
        this.cursor = this.limit - v_4;
        {
          const c = this.cursor;
          this.insert(this.cursor, this.cursor, '\u0131');
          this.cursor = c;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab8: {
        // test
        const v_7 = this.limit - this.cursor;
        // goto
        if (!this.goto_in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
          break lab8;
        }
        // or
        lab11: {
          const v_9 = this.limit - this.cursor;
          lab12: {
            if (!this.eq_s_b(1, 'e')) {
              break lab12;
            }
            break lab11;
          }
          this.cursor = this.limit - v_9;
          if (!this.eq_s_b(1, 'i')) {
            break lab8;
          }
        }
        this.cursor = this.limit - v_7;
        {
          const c = this.cursor;
          this.insert(this.cursor, this.cursor, 'i');
          this.cursor = c;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab13: {
        // test
        const v_10 = this.limit - this.cursor;
        // goto
        if (!this.goto_in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
          break lab13;
        }
        // or
        lab16: {
          const v_12 = this.limit - this.cursor;
          lab17: {
            if (!this.eq_s_b(1, 'o')) {
              break lab17;
            }
            break lab16;
          }
          this.cursor = this.limit - v_12;
          if (!this.eq_s_b(1, 'u')) {
            break lab13;
          }
        }
        this.cursor = this.limit - v_10;
        {
          const c = this.cursor;
          this.insert(this.cursor, this.cursor, 'u');
          this.cursor = c;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      // test
      const v_13 = this.limit - this.cursor;
      // goto
      if (!this.goto_in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
        return false;
      }
      // or
      lab20: {
        const v_15 = this.limit - this.cursor;
        lab21: {
          if (!this.eq_s_b(1, '\u00F6')) {
            break lab21;
          }
          break lab20;
        }
        this.cursor = this.limit - v_15;
        if (!this.eq_s_b(1, '\u00FC')) {
          return false;
        }
      }
      this.cursor = this.limit - v_13;
      {
        const c = this.cursor;
        this.insert(this.cursor, this.cursor, '\u00FC');
        this.cursor = c;
      }
    }
    return true;
  }

  r_more_than_one_syllable_word() {
    // test
    const v_1 = this.cursor;
    // atleast
    {
      let v_2 = 2;
      // atleast
      replab0: for (;;) {
        const v_3 = this.cursor;
        lab1: {
          // gopast
          if (!this.gopast_in_grouping(StemmerTr.g_vowel, 97, 305)) {
            break lab1;
          }
          v_2--;
          continue replab0;
        }
        this.cursor = v_3;
        break;
      }
      if (v_2 > 0) {
        return false;
      }
    }
    this.cursor = v_1;
    return true;
  }

  r_is_reserved_word() {
    // or
    lab0: {
      const v_1 = this.cursor;
      lab1: {
        // test
        const v_2 = this.cursor;
        // gopast
        golab2: for (;;) {
          lab3: {
            if (!this.eq_s(2, 'ad')) {
              break lab3;
            }
            break golab2;
          }
          if (this.cursor >= this.limit) {
            break lab1;
          }
          this.cursor++;
        }
        this.I_strlen = 2;
        if (!(this.I_strlen === this.limit)) {
          break lab1;
        }
        this.cursor = v_2;
        break lab0;
      }
      this.cursor = v_1;
      // test
      const v_4 = this.cursor;
      // gopast
      golab4: for (;;) {
        lab5: {
          if (!this.eq_s(5, 'soyad')) {
            break lab5;
          }
          break golab4;
        }
        if (this.cursor >= this.limit) {
          return false;
        }
        this.cursor++;
      }
      this.I_strlen = 5;
      if (!(this.I_strlen === this.limit)) {
        return false;
      }
      this.cursor = v_4;
    }
    return true;
  }

  r_postlude() {
    // not
    {
      const v_1 = this.cursor;
      lab0: {
        if (!this.r_is_reserved_word()) {
          break lab0;
        }
        return false;
      }
      this.cursor = v_1;
    }
    // backwards
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    // do
    const v_2 = this.limit - this.cursor;
    this.r_append_U_to_stems_ending_with_d_or_g();
    this.cursor = this.limit - v_2;
    // do
    const v_3 = this.limit - this.cursor;
    this.r_post_process_last_consonants();
    this.cursor = this.limit - v_3;
    this.cursor = this.limit_backward;
    return true;
  }

  innerStem() {
    if (!this.r_more_than_one_syllable_word()) {
      return false;
    }
    // backwards
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    // do
    const v_1 = this.limit - this.cursor;
    this.r_stem_nominal_verb_suffixes();
    this.cursor = this.limit - v_1;
    // Boolean test continue_stemming_noun_suffixes
    if (!this.B_continue_stemming_noun_suffixes) {
      return false;
    }
    // do
    const v_2 = this.limit - this.cursor;
    this.r_stem_noun_suffixes();
    this.cursor = this.limit - v_2;
    this.cursor = this.limit_backward; // call postlude
    if (!this.r_postlude()) {
      return false;
    }
    return true;
  }

  static a_0: Among<StemmerTr>[] = [
    new Among('m', -1, -1),
    new Among('n', -1, -1),
    new Among('miz', -1, -1),
    new Among('niz', -1, -1),
    new Among('muz', -1, -1),
    new Among('nuz', -1, -1),
    new Among('m\u00FCz', -1, -1),
    new Among('n\u00FCz', -1, -1),
    new Among('m\u0131z', -1, -1),
    new Among('n\u0131z', -1, -1),
  ];

  static a_1: Among<StemmerTr>[] = [
    new Among('leri', -1, -1),
    new Among('lar\u0131', -1, -1),
  ];

  static a_2: Among<StemmerTr>[] = [
    new Among('ni', -1, -1),
    new Among('nu', -1, -1),
    new Among('n\u00FC', -1, -1),
    new Among('n\u0131', -1, -1),
  ];

  static a_3: Among<StemmerTr>[] = [
    new Among('in', -1, -1),
    new Among('un', -1, -1),
    new Among('\u00FCn', -1, -1),
    new Among('\u0131n', -1, -1),
  ];

  static a_4: Among<StemmerTr>[] = [
    new Among('a', -1, -1),
    new Among('e', -1, -1),
  ];

  static a_5: Among<StemmerTr>[] = [
    new Among('na', -1, -1),
    new Among('ne', -1, -1),
  ];

  static a_6: Among<StemmerTr>[] = [
    new Among('da', -1, -1),
    new Among('ta', -1, -1),
    new Among('de', -1, -1),
    new Among('te', -1, -1),
  ];

  static a_7: Among<StemmerTr>[] = [
    new Among('nda', -1, -1),
    new Among('nde', -1, -1),
  ];

  static a_8: Among<StemmerTr>[] = [
    new Among('dan', -1, -1),
    new Among('tan', -1, -1),
    new Among('den', -1, -1),
    new Among('ten', -1, -1),
  ];

  static a_9: Among<StemmerTr>[] = [
    new Among('ndan', -1, -1),
    new Among('nden', -1, -1),
  ];

  static a_10: Among<StemmerTr>[] = [
    new Among('la', -1, -1),
    new Among('le', -1, -1),
  ];

  static a_11: Among<StemmerTr>[] = [
    new Among('ca', -1, -1),
    new Among('ce', -1, -1),
  ];

  static a_12: Among<StemmerTr>[] = [
    new Among('im', -1, -1),
    new Among('um', -1, -1),
    new Among('\u00FCm', -1, -1),
    new Among('\u0131m', -1, -1),
  ];

  static a_13: Among<StemmerTr>[] = [
    new Among('sin', -1, -1),
    new Among('sun', -1, -1),
    new Among('s\u00FCn', -1, -1),
    new Among('s\u0131n', -1, -1),
  ];

  static a_14: Among<StemmerTr>[] = [
    new Among('iz', -1, -1),
    new Among('uz', -1, -1),
    new Among('\u00FCz', -1, -1),
    new Among('\u0131z', -1, -1),
  ];

  static a_15: Among<StemmerTr>[] = [
    new Among('siniz', -1, -1),
    new Among('sunuz', -1, -1),
    new Among('s\u00FCn\u00FCz', -1, -1),
    new Among('s\u0131n\u0131z', -1, -1),
  ];

  static a_16: Among<StemmerTr>[] = [
    new Among('lar', -1, -1),
    new Among('ler', -1, -1),
  ];

  static a_17: Among<StemmerTr>[] = [
    new Among('niz', -1, -1),
    new Among('nuz', -1, -1),
    new Among('n\u00FCz', -1, -1),
    new Among('n\u0131z', -1, -1),
  ];

  static a_18: Among<StemmerTr>[] = [
    new Among('dir', -1, -1),
    new Among('tir', -1, -1),
    new Among('dur', -1, -1),
    new Among('tur', -1, -1),
    new Among('d\u00FCr', -1, -1),
    new Among('t\u00FCr', -1, -1),
    new Among('d\u0131r', -1, -1),
    new Among('t\u0131r', -1, -1),
  ];

  static a_19: Among<StemmerTr>[] = [
    new Among('cas\u0131na', -1, -1),
    new Among('cesine', -1, -1),
  ];

  static a_20: Among<StemmerTr>[] = [
    new Among('di', -1, -1),
    new Among('ti', -1, -1),
    new Among('dik', -1, -1),
    new Among('tik', -1, -1),
    new Among('duk', -1, -1),
    new Among('tuk', -1, -1),
    new Among('d\u00FCk', -1, -1),
    new Among('t\u00FCk', -1, -1),
    new Among('d\u0131k', -1, -1),
    new Among('t\u0131k', -1, -1),
    new Among('dim', -1, -1),
    new Among('tim', -1, -1),
    new Among('dum', -1, -1),
    new Among('tum', -1, -1),
    new Among('d\u00FCm', -1, -1),
    new Among('t\u00FCm', -1, -1),
    new Among('d\u0131m', -1, -1),
    new Among('t\u0131m', -1, -1),
    new Among('din', -1, -1),
    new Among('tin', -1, -1),
    new Among('dun', -1, -1),
    new Among('tun', -1, -1),
    new Among('d\u00FCn', -1, -1),
    new Among('t\u00FCn', -1, -1),
    new Among('d\u0131n', -1, -1),
    new Among('t\u0131n', -1, -1),
    new Among('du', -1, -1),
    new Among('tu', -1, -1),
    new Among('d\u00FC', -1, -1),
    new Among('t\u00FC', -1, -1),
    new Among('d\u0131', -1, -1),
    new Among('t\u0131', -1, -1),
  ];

  static a_21: Among<StemmerTr>[] = [
    new Among('sa', -1, -1),
    new Among('se', -1, -1),
    new Among('sak', -1, -1),
    new Among('sek', -1, -1),
    new Among('sam', -1, -1),
    new Among('sem', -1, -1),
    new Among('san', -1, -1),
    new Among('sen', -1, -1),
  ];

  static a_22: Among<StemmerTr>[] = [
    new Among('mi\u015F', -1, -1),
    new Among('mu\u015F', -1, -1),
    new Among('m\u00FC\u015F', -1, -1),
    new Among('m\u0131\u015F', -1, -1),
  ];

  static a_23: Among<StemmerTr>[] = [
    new Among('b', -1, 1),
    new Among('c', -1, 2),
    new Among('d', -1, 3),
    new Among('\u011F', -1, 4),
  ];

  static g_vowel: number[] = [
    17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 8, 0, 0, 0, 0,
    0, 0, 1,
  ];

  static g_U: number[] = [
    1, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0,
    1,
  ];

  static g_vowel1: number[] = [
    1, 64, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1,
  ];

  static g_vowel2: number[] = [
    17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130,
  ];

  static g_vowel3: number[] = [
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1,
  ];

  static g_vowel4: number[] = [17];

  static g_vowel5: number[] = [65];

  static g_vowel6: number[] = [65];
}

export default StemmerTr;
