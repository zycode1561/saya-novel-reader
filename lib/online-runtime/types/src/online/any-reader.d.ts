import type { RuleDiagnostic } from '../shared/rules.ts';
import type { SourceRule } from './rules.ts';
import { type ExpressionContext } from './expressions.ts';
export type AnyReaderRule = Record<string, unknown> & {
    host: string;
    name: string;
};
export interface RuleRequest {
    url: string;
    method: string;
    headers: Record<string, string>;
    body?: string;
}
export declare function field(rule: AnyReaderRule, key: string): string;
export declare function buildRuleRequest(rule: AnyReaderRule, key: string, context: ExpressionContext, baseUrl?: string): RuleRequest;
export declare function diagnoseAnyReader(raw: Record<string, unknown>): RuleDiagnostic[];
export declare function compileAnyReader(raw: Record<string, unknown>, id: string): SourceRule;
