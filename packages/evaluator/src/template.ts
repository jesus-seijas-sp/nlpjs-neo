import compile from './compile.js';
import type { CompileOptions } from './compile.js';
import type { EvaluationContext } from './types.js';

/** Resolves the `{{ ... }}` expressions of anything a pipeline answers with. */
class Template {
  compile<T>(str: T, context?: EvaluationContext, options?: CompileOptions): T {
    return compile(str, options)(context);
  }
}

export default Template;
