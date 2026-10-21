import { type CrawledChapter } from '../shared/online-book.ts';
import type { Book, OnlineBookResult, OnlineReadingReference, OnlineSearchResponse, OnlineSourceInfo } from '../shared/types.ts';
import { type SourceRule } from './rules.ts';
export interface OnlineEngineConfig {
    searchConcurrency: number;
    chapterConcurrency: number;
    requestTimeoutMs: number;
    searchTimeoutMs: number;
    searchSourceTimeoutMs?: number;
    maxRetries: number;
    minRequestIntervalMs: number;
    maxRequestIntervalMs: number;
    maxSearchResults: number;
    proxyUrl?: string;
}
export interface ResolvedOnlineResult {
    public: OnlineBookResult;
    source: SourceRule;
    bookUrl: string;
    stageInput?: unknown;
    keyword?: string;
}
export interface SearchRunResult extends OnlineSearchResponse {
    resolved: ResolvedOnlineResult[];
}
export interface ChapterLink {
    title: string;
    url: string;
    stageInput?: unknown;
    lastResult?: unknown;
    keyword?: string;
}
export declare class OnlineEngineError extends Error {
    readonly code: 'SOURCE_UNAVAILABLE' | 'TOC_EMPTY' | 'BOOK_TOO_LARGE' | 'TOO_MANY_CHAPTERS' | 'REQUEST_FAILED' | 'CANCELLED';
    constructor(message: string, code: 'SOURCE_UNAVAILABLE' | 'TOC_EMPTY' | 'BOOK_TOO_LARGE' | 'TOO_MANY_CHAPTERS' | 'REQUEST_FAILED' | 'CANCELLED');
}
export declare function transformWxsyToc(value: string): string;
export declare function transformBase64Chapter(value: string, removeRecommendations?: boolean): string;
export declare function transformWxsyChapter(value: string): string;
export declare function transformRanwenChapter(value: string): string;
export declare function parseSearchDocument(source: SourceRule, html: string, pageUrl: string): ResolvedOnlineResult[];
export interface OnlineTransport {
    validateUrl(source: SourceRule, rawUrl: string): Promise<URL>;
    fetch(url: URL, init: RequestInit): Promise<Response>;
    dispose?(): Promise<void>;
}
export declare class OnlineSourceEngine {
    private readonly config;
    private readonly transport;
    sources: SourceRule[];
    private readonly cookies;
    constructor(config: OnlineEngineConfig, transport: OnlineTransport);
    dispose(): Promise<void>;
    listSources(): OnlineSourceInfo[];
    setSources(sources: SourceRule[]): void;
    isResultCurrent(result: ResolvedOnlineResult): boolean;
    get testTimeoutMs(): number;
    private assertSafeUrl;
    private request;
    previewSearch(source: SourceRule, query: string, signal: AbortSignal, trace?: string[]): Promise<ResolvedOnlineResult[]>;
    previewToc(result: ResolvedOnlineResult, signal: AbortSignal, trace?: string[]): Promise<ChapterLink[]>;
    previewContent(source: SourceRule, link: ChapterLink, signal: AbortSignal, trace?: string[]): Promise<CrawledChapter>;
    resumeReading(reference: OnlineReadingReference, signal: AbortSignal): Promise<ResolvedOnlineResult>;
    readChapter(result: ResolvedOnlineResult, link: ChapterLink, signal: AbortSignal): Promise<CrawledChapter>;
    private anyPages;
    private searchAny;
    private loadAnyToc;
    private loadAnyContent;
    private searchSource;
    search(query: string, signal: AbortSignal): Promise<SearchRunResult>;
    private resolveTocUrl;
    private loadBookDetails;
    private tocLinks;
    private loadToc;
    private loadChapter;
    acquire(result: ResolvedOnlineResult, progress: (completed: number, total: number, retries: number) => void, signal: AbortSignal): Promise<Book>;
}
