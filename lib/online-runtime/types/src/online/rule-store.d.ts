import { z } from 'zod';
import type { ManagedRule, RuleFormat, RuleImportPreview, RuleImportResult } from '../shared/rules.ts';
import { type SourceRule } from './rules.ts';
export declare const MAX_RULE_BYTES: number;
export declare const MAX_IMPORT_RULES = 200;
export declare const ruleStateSchema: z.ZodObject<{
    custom: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        format: z.ZodEnum<{
            "any-reader": "any-reader";
            sonovel: "sonovel";
        }>;
        raw: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        enabled: z.ZodBoolean;
    }, z.core.$strip>>;
    builtinEnabled: z.ZodRecord<z.ZodString, z.ZodBoolean>;
}, z.core.$strip>;
export type RuleState = z.infer<typeof ruleStateSchema>;
export interface RulePersistence {
    get(): RuleState;
    set(value: RuleState): Promise<unknown>;
}
export declare class RuleStoreError extends Error {
    readonly code: string;
    constructor(code: string, message: string);
}
export declare function decodeRuleImport(text: string): Record<string, unknown>[];
export declare function compileRule(raw: Record<string, unknown>, format: RuleFormat, id: string): SourceRule;
export declare class RuleStore {
    private readonly persistence;
    private state;
    private queue;
    private readonly imports;
    private readonly listeners;
    private readonly builtins;
    constructor(persistence: RulePersistence);
    dispose(): void;
    onChanged(listener: () => void): () => void;
    list(): ManagedRule[];
    get(id: string): ManagedRule;
    sources(): SourceRule[];
    private transact;
    save(raw: Record<string, unknown>, format: RuleFormat, enabled: boolean, id?: string): Promise<ManagedRule>;
    setEnabled(id: string, enabled: boolean): Promise<ManagedRule>;
    remove(id: string): Promise<void>;
    preview(text: string): RuleImportPreview;
    commit(token: string, updateIds?: string[]): Promise<RuleImportResult>;
}
