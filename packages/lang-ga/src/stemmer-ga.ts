import { Among, SnowballStemmer } from '@nlpjs-neo/core';
import type { ContainerHolder } from '@nlpjs-neo/core';

/**
 * Stemmer written by tools/snowball from irish.sbl of Snowball at commit 411550d. Do not edit it by hand:
 * change the Snowball program and generate it again.
 */
class StemmerGa extends SnowballStemmer {
  constructor(container?: ContainerHolder) {
    super(container);
    this.name = 'stemmer-ga';
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
      if (!this.gopast_in_grouping(StemmerGa.g_v, 97, 250)) {
        break lab0;
      }
      this.I_pV = this.cursor;
      if (!this.gopast_out_grouping(StemmerGa.g_v, 97, 250)) {
        break lab0;
      }
      this.I_p1 = this.cursor;
      if (!this.gopast_in_grouping(StemmerGa.g_v, 97, 250)) {
        break lab0;
      }
      if (!this.gopast_out_grouping(StemmerGa.g_v, 97, 250)) {
        break lab0;
      }
      this.I_p2 = this.cursor;
    }
    this.cursor = v_1;
    return true;
  }

  r_initial_morph(): boolean {
    const among_var = this.find_slice(StemmerGa.a_0);
    if (among_var === 0) {
      return false;
    }
    switch (among_var) {
      case 1:
        this.slice_del();
        break;
      case 2:
        this.slice_from('f');
        break;
      case 3:
        this.slice_from('s');
        break;
      case 4:
        this.slice_from('b');
        break;
      case 5:
        this.slice_from('c');
        break;
      case 6:
        this.slice_from('d');
        break;
      case 7:
        this.slice_from('g');
        break;
      case 8:
        this.slice_from('p');
        break;
      case 9:
        this.slice_from('t');
        break;
      case 10:
        this.slice_from('m');
        break;
    }
    return true;
  }

  r_noun_sfx(): boolean {
    const among_var = this.find_slice_b(StemmerGa.a_1);
    if (among_var === 0) {
      return false;
    }
    switch (among_var) {
      case 1:
        if (!this.r_R1()) {
          return false;
        }
        this.slice_del();
        break;
      case 2:
        if (!this.r_R2()) {
          return false;
        }
        this.slice_del();
        break;
    }
    return true;
  }

  r_deriv(): boolean {
    const among_var = this.find_slice_b(StemmerGa.a_2);
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
      case 2:
        this.slice_from('arc');
        break;
      case 3:
        this.slice_from('gin');
        break;
      case 4:
        this.slice_from('graf');
        break;
      case 5:
        this.slice_from('paite');
        break;
      case 6:
        this.slice_from('\u00F3id');
        break;
    }
    return true;
  }

  r_verb_sfx(): boolean {
    const among_var = this.find_slice_b(StemmerGa.a_3);
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
      case 2:
        if (!this.r_R1()) {
          return false;
        }
        this.slice_del();
        break;
    }
    return true;
  }

  innerStem(): boolean {
    this.do_forward(this.r_initial_morph);
    this.r_mark_regions();
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    this.do_backward(this.r_noun_sfx);
    this.do_backward(this.r_deriv);
    this.do_backward(this.r_verb_sfx);
    this.cursor = this.limit_backward;
    return true;
  }

  static g_v: number[] = [
    17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 4, 2,
  ];

  static a_0: Among<StemmerGa>[] = [
    new Among("b'", -1, 1),
    new Among('bh', -1, 4),
    new Among('bhf', 1, 2),
    new Among('bp', -1, 8),
    new Among('ch', -1, 5),
    new Among("d'", -1, 1),
    new Among("d'fh", 5, 2),
    new Among('dh', -1, 6),
    new Among('dt', -1, 9),
    new Among('fh', -1, 2),
    new Among('gc', -1, 5),
    new Among('gh', -1, 7),
    new Among('h-', -1, 1),
    new Among("m'", -1, 1),
    new Among('mb', -1, 4),
    new Among('mh', -1, 10),
    new Among('n-', -1, 1),
    new Among('nd', -1, 6),
    new Among('ng', -1, 7),
    new Among('ph', -1, 8),
    new Among('sh', -1, 3),
    new Among('t-', -1, 1),
    new Among('th', -1, 9),
    new Among('ts', -1, 3),
  ];

  static a_1: Among<StemmerGa>[] = [
    new Among('\u00EDochta', -1, 1),
    new Among('a\u00EDochta', 0, 1),
    new Among('ire', -1, 2),
    new Among('aire', 2, 2),
    new Among('abh', -1, 1),
    new Among('eabh', 4, 1),
    new Among('ibh', -1, 1),
    new Among('aibh', 6, 1),
    new Among('amh', -1, 1),
    new Among('eamh', 8, 1),
    new Among('imh', -1, 1),
    new Among('aimh', 10, 1),
    new Among('\u00EDocht', -1, 1),
    new Among('a\u00EDocht', 12, 1),
    new Among('ir\u00ED', -1, 2),
    new Among('air\u00ED', 14, 2),
  ];

  static a_2: Among<StemmerGa>[] = [
    new Among('\u00F3ideacha', -1, 6),
    new Among('patacha', -1, 5),
    new Among('achta', -1, 1),
    new Among('arcachta', 2, 2),
    new Among('eachta', 2, 1),
    new Among('grafa\u00EDochta', -1, 4),
    new Among('paite', -1, 5),
    new Among('ach', -1, 1),
    new Among('each', 7, 1),
    new Among('\u00F3ideach', 8, 6),
    new Among('gineach', 8, 3),
    new Among('patach', 7, 5),
    new Among('grafa\u00EDoch', -1, 4),
    new Among('pataigh', -1, 5),
    new Among('\u00F3idigh', -1, 6),
    new Among('acht\u00FAil', -1, 1),
    new Among('eacht\u00FAil', 15, 1),
    new Among('gineas', -1, 3),
    new Among('ginis', -1, 3),
    new Among('acht', -1, 1),
    new Among('arcacht', 19, 2),
    new Among('eacht', 19, 1),
    new Among('grafa\u00EDocht', -1, 4),
    new Among('arcachta\u00ED', -1, 2),
    new Among('grafa\u00EDochta\u00ED', -1, 4),
  ];

  static a_3: Among<StemmerGa>[] = [
    new Among('imid', -1, 1),
    new Among('aimid', 0, 1),
    new Among('\u00EDmid', -1, 1),
    new Among('a\u00EDmid', 2, 1),
    new Among('adh', -1, 2),
    new Among('eadh', 4, 2),
    new Among('faidh', -1, 1),
    new Among('fidh', -1, 1),
    new Among('\u00E1il', -1, 2),
    new Among('ain', -1, 2),
    new Among('tear', -1, 2),
    new Among('tar', -1, 2),
  ];
}

export default StemmerGa;
