import { Among, SnowballStemmer } from '@nlpjs-neo/core';
import type { ContainerHolder } from '@nlpjs-neo/core';

/**
 * Stemmer written by tools/snowball from nepali.sbl. Do not edit it by hand:
 * change the Snowball program and generate it again.
 */
class StemmerNe extends SnowballStemmer {
  constructor(container?: ContainerHolder) {
    super(container);
    this.name = 'stemmer-ne';
  }

  r_remove_category_1(): boolean {
    const among_var = this.find_slice_b(StemmerNe.a_0);
    if (among_var === 0) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_del();
        break;
      case 2:
        if (!this.eq_s_b('\u090F') && !this.eq_s_b('\u0947')) {
          this.slice_del();
        }
        break;
    }
    return true;
  }

  r_remove_category_2(): boolean {
    const among_var = this.find_slice_b(StemmerNe.a_1);
    if (among_var === 0) {
      return false;
    }
    switch (among_var) {
      case 1:
        lab0: {
          lab1: {
            if (!this.eq_s_b('\u092F\u094C')) {
              break lab1;
            }
            break lab0;
          }
          lab2: {
            if (!this.eq_s_b('\u091B\u094C')) {
              break lab2;
            }
            break lab0;
          }
          lab3: {
            if (!this.eq_s_b('\u0928\u094C')) {
              break lab3;
            }
            break lab0;
          }
          if (!this.eq_s_b('\u0925\u0947')) {
            return false;
          }
        }
        this.slice_del();
        break;
      case 2:
        if (!this.eq_s_b('\u0924\u094D\u0930')) {
          return false;
        }
        this.slice_del();
        break;
    }
    return true;
  }

  r_remove_category_3(): boolean {
    const among_var = this.find_slice_b(StemmerNe.a_2);
    if (among_var === 0) {
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
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    this.do_backward(this.r_remove_category_1);
    for (;;) {
      const v_2 = this.limit - this.cursor;
      lab0: {
        this.do_backward(this.r_remove_category_2);
        if (!this.r_remove_category_3()) {
          break lab0;
        }
        continue;
      }
      this.cursor = this.limit - v_2;
      break;
    }
    this.cursor = this.limit_backward;
    return true;
  }

  static a_0: Among<StemmerNe>[] = [
    new Among('\u0932\u093E\u0907', -1, 1),
    new Among('\u0932\u093E\u0908', -1, 1),
    new Among('\u0938\u0901\u0917', -1, 1),
    new Among('\u0938\u0902\u0917', -1, 1),
    new Among('\u092E\u093E\u0930\u094D\u092B\u0924', -1, 1),
    new Among('\u0930\u0924', -1, 1),
    new Among('\u0915\u093E', -1, 2),
    new Among('\u092E\u093E', -1, 1),
    new Among('\u0926\u094D\u0935\u093E\u0930\u093E', -1, 1),
    new Among('\u0915\u093F', -1, 2),
    new Among('\u092A\u091B\u093F', -1, 1),
    new Among('\u0915\u0940', -1, 2),
    new Among('\u0932\u0947', -1, 1),
    new Among('\u0915\u0948', -1, 2),
    new Among('\u0938\u0901\u0917\u0948', -1, 1),
    new Among('\u092E\u0948', -1, 1),
    new Among('\u0915\u094B', -1, 2),
  ];

  static a_1: Among<StemmerNe>[] = [
    new Among('\u0901', -1, 1),
    new Among('\u0902', -1, 1),
    new Among('\u0948', -1, 2),
  ];

  static a_2: Among<StemmerNe>[] = [
    new Among('\u0925\u093F\u090F', -1, 1),
    new Among('\u091B', -1, 1),
    new Among('\u0907\u091B', 1, 1),
    new Among('\u090F\u091B', 1, 1),
    new Among('\u093F\u091B', 1, 1),
    new Among('\u0947\u091B', 1, 1),
    new Among('\u0928\u0947\u091B', 5, 1),
    new Among('\u0939\u0941\u0928\u0947\u091B', 6, 1),
    new Among('\u0907\u0928\u094D\u091B', 1, 1),
    new Among('\u093F\u0928\u094D\u091B', 1, 1),
    new Among('\u0939\u0941\u0928\u094D\u091B', 1, 1),
    new Among('\u090F\u0915\u093E', -1, 1),
    new Among('\u0907\u090F\u0915\u093E', 11, 1),
    new Among('\u093F\u090F\u0915\u093E', 11, 1),
    new Among('\u0947\u0915\u093E', -1, 1),
    new Among('\u0928\u0947\u0915\u093E', 14, 1),
    new Among('\u0926\u093E', -1, 1),
    new Among('\u0907\u0926\u093E', 16, 1),
    new Among('\u093F\u0926\u093E', 16, 1),
    new Among('\u0926\u0947\u0916\u093F', -1, 1),
    new Among('\u092E\u093E\u0925\u093F', -1, 1),
    new Among('\u090F\u0915\u0940', -1, 1),
    new Among('\u0907\u090F\u0915\u0940', 21, 1),
    new Among('\u093F\u090F\u0915\u0940', 21, 1),
    new Among('\u0947\u0915\u0940', -1, 1),
    new Among('\u0926\u0947\u0916\u0940', -1, 1),
    new Among('\u0925\u0940', -1, 1),
    new Among('\u0926\u0940', -1, 1),
    new Among('\u091B\u0941', -1, 1),
    new Among('\u090F\u091B\u0941', 28, 1),
    new Among('\u0947\u091B\u0941', 28, 1),
    new Among('\u0928\u0947\u091B\u0941', 30, 1),
    new Among('\u0928\u0941', -1, 1),
    new Among('\u0939\u0930\u0941', -1, 1),
    new Among('\u0939\u0930\u0942', -1, 1),
    new Among('\u091B\u0947', -1, 1),
    new Among('\u0925\u0947', -1, 1),
    new Among('\u0928\u0947', -1, 1),
    new Among('\u090F\u0915\u0948', -1, 1),
    new Among('\u0947\u0915\u0948', -1, 1),
    new Among('\u0928\u0947\u0915\u0948', 39, 1),
    new Among('\u0926\u0948', -1, 1),
    new Among('\u0907\u0926\u0948', 41, 1),
    new Among('\u093F\u0926\u0948', 41, 1),
    new Among('\u090F\u0915\u094B', -1, 1),
    new Among('\u0907\u090F\u0915\u094B', 44, 1),
    new Among('\u093F\u090F\u0915\u094B', 44, 1),
    new Among('\u0947\u0915\u094B', -1, 1),
    new Among('\u0928\u0947\u0915\u094B', 47, 1),
    new Among('\u0926\u094B', -1, 1),
    new Among('\u0907\u0926\u094B', 49, 1),
    new Among('\u093F\u0926\u094B', 49, 1),
    new Among('\u092F\u094B', -1, 1),
    new Among('\u0907\u092F\u094B', 52, 1),
    new Among('\u092D\u092F\u094B', 52, 1),
    new Among('\u093F\u092F\u094B', 52, 1),
    new Among('\u0925\u093F\u092F\u094B', 55, 1),
    new Among('\u0926\u093F\u092F\u094B', 55, 1),
    new Among('\u0925\u094D\u092F\u094B', 52, 1),
    new Among('\u091B\u094C', -1, 1),
    new Among('\u0907\u091B\u094C', 59, 1),
    new Among('\u090F\u091B\u094C', 59, 1),
    new Among('\u093F\u091B\u094C', 59, 1),
    new Among('\u0947\u091B\u094C', 59, 1),
    new Among('\u0928\u0947\u091B\u094C', 63, 1),
    new Among('\u092F\u094C', -1, 1),
    new Among('\u0925\u093F\u092F\u094C', 65, 1),
    new Among('\u091B\u094D\u092F\u094C', 65, 1),
    new Among('\u0925\u094D\u092F\u094C', 65, 1),
    new Among('\u091B\u0928\u094D', -1, 1),
    new Among('\u0907\u091B\u0928\u094D', 69, 1),
    new Among('\u090F\u091B\u0928\u094D', 69, 1),
    new Among('\u093F\u091B\u0928\u094D', 69, 1),
    new Among('\u0947\u091B\u0928\u094D', 69, 1),
    new Among('\u0928\u0947\u091B\u0928\u094D', 73, 1),
    new Among('\u0932\u093E\u0928\u094D', -1, 1),
    new Among('\u091B\u093F\u0928\u094D', -1, 1),
    new Among('\u0925\u093F\u0928\u094D', -1, 1),
    new Among('\u092A\u0930\u094D', -1, 1),
    new Among('\u0907\u0938\u094D', -1, 1),
    new Among('\u0925\u093F\u0907\u0938\u094D', 79, 1),
    new Among('\u091B\u0938\u094D', -1, 1),
    new Among('\u0907\u091B\u0938\u094D', 81, 1),
    new Among('\u090F\u091B\u0938\u094D', 81, 1),
    new Among('\u093F\u091B\u0938\u094D', 81, 1),
    new Among('\u0947\u091B\u0938\u094D', 81, 1),
    new Among('\u0928\u0947\u091B\u0938\u094D', 85, 1),
    new Among('\u093F\u0938\u094D', -1, 1),
    new Among('\u0925\u093F\u0938\u094D', 87, 1),
    new Among('\u091B\u0947\u0938\u094D', -1, 1),
    new Among('\u0939\u094B\u0938\u094D', -1, 1),
  ];
}

export default StemmerNe;
