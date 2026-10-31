// Existing progress provides a fallback until a book receives its first explicit
// reading event. Uploading and reading both count as recent library activity.
export const CATALOG_QUERY = `
WITH catalog AS (
SELECT b.id,b.name,b.filename,b.size,b.created_at,
  CASE WHEN json_valid(p.payload) AND json_type(p.payload,'$.position.chapterIndex')='integer'
    THEN json_extract(p.payload,'$.position.chapterIndex') END AS chapter_index,
  CASE WHEN json_valid(p.payload) THEN json_extract(p.payload,'$.position.updatedAt') END AS progress_updated_at,
  COALESCE(NULLIF(b.last_read_at,0),
    CASE WHEN json_valid(p.payload) THEN MAX(0,CAST(json_extract(p.payload,'$.position.updatedAt') AS INTEGER)) ELSE 0 END,
    0) AS last_read_at
FROM books b LEFT JOIN progress p ON p.id=b.id)
SELECT * FROM catalog
ORDER BY MAX(created_at,last_read_at) DESC,created_at DESC,id ASC`;

export const READ_MARK_QUERY = `UPDATE books SET last_read_at=MAX(last_read_at,?,
  CASE WHEN last_read_at=0 THEN COALESCE((SELECT
    CASE WHEN json_valid(payload) THEN MAX(0,CAST(json_extract(payload,'$.position.updatedAt') AS INTEGER)) ELSE 0 END
    FROM progress WHERE progress.id=books.id),0) ELSE 0 END)
  WHERE id=? RETURNING last_read_at`;
