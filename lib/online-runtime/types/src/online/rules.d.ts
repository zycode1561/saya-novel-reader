import { z } from 'zod';
import type { AnyReaderRule } from './any-reader.ts';
declare const searchRuleSchema: z.ZodObject<{
    disabled: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    baseUri: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    timeout: z.ZodOptional<z.ZodNumber>;
    url: z.ZodString;
    method: z.ZodEnum<{
        GET: "GET";
        POST: "POST";
        get: "get";
        post: "post";
    }>;
    data: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    cookies: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    result: z.ZodString;
    bookName: z.ZodString;
    author: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    category: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    latestChapter: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    lastUpdateTime: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    status: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    wordCount: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    nextPage: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
declare const bookRuleSchema: z.ZodDefault<z.ZodObject<{
    url: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    bookName: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    author: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    intro: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    category: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    coverUrl: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    latestChapter: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    latestChapterUrl: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    lastUpdateTime: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    status: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>>;
declare const tocRuleSchema: z.ZodObject<{
    baseUri: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    url: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    list: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    item: z.ZodString;
    isDesc: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    nextPage: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
declare const chapterRuleSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    paragraphTagClosed: z.ZodDefault<z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodEnum<{
        true: "true";
        false: "false";
    }>]>>>;
    paragraphTag: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    filterTxt: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    filterTag: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    nextPage: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
declare const sourceRuleSchema: z.ZodObject<{
    url: z.ZodString;
    name: z.ZodString;
    comment: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    language: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    disabled: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    search: z.ZodObject<{
        disabled: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        baseUri: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        timeout: z.ZodOptional<z.ZodNumber>;
        url: z.ZodString;
        method: z.ZodEnum<{
            GET: "GET";
            POST: "POST";
            get: "get";
            post: "post";
        }>;
        data: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        cookies: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        result: z.ZodString;
        bookName: z.ZodString;
        author: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        category: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        latestChapter: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        lastUpdateTime: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        status: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        wordCount: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        nextPage: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>;
    book: z.ZodDefault<z.ZodObject<{
        url: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        bookName: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        author: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        intro: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        category: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        coverUrl: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        latestChapter: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        latestChapterUrl: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        lastUpdateTime: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        status: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>>;
    toc: z.ZodObject<{
        baseUri: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        url: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        list: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        item: z.ZodString;
        isDesc: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        nextPage: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>;
    chapter: z.ZodObject<{
        title: z.ZodString;
        content: z.ZodString;
        paragraphTagClosed: z.ZodDefault<z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodEnum<{
            true: "true";
            false: "false";
        }>]>>>;
        paragraphTag: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        filterTxt: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        filterTag: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        nextPage: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>;
    crawl: z.ZodOptional<z.ZodObject<{
        concurrency: z.ZodOptional<z.ZodNumber>;
        minInterval: z.ZodOptional<z.ZodNumber>;
        maxInterval: z.ZodOptional<z.ZodNumber>;
        maxAttempts: z.ZodOptional<z.ZodNumber>;
        retryMinInterval: z.ZodOptional<z.ZodNumber>;
        retryMaxInterval: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SearchRule = z.infer<typeof searchRuleSchema>;
export type BookRule = z.infer<typeof bookRuleSchema>;
export type TocRule = z.infer<typeof tocRuleSchema>;
export type ChapterRule = z.infer<typeof chapterRuleSchema>;
export interface SourceRule extends z.infer<typeof sourceRuleSchema> {
    id: string;
    allowedHosts: ReadonlySet<string>;
    anyReader?: AnyReaderRule;
    revision?: string;
    builtinTransform?: string;
}
export declare function parseSoNovelRule(raw: unknown, id: string): SourceRule;
export declare function loadBuiltinRules(): SourceRule[];
export {};
