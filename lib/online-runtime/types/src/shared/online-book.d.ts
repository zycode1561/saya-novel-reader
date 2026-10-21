import type { Book, OnlineBookOrigin } from './types.ts';
export interface CrawledChapter {
    title: string;
    paragraphs: string[];
}
export interface OnlineBookInput {
    name: string;
    origin: OnlineBookOrigin;
    chapters: CrawledChapter[];
}
export declare class OnlineBookBuildError extends Error {
    readonly code: 'BOOK_TOO_LARGE' | 'TOC_EMPTY';
    constructor(message: string, code: 'BOOK_TOO_LARGE' | 'TOC_EMPTY');
}
export declare function buildOnlineBook(input: OnlineBookInput, now?: number): Book;
