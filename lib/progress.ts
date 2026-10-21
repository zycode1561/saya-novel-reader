export function validProgress(value: unknown): boolean {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, any>;
  const p = v.payload?.position;
  const safeInt = (x: unknown) => Number.isSafeInteger(x) && (x as number) >= 0;
  return safeInt(v.revision) && typeof v.operation === 'string' && /^[a-zA-Z0-9-]{16,80}$/.test(v.operation)
    && !!p && typeof p.bookId === 'string' && p.bookId.length <= 200 && safeInt(p.chapterIndex) && safeInt(p.paragraphIndex)
    && Number.isFinite(p.scrollOffset) && p.scrollOffset >= 0 && Number.isFinite(p.updatedAt) && safeInt(p.readingSeconds)
    && Array.isArray(v.payload.bookmarks) && v.payload.bookmarks.length <= 500
    && v.payload.bookmarks.every((b: any) => typeof b.id === 'string' && b.id.length <= 200 && typeof b.excerpt === 'string' && b.excerpt.length <= 2000 && safeInt(b.chapterIndex) && safeInt(b.paragraphIndex) && Number.isFinite(b.createdAt));
}
