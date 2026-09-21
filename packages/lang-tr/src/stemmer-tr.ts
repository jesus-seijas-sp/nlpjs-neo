import { Among, BaseStemmer } from '@nlpjs-neo/core';

class StemmerTr extends BaseStemmer {
  declare B_continue_stemming_noun_suffixes: boolean;
  declare I_strlen: number;
  declare static a_0: Among<StemmerTr>[];
  declare static a_10: Among<StemmerTr>[];
  declare static a_11: Among<StemmerTr>[];
  declare static a_12: Among<StemmerTr>[];
  declare static a_13: Among<StemmerTr>[];
  declare static a_14: Among<StemmerTr>[];
  declare static a_15: Among<StemmerTr>[];
  declare static a_16: Among<StemmerTr>[];
  declare static a_17: Among<StemmerTr>[];
  declare static a_18: Among<StemmerTr>[];
  declare static a_19: Among<StemmerTr>[];
  declare static a_1: Among<StemmerTr>[];
  declare static a_20: Among<StemmerTr>[];
  declare static a_21: Among<StemmerTr>[];
  declare static a_22: Among<StemmerTr>[];
  declare static a_23: Among<StemmerTr>[];
  declare static a_2: Among<StemmerTr>[];
  declare static a_3: Among<StemmerTr>[];
  declare static a_4: Among<StemmerTr>[];
  declare static a_5: Among<StemmerTr>[];
  declare static a_6: Among<StemmerTr>[];
  declare static a_7: Among<StemmerTr>[];
  declare static a_8: Among<StemmerTr>[];
  declare static a_9: Among<StemmerTr>[];
  declare static g_U: number[];
  declare static g_vowel1: number[];
  declare static g_vowel2: number[];
  declare static g_vowel3: number[];
  declare static g_vowel4: number[];
  declare static g_vowel5: number[];
  declare static g_vowel6: number[];
  declare static g_vowel: number[];
  declare static methodObject: StemmerTr;

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
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    let v_7;
    let v_8;
    let v_9;
    let v_10;
    let v_11;
    // (, line 111
    // test, line 112
    v_1 = this.limit - this.cursor;
    // (, line 113
    // (, line 114
    // goto, line 114
    golab0: for (;;) {
      v_2 = this.limit - this.cursor;
      lab1: {
        if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
          break lab1;
        }
        this.cursor = this.limit - v_2;
        break golab0;
      }
      this.cursor = this.limit - v_2;
      if (this.cursor <= this.limit_backward) {
        return false;
      }
      this.cursor--;
    }
    // (, line 115
    // or, line 116
    lab2: {
      v_3 = this.limit - this.cursor;
      lab3: {
        // (, line 116
        // literal, line 116
        if (!this.eq_s_b(1, 'a')) {
          break lab3;
        }
        // goto, line 116
        golab4: for (;;) {
          v_4 = this.limit - this.cursor;
          lab5: {
            if (!this.in_grouping_b(StemmerTr.g_vowel1, 97, 305)) {
              break lab5;
            }
            this.cursor = this.limit - v_4;
            break golab4;
          }
          this.cursor = this.limit - v_4;
          if (this.cursor <= this.limit_backward) {
            break lab3;
          }
          this.cursor--;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab6: {
        // (, line 117
        // literal, line 117
        if (!this.eq_s_b(1, 'e')) {
          break lab6;
        }
        // goto, line 117
        golab7: for (;;) {
          v_5 = this.limit - this.cursor;
          lab8: {
            if (!this.in_grouping_b(StemmerTr.g_vowel2, 101, 252)) {
              break lab8;
            }
            this.cursor = this.limit - v_5;
            break golab7;
          }
          this.cursor = this.limit - v_5;
          if (this.cursor <= this.limit_backward) {
            break lab6;
          }
          this.cursor--;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab9: {
        // (, line 118
        // literal, line 118
        if (!this.eq_s_b(1, '\u0131')) {
          break lab9;
        }
        // goto, line 118
        golab10: for (;;) {
          v_6 = this.limit - this.cursor;
          lab11: {
            if (!this.in_grouping_b(StemmerTr.g_vowel3, 97, 305)) {
              break lab11;
            }
            this.cursor = this.limit - v_6;
            break golab10;
          }
          this.cursor = this.limit - v_6;
          if (this.cursor <= this.limit_backward) {
            break lab9;
          }
          this.cursor--;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab12: {
        // (, line 119
        // literal, line 119
        if (!this.eq_s_b(1, 'i')) {
          break lab12;
        }
        // goto, line 119
        golab13: for (;;) {
          v_7 = this.limit - this.cursor;
          lab14: {
            if (!this.in_grouping_b(StemmerTr.g_vowel4, 101, 105)) {
              break lab14;
            }
            this.cursor = this.limit - v_7;
            break golab13;
          }
          this.cursor = this.limit - v_7;
          if (this.cursor <= this.limit_backward) {
            break lab12;
          }
          this.cursor--;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab15: {
        // (, line 120
        // literal, line 120
        if (!this.eq_s_b(1, 'o')) {
          break lab15;
        }
        // goto, line 120
        golab16: for (;;) {
          v_8 = this.limit - this.cursor;
          lab17: {
            if (!this.in_grouping_b(StemmerTr.g_vowel5, 111, 117)) {
              break lab17;
            }
            this.cursor = this.limit - v_8;
            break golab16;
          }
          this.cursor = this.limit - v_8;
          if (this.cursor <= this.limit_backward) {
            break lab15;
          }
          this.cursor--;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab18: {
        // (, line 121
        // literal, line 121
        if (!this.eq_s_b(1, '\u00F6')) {
          break lab18;
        }
        // goto, line 121
        golab19: for (;;) {
          v_9 = this.limit - this.cursor;
          lab20: {
            if (!this.in_grouping_b(StemmerTr.g_vowel6, 246, 252)) {
              break lab20;
            }
            this.cursor = this.limit - v_9;
            break golab19;
          }
          this.cursor = this.limit - v_9;
          if (this.cursor <= this.limit_backward) {
            break lab18;
          }
          this.cursor--;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab21: {
        // (, line 122
        // literal, line 122
        if (!this.eq_s_b(1, 'u')) {
          break lab21;
        }
        // goto, line 122
        golab22: for (;;) {
          v_10 = this.limit - this.cursor;
          lab23: {
            if (!this.in_grouping_b(StemmerTr.g_vowel5, 111, 117)) {
              break lab23;
            }
            this.cursor = this.limit - v_10;
            break golab22;
          }
          this.cursor = this.limit - v_10;
          if (this.cursor <= this.limit_backward) {
            break lab21;
          }
          this.cursor--;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      // (, line 123
      // literal, line 123
      if (!this.eq_s_b(1, '\u00FC')) {
        return false;
      }
      // goto, line 123
      golab24: for (;;) {
        v_11 = this.limit - this.cursor;
        lab25: {
          if (!this.in_grouping_b(StemmerTr.g_vowel6, 246, 252)) {
            break lab25;
          }
          this.cursor = this.limit - v_11;
          break golab24;
        }
        this.cursor = this.limit - v_11;
        if (this.cursor <= this.limit_backward) {
          return false;
        }
        this.cursor--;
      }
    }
    this.cursor = this.limit - v_1;
    return true;
  }

  r_mark_suffix_with_optional_n_consonant() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    let v_7;
    // (, line 132
    // or, line 134
    lab0: {
      v_1 = this.limit - this.cursor;
      lab1: {
        // (, line 133
        // (, line 133
        // test, line 133
        v_2 = this.limit - this.cursor;
        // literal, line 133
        if (!this.eq_s_b(1, 'n')) {
          break lab1;
        }
        this.cursor = this.limit - v_2;
        // next, line 133
        if (this.cursor <= this.limit_backward) {
          break lab1;
        }
        this.cursor--;
        // (, line 133
        // test, line 133
        v_3 = this.limit - this.cursor;
        if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
          break lab1;
        }
        this.cursor = this.limit - v_3;
        break lab0;
      }
      this.cursor = this.limit - v_1;
      // (, line 135
      // (, line 135
      // not, line 135
      {
        v_4 = this.limit - this.cursor;
        lab2: {
          // (, line 135
          // test, line 135
          v_5 = this.limit - this.cursor;
          // literal, line 135
          if (!this.eq_s_b(1, 'n')) {
            break lab2;
          }
          this.cursor = this.limit - v_5;
          return false;
        }
        this.cursor = this.limit - v_4;
      }
      // test, line 135
      v_6 = this.limit - this.cursor;
      // (, line 135
      // next, line 135
      if (this.cursor <= this.limit_backward) {
        return false;
      }
      this.cursor--;
      // (, line 135
      // test, line 135
      v_7 = this.limit - this.cursor;
      if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
        return false;
      }
      this.cursor = this.limit - v_7;
      this.cursor = this.limit - v_6;
    }
    return true;
  }

  r_mark_suffix_with_optional_s_consonant() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    let v_7;
    // (, line 143
    // or, line 145
    lab0: {
      v_1 = this.limit - this.cursor;
      lab1: {
        // (, line 144
        // (, line 144
        // test, line 144
        v_2 = this.limit - this.cursor;
        // literal, line 144
        if (!this.eq_s_b(1, 's')) {
          break lab1;
        }
        this.cursor = this.limit - v_2;
        // next, line 144
        if (this.cursor <= this.limit_backward) {
          break lab1;
        }
        this.cursor--;
        // (, line 144
        // test, line 144
        v_3 = this.limit - this.cursor;
        if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
          break lab1;
        }
        this.cursor = this.limit - v_3;
        break lab0;
      }
      this.cursor = this.limit - v_1;
      // (, line 146
      // (, line 146
      // not, line 146
      {
        v_4 = this.limit - this.cursor;
        lab2: {
          // (, line 146
          // test, line 146
          v_5 = this.limit - this.cursor;
          // literal, line 146
          if (!this.eq_s_b(1, 's')) {
            break lab2;
          }
          this.cursor = this.limit - v_5;
          return false;
        }
        this.cursor = this.limit - v_4;
      }
      // test, line 146
      v_6 = this.limit - this.cursor;
      // (, line 146
      // next, line 146
      if (this.cursor <= this.limit_backward) {
        return false;
      }
      this.cursor--;
      // (, line 146
      // test, line 146
      v_7 = this.limit - this.cursor;
      if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
        return false;
      }
      this.cursor = this.limit - v_7;
      this.cursor = this.limit - v_6;
    }
    return true;
  }

  r_mark_suffix_with_optional_y_consonant() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    let v_7;
    // (, line 153
    // or, line 155
    lab0: {
      v_1 = this.limit - this.cursor;
      lab1: {
        // (, line 154
        // (, line 154
        // test, line 154
        v_2 = this.limit - this.cursor;
        // literal, line 154
        if (!this.eq_s_b(1, 'y')) {
          break lab1;
        }
        this.cursor = this.limit - v_2;
        // next, line 154
        if (this.cursor <= this.limit_backward) {
          break lab1;
        }
        this.cursor--;
        // (, line 154
        // test, line 154
        v_3 = this.limit - this.cursor;
        if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
          break lab1;
        }
        this.cursor = this.limit - v_3;
        break lab0;
      }
      this.cursor = this.limit - v_1;
      // (, line 156
      // (, line 156
      // not, line 156
      {
        v_4 = this.limit - this.cursor;
        lab2: {
          // (, line 156
          // test, line 156
          v_5 = this.limit - this.cursor;
          // literal, line 156
          if (!this.eq_s_b(1, 'y')) {
            break lab2;
          }
          this.cursor = this.limit - v_5;
          return false;
        }
        this.cursor = this.limit - v_4;
      }
      // test, line 156
      v_6 = this.limit - this.cursor;
      // (, line 156
      // next, line 156
      if (this.cursor <= this.limit_backward) {
        return false;
      }
      this.cursor--;
      // (, line 156
      // test, line 156
      v_7 = this.limit - this.cursor;
      if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
        return false;
      }
      this.cursor = this.limit - v_7;
      this.cursor = this.limit - v_6;
    }
    return true;
  }

  r_mark_suffix_with_optional_U_vowel() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    let v_7;
    // (, line 159
    // or, line 161
    lab0: {
      v_1 = this.limit - this.cursor;
      lab1: {
        // (, line 160
        // (, line 160
        // test, line 160
        v_2 = this.limit - this.cursor;
        if (!this.in_grouping_b(StemmerTr.g_U, 105, 305)) {
          break lab1;
        }
        this.cursor = this.limit - v_2;
        // next, line 160
        if (this.cursor <= this.limit_backward) {
          break lab1;
        }
        this.cursor--;
        // (, line 160
        // test, line 160
        v_3 = this.limit - this.cursor;
        if (!this.out_grouping_b(StemmerTr.g_vowel, 97, 305)) {
          break lab1;
        }
        this.cursor = this.limit - v_3;
        break lab0;
      }
      this.cursor = this.limit - v_1;
      // (, line 162
      // (, line 162
      // not, line 162
      {
        v_4 = this.limit - this.cursor;
        lab2: {
          // (, line 162
          // test, line 162
          v_5 = this.limit - this.cursor;
          if (!this.in_grouping_b(StemmerTr.g_U, 105, 305)) {
            break lab2;
          }
          this.cursor = this.limit - v_5;
          return false;
        }
        this.cursor = this.limit - v_4;
      }
      // test, line 162
      v_6 = this.limit - this.cursor;
      // (, line 162
      // next, line 162
      if (this.cursor <= this.limit_backward) {
        return false;
      }
      this.cursor--;
      // (, line 162
      // test, line 162
      v_7 = this.limit - this.cursor;
      if (!this.out_grouping_b(StemmerTr.g_vowel, 97, 305)) {
        return false;
      }
      this.cursor = this.limit - v_7;
      this.cursor = this.limit - v_6;
    }
    return true;
  }

  r_mark_possessives() {
    // (, line 166
    // among, line 167
    if (this.find_among_b(StemmerTr.a_0, 10) == 0) {
      return false;
    }
    // (, line 169
    // call mark_suffix_with_optional_U_vowel, line 169
    if (!this.r_mark_suffix_with_optional_U_vowel()) {
      return false;
    }
    return true;
  }

  r_mark_sU() {
    // (, line 172
    // call check_vowel_harmony, line 173
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (!this.in_grouping_b(StemmerTr.g_U, 105, 305)) {
      return false;
    }
    // (, line 175
    // call mark_suffix_with_optional_s_consonant, line 175
    if (!this.r_mark_suffix_with_optional_s_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_lArI() {
    // (, line 178
    // among, line 179
    if (this.find_among_b(StemmerTr.a_1, 2) == 0) {
      return false;
    }
    return true;
  }

  r_mark_yU() {
    // (, line 182
    // call check_vowel_harmony, line 183
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (!this.in_grouping_b(StemmerTr.g_U, 105, 305)) {
      return false;
    }
    // (, line 185
    // call mark_suffix_with_optional_y_consonant, line 185
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_nU() {
    // (, line 188
    // call check_vowel_harmony, line 189
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 190
    if (this.find_among_b(StemmerTr.a_2, 4) == 0) {
      return false;
    }
    return true;
  }

  r_mark_nUn() {
    // (, line 193
    // call check_vowel_harmony, line 194
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 195
    if (this.find_among_b(StemmerTr.a_3, 4) == 0) {
      return false;
    }
    // (, line 196
    // call mark_suffix_with_optional_n_consonant, line 196
    if (!this.r_mark_suffix_with_optional_n_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_yA() {
    // (, line 199
    // call check_vowel_harmony, line 200
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 201
    if (this.find_among_b(StemmerTr.a_4, 2) == 0) {
      return false;
    }
    // (, line 202
    // call mark_suffix_with_optional_y_consonant, line 202
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_nA() {
    // (, line 205
    // call check_vowel_harmony, line 206
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 207
    if (this.find_among_b(StemmerTr.a_5, 2) == 0) {
      return false;
    }
    return true;
  }

  r_mark_DA() {
    // (, line 210
    // call check_vowel_harmony, line 211
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 212
    if (this.find_among_b(StemmerTr.a_6, 4) == 0) {
      return false;
    }
    return true;
  }

  r_mark_ndA() {
    // (, line 215
    // call check_vowel_harmony, line 216
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 217
    if (this.find_among_b(StemmerTr.a_7, 2) == 0) {
      return false;
    }
    return true;
  }

  r_mark_DAn() {
    // (, line 220
    // call check_vowel_harmony, line 221
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 222
    if (this.find_among_b(StemmerTr.a_8, 4) == 0) {
      return false;
    }
    return true;
  }

  r_mark_ndAn() {
    // (, line 225
    // call check_vowel_harmony, line 226
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 227
    if (this.find_among_b(StemmerTr.a_9, 2) == 0) {
      return false;
    }
    return true;
  }

  r_mark_ylA() {
    // (, line 230
    // call check_vowel_harmony, line 231
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 232
    if (this.find_among_b(StemmerTr.a_10, 2) == 0) {
      return false;
    }
    // (, line 233
    // call mark_suffix_with_optional_y_consonant, line 233
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_ki() {
    // (, line 236
    // literal, line 237
    if (!this.eq_s_b(2, 'ki')) {
      return false;
    }
    return true;
  }

  r_mark_ncA() {
    // (, line 240
    // call check_vowel_harmony, line 241
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 242
    if (this.find_among_b(StemmerTr.a_11, 2) == 0) {
      return false;
    }
    // (, line 243
    // call mark_suffix_with_optional_n_consonant, line 243
    if (!this.r_mark_suffix_with_optional_n_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_yUm() {
    // (, line 246
    // call check_vowel_harmony, line 247
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 248
    if (this.find_among_b(StemmerTr.a_12, 4) == 0) {
      return false;
    }
    // (, line 249
    // call mark_suffix_with_optional_y_consonant, line 249
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_sUn() {
    // (, line 252
    // call check_vowel_harmony, line 253
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 254
    if (this.find_among_b(StemmerTr.a_13, 4) == 0) {
      return false;
    }
    return true;
  }

  r_mark_yUz() {
    // (, line 257
    // call check_vowel_harmony, line 258
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 259
    if (this.find_among_b(StemmerTr.a_14, 4) == 0) {
      return false;
    }
    // (, line 260
    // call mark_suffix_with_optional_y_consonant, line 260
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_sUnUz() {
    // (, line 263
    // among, line 264
    if (this.find_among_b(StemmerTr.a_15, 4) == 0) {
      return false;
    }
    return true;
  }

  r_mark_lAr() {
    // (, line 267
    // call check_vowel_harmony, line 268
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 269
    if (this.find_among_b(StemmerTr.a_16, 2) == 0) {
      return false;
    }
    return true;
  }

  r_mark_nUz() {
    // (, line 272
    // call check_vowel_harmony, line 273
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 274
    if (this.find_among_b(StemmerTr.a_17, 4) == 0) {
      return false;
    }
    return true;
  }

  r_mark_DUr() {
    // (, line 277
    // call check_vowel_harmony, line 278
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 279
    if (this.find_among_b(StemmerTr.a_18, 8) == 0) {
      return false;
    }
    return true;
  }

  r_mark_cAsInA() {
    // (, line 282
    // among, line 283
    if (this.find_among_b(StemmerTr.a_19, 2) == 0) {
      return false;
    }
    return true;
  }

  r_mark_yDU() {
    // (, line 286
    // call check_vowel_harmony, line 287
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 288
    if (this.find_among_b(StemmerTr.a_20, 32) == 0) {
      return false;
    }
    // (, line 292
    // call mark_suffix_with_optional_y_consonant, line 292
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_ysA() {
    // (, line 296
    // among, line 297
    if (this.find_among_b(StemmerTr.a_21, 8) == 0) {
      return false;
    }
    // (, line 298
    // call mark_suffix_with_optional_y_consonant, line 298
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_ymUs() {
    // (, line 301
    // call check_vowel_harmony, line 302
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 303
    if (this.find_among_b(StemmerTr.a_22, 4) == 0) {
      return false;
    }
    // (, line 304
    // call mark_suffix_with_optional_y_consonant, line 304
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_yken() {
    // (, line 307
    // literal, line 308
    if (!this.eq_s_b(3, 'ken')) {
      return false;
    }
    // (, line 308
    // call mark_suffix_with_optional_y_consonant, line 308
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_stem_nominal_verb_suffixes() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    let v_7;
    let v_8;
    let v_9;
    let v_10;
    // (, line 311
    // [, line 312
    this.ket = this.cursor;
    // set continue_stemming_noun_suffixes, line 313
    this.B_continue_stemming_noun_suffixes = true;
    // or, line 315
    lab0: {
      v_1 = this.limit - this.cursor;
      lab1: {
        // (, line 314
        // or, line 314
        lab2: {
          v_2 = this.limit - this.cursor;
          lab3: {
            // call mark_ymUs_, line 314
            if (!this.r_mark_ymUs()) {
              break lab3;
            }
            break lab2;
          }
          this.cursor = this.limit - v_2;
          lab4: {
            // call mark_yDU, line 314
            if (!this.r_mark_yDU()) {
              break lab4;
            }
            break lab2;
          }
          this.cursor = this.limit - v_2;
          lab5: {
            // call mark_ysA, line 314
            if (!this.r_mark_ysA()) {
              break lab5;
            }
            break lab2;
          }
          this.cursor = this.limit - v_2;
          // call mark_yken, line 314
          if (!this.r_mark_yken()) {
            break lab1;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab6: {
        // (, line 316
        // call mark_cAsInA, line 316
        if (!this.r_mark_cAsInA()) {
          break lab6;
        }
        // (, line 316
        // or, line 316
        lab7: {
          v_3 = this.limit - this.cursor;
          lab8: {
            // call mark_sUnUz, line 316
            if (!this.r_mark_sUnUz()) {
              break lab8;
            }
            break lab7;
          }
          this.cursor = this.limit - v_3;
          lab9: {
            // call mark_lAr, line 316
            if (!this.r_mark_lAr()) {
              break lab9;
            }
            break lab7;
          }
          this.cursor = this.limit - v_3;
          lab10: {
            // call mark_yUm, line 316
            if (!this.r_mark_yUm()) {
              break lab10;
            }
            break lab7;
          }
          this.cursor = this.limit - v_3;
          lab11: {
            // call mark_sUn, line 316
            if (!this.r_mark_sUn()) {
              break lab11;
            }
            break lab7;
          }
          this.cursor = this.limit - v_3;
          lab12: {
            // call mark_yUz, line 316
            if (!this.r_mark_yUz()) {
              break lab12;
            }
            break lab7;
          }
          this.cursor = this.limit - v_3;
        }
        // call mark_ymUs_, line 316
        if (!this.r_mark_ymUs()) {
          break lab6;
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab13: {
        // (, line 318
        // call mark_lAr, line 319
        if (!this.r_mark_lAr()) {
          break lab13;
        }
        // ], line 319
        this.bra = this.cursor;
        // delete, line 319
        if (!this.slice_del()) {
          return false;
        }
        // try, line 319
        v_4 = this.limit - this.cursor;
        lab14: {
          // (, line 319
          // [, line 319
          this.ket = this.cursor;
          // (, line 319
          // or, line 319
          lab15: {
            v_5 = this.limit - this.cursor;
            lab16: {
              // call mark_DUr, line 319
              if (!this.r_mark_DUr()) {
                break lab16;
              }
              break lab15;
            }
            this.cursor = this.limit - v_5;
            lab17: {
              // call mark_yDU, line 319
              if (!this.r_mark_yDU()) {
                break lab17;
              }
              break lab15;
            }
            this.cursor = this.limit - v_5;
            lab18: {
              // call mark_ysA, line 319
              if (!this.r_mark_ysA()) {
                break lab18;
              }
              break lab15;
            }
            this.cursor = this.limit - v_5;
            // call mark_ymUs_, line 319
            if (!this.r_mark_ymUs()) {
              this.cursor = this.limit - v_4;
              break lab14;
            }
          }
        }
        // unset continue_stemming_noun_suffixes, line 320
        this.B_continue_stemming_noun_suffixes = false;
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab19: {
        // (, line 323
        // call mark_nUz, line 323
        if (!this.r_mark_nUz()) {
          break lab19;
        }
        // (, line 323
        // or, line 323
        lab20: {
          v_6 = this.limit - this.cursor;
          lab21: {
            // call mark_yDU, line 323
            if (!this.r_mark_yDU()) {
              break lab21;
            }
            break lab20;
          }
          this.cursor = this.limit - v_6;
          // call mark_ysA, line 323
          if (!this.r_mark_ysA()) {
            break lab19;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab22: {
        // (, line 325
        // (, line 325
        // or, line 325
        lab23: {
          v_7 = this.limit - this.cursor;
          lab24: {
            // call mark_sUnUz, line 325
            if (!this.r_mark_sUnUz()) {
              break lab24;
            }
            break lab23;
          }
          this.cursor = this.limit - v_7;
          lab25: {
            // call mark_yUz, line 325
            if (!this.r_mark_yUz()) {
              break lab25;
            }
            break lab23;
          }
          this.cursor = this.limit - v_7;
          lab26: {
            // call mark_sUn, line 325
            if (!this.r_mark_sUn()) {
              break lab26;
            }
            break lab23;
          }
          this.cursor = this.limit - v_7;
          // call mark_yUm, line 325
          if (!this.r_mark_yUm()) {
            break lab22;
          }
        }
        // ], line 325
        this.bra = this.cursor;
        // delete, line 325
        if (!this.slice_del()) {
          return false;
        }
        // try, line 325
        v_8 = this.limit - this.cursor;
        lab27: {
          // (, line 325
          // [, line 325
          this.ket = this.cursor;
          // call mark_ymUs_, line 325
          if (!this.r_mark_ymUs()) {
            this.cursor = this.limit - v_8;
            break lab27;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      // (, line 327
      // call mark_DUr, line 327
      if (!this.r_mark_DUr()) {
        return false;
      }
      // ], line 327
      this.bra = this.cursor;
      // delete, line 327
      if (!this.slice_del()) {
        return false;
      }
      // try, line 327
      v_9 = this.limit - this.cursor;
      lab28: {
        // (, line 327
        // [, line 327
        this.ket = this.cursor;
        // (, line 327
        // or, line 327
        lab29: {
          v_10 = this.limit - this.cursor;
          lab30: {
            // call mark_sUnUz, line 327
            if (!this.r_mark_sUnUz()) {
              break lab30;
            }
            break lab29;
          }
          this.cursor = this.limit - v_10;
          lab31: {
            // call mark_lAr, line 327
            if (!this.r_mark_lAr()) {
              break lab31;
            }
            break lab29;
          }
          this.cursor = this.limit - v_10;
          lab32: {
            // call mark_yUm, line 327
            if (!this.r_mark_yUm()) {
              break lab32;
            }
            break lab29;
          }
          this.cursor = this.limit - v_10;
          lab33: {
            // call mark_sUn, line 327
            if (!this.r_mark_sUn()) {
              break lab33;
            }
            break lab29;
          }
          this.cursor = this.limit - v_10;
          lab34: {
            // call mark_yUz, line 327
            if (!this.r_mark_yUz()) {
              break lab34;
            }
            break lab29;
          }
          this.cursor = this.limit - v_10;
        }
        // call mark_ymUs_, line 327
        if (!this.r_mark_ymUs()) {
          this.cursor = this.limit - v_9;
          break lab28;
        }
      }
    }
    // ], line 328
    this.bra = this.cursor;
    // delete, line 328
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  r_stem_suffix_chain_before_ki() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    let v_7;
    let v_8;
    let v_9;
    let v_10;
    let v_11;
    // (, line 332
    // [, line 333
    this.ket = this.cursor;
    // call mark_ki, line 334
    if (!this.r_mark_ki()) {
      return false;
    }
    // (, line 335
    // or, line 342
    lab0: {
      v_1 = this.limit - this.cursor;
      lab1: {
        // (, line 336
        // call mark_DA, line 336
        if (!this.r_mark_DA()) {
          break lab1;
        }
        // ], line 336
        this.bra = this.cursor;
        // delete, line 336
        if (!this.slice_del()) {
          return false;
        }
        // try, line 336
        v_2 = this.limit - this.cursor;
        lab2: {
          // (, line 336
          // [, line 336
          this.ket = this.cursor;
          // or, line 338
          lab3: {
            v_3 = this.limit - this.cursor;
            lab4: {
              // (, line 337
              // call mark_lAr, line 337
              if (!this.r_mark_lAr()) {
                break lab4;
              }
              // ], line 337
              this.bra = this.cursor;
              // delete, line 337
              if (!this.slice_del()) {
                return false;
              }
              // try, line 337
              v_4 = this.limit - this.cursor;
              lab5: {
                // (, line 337
                // call stem_suffix_chain_before_ki, line 337
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_4;
                  break lab5;
                }
              }
              break lab3;
            }
            this.cursor = this.limit - v_3;
            // (, line 339
            // call mark_possessives, line 339
            if (!this.r_mark_possessives()) {
              this.cursor = this.limit - v_2;
              break lab2;
            }
            // ], line 339
            this.bra = this.cursor;
            // delete, line 339
            if (!this.slice_del()) {
              return false;
            }
            // try, line 339
            v_5 = this.limit - this.cursor;
            lab6: {
              // (, line 339
              // [, line 339
              this.ket = this.cursor;
              // call mark_lAr, line 339
              if (!this.r_mark_lAr()) {
                this.cursor = this.limit - v_5;
                break lab6;
              }
              // ], line 339
              this.bra = this.cursor;
              // delete, line 339
              if (!this.slice_del()) {
                return false;
              }
              // call stem_suffix_chain_before_ki, line 339
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
        // (, line 343
        // call mark_nUn, line 343
        if (!this.r_mark_nUn()) {
          break lab7;
        }
        // ], line 343
        this.bra = this.cursor;
        // delete, line 343
        if (!this.slice_del()) {
          return false;
        }
        // try, line 343
        v_6 = this.limit - this.cursor;
        lab8: {
          // (, line 343
          // [, line 343
          this.ket = this.cursor;
          // or, line 345
          lab9: {
            v_7 = this.limit - this.cursor;
            lab10: {
              // (, line 344
              // call mark_lArI, line 344
              if (!this.r_mark_lArI()) {
                break lab10;
              }
              // ], line 344
              this.bra = this.cursor;
              // delete, line 344
              if (!this.slice_del()) {
                return false;
              }
              break lab9;
            }
            this.cursor = this.limit - v_7;
            lab11: {
              // (, line 346
              // [, line 346
              this.ket = this.cursor;
              // or, line 346
              lab12: {
                v_8 = this.limit - this.cursor;
                lab13: {
                  // call mark_possessives, line 346
                  if (!this.r_mark_possessives()) {
                    break lab13;
                  }
                  break lab12;
                }
                this.cursor = this.limit - v_8;
                // call mark_sU, line 346
                if (!this.r_mark_sU()) {
                  break lab11;
                }
              }
              // ], line 346
              this.bra = this.cursor;
              // delete, line 346
              if (!this.slice_del()) {
                return false;
              }
              // try, line 346
              v_9 = this.limit - this.cursor;
              lab14: {
                // (, line 346
                // [, line 346
                this.ket = this.cursor;
                // call mark_lAr, line 346
                if (!this.r_mark_lAr()) {
                  this.cursor = this.limit - v_9;
                  break lab14;
                }
                // ], line 346
                this.bra = this.cursor;
                // delete, line 346
                if (!this.slice_del()) {
                  return false;
                }
                // call stem_suffix_chain_before_ki, line 346
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_9;
                  break lab14;
                }
              }
              break lab9;
            }
            this.cursor = this.limit - v_7;
            // (, line 348
            // call stem_suffix_chain_before_ki, line 348
            if (!this.r_stem_suffix_chain_before_ki()) {
              this.cursor = this.limit - v_6;
              break lab8;
            }
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      // (, line 351
      // call mark_ndA, line 351
      if (!this.r_mark_ndA()) {
        return false;
      }
      // (, line 351
      // or, line 353
      lab15: {
        v_10 = this.limit - this.cursor;
        lab16: {
          // (, line 352
          // call mark_lArI, line 352
          if (!this.r_mark_lArI()) {
            break lab16;
          }
          // ], line 352
          this.bra = this.cursor;
          // delete, line 352
          if (!this.slice_del()) {
            return false;
          }
          break lab15;
        }
        this.cursor = this.limit - v_10;
        lab17: {
          // (, line 354
          // (, line 354
          // call mark_sU, line 354
          if (!this.r_mark_sU()) {
            break lab17;
          }
          // ], line 354
          this.bra = this.cursor;
          // delete, line 354
          if (!this.slice_del()) {
            return false;
          }
          // try, line 354
          v_11 = this.limit - this.cursor;
          lab18: {
            // (, line 354
            // [, line 354
            this.ket = this.cursor;
            // call mark_lAr, line 354
            if (!this.r_mark_lAr()) {
              this.cursor = this.limit - v_11;
              break lab18;
            }
            // ], line 354
            this.bra = this.cursor;
            // delete, line 354
            if (!this.slice_del()) {
              return false;
            }
            // call stem_suffix_chain_before_ki, line 354
            if (!this.r_stem_suffix_chain_before_ki()) {
              this.cursor = this.limit - v_11;
              break lab18;
            }
          }
          break lab15;
        }
        this.cursor = this.limit - v_10;
        // (, line 356
        // call stem_suffix_chain_before_ki, line 356
        if (!this.r_stem_suffix_chain_before_ki()) {
          return false;
        }
      }
    }
    return true;
  }

  r_stem_noun_suffixes() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    let v_7;
    let v_8;
    let v_9;
    let v_10;
    let v_11;
    let v_12;
    let v_13;
    let v_14;
    let v_15;
    let v_16;
    let v_17;
    let v_18;
    let v_19;
    let v_20;
    let v_21;
    let v_22;
    let v_23;
    let v_24;
    let v_25;
    let v_26;
    let v_27;
    // (, line 361
    // or, line 363
    lab0: {
      v_1 = this.limit - this.cursor;
      lab1: {
        // (, line 362
        // [, line 362
        this.ket = this.cursor;
        // call mark_lAr, line 362
        if (!this.r_mark_lAr()) {
          break lab1;
        }
        // ], line 362
        this.bra = this.cursor;
        // delete, line 362
        if (!this.slice_del()) {
          return false;
        }
        // try, line 362
        v_2 = this.limit - this.cursor;
        lab2: {
          // (, line 362
          // call stem_suffix_chain_before_ki, line 362
          if (!this.r_stem_suffix_chain_before_ki()) {
            this.cursor = this.limit - v_2;
            break lab2;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab3: {
        // (, line 364
        // [, line 364
        this.ket = this.cursor;
        // call mark_ncA, line 364
        if (!this.r_mark_ncA()) {
          break lab3;
        }
        // ], line 364
        this.bra = this.cursor;
        // delete, line 364
        if (!this.slice_del()) {
          return false;
        }
        // try, line 365
        v_3 = this.limit - this.cursor;
        lab4: {
          // (, line 365
          // or, line 367
          lab5: {
            v_4 = this.limit - this.cursor;
            lab6: {
              // (, line 366
              // [, line 366
              this.ket = this.cursor;
              // call mark_lArI, line 366
              if (!this.r_mark_lArI()) {
                break lab6;
              }
              // ], line 366
              this.bra = this.cursor;
              // delete, line 366
              if (!this.slice_del()) {
                return false;
              }
              break lab5;
            }
            this.cursor = this.limit - v_4;
            lab7: {
              // (, line 368
              // [, line 368
              this.ket = this.cursor;
              // or, line 368
              lab8: {
                v_5 = this.limit - this.cursor;
                lab9: {
                  // call mark_possessives, line 368
                  if (!this.r_mark_possessives()) {
                    break lab9;
                  }
                  break lab8;
                }
                this.cursor = this.limit - v_5;
                // call mark_sU, line 368
                if (!this.r_mark_sU()) {
                  break lab7;
                }
              }
              // ], line 368
              this.bra = this.cursor;
              // delete, line 368
              if (!this.slice_del()) {
                return false;
              }
              // try, line 368
              v_6 = this.limit - this.cursor;
              lab10: {
                // (, line 368
                // [, line 368
                this.ket = this.cursor;
                // call mark_lAr, line 368
                if (!this.r_mark_lAr()) {
                  this.cursor = this.limit - v_6;
                  break lab10;
                }
                // ], line 368
                this.bra = this.cursor;
                // delete, line 368
                if (!this.slice_del()) {
                  return false;
                }
                // call stem_suffix_chain_before_ki, line 368
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_6;
                  break lab10;
                }
              }
              break lab5;
            }
            this.cursor = this.limit - v_4;
            // (, line 370
            // [, line 370
            this.ket = this.cursor;
            // call mark_lAr, line 370
            if (!this.r_mark_lAr()) {
              this.cursor = this.limit - v_3;
              break lab4;
            }
            // ], line 370
            this.bra = this.cursor;
            // delete, line 370
            if (!this.slice_del()) {
              return false;
            }
            // call stem_suffix_chain_before_ki, line 370
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
        // (, line 374
        // [, line 374
        this.ket = this.cursor;
        // (, line 374
        // or, line 374
        lab12: {
          v_7 = this.limit - this.cursor;
          lab13: {
            // call mark_ndA, line 374
            if (!this.r_mark_ndA()) {
              break lab13;
            }
            break lab12;
          }
          this.cursor = this.limit - v_7;
          // call mark_nA, line 374
          if (!this.r_mark_nA()) {
            break lab11;
          }
        }
        // (, line 375
        // or, line 377
        lab14: {
          v_8 = this.limit - this.cursor;
          lab15: {
            // (, line 376
            // call mark_lArI, line 376
            if (!this.r_mark_lArI()) {
              break lab15;
            }
            // ], line 376
            this.bra = this.cursor;
            // delete, line 376
            if (!this.slice_del()) {
              return false;
            }
            break lab14;
          }
          this.cursor = this.limit - v_8;
          lab16: {
            // (, line 378
            // call mark_sU, line 378
            if (!this.r_mark_sU()) {
              break lab16;
            }
            // ], line 378
            this.bra = this.cursor;
            // delete, line 378
            if (!this.slice_del()) {
              return false;
            }
            // try, line 378
            v_9 = this.limit - this.cursor;
            lab17: {
              // (, line 378
              // [, line 378
              this.ket = this.cursor;
              // call mark_lAr, line 378
              if (!this.r_mark_lAr()) {
                this.cursor = this.limit - v_9;
                break lab17;
              }
              // ], line 378
              this.bra = this.cursor;
              // delete, line 378
              if (!this.slice_del()) {
                return false;
              }
              // call stem_suffix_chain_before_ki, line 378
              if (!this.r_stem_suffix_chain_before_ki()) {
                this.cursor = this.limit - v_9;
                break lab17;
              }
            }
            break lab14;
          }
          this.cursor = this.limit - v_8;
          // (, line 380
          // call stem_suffix_chain_before_ki, line 380
          if (!this.r_stem_suffix_chain_before_ki()) {
            break lab11;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab18: {
        // (, line 384
        // [, line 384
        this.ket = this.cursor;
        // (, line 384
        // or, line 384
        lab19: {
          v_10 = this.limit - this.cursor;
          lab20: {
            // call mark_ndAn, line 384
            if (!this.r_mark_ndAn()) {
              break lab20;
            }
            break lab19;
          }
          this.cursor = this.limit - v_10;
          // call mark_nU, line 384
          if (!this.r_mark_nU()) {
            break lab18;
          }
        }
        // (, line 384
        // or, line 384
        lab21: {
          v_11 = this.limit - this.cursor;
          lab22: {
            // (, line 384
            // call mark_sU, line 384
            if (!this.r_mark_sU()) {
              break lab22;
            }
            // ], line 384
            this.bra = this.cursor;
            // delete, line 384
            if (!this.slice_del()) {
              return false;
            }
            // try, line 384
            v_12 = this.limit - this.cursor;
            lab23: {
              // (, line 384
              // [, line 384
              this.ket = this.cursor;
              // call mark_lAr, line 384
              if (!this.r_mark_lAr()) {
                this.cursor = this.limit - v_12;
                break lab23;
              }
              // ], line 384
              this.bra = this.cursor;
              // delete, line 384
              if (!this.slice_del()) {
                return false;
              }
              // call stem_suffix_chain_before_ki, line 384
              if (!this.r_stem_suffix_chain_before_ki()) {
                this.cursor = this.limit - v_12;
                break lab23;
              }
            }
            break lab21;
          }
          this.cursor = this.limit - v_11;
          // (, line 384
          // call mark_lArI, line 384
          if (!this.r_mark_lArI()) {
            break lab18;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab24: {
        // (, line 386
        // [, line 386
        this.ket = this.cursor;
        // call mark_DAn, line 386
        if (!this.r_mark_DAn()) {
          break lab24;
        }
        // ], line 386
        this.bra = this.cursor;
        // delete, line 386
        if (!this.slice_del()) {
          return false;
        }
        // try, line 386
        v_13 = this.limit - this.cursor;
        lab25: {
          // (, line 386
          // [, line 386
          this.ket = this.cursor;
          // (, line 387
          // or, line 389
          lab26: {
            v_14 = this.limit - this.cursor;
            lab27: {
              // (, line 388
              // call mark_possessives, line 388
              if (!this.r_mark_possessives()) {
                break lab27;
              }
              // ], line 388
              this.bra = this.cursor;
              // delete, line 388
              if (!this.slice_del()) {
                return false;
              }
              // try, line 388
              v_15 = this.limit - this.cursor;
              lab28: {
                // (, line 388
                // [, line 388
                this.ket = this.cursor;
                // call mark_lAr, line 388
                if (!this.r_mark_lAr()) {
                  this.cursor = this.limit - v_15;
                  break lab28;
                }
                // ], line 388
                this.bra = this.cursor;
                // delete, line 388
                if (!this.slice_del()) {
                  return false;
                }
                // call stem_suffix_chain_before_ki, line 388
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_15;
                  break lab28;
                }
              }
              break lab26;
            }
            this.cursor = this.limit - v_14;
            lab29: {
              // (, line 390
              // call mark_lAr, line 390
              if (!this.r_mark_lAr()) {
                break lab29;
              }
              // ], line 390
              this.bra = this.cursor;
              // delete, line 390
              if (!this.slice_del()) {
                return false;
              }
              // try, line 390
              v_16 = this.limit - this.cursor;
              lab30: {
                // (, line 390
                // call stem_suffix_chain_before_ki, line 390
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_16;
                  break lab30;
                }
              }
              break lab26;
            }
            this.cursor = this.limit - v_14;
            // (, line 392
            // call stem_suffix_chain_before_ki, line 392
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
        // (, line 396
        // [, line 396
        this.ket = this.cursor;
        // or, line 396
        lab32: {
          v_17 = this.limit - this.cursor;
          lab33: {
            // call mark_nUn, line 396
            if (!this.r_mark_nUn()) {
              break lab33;
            }
            break lab32;
          }
          this.cursor = this.limit - v_17;
          // call mark_ylA, line 396
          if (!this.r_mark_ylA()) {
            break lab31;
          }
        }
        // ], line 396
        this.bra = this.cursor;
        // delete, line 396
        if (!this.slice_del()) {
          return false;
        }
        // try, line 397
        v_18 = this.limit - this.cursor;
        lab34: {
          // (, line 397
          // or, line 399
          lab35: {
            v_19 = this.limit - this.cursor;
            lab36: {
              // (, line 398
              // [, line 398
              this.ket = this.cursor;
              // call mark_lAr, line 398
              if (!this.r_mark_lAr()) {
                break lab36;
              }
              // ], line 398
              this.bra = this.cursor;
              // delete, line 398
              if (!this.slice_del()) {
                return false;
              }
              // call stem_suffix_chain_before_ki, line 398
              if (!this.r_stem_suffix_chain_before_ki()) {
                break lab36;
              }
              break lab35;
            }
            this.cursor = this.limit - v_19;
            lab37: {
              // (, line 400
              // [, line 400
              this.ket = this.cursor;
              // or, line 400
              lab38: {
                v_20 = this.limit - this.cursor;
                lab39: {
                  // call mark_possessives, line 400
                  if (!this.r_mark_possessives()) {
                    break lab39;
                  }
                  break lab38;
                }
                this.cursor = this.limit - v_20;
                // call mark_sU, line 400
                if (!this.r_mark_sU()) {
                  break lab37;
                }
              }
              // ], line 400
              this.bra = this.cursor;
              // delete, line 400
              if (!this.slice_del()) {
                return false;
              }
              // try, line 400
              v_21 = this.limit - this.cursor;
              lab40: {
                // (, line 400
                // [, line 400
                this.ket = this.cursor;
                // call mark_lAr, line 400
                if (!this.r_mark_lAr()) {
                  this.cursor = this.limit - v_21;
                  break lab40;
                }
                // ], line 400
                this.bra = this.cursor;
                // delete, line 400
                if (!this.slice_del()) {
                  return false;
                }
                // call stem_suffix_chain_before_ki, line 400
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_21;
                  break lab40;
                }
              }
              break lab35;
            }
            this.cursor = this.limit - v_19;
            // call stem_suffix_chain_before_ki, line 402
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
        // (, line 406
        // [, line 406
        this.ket = this.cursor;
        // call mark_lArI, line 406
        if (!this.r_mark_lArI()) {
          break lab41;
        }
        // ], line 406
        this.bra = this.cursor;
        // delete, line 406
        if (!this.slice_del()) {
          return false;
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab42: {
        // (, line 408
        // call stem_suffix_chain_before_ki, line 408
        if (!this.r_stem_suffix_chain_before_ki()) {
          break lab42;
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      lab43: {
        // (, line 410
        // [, line 410
        this.ket = this.cursor;
        // or, line 410
        lab44: {
          v_22 = this.limit - this.cursor;
          lab45: {
            // call mark_DA, line 410
            if (!this.r_mark_DA()) {
              break lab45;
            }
            break lab44;
          }
          this.cursor = this.limit - v_22;
          lab46: {
            // call mark_yU, line 410
            if (!this.r_mark_yU()) {
              break lab46;
            }
            break lab44;
          }
          this.cursor = this.limit - v_22;
          // call mark_yA, line 410
          if (!this.r_mark_yA()) {
            break lab43;
          }
        }
        // ], line 410
        this.bra = this.cursor;
        // delete, line 410
        if (!this.slice_del()) {
          return false;
        }
        // try, line 410
        v_23 = this.limit - this.cursor;
        lab47: {
          // (, line 410
          // [, line 410
          this.ket = this.cursor;
          // (, line 410
          // or, line 410
          lab48: {
            v_24 = this.limit - this.cursor;
            lab49: {
              // (, line 410
              // call mark_possessives, line 410
              if (!this.r_mark_possessives()) {
                break lab49;
              }
              // ], line 410
              this.bra = this.cursor;
              // delete, line 410
              if (!this.slice_del()) {
                return false;
              }
              // try, line 410
              v_25 = this.limit - this.cursor;
              lab50: {
                // (, line 410
                // [, line 410
                this.ket = this.cursor;
                // call mark_lAr, line 410
                if (!this.r_mark_lAr()) {
                  this.cursor = this.limit - v_25;
                  break lab50;
                }
              }
              break lab48;
            }
            this.cursor = this.limit - v_24;
            // call mark_lAr, line 410
            if (!this.r_mark_lAr()) {
              this.cursor = this.limit - v_23;
              break lab47;
            }
          }
          // ], line 410
          this.bra = this.cursor;
          // delete, line 410
          if (!this.slice_del()) {
            return false;
          }
          // [, line 410
          this.ket = this.cursor;
          // call stem_suffix_chain_before_ki, line 410
          if (!this.r_stem_suffix_chain_before_ki()) {
            this.cursor = this.limit - v_23;
            break lab47;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      // (, line 412
      // [, line 412
      this.ket = this.cursor;
      // or, line 412
      lab51: {
        v_26 = this.limit - this.cursor;
        lab52: {
          // call mark_possessives, line 412
          if (!this.r_mark_possessives()) {
            break lab52;
          }
          break lab51;
        }
        this.cursor = this.limit - v_26;
        // call mark_sU, line 412
        if (!this.r_mark_sU()) {
          return false;
        }
      }
      // ], line 412
      this.bra = this.cursor;
      // delete, line 412
      if (!this.slice_del()) {
        return false;
      }
      // try, line 412
      v_27 = this.limit - this.cursor;
      lab53: {
        // (, line 412
        // [, line 412
        this.ket = this.cursor;
        // call mark_lAr, line 412
        if (!this.r_mark_lAr()) {
          this.cursor = this.limit - v_27;
          break lab53;
        }
        // ], line 412
        this.bra = this.cursor;
        // delete, line 412
        if (!this.slice_del()) {
          return false;
        }
        // call stem_suffix_chain_before_ki, line 412
        if (!this.r_stem_suffix_chain_before_ki()) {
          this.cursor = this.limit - v_27;
          break lab53;
        }
      }
    }
    return true;
  }

  r_post_process_last_consonants() {
    let among_var;
    // (, line 415
    // [, line 416
    this.ket = this.cursor;
    // substring, line 416
    among_var = this.find_among_b(StemmerTr.a_23, 4);
    if (among_var == 0) {
      return false;
    }
    // ], line 416
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        // (, line 417
        // <-, line 417
        if (!this.slice_from('p')) {
          return false;
        }
        break;
      case 2:
        // (, line 418
        // <-, line 418
        if (!this.slice_from('\u00E7')) {
          return false;
        }
        break;
      case 3:
        // (, line 419
        // <-, line 419
        if (!this.slice_from('t')) {
          return false;
        }
        break;
      case 4:
        // (, line 420
        // <-, line 420
        if (!this.slice_from('k')) {
          return false;
        }
        break;
    }
    return true;
  }

  r_append_U_to_stems_ending_with_d_or_g() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    let v_7;
    let v_8;
    let v_9;
    let v_10;
    let v_11;
    let v_12;
    let v_13;
    let v_14;
    let v_15;
    // (, line 430
    // test, line 431
    v_1 = this.limit - this.cursor;
    // (, line 431
    // or, line 431
    lab0: {
      v_2 = this.limit - this.cursor;
      lab1: {
        // literal, line 431
        if (!this.eq_s_b(1, 'd')) {
          break lab1;
        }
        break lab0;
      }
      this.cursor = this.limit - v_2;
      // literal, line 431
      if (!this.eq_s_b(1, 'g')) {
        return false;
      }
    }
    this.cursor = this.limit - v_1;
    // or, line 433
    lab2: {
      v_3 = this.limit - this.cursor;
      lab3: {
        // (, line 432
        // test, line 432
        v_4 = this.limit - this.cursor;
        // (, line 432
        // (, line 432
        // goto, line 432
        golab4: for (;;) {
          v_5 = this.limit - this.cursor;
          lab5: {
            if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
              break lab5;
            }
            this.cursor = this.limit - v_5;
            break golab4;
          }
          this.cursor = this.limit - v_5;
          if (this.cursor <= this.limit_backward) {
            break lab3;
          }
          this.cursor--;
        }
        // or, line 432
        lab6: {
          v_6 = this.limit - this.cursor;
          lab7: {
            // literal, line 432
            if (!this.eq_s_b(1, 'a')) {
              break lab7;
            }
            break lab6;
          }
          this.cursor = this.limit - v_6;
          // literal, line 432
          if (!this.eq_s_b(1, '\u0131')) {
            break lab3;
          }
        }
        this.cursor = this.limit - v_4;
        // <+, line 432
        {
          const c = this.cursor;
          this.insert(this.cursor, this.cursor, '\u0131');
          this.cursor = c;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab8: {
        // (, line 434
        // test, line 434
        v_7 = this.limit - this.cursor;
        // (, line 434
        // (, line 434
        // goto, line 434
        golab9: for (;;) {
          v_8 = this.limit - this.cursor;
          lab10: {
            if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
              break lab10;
            }
            this.cursor = this.limit - v_8;
            break golab9;
          }
          this.cursor = this.limit - v_8;
          if (this.cursor <= this.limit_backward) {
            break lab8;
          }
          this.cursor--;
        }
        // or, line 434
        lab11: {
          v_9 = this.limit - this.cursor;
          lab12: {
            // literal, line 434
            if (!this.eq_s_b(1, 'e')) {
              break lab12;
            }
            break lab11;
          }
          this.cursor = this.limit - v_9;
          // literal, line 434
          if (!this.eq_s_b(1, 'i')) {
            break lab8;
          }
        }
        this.cursor = this.limit - v_7;
        // <+, line 434
        {
          const c = this.cursor;
          this.insert(this.cursor, this.cursor, 'i');
          this.cursor = c;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      lab13: {
        // (, line 436
        // test, line 436
        v_10 = this.limit - this.cursor;
        // (, line 436
        // (, line 436
        // goto, line 436
        golab14: for (;;) {
          v_11 = this.limit - this.cursor;
          lab15: {
            if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
              break lab15;
            }
            this.cursor = this.limit - v_11;
            break golab14;
          }
          this.cursor = this.limit - v_11;
          if (this.cursor <= this.limit_backward) {
            break lab13;
          }
          this.cursor--;
        }
        // or, line 436
        lab16: {
          v_12 = this.limit - this.cursor;
          lab17: {
            // literal, line 436
            if (!this.eq_s_b(1, 'o')) {
              break lab17;
            }
            break lab16;
          }
          this.cursor = this.limit - v_12;
          // literal, line 436
          if (!this.eq_s_b(1, 'u')) {
            break lab13;
          }
        }
        this.cursor = this.limit - v_10;
        // <+, line 436
        {
          const c = this.cursor;
          this.insert(this.cursor, this.cursor, 'u');
          this.cursor = c;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      // (, line 438
      // test, line 438
      v_13 = this.limit - this.cursor;
      // (, line 438
      // (, line 438
      // goto, line 438
      golab18: for (;;) {
        v_14 = this.limit - this.cursor;
        lab19: {
          if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
            break lab19;
          }
          this.cursor = this.limit - v_14;
          break golab18;
        }
        this.cursor = this.limit - v_14;
        if (this.cursor <= this.limit_backward) {
          return false;
        }
        this.cursor--;
      }
      // or, line 438
      lab20: {
        v_15 = this.limit - this.cursor;
        lab21: {
          // literal, line 438
          if (!this.eq_s_b(1, '\u00F6')) {
            break lab21;
          }
          break lab20;
        }
        this.cursor = this.limit - v_15;
        // literal, line 438
        if (!this.eq_s_b(1, '\u00FC')) {
          return false;
        }
      }
      this.cursor = this.limit - v_13;
      // <+, line 438
      {
        const c = this.cursor;
        this.insert(this.cursor, this.cursor, '\u00FC');
        this.cursor = c;
      }
    }
    return true;
  }

  r_more_than_one_syllable_word() {
    let v_1;
    let v_3;
    // (, line 445
    // test, line 446
    v_1 = this.cursor;
    // (, line 446
    // atleast, line 446
    {
      let v_2 = 2;
      // atleast, line 446
      replab0: for (;;) {
        v_3 = this.cursor;
        lab1: {
          // (, line 446
          // gopast, line 446
          golab2: for (;;) {
            lab3: {
              if (!this.in_grouping(StemmerTr.g_vowel, 97, 305)) {
                break lab3;
              }
              break golab2;
            }
            if (this.cursor >= this.limit) {
              break lab1;
            }
            this.cursor++;
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
    let v_1;
    let v_2;
    let v_4;
    // (, line 449
    // or, line 451
    lab0: {
      v_1 = this.cursor;
      lab1: {
        // test, line 450
        v_2 = this.cursor;
        // (, line 450
        // gopast, line 450
        golab2: for (;;) {
          lab3: {
            // literal, line 450
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
        // (, line 450
        this.I_strlen = 2;
        // (, line 450
        if (!(this.I_strlen == this.limit)) {
          break lab1;
        }
        this.cursor = v_2;
        break lab0;
      }
      this.cursor = v_1;
      // test, line 452
      v_4 = this.cursor;
      // (, line 452
      // gopast, line 452
      golab4: for (;;) {
        lab5: {
          // literal, line 452
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
      // (, line 452
      this.I_strlen = 5;
      // (, line 452
      if (!(this.I_strlen == this.limit)) {
        return false;
      }
      this.cursor = v_4;
    }
    return true;
  }

  r_postlude() {
    let v_1;
    let v_2;
    let v_3;
    // (, line 455
    // not, line 456
    {
      v_1 = this.cursor;
      lab0: {
        // (, line 456
        // call is_reserved_word, line 456
        if (!this.r_is_reserved_word()) {
          break lab0;
        }
        return false;
      }
      this.cursor = v_1;
    }
    // backwards, line 457
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    // (, line 457
    // do, line 458
    v_2 = this.limit - this.cursor;
    lab1: {
      // call append_U_to_stems_ending_with_d_or_g, line 458
      if (!this.r_append_U_to_stems_ending_with_d_or_g()) {
        break lab1;
      }
    }
    this.cursor = this.limit - v_2;
    // do, line 459
    v_3 = this.limit - this.cursor;
    lab2: {
      // call post_process_last_consonants, line 459
      if (!this.r_post_process_last_consonants()) {
        break lab2;
      }
    }
    this.cursor = this.limit - v_3;
    this.cursor = this.limit_backward;
    return true;
  }

  innerStem() {
    let v_1;
    let v_2;
    // (, line 464
    // (, line 465
    // call more_than_one_syllable_word, line 465
    if (!this.r_more_than_one_syllable_word()) {
      return false;
    }
    // (, line 466
    // backwards, line 467
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    // (, line 467
    // do, line 468
    v_1 = this.limit - this.cursor;
    lab0: {
      // call stem_nominal_verb_suffixes, line 468
      if (!this.r_stem_nominal_verb_suffixes()) {
        break lab0;
      }
    }
    this.cursor = this.limit - v_1;
    // Boolean test continue_stemming_noun_suffixes, line 469
    if (!this.B_continue_stemming_noun_suffixes) {
      return false;
    }
    // do, line 470
    v_2 = this.limit - this.cursor;
    lab1: {
      // call stem_noun_suffixes, line 470
      if (!this.r_stem_noun_suffixes()) {
        break lab1;
      }
    }
    this.cursor = this.limit - v_2;
    this.cursor = this.limit_backward; // call postlude, line 473
    if (!this.r_postlude()) {
      return false;
    }
    return true;
  }
}
StemmerTr.methodObject = new StemmerTr();

StemmerTr.a_0 = [
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

StemmerTr.a_1 = [new Among('leri', -1, -1), new Among('lar\u0131', -1, -1)];

StemmerTr.a_2 = [
  new Among('ni', -1, -1),
  new Among('nu', -1, -1),
  new Among('n\u00FC', -1, -1),
  new Among('n\u0131', -1, -1),
];

StemmerTr.a_3 = [
  new Among('in', -1, -1),
  new Among('un', -1, -1),
  new Among('\u00FCn', -1, -1),
  new Among('\u0131n', -1, -1),
];

StemmerTr.a_4 = [new Among('a', -1, -1), new Among('e', -1, -1)];

StemmerTr.a_5 = [new Among('na', -1, -1), new Among('ne', -1, -1)];

StemmerTr.a_6 = [
  new Among('da', -1, -1),
  new Among('ta', -1, -1),
  new Among('de', -1, -1),
  new Among('te', -1, -1),
];

StemmerTr.a_7 = [new Among('nda', -1, -1), new Among('nde', -1, -1)];

StemmerTr.a_8 = [
  new Among('dan', -1, -1),
  new Among('tan', -1, -1),
  new Among('den', -1, -1),
  new Among('ten', -1, -1),
];

StemmerTr.a_9 = [new Among('ndan', -1, -1), new Among('nden', -1, -1)];

StemmerTr.a_10 = [new Among('la', -1, -1), new Among('le', -1, -1)];

StemmerTr.a_11 = [new Among('ca', -1, -1), new Among('ce', -1, -1)];

StemmerTr.a_12 = [
  new Among('im', -1, -1),
  new Among('um', -1, -1),
  new Among('\u00FCm', -1, -1),
  new Among('\u0131m', -1, -1),
];

StemmerTr.a_13 = [
  new Among('sin', -1, -1),
  new Among('sun', -1, -1),
  new Among('s\u00FCn', -1, -1),
  new Among('s\u0131n', -1, -1),
];

StemmerTr.a_14 = [
  new Among('iz', -1, -1),
  new Among('uz', -1, -1),
  new Among('\u00FCz', -1, -1),
  new Among('\u0131z', -1, -1),
];

StemmerTr.a_15 = [
  new Among('siniz', -1, -1),
  new Among('sunuz', -1, -1),
  new Among('s\u00FCn\u00FCz', -1, -1),
  new Among('s\u0131n\u0131z', -1, -1),
];

StemmerTr.a_16 = [new Among('lar', -1, -1), new Among('ler', -1, -1)];

StemmerTr.a_17 = [
  new Among('niz', -1, -1),
  new Among('nuz', -1, -1),
  new Among('n\u00FCz', -1, -1),
  new Among('n\u0131z', -1, -1),
];

StemmerTr.a_18 = [
  new Among('dir', -1, -1),
  new Among('tir', -1, -1),
  new Among('dur', -1, -1),
  new Among('tur', -1, -1),
  new Among('d\u00FCr', -1, -1),
  new Among('t\u00FCr', -1, -1),
  new Among('d\u0131r', -1, -1),
  new Among('t\u0131r', -1, -1),
];

StemmerTr.a_19 = [
  new Among('cas\u0131na', -1, -1),
  new Among('cesine', -1, -1),
];

StemmerTr.a_20 = [
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

StemmerTr.a_21 = [
  new Among('sa', -1, -1),
  new Among('se', -1, -1),
  new Among('sak', -1, -1),
  new Among('sek', -1, -1),
  new Among('sam', -1, -1),
  new Among('sem', -1, -1),
  new Among('san', -1, -1),
  new Among('sen', -1, -1),
];

StemmerTr.a_22 = [
  new Among('mi\u015F', -1, -1),
  new Among('mu\u015F', -1, -1),
  new Among('m\u00FC\u015F', -1, -1),
  new Among('m\u0131\u015F', -1, -1),
];

StemmerTr.a_23 = [
  new Among('b', -1, 1),
  new Among('c', -1, 2),
  new Among('d', -1, 3),
  new Among('\u011F', -1, 4),
];

StemmerTr.g_vowel = [
  17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 8, 0, 0, 0, 0, 0,
  0, 1,
];

StemmerTr.g_U = [
  1, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 1,
];

StemmerTr.g_vowel1 = [
  1, 64, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1,
];

StemmerTr.g_vowel2 = [
  17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130,
];

StemmerTr.g_vowel3 = [
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1,
];

StemmerTr.g_vowel4 = [17];

StemmerTr.g_vowel5 = [65];

StemmerTr.g_vowel6 = [65];

export default StemmerTr;
