export interface ExpressionContext {
    host: string;
    keyword?: string;
    result?: unknown;
    lastResult?: unknown;
}
export declare class RuleExpressionError extends Error {
    readonly field: string;
    constructor(field: string, message: string);
}
export declare function valueText(value: unknown): string;
export declare function checkedRegex(pattern: string, flags: string): RegExp;
export declare function textParagraphs(value: string): string[];
export declare function evaluate(expression: string, input: unknown, context: ExpressionContext, field?: string, depth?: number): unknown[];
export declare function extract(expression: string, input: unknown, context: ExpressionContext, field: string): string;
