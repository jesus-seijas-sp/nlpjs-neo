import Evaluator from './evaluator.js';
import type { EvaluatedValue, EvaluationContext } from './types.js';

const evaluator = new Evaluator();

/** Key of an array item that asks to be repeated for each item of a context array. */
const iteratorName = '_iterator_';

/** A run of text, printed as it is. */
interface LiteralBlock {
  type: 'literal';
  text: string;
}

/** A `{{ expression }}`, replaced by what the expression evaluates to. */
interface ExpressionBlock {
  type: 'expression';
  text: string;
  value: string;
}

/** A `{{#expression}} ... {{/#}}` section, repeated for each item of the value. */
interface ForEachBlock {
  type: 'forEach';
  value: string;
  blocks: Block[];
  parent: ProgramBlock | ForEachBlock;
}

/** The whole string. */
interface ProgramBlock {
  type: 'program';
  blocks: Block[];
}

type Block = LiteralBlock | ExpressionBlock | ForEachBlock;

/** How a string is turned into its result. */
export interface CompileOptions {
  /**
   * A string that is exactly one `{{ expression }}` answers the value of the
   * expression as it is, a number or an object included, instead of its text.
   */
  native?: boolean;
}

/** Programs of the strings already seen, keyed by the string, so it is parsed once. */
const dictionary = new Map<string, ProgramBlock>();

function getProgram(str: string): ProgramBlock {
  const re = /{{([\s\S]*?)}}/g;
  const program: ProgramBlock = { type: 'program', blocks: [] };
  let current: ProgramBlock | ForEachBlock = program;
  let lastIndex = 0;
  let match = re.exec(str);
  while (match !== null) {
    const literal = str.slice(lastIndex, match.index);
    if (literal) {
      current.blocks.push({ type: 'literal', text: literal });
    }
    const expression = match[1].trim();
    if (expression.startsWith('/#')) {
      // A close without an open leaves the current section as it is.
      if (current.type === 'forEach') {
        current = current.parent;
      }
    } else if (expression.startsWith('#')) {
      const block: ForEachBlock = {
        type: 'forEach',
        value: expression.slice(1),
        blocks: [],
        parent: current,
      };
      current.blocks.push(block);
      current = block;
    } else {
      current.blocks.push({
        type: 'expression',
        text: match[0],
        value: expression,
      });
    }
    lastIndex = match.index + match[0].length;
    match = re.exec(str);
  }
  const tail = str.slice(lastIndex);
  if (tail) {
    current.blocks.push({ type: 'literal', text: tail });
  }
  return program;
}

/** Text of a value inside a string: an object is printed as JSON, not as `[object Object]`. */
function stringify(value: EvaluatedValue): string {
  if (
    value !== null &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    value.toString === Object.prototype.toString
  ) {
    return JSON.stringify(value, null, 2);
  }
  return String(value);
}

/**
 * Value of an expression, or `undefined` when it has none, which leaves the
 * `{{ ... }}` in place as text.
 */
function evaluateExpression(
  block: ExpressionBlock,
  context: EvaluationContext
): EvaluatedValue {
  const value = evaluator.evaluate(block.value, context);
  return value === null || value === undefined ? undefined : value;
}

/** Text a block prints. */
function render(block: Block, context: EvaluationContext): string {
  if (block.type === 'literal') {
    return block.text;
  }
  if (block.type === 'expression') {
    const value = evaluateExpression(block, context);
    return value === undefined ? block.text : stringify(value);
  }
  const evaluated = evaluator.evaluate(block.value, context);
  const items = Array.isArray(evaluated) ? evaluated : [evaluated];
  let result = '';
  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];
    const itemContext = {
      ...(item !== null && typeof item === 'object' ? item : {}),
      _parent_: context,
      _current_: item,
      _index_: i,
    };
    for (let j = 0; j < block.blocks.length; j += 1) {
      result += render(block.blocks[j], itemContext);
    }
  }
  return result;
}

function processString(
  str: string,
  context: EvaluationContext,
  options: CompileOptions
): EvaluatedValue {
  let program = dictionary.get(str);
  if (program === undefined) {
    program = getProgram(str);
    dictionary.set(str, program);
  }
  const [only] = program.blocks;
  if (
    options.native &&
    program.blocks.length === 1 &&
    only.type === 'expression'
  ) {
    const value = evaluateExpression(only, context);
    return value === undefined ? only.text : value;
  }
  let result = '';
  for (let i = 0; i < program.blocks.length; i += 1) {
    result += render(program.blocks[i], context);
  }
  return result;
}

/** The values an array item stands for: itself, or one copy per item it iterates. */
function expandItem(
  item: unknown,
  context: EvaluationContext,
  options: CompileOptions
): unknown[] {
  const source = item as Record<string, unknown> | null;
  const iterator =
    source !== null && typeof source === 'object'
      ? source[iteratorName]
      : undefined;
  if (typeof iterator !== 'string' || !iterator.startsWith('#')) {
    return [process(item, context, options)];
  }
  const iterable = context[iterator.slice(1)];
  if (!Array.isArray(iterable)) {
    return [];
  }
  return iterable.map((entry, index) => {
    const result = process(
      item,
      {
        ...entry,
        _parent_: context,
        _current_: entry,
        _index_: index,
      },
      options
    ) as Record<string, unknown>;
    delete result[iteratorName];
    return result;
  });
}

/**
 * Traverse the object replacing strings using context.
 * @param {object} obj Object to be replaced
 * @param {object} context Context variables
 * @param {object} options How a string is turned into its result.
 * @returns {object} Object traversed in deep replacing strings.
 */
function process<T>(
  obj: T,
  context: EvaluationContext,
  options: CompileOptions
): T {
  if (typeof obj === 'string') {
    return processString(obj, context, options) as T;
  }
  if (Array.isArray(obj)) {
    return obj.flatMap((item) => expandItem(item, context, options)) as T;
  }
  if (obj !== null && typeof obj === 'object') {
    const source = obj as Record<string, unknown>;
    const keys = Object.keys(source);
    const result: Record<string, unknown> = {};
    for (let i = 0; i < keys.length; i += 1) {
      result[keys[i]] = process(source[keys[i]], context, options);
    }
    return result as T;
  }
  return obj;
}

function compile<T>(
  str: T,
  options: CompileOptions = {}
): (context?: EvaluationContext) => T {
  return (context: EvaluationContext = {}) => process(str, context, options);
}

export default compile;
