import { Among, SnowballStemmer } from '@nlpjs-neo/core';
import type { ContainerHolder } from '@nlpjs-neo/core';

/**
 * Stemmer written by tools/snowball from tamil.sbl. Do not edit it by hand:
 * change the Snowball program and generate it again.
 */
class StemmerTa extends SnowballStemmer {
  declare B_found_a_match: boolean;
  declare B_found_vetrumai_urupu: boolean;

  constructor(container?: ContainerHolder) {
    super(container);
    this.name = 'stemmer-ta';
    this.B_found_a_match = false;
    this.B_found_vetrumai_urupu = false;
  }

  r_has_min_length(): boolean {
    return this.current.length > 4;
  }

  r_fix_va_start(): boolean {
    const among_var = this.find_slice(StemmerTa.a_0);
    if (among_var === 0) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_from('\u0B93');
        break;
      case 2:
        this.slice_from('\u0B92');
        break;
      case 3:
        this.slice_from('\u0B89');
        break;
      case 4:
        this.slice_from('\u0B8A');
        break;
    }
    return true;
  }

  r_fix_endings(): boolean {
    const v_1 = this.cursor;
    for (;;) {
      const v_2 = this.cursor;
      lab1: {
        if (!this.r_fix_ending()) {
          break lab1;
        }
        continue;
      }
      this.cursor = v_2;
      break;
    }
    this.cursor = v_1;
    return true;
  }

  r_remove_question_prefixes(): boolean {
    this.bra = this.cursor;
    if (!this.eq_s('\u0B8E')) {
      return false;
    }
    if (this.find_among(StemmerTa.a_8) === 0) {
      return false;
    }
    if (!this.eq_s('\u0BCD')) {
      return false;
    }
    this.ket = this.cursor;
    this.slice_del();
    this.do_forward(this.r_fix_va_start);
    return true;
  }

  r_fix_ending(): boolean {
    let among_var: number;
    if (this.current.length <= 3) {
      return false;
    }
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    lab0: {
      const v_1 = this.limit - this.cursor;
      lab1: {
        among_var = this.find_slice_b(StemmerTa.a_1);
        if (among_var === 0) {
          break lab1;
        }
        switch (among_var) {
          case 1:
            this.slice_del();
            break;
          case 2: {
            const v_2 = this.limit - this.cursor;
            if (this.find_among_b(StemmerTa.a_2) === 0) {
              break lab1;
            }
            this.cursor = this.limit - v_2;
            this.slice_del();
            break;
          }
          case 3:
            this.slice_from('\u0BB3\u0BCD');
            break;
          case 4:
            this.slice_from('\u0BB2\u0BCD');
            break;
          case 5:
            this.slice_from('\u0B9F\u0BC1');
            break;
          case 6:
            if (!this.B_found_vetrumai_urupu) {
              break lab1;
            }
            if (this.eq_s_b('\u0BC8')) {
              break lab1;
            }
            this.slice_from('\u0BAE\u0BCD');
            break;
          case 7:
            this.slice_from('\u0BCD');
            break;
          case 8:
            if (this.find_among_b(StemmerTa.a_3) !== 0) {
              break lab1;
            }
            this.slice_del();
            break;
          case 9:
            among_var = this.find_among_b(StemmerTa.a_4);
            switch (among_var) {
              case 1:
                this.slice_del();
                break;
              case 2:
                this.slice_from('\u0BAE\u0BCD');
                break;
            }
            break;
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      this.ket = this.cursor;
      if (!this.eq_s_b('\u0BCD')) {
        return false;
      }
      lab2: {
        const v_3 = this.limit - this.cursor;
        lab3: {
          if (this.find_among_b(StemmerTa.a_5) === 0) {
            break lab3;
          }
          const v_4 = this.limit - this.cursor;
          lab4: {
            if (!this.eq_s_b('\u0BCD')) {
              this.cursor = this.limit - v_4;
              break lab4;
            }
            if (this.find_among_b(StemmerTa.a_9) === 0) {
              this.cursor = this.limit - v_4;
              break lab4;
            }
          }
          this.bra = this.cursor;
          this.slice_del();
          break lab2;
        }
        this.cursor = this.limit - v_3;
        lab5: {
          if (this.find_among_b(StemmerTa.a_6) === 0) {
            break lab5;
          }
          this.bra = this.cursor;
          if (!this.eq_s_b('\u0BCD')) {
            break lab5;
          }
          this.slice_del();
          break lab2;
        }
        this.cursor = this.limit - v_3;
        const v_5 = this.limit - this.cursor;
        if (this.find_among_b(StemmerTa.a_7) === 0) {
          return false;
        }
        this.cursor = this.limit - v_5;
        this.bra = this.cursor;
        this.slice_del();
      }
    }
    this.cursor = this.limit_backward;
    return true;
  }

  r_remove_pronoun_prefixes(): boolean {
    this.bra = this.cursor;
    if (this.find_among(StemmerTa.a_10) === 0) {
      return false;
    }
    if (this.find_among(StemmerTa.a_11) === 0) {
      return false;
    }
    if (!this.eq_s('\u0BCD')) {
      return false;
    }
    this.ket = this.cursor;
    this.slice_del();
    this.do_forward(this.r_fix_va_start);
    return true;
  }

  r_remove_plural_suffix(): boolean {
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    const among_var = this.find_slice_b(StemmerTa.a_13);
    if (among_var === 0) {
      return false;
    }
    switch (among_var) {
      case 1:
        lab0: {
          const v_1 = this.limit - this.cursor;
          lab1: {
            if (this.find_among_b(StemmerTa.a_12) === 0) {
              break lab1;
            }
            this.slice_from('\u0BC1\u0B99\u0BCD');
            break lab0;
          }
          this.cursor = this.limit - v_1;
          this.slice_from('\u0BCD');
        }
        break;
      case 2:
        this.slice_from('\u0BB2\u0BCD');
        break;
      case 3:
        this.slice_from('\u0BB3\u0BCD');
        break;
      case 4:
        this.slice_del();
        break;
    }
    this.cursor = this.limit_backward;
    return true;
  }

  r_remove_question_suffixes(): boolean {
    if (!this.r_has_min_length()) {
      return false;
    }
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    const v_1 = this.limit - this.cursor;
    lab0: {
      this.ket = this.cursor;
      if (this.find_among_b(StemmerTa.a_14) === 0) {
        break lab0;
      }
      this.bra = this.cursor;
      this.slice_from('\u0BCD');
    }
    this.cursor = this.limit - v_1;
    this.cursor = this.limit_backward;
    this.r_fix_endings();
    return true;
  }

  r_remove_command_suffixes(): boolean {
    if (!this.r_has_min_length()) {
      return false;
    }
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    this.ket = this.cursor;
    if (this.find_among_b(StemmerTa.a_15) === 0) {
      return false;
    }
    this.bra = this.cursor;
    this.slice_del();
    this.cursor = this.limit_backward;
    return true;
  }

  r_remove_um(): boolean {
    if (!this.r_has_min_length()) {
      return false;
    }
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    this.ket = this.cursor;
    if (!this.eq_s_b('\u0BC1\u0BAE\u0BCD')) {
      return false;
    }
    this.bra = this.cursor;
    this.slice_from('\u0BCD');
    this.cursor = this.limit_backward;
    this.do_forward(this.r_fix_ending);
    return true;
  }

  r_remove_common_word_endings(): boolean {
    if (!this.r_has_min_length()) {
      return false;
    }
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    const among_var = this.find_slice_b(StemmerTa.a_16);
    if (among_var === 0) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_from('\u0BCD');
        break;
      case 2:
        if (this.find_among_b(StemmerTa.a_17) !== 0) {
          return false;
        }
        this.slice_from('\u0BCD');
        break;
      case 3:
        this.slice_del();
        break;
    }
    this.cursor = this.limit_backward;
    this.r_fix_endings();
    return true;
  }

  r_remove_vetrumai_urupukal(): boolean {
    this.B_found_vetrumai_urupu = false;
    if (!this.r_has_min_length()) {
      return false;
    }
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    lab0: {
      const v_1 = this.limit - this.cursor;
      lab1: {
        const v_2 = this.limit - this.cursor;
        const among_var = this.find_slice_b(StemmerTa.a_18);
        if (among_var === 0) {
          break lab1;
        }
        switch (among_var) {
          case 1:
            this.slice_del();
            break;
          case 2:
            this.slice_from('\u0BCD');
            break;
          case 3:
            if (this.eq_s_b('\u0BAE')) {
              break lab1;
            }
            this.slice_from('\u0BCD');
            break;
          case 4:
            if (this.current.length < 7) {
              break lab1;
            }
            this.slice_from('\u0BCD');
            break;
          case 5:
            if (this.find_among_b(StemmerTa.a_20) !== 0) {
              break lab1;
            }
            this.slice_from('\u0BCD');
            break;
          case 6:
            if (this.find_among_b(StemmerTa.a_21) !== 0) {
              break lab1;
            }
            this.slice_del();
            break;
          case 7:
            this.slice_from('\u0BBF');
            break;
        }
        this.cursor = this.limit - v_2;
        break lab0;
      }
      this.cursor = this.limit - v_1;
      const v_3 = this.limit - this.cursor;
      this.ket = this.cursor;
      if (!this.eq_s_b('\u0BC8')) {
        return false;
      }
      lab2: {
        const v_4 = this.limit - this.cursor;
        lab3: {
          if (this.find_among_b(StemmerTa.a_22) !== 0) {
            break lab3;
          }
          break lab2;
        }
        this.cursor = this.limit - v_4;
        const v_5 = this.limit - this.cursor;
        if (this.find_among_b(StemmerTa.a_19) === 0) {
          return false;
        }
        if (!this.eq_s_b('\u0BCD')) {
          return false;
        }
        this.cursor = this.limit - v_5;
      }
      this.bra = this.cursor;
      this.slice_from('\u0BCD');
      this.cursor = this.limit - v_3;
    }
    this.B_found_vetrumai_urupu = true;
    const v_6 = this.limit - this.cursor;
    lab4: {
      this.ket = this.cursor;
      if (!this.eq_s_b('\u0BBF\u0BA9\u0BCD')) {
        break lab4;
      }
      this.bra = this.cursor;
      this.slice_from('\u0BCD');
    }
    this.cursor = this.limit - v_6;
    this.cursor = this.limit_backward;
    this.r_fix_endings();
    return true;
  }

  r_remove_tense_suffixes(): boolean {
    for (;;) {
      const v_1 = this.cursor;
      lab0: {
        if (!this.r_remove_tense_suffix()) {
          break lab0;
        }
        continue;
      }
      this.cursor = v_1;
      break;
    }
    return true;
  }

  r_remove_tense_suffix(): boolean {
    this.B_found_a_match = false;
    if (!this.r_has_min_length()) {
      return false;
    }
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    const v_1 = this.limit - this.cursor;
    lab0: {
      const v_2 = this.limit - this.cursor;
      const among_var = this.find_slice_b(StemmerTa.a_23);
      if (among_var === 0) {
        break lab0;
      }
      switch (among_var) {
        case 1:
          this.slice_del();
          break;
        case 2:
          if (this.find_among_b(StemmerTa.a_25) !== 0) {
            break lab0;
          }
          this.slice_del();
          break;
        case 3:
          if (this.find_among_b(StemmerTa.a_26) !== 0) {
            break lab0;
          }
          this.slice_del();
          break;
        case 4:
          if (this.eq_s_b('\u0B9A')) {
            break lab0;
          }
          this.slice_from('\u0BCD');
          break;
        case 5:
          this.slice_from('\u0BCD');
          break;
        case 6: {
          const v_3 = this.limit - this.cursor;
          if (!this.eq_s_b('\u0BCD')) {
            break lab0;
          }
          this.cursor = this.limit - v_3;
          this.slice_del();
          break;
        }
      }
      this.B_found_a_match = true;
      this.cursor = this.limit - v_2;
    }
    this.cursor = this.limit - v_1;
    const v_4 = this.limit - this.cursor;
    lab1: {
      this.ket = this.cursor;
      if (this.find_among_b(StemmerTa.a_24) === 0) {
        break lab1;
      }
      this.bra = this.cursor;
      this.slice_del();
      this.B_found_a_match = true;
    }
    this.cursor = this.limit - v_4;
    this.cursor = this.limit_backward;
    this.r_fix_endings();
    if (!this.B_found_a_match) {
      return false;
    }
    return true;
  }

  innerStem(): boolean {
    this.B_found_vetrumai_urupu = false;
    this.do_forward(this.r_fix_ending);
    if (!this.r_has_min_length()) {
      return false;
    }
    this.do_forward(this.r_remove_question_prefixes);
    this.do_forward(this.r_remove_pronoun_prefixes);
    this.r_remove_question_suffixes();
    this.do_forward(this.r_remove_um);
    this.do_forward(this.r_remove_common_word_endings);
    this.do_forward(this.r_remove_vetrumai_urupukal);
    this.do_forward(this.r_remove_plural_suffix);
    this.do_forward(this.r_remove_command_suffixes);
    this.do_forward(this.r_remove_tense_suffixes);
    return true;
  }

  static a_0: Among<StemmerTa>[] = [
    new Among('\u0BB5\u0BC1', -1, 3),
    new Among('\u0BB5\u0BC2', -1, 4),
    new Among('\u0BB5\u0BCA', -1, 2),
    new Among('\u0BB5\u0BCB', -1, 1),
  ];

  static a_1: Among<StemmerTa>[] = [
    new Among('\u0BA8\u0BCD\u0BA4', -1, 1),
    new Among('\u0BAF', -1, 1),
    new Among('\u0BB5', -1, 1),
    new Among('\u0BA9\u0BC1', -1, 8),
    new Among('\u0BC1\u0B95\u0BCD', -1, 7),
    new Among('\u0BC1\u0B95\u0BCD\u0B95\u0BCD', -1, 7),
    new Among('\u0B9F\u0BCD\u0B95\u0BCD', -1, 3),
    new Among('\u0BB1\u0BCD\u0B95\u0BCD', -1, 4),
    new Among('\u0B99\u0BCD', -1, 9),
    new Among('\u0B9F\u0BCD\u0B9F\u0BCD', -1, 5),
    new Among('\u0BA4\u0BCD\u0BA4\u0BCD', -1, 6),
    new Among('\u0BA8\u0BCD\u0BA4\u0BCD', -1, 1),
    new Among('\u0BA8\u0BCD', -1, 1),
    new Among('\u0B9F\u0BCD\u0BAA\u0BCD', -1, 3),
    new Among('\u0BAF\u0BCD', -1, 2),
    new Among('\u0BA9\u0BCD\u0BB1\u0BCD', -1, 4),
    new Among('\u0BB5\u0BCD', -1, 1),
  ];

  static a_2: Among<StemmerTa>[] = [
    new Among('\u0BBF', -1, -1),
    new Among('\u0BC0', -1, -1),
    new Among('\u0BC8', -1, -1),
  ];

  static a_3: Among<StemmerTa>[] = [
    new Among('\u0BBE', -1, -1),
    new Among('\u0BBF', -1, -1),
    new Among('\u0BC0', -1, -1),
    new Among('\u0BC1', -1, -1),
    new Among('\u0BC2', -1, -1),
    new Among('\u0BC6', -1, -1),
    new Among('\u0BC7', -1, -1),
    new Among('\u0BC8', -1, -1),
  ];

  static a_4: Among<StemmerTa>[] = [
    new Among('', -1, 2),
    new Among('\u0BC8', 0, 1),
    new Among('\u0BCD', 0, 1),
  ];

  static a_5: Among<StemmerTa>[] = [
    new Among('\u0B95', -1, -1),
    new Among('\u0B9A', -1, -1),
    new Among('\u0B9F', -1, -1),
    new Among('\u0BA4', -1, -1),
    new Among('\u0BAA', -1, -1),
    new Among('\u0BB1', -1, -1),
  ];

  static a_6: Among<StemmerTa>[] = [
    new Among('\u0B9E', -1, -1),
    new Among('\u0BA3', -1, -1),
    new Among('\u0BA8', -1, -1),
    new Among('\u0BA9', -1, -1),
    new Among('\u0BAE', -1, -1),
    new Among('\u0BAF', -1, -1),
    new Among('\u0BB0', -1, -1),
    new Among('\u0BB2', -1, -1),
    new Among('\u0BB3', -1, -1),
    new Among('\u0BB4', -1, -1),
    new Among('\u0BB5', -1, -1),
  ];

  static a_7: Among<StemmerTa>[] = [
    new Among('\u0BBE', -1, -1),
    new Among('\u0BBF', -1, -1),
    new Among('\u0BC0', -1, -1),
    new Among('\u0BC1', -1, -1),
    new Among('\u0BC2', -1, -1),
    new Among('\u0BC6', -1, -1),
    new Among('\u0BC7', -1, -1),
    new Among('\u0BC8', -1, -1),
    new Among('\u0BCD', -1, -1),
  ];

  static a_8: Among<StemmerTa>[] = [
    new Among('\u0B95', -1, -1),
    new Among('\u0B99', -1, -1),
    new Among('\u0B9A', -1, -1),
    new Among('\u0B9E', -1, -1),
    new Among('\u0BA4', -1, -1),
    new Among('\u0BA8', -1, -1),
    new Among('\u0BAA', -1, -1),
    new Among('\u0BAE', -1, -1),
    new Among('\u0BAF', -1, -1),
    new Among('\u0BB5', -1, -1),
  ];

  static a_9: Among<StemmerTa>[] = [
    new Among('\u0B95', -1, -1),
    new Among('\u0B9A', -1, -1),
    new Among('\u0B9F', -1, -1),
    new Among('\u0BA4', -1, -1),
    new Among('\u0BAA', -1, -1),
    new Among('\u0BB1', -1, -1),
  ];

  static a_10: Among<StemmerTa>[] = [
    new Among('\u0B85', -1, -1),
    new Among('\u0B87', -1, -1),
    new Among('\u0B89', -1, -1),
  ];

  static a_11: Among<StemmerTa>[] = [
    new Among('\u0B95', -1, -1),
    new Among('\u0B99', -1, -1),
    new Among('\u0B9A', -1, -1),
    new Among('\u0B9E', -1, -1),
    new Among('\u0BA4', -1, -1),
    new Among('\u0BA8', -1, -1),
    new Among('\u0BAA', -1, -1),
    new Among('\u0BAE', -1, -1),
    new Among('\u0BAF', -1, -1),
    new Among('\u0BB5', -1, -1),
  ];

  static a_12: Among<StemmerTa>[] = [
    new Among('\u0B95', -1, -1),
    new Among('\u0B9A', -1, -1),
    new Among('\u0B9F', -1, -1),
    new Among('\u0BA4', -1, -1),
    new Among('\u0BAA', -1, -1),
    new Among('\u0BB1', -1, -1),
  ];

  static a_13: Among<StemmerTa>[] = [
    new Among('\u0B95\u0BB3\u0BCD', -1, 4),
    new Among('\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD', 0, 1),
    new Among('\u0B9F\u0BCD\u0B95\u0BB3\u0BCD', 0, 3),
    new Among('\u0BB1\u0BCD\u0B95\u0BB3\u0BCD', 0, 2),
  ];

  static a_14: Among<StemmerTa>[] = [
    new Among('\u0BBE', -1, -1),
    new Among('\u0BC7', -1, -1),
    new Among('\u0BCB', -1, -1),
  ];

  static a_15: Among<StemmerTa>[] = [
    new Among('\u0BAA\u0BBF', -1, -1),
    new Among('\u0BB5\u0BBF', -1, -1),
  ];

  static a_16: Among<StemmerTa>[] = [
    new Among('\u0BAA\u0B9F\u0BCD\u0B9F', -1, 3),
    new Among('\u0BAA\u0B9F\u0BCD\u0B9F\u0BA3', -1, 3),
    new Among('\u0BA4\u0BBE\u0BA9', -1, 3),
    new Among('\u0BAA\u0B9F\u0BBF\u0BA4\u0BBE\u0BA9', 2, 3),
    new Among('\u0BC6\u0BA9', -1, 1),
    new Among('\u0BBE\u0B95\u0BBF\u0BAF', -1, 1),
    new Among('\u0B95\u0BC1\u0BB0\u0BBF\u0BAF', -1, 3),
    new Among('\u0BC1\u0B9F\u0BC8\u0BAF', -1, 1),
    new Among('\u0BB2\u0BCD\u0BB2', -1, 2),
    new Among('\u0BC1\u0BB3\u0BCD\u0BB3', -1, 1),
    new Among('\u0BBE\u0B95\u0BBF', -1, 1),
    new Among('\u0BAA\u0B9F\u0BBF', -1, 3),
    new Among('\u0BBF\u0BA9\u0BCD\u0BB1\u0BBF', -1, 1),
    new Among('\u0BAA\u0BB1\u0BCD\u0BB1\u0BBF', -1, 3),
    new Among('\u0BAA\u0B9F\u0BC1', -1, 3),
    new Among('\u0BB5\u0BBF\u0B9F\u0BC1', -1, 3),
    new Among('\u0BAA\u0B9F\u0BCD\u0B9F\u0BC1', -1, 3),
    new Among('\u0BB5\u0BBF\u0B9F\u0BCD\u0B9F\u0BC1', -1, 3),
    new Among('\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1', -1, 3),
    new Among('\u0BC6\u0BA9\u0BCD\u0BB1\u0BC1', -1, 1),
    new Among('\u0BC1\u0B9F\u0BC8', -1, 1),
    new Among('\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8', -1, 1),
    new Among('\u0BC1\u0B9F\u0BA9\u0BCD', -1, 1),
    new Among('\u0BBF\u0B9F\u0BAE\u0BCD', -1, 1),
    new Among('\u0BC6\u0BB2\u0BCD\u0BB2\u0BBE\u0BAE\u0BCD', -1, 3),
    new Among('\u0BC6\u0BA9\u0BC1\u0BAE\u0BCD', -1, 1),
  ];

  static a_17: Among<StemmerTa>[] = [
    new Among('\u0BBE', -1, -1),
    new Among('\u0BBF', -1, -1),
    new Among('\u0BC0', -1, -1),
    new Among('\u0BC1', -1, -1),
    new Among('\u0BC2', -1, -1),
    new Among('\u0BC6', -1, -1),
    new Among('\u0BC7', -1, -1),
    new Among('\u0BC8', -1, -1),
  ];

  static a_18: Among<StemmerTa>[] = [
    new Among('\u0BB5\u0BBF\u0B9F', -1, 2),
    new Among('\u0BC0', -1, 7),
    new Among('\u0BCA\u0B9F\u0BC1', -1, 2),
    new Among('\u0BCB\u0B9F\u0BC1', -1, 2),
    new Among('\u0BA4\u0BC1', -1, 6),
    new Among('\u0BBF\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4\u0BC1', 4, 2),
    new Among('\u0BBF\u0BA9\u0BCD\u0BB1\u0BC1', -1, 2),
    new Among('\u0BC1\u0B9F\u0BC8', -1, 2),
    new Among('\u0BA9\u0BC8', -1, 1),
    new Among('\u0B95\u0BA3\u0BCD', -1, 1),
    new Among('\u0BBF\u0BA9\u0BCD', -1, 3),
    new Among('\u0BAE\u0BC1\u0BA9\u0BCD', -1, 1),
    new Among('\u0BBF\u0B9F\u0BAE\u0BCD', -1, 4),
    new Among('\u0BBF\u0BB1\u0BCD', -1, 2),
    new Among('\u0BAE\u0BC7\u0BB1\u0BCD', -1, 1),
    new Among('\u0BB2\u0BCD', -1, 5),
    new Among('\u0BBE\u0BAE\u0BB2\u0BCD', 15, 2),
    new Among('\u0BBE\u0BB2\u0BCD', 15, 2),
    new Among('\u0BBF\u0BB2\u0BCD', 15, 2),
    new Among('\u0BAE\u0BC7\u0BB2\u0BCD', 15, 1),
    new Among('\u0BC1\u0BB3\u0BCD', -1, 2),
    new Among('\u0B95\u0BC0\u0BB4\u0BCD', -1, 1),
  ];

  static a_19: Among<StemmerTa>[] = [
    new Among('\u0B95', -1, -1),
    new Among('\u0B9A', -1, -1),
    new Among('\u0B9F', -1, -1),
    new Among('\u0BA4', -1, -1),
    new Among('\u0BAA', -1, -1),
    new Among('\u0BB1', -1, -1),
  ];

  static a_20: Among<StemmerTa>[] = [
    new Among('\u0BBE', -1, -1),
    new Among('\u0BBF', -1, -1),
    new Among('\u0BC0', -1, -1),
    new Among('\u0BC1', -1, -1),
    new Among('\u0BC2', -1, -1),
    new Among('\u0BC6', -1, -1),
    new Among('\u0BC7', -1, -1),
    new Among('\u0BC8', -1, -1),
  ];

  static a_21: Among<StemmerTa>[] = [
    new Among('\u0BBE', -1, -1),
    new Among('\u0BBF', -1, -1),
    new Among('\u0BC0', -1, -1),
    new Among('\u0BC1', -1, -1),
    new Among('\u0BC2', -1, -1),
    new Among('\u0BC6', -1, -1),
    new Among('\u0BC7', -1, -1),
    new Among('\u0BC8', -1, -1),
  ];

  static a_22: Among<StemmerTa>[] = [
    new Among('\u0B95', -1, -1),
    new Among('\u0B9A', -1, -1),
    new Among('\u0B9F', -1, -1),
    new Among('\u0BA4', -1, -1),
    new Among('\u0BAA', -1, -1),
    new Among('\u0BB1', -1, -1),
  ];

  static a_23: Among<StemmerTa>[] = [
    new Among('\u0B95', -1, 1),
    new Among('\u0BA4', -1, 1),
    new Among('\u0BA9', -1, 1),
    new Among('\u0BAA', -1, 1),
    new Among('\u0BAF', -1, 1),
    new Among('\u0BBE', -1, 5),
    new Among('\u0B95\u0BC1', -1, 6),
    new Among('\u0BAA\u0B9F\u0BC1', -1, 1),
    new Among('\u0BA4\u0BC1', -1, 3),
    new Among('\u0BBF\u0BB1\u0BCD\u0BB1\u0BC1', -1, 1),
    new Among('\u0BA9\u0BC8', -1, 1),
    new Among('\u0BB5\u0BC8', -1, 1),
    new Among('\u0BA9\u0BA9\u0BCD', -1, 1),
    new Among('\u0BAA\u0BA9\u0BCD', -1, 1),
    new Among('\u0BB5\u0BA9\u0BCD', -1, 2),
    new Among('\u0BBE\u0BA9\u0BCD', -1, 4),
    new Among('\u0BA9\u0BBE\u0BA9\u0BCD', 15, 1),
    new Among('\u0BAE\u0BBF\u0BA9\u0BCD', -1, 1),
    new Among('\u0BA9\u0BC6\u0BA9\u0BCD', -1, 1),
    new Among('\u0BC7\u0BA9\u0BCD', -1, 5),
    new Among('\u0BA9\u0BAE\u0BCD', -1, 1),
    new Among('\u0BAA\u0BAE\u0BCD', -1, 1),
    new Among('\u0BBE\u0BAE\u0BCD', -1, 5),
    new Among('\u0B95\u0BC1\u0BAE\u0BCD', -1, 1),
    new Among('\u0B9F\u0BC1\u0BAE\u0BCD', -1, 5),
    new Among('\u0BA4\u0BC1\u0BAE\u0BCD', -1, 1),
    new Among('\u0BB1\u0BC1\u0BAE\u0BCD', -1, 1),
    new Among('\u0BC6\u0BAE\u0BCD', -1, 5),
    new Among('\u0BC7\u0BAE\u0BCD', -1, 5),
    new Among('\u0BCB\u0BAE\u0BCD', -1, 5),
    new Among('\u0BBE\u0BAF\u0BCD', -1, 5),
    new Among('\u0BA9\u0BB0\u0BCD', -1, 1),
    new Among('\u0BAA\u0BB0\u0BCD', -1, 1),
    new Among('\u0BC0\u0BAF\u0BB0\u0BCD', -1, 5),
    new Among('\u0BB5\u0BB0\u0BCD', -1, 1),
    new Among('\u0BBE\u0BB0\u0BCD', -1, 5),
    new Among('\u0BA9\u0BBE\u0BB0\u0BCD', 35, 1),
    new Among('\u0BAE\u0BBE\u0BB0\u0BCD', 35, 1),
    new Among('\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BCD', -1, 1),
    new Among('\u0BA9\u0BBF\u0BB0\u0BCD', -1, 5),
    new Among('\u0BC0\u0BB0\u0BCD', -1, 5),
    new Among('\u0BA9\u0BB3\u0BCD', -1, 1),
    new Among('\u0BAA\u0BB3\u0BCD', -1, 1),
    new Among('\u0BB5\u0BB3\u0BCD', -1, 1),
    new Among('\u0BBE\u0BB3\u0BCD', -1, 5),
    new Among('\u0BA9\u0BBE\u0BB3\u0BCD', 44, 1),
  ];

  static a_24: Among<StemmerTa>[] = [
    new Among('\u0B95\u0BBF\u0BB1', -1, -1),
    new Among('\u0B95\u0BBF\u0BA9\u0BCD\u0BB1', -1, -1),
    new Among('\u0BBE\u0BA8\u0BBF\u0BA9\u0BCD\u0BB1', -1, -1),
    new Among('\u0B95\u0BBF\u0BB1\u0BCD', -1, -1),
    new Among('\u0B95\u0BBF\u0BA9\u0BCD\u0BB1\u0BCD', -1, -1),
    new Among('\u0BBE\u0BA8\u0BBF\u0BA9\u0BCD\u0BB1\u0BCD', -1, -1),
  ];

  static a_25: Among<StemmerTa>[] = [
    new Among('\u0B85', -1, -1),
    new Among('\u0B86', -1, -1),
    new Among('\u0B87', -1, -1),
    new Among('\u0B88', -1, -1),
    new Among('\u0B89', -1, -1),
    new Among('\u0B8A', -1, -1),
    new Among('\u0B8E', -1, -1),
    new Among('\u0B8F', -1, -1),
    new Among('\u0B90', -1, -1),
    new Among('\u0B92', -1, -1),
    new Among('\u0B93', -1, -1),
    new Among('\u0B94', -1, -1),
  ];

  static a_26: Among<StemmerTa>[] = [
    new Among('\u0BBE', -1, -1),
    new Among('\u0BBF', -1, -1),
    new Among('\u0BC0', -1, -1),
    new Among('\u0BC1', -1, -1),
    new Among('\u0BC2', -1, -1),
    new Among('\u0BC6', -1, -1),
    new Among('\u0BC7', -1, -1),
    new Among('\u0BC8', -1, -1),
  ];
}

export default StemmerTa;
