export type RuleFormat = 'any-reader' | 'sonovel';
export interface RuleDiagnostic {
    field: string;
    message: string;
}
export interface ManagedRule {
    id: string;
    name: string;
    kind: 'builtin' | 'custom';
    format: RuleFormat;
    enabled: boolean;
    compatible: boolean;
    diagnostics: RuleDiagnostic[];
    raw: Record<string, unknown>;
}
export interface RuleImportItem extends ManagedRule {
    duplicate: boolean;
}
export interface RuleImportPreview {
    token: string;
    items: RuleImportItem[];
}
export interface RuleImportResult {
    imported: number;
    skipped: number;
}
export interface RuleTestItem {
    handle: string;
    title: string;
    author?: string;
    url: string;
}
export interface RuleTestResponse {
    stage: 'search' | 'toc' | 'content';
    requests: string[];
    items: RuleTestItem[];
    paragraphs: string[];
    diagnostics: RuleDiagnostic[];
}
export interface RuleTestRequest {
    raw: Record<string, unknown>;
    format: RuleFormat;
    stage: RuleTestResponse['stage'];
    keyword?: string;
    handle?: string;
}
export declare const ANY_READER_TEMPLATE: Record<string, unknown>;
