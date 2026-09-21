import { Among, SnowballStemmer } from '@nlpjs-neo/core';
import type { ContainerHolder } from '@nlpjs-neo/core';

/**
 * Stemmer written by tools/snowball from lithuanian.sbl. Do not edit it by hand:
 * change the Snowball program and generate it again.
 */
class StemmerLt extends SnowballStemmer {
  constructor(container?: ContainerHolder) {
    super(container);
    this.name = 'stemmer-lt';
    this.I_p1 = 0;
  }

  r_step1(): boolean {
    if (this.cursor < this.I_p1) {
      return false;
    }
    const v_1 = this.limit_backward;
    this.limit_backward = this.I_p1;
    if (this.find_slice_b(StemmerLt.a_0) === 0) {
      this.limit_backward = v_1;
      return false;
    }
    this.limit_backward = v_1;
    if (!this.r_R1()) {
      return false;
    }
    this.slice_del();
    return true;
  }

  r_step2(): boolean {
    for (;;) {
      const v_1 = this.limit - this.cursor;
      lab0: {
        if (this.cursor < this.I_p1) {
          break lab0;
        }
        const v_2 = this.limit_backward;
        this.limit_backward = this.I_p1;
        if (this.find_slice_b(StemmerLt.a_1) === 0) {
          this.limit_backward = v_2;
          break lab0;
        }
        this.limit_backward = v_2;
        this.slice_del();
        continue;
      }
      this.cursor = this.limit - v_1;
      break;
    }
    return true;
  }

  r_fix_conflicts(): boolean {
    const among_var = this.find_slice_b(StemmerLt.a_2);
    if (among_var === 0) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_from('ait\u0117');
        break;
      case 2:
        this.slice_from('uot\u0117');
        break;
      case 3:
        this.slice_from('\u0117jimas');
        break;
      case 4:
        this.slice_from('esys');
        break;
      case 5:
        this.slice_from('asys');
        break;
      case 6:
        this.slice_from('avimas');
        break;
      case 7:
        this.slice_from('ojimas');
        break;
      case 8:
        this.slice_from('okat\u0117');
        break;
    }
    return true;
  }

  r_fix_chdz(): boolean {
    const among_var = this.find_slice_b(StemmerLt.a_3);
    if (among_var === 0) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_from('t');
        break;
      case 2:
        this.slice_from('d');
        break;
    }
    return true;
  }

  r_fix_gd(): boolean {
    this.ket = this.cursor;
    if (!this.eq_s_b('gd')) {
      return false;
    }
    this.bra = this.cursor;
    this.slice_from('g');
    return true;
  }

  innerStem(): boolean {
    this.I_p1 = this.limit;
    const v_1 = this.cursor;
    lab0: {
      const v_2 = this.cursor;
      lab1: {
        const v_3 = this.cursor;
        if (!this.eq_s('a')) {
          this.cursor = v_2;
          break lab1;
        }
        this.cursor = v_3;
        if (this.current.length <= 6) {
          this.cursor = v_2;
          break lab1;
        }
        if (this.cursor + 1 > this.limit) {
          this.cursor = v_2;
          break lab1;
        }
        this.cursor += 1;
      }
      if (!this.gopast_in_grouping(StemmerLt.g_v, 97, 371)) {
        break lab0;
      }
      if (!this.gopast_out_grouping(StemmerLt.g_v, 97, 371)) {
        break lab0;
      }
      this.I_p1 = this.cursor;
    }
    this.cursor = v_1;
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    this.do_backward(this.r_fix_conflicts);
    this.do_backward(this.r_step1);
    this.do_backward(this.r_fix_chdz);
    this.do_backward(this.r_step2);
    this.do_backward(this.r_fix_chdz);
    this.do_backward(this.r_fix_gd);
    this.cursor = this.limit_backward;
    return true;
  }

  static g_v: number[] = [
    17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 64, 1,
    0, 64, 0, 0, 0, 0, 0, 0, 0, 4, 4,
  ];

  static a_0: Among<StemmerLt>[] = [
    new Among('a', -1, -1),
    new Among('ia', 0, -1),
    new Among('eria', 1, -1),
    new Among('osna', 0, -1),
    new Among('iosna', 3, -1),
    new Among('uosna', 3, -1),
    new Among('iuosna', 5, -1),
    new Among('ysna', 0, -1),
    new Among('\u0117sna', 0, -1),
    new Among('e', -1, -1),
    new Among('ie', 9, -1),
    new Among('enie', 10, -1),
    new Among('erie', 10, -1),
    new Among('oje', 9, -1),
    new Among('ioje', 13, -1),
    new Among('uje', 9, -1),
    new Among('iuje', 15, -1),
    new Among('yje', 9, -1),
    new Among('enyje', 17, -1),
    new Among('eryje', 17, -1),
    new Among('\u0117je', 9, -1),
    new Among('ame', 9, -1),
    new Among('iame', 21, -1),
    new Among('sime', 9, -1),
    new Among('ome', 9, -1),
    new Among('\u0117me', 9, -1),
    new Among('tum\u0117me', 25, -1),
    new Among('ose', 9, -1),
    new Among('iose', 27, -1),
    new Among('uose', 27, -1),
    new Among('iuose', 29, -1),
    new Among('yse', 9, -1),
    new Among('enyse', 31, -1),
    new Among('eryse', 31, -1),
    new Among('\u0117se', 9, -1),
    new Among('ate', 9, -1),
    new Among('iate', 35, -1),
    new Among('ite', 9, -1),
    new Among('kite', 37, -1),
    new Among('site', 37, -1),
    new Among('ote', 9, -1),
    new Among('tute', 9, -1),
    new Among('\u0117te', 9, -1),
    new Among('tum\u0117te', 42, -1),
    new Among('i', -1, -1),
    new Among('ai', 44, -1),
    new Among('iai', 45, -1),
    new Among('eriai', 46, -1),
    new Among('ei', 44, -1),
    new Among('tumei', 48, -1),
    new Among('ki', 44, -1),
    new Among('imi', 44, -1),
    new Among('erimi', 51, -1),
    new Among('umi', 44, -1),
    new Among('iumi', 53, -1),
    new Among('si', 44, -1),
    new Among('asi', 55, -1),
    new Among('iasi', 56, -1),
    new Among('esi', 55, -1),
    new Among('iesi', 58, -1),
    new Among('siesi', 59, -1),
    new Among('isi', 55, -1),
    new Among('aisi', 61, -1),
    new Among('eisi', 61, -1),
    new Among('tumeisi', 63, -1),
    new Among('uisi', 61, -1),
    new Among('osi', 55, -1),
    new Among('\u0117josi', 66, -1),
    new Among('uosi', 66, -1),
    new Among('iuosi', 68, -1),
    new Among('siuosi', 69, -1),
    new Among('usi', 55, -1),
    new Among('ausi', 71, -1),
    new Among('\u010Diausi', 72, -1),
    new Among('\u0105si', 55, -1),
    new Among('\u0117si', 55, -1),
    new Among('\u0173si', 55, -1),
    new Among('t\u0173si', 76, -1),
    new Among('ti', 44, -1),
    new Among('enti', 78, -1),
    new Among('inti', 78, -1),
    new Among('oti', 78, -1),
    new Among('ioti', 81, -1),
    new Among('uoti', 81, -1),
    new Among('iuoti', 83, -1),
    new Among('auti', 78, -1),
    new Among('iauti', 85, -1),
    new Among('yti', 78, -1),
    new Among('\u0117ti', 78, -1),
    new Among('tel\u0117ti', 88, -1),
    new Among('in\u0117ti', 88, -1),
    new Among('ter\u0117ti', 88, -1),
    new Among('ui', 44, -1),
    new Among('iui', 92, -1),
    new Among('eniui', 93, -1),
    new Among('oj', -1, -1),
    new Among('\u0117j', -1, -1),
    new Among('k', -1, -1),
    new Among('am', -1, -1),
    new Among('iam', 98, -1),
    new Among('iem', -1, -1),
    new Among('im', -1, -1),
    new Among('sim', 101, -1),
    new Among('om', -1, -1),
    new Among('tum', -1, -1),
    new Among('\u0117m', -1, -1),
    new Among('tum\u0117m', 105, -1),
    new Among('an', -1, -1),
    new Among('on', -1, -1),
    new Among('ion', 108, -1),
    new Among('un', -1, -1),
    new Among('iun', 110, -1),
    new Among('\u0117n', -1, -1),
    new Among('o', -1, -1),
    new Among('io', 113, -1),
    new Among('enio', 114, -1),
    new Among('\u0117jo', 113, -1),
    new Among('uo', 113, -1),
    new Among('s', -1, -1),
    new Among('as', 118, -1),
    new Among('ias', 119, -1),
    new Among('es', 118, -1),
    new Among('ies', 121, -1),
    new Among('is', 118, -1),
    new Among('ais', 123, -1),
    new Among('iais', 124, -1),
    new Among('tumeis', 123, -1),
    new Among('imis', 123, -1),
    new Among('enimis', 127, -1),
    new Among('omis', 123, -1),
    new Among('iomis', 129, -1),
    new Among('umis', 123, -1),
    new Among('\u0117mis', 123, -1),
    new Among('enis', 123, -1),
    new Among('asis', 123, -1),
    new Among('ysis', 123, -1),
    new Among('ams', 118, -1),
    new Among('iams', 136, -1),
    new Among('iems', 118, -1),
    new Among('ims', 118, -1),
    new Among('enims', 139, -1),
    new Among('erims', 139, -1),
    new Among('oms', 118, -1),
    new Among('ioms', 142, -1),
    new Among('ums', 118, -1),
    new Among('\u0117ms', 118, -1),
    new Among('ens', 118, -1),
    new Among('os', 118, -1),
    new Among('ios', 147, -1),
    new Among('uos', 147, -1),
    new Among('iuos', 149, -1),
    new Among('ers', 118, -1),
    new Among('us', 118, -1),
    new Among('aus', 152, -1),
    new Among('iaus', 153, -1),
    new Among('ius', 152, -1),
    new Among('ys', 118, -1),
    new Among('enys', 156, -1),
    new Among('erys', 156, -1),
    new Among('\u0105s', 118, -1),
    new Among('i\u0105s', 159, -1),
    new Among('\u0117s', 118, -1),
    new Among('am\u0117s', 161, -1),
    new Among('iam\u0117s', 162, -1),
    new Among('im\u0117s', 161, -1),
    new Among('kim\u0117s', 164, -1),
    new Among('sim\u0117s', 164, -1),
    new Among('om\u0117s', 161, -1),
    new Among('\u0117m\u0117s', 161, -1),
    new Among('tum\u0117m\u0117s', 168, -1),
    new Among('at\u0117s', 161, -1),
    new Among('iat\u0117s', 170, -1),
    new Among('sit\u0117s', 161, -1),
    new Among('ot\u0117s', 161, -1),
    new Among('\u0117t\u0117s', 161, -1),
    new Among('tum\u0117t\u0117s', 174, -1),
    new Among('\u012Fs', 118, -1),
    new Among('\u016Bs', 118, -1),
    new Among('t\u0173s', 118, -1),
    new Among('at', -1, -1),
    new Among('iat', 179, -1),
    new Among('it', -1, -1),
    new Among('sit', 181, -1),
    new Among('ot', -1, -1),
    new Among('\u0117t', -1, -1),
    new Among('tum\u0117t', 184, -1),
    new Among('u', -1, -1),
    new Among('au', 186, -1),
    new Among('iau', 187, -1),
    new Among('\u010Diau', 188, -1),
    new Among('iu', 186, -1),
    new Among('eniu', 190, -1),
    new Among('siu', 190, -1),
    new Among('y', -1, -1),
    new Among('\u0105', -1, -1),
    new Among('i\u0105', 194, -1),
    new Among('\u0117', -1, -1),
    new Among('\u0119', -1, -1),
    new Among('\u012F', -1, -1),
    new Among('en\u012F', 198, -1),
    new Among('er\u012F', 198, -1),
    new Among('\u0173', -1, -1),
    new Among('i\u0173', 201, -1),
    new Among('er\u0173', 201, -1),
  ];

  static a_1: Among<StemmerLt>[] = [
    new Among('ing', -1, -1),
    new Among('aj', -1, -1),
    new Among('iaj', 1, -1),
    new Among('iej', -1, -1),
    new Among('oj', -1, -1),
    new Among('ioj', 4, -1),
    new Among('uoj', 4, -1),
    new Among('iuoj', 6, -1),
    new Among('auj', -1, -1),
    new Among('\u0105j', -1, -1),
    new Among('i\u0105j', 9, -1),
    new Among('\u0117j', -1, -1),
    new Among('\u0173j', -1, -1),
    new Among('i\u0173j', 12, -1),
    new Among('ok', -1, -1),
    new Among('iok', 14, -1),
    new Among('iuk', -1, -1),
    new Among('uliuk', 16, -1),
    new Among('u\u010Diuk', 16, -1),
    new Among('i\u0161k', -1, -1),
    new Among('iul', -1, -1),
    new Among('yl', -1, -1),
    new Among('\u0117l', -1, -1),
    new Among('am', -1, -1),
    new Among('dam', 23, -1),
    new Among('jam', 23, -1),
    new Among('zgan', -1, -1),
    new Among('ain', -1, -1),
    new Among('esn', -1, -1),
    new Among('op', -1, -1),
    new Among('iop', 29, -1),
    new Among('ias', -1, -1),
    new Among('ies', -1, -1),
    new Among('ais', -1, -1),
    new Among('iais', 33, -1),
    new Among('os', -1, -1),
    new Among('ios', 35, -1),
    new Among('uos', 35, -1),
    new Among('iuos', 37, -1),
    new Among('aus', -1, -1),
    new Among('iaus', 39, -1),
    new Among('\u0105s', -1, -1),
    new Among('i\u0105s', 41, -1),
    new Among('\u0119s', -1, -1),
    new Among('ut\u0117ait', -1, -1),
    new Among('ant', -1, -1),
    new Among('iant', 45, -1),
    new Among('siant', 46, -1),
    new Among('int', -1, -1),
    new Among('ot', -1, -1),
    new Among('uot', 49, -1),
    new Among('iuot', 50, -1),
    new Among('yt', -1, -1),
    new Among('\u0117t', -1, -1),
    new Among('yk\u0161t', -1, -1),
    new Among('iau', -1, -1),
    new Among('dav', -1, -1),
    new Among('sv', -1, -1),
    new Among('\u0161v', -1, -1),
    new Among('yk\u0161\u010D', -1, -1),
    new Among('\u0119', -1, -1),
    new Among('\u0117j\u0119', 60, -1),
  ];

  static a_2: Among<StemmerLt>[] = [
    new Among('ojime', -1, 7),
    new Among('\u0117jime', -1, 3),
    new Among('avime', -1, 6),
    new Among('okate', -1, 8),
    new Among('aite', -1, 1),
    new Among('uote', -1, 2),
    new Among('asius', -1, 5),
    new Among('okat\u0117s', -1, 8),
    new Among('ait\u0117s', -1, 1),
    new Among('uot\u0117s', -1, 2),
    new Among('esiu', -1, 4),
  ];

  static a_3: Among<StemmerLt>[] = [
    new Among('\u010D', -1, 1),
    new Among('d\u017E', -1, 2),
  ];
}

export default StemmerLt;
