/** Small deterministic hash used only as a local storage key, not for security. */
export declare function hashText(value: string): string;
export declare function createBookId(file: Pick<File, 'name' | 'size' | 'lastModified'>, head: string): string;
export declare function createId(prefix: string): string;
