import json,re,sqlite3
from pathlib import Path
root=Path(__file__).resolve().parent.parent
conn=sqlite3.connect(':memory:')
conn.executescript((root/'drizzle/0000_romantic_cable.sql').read_text())
# Seed before applying the new migration to verify existing records survive.
for key,created in [('a',30),('b',20),('c',10),('d',40)]:
    conn.execute('INSERT INTO books VALUES (?,?,?,?,?)',(key,key,key+'.txt',10,created))
    payload=json.dumps({'position':{'updatedAt':100},'bookmarks':[{'id':'keep'}]}) if key=='b' else None
    conn.execute('INSERT INTO progress(id,payload) VALUES (?,?)',(key,payload))
conn.executescript((root/'drizzle/0001_light_junta.sql').read_text())
source=(root/'lib/library-order.ts').read_text()
query=re.search(r'CATALOG_QUERY = `(.*?)`',source,re.S)[1]
mark=re.search(r'READ_MARK_QUERY = `(.*?)`',source,re.S)[1]
assert [row[0] for row in conn.execute(query)]==['b','d','a','c']
old=conn.execute('SELECT * FROM progress WHERE id=?',('b',)).fetchone()
conn.execute(mark,(200,'c'))
conn.execute(mark,(50,'c'))
conn.execute(mark,(50,'b'))
assert [row[0] for row in conn.execute(query)]==['c','b','d','a']
assert conn.execute('SELECT last_read_at FROM books WHERE id=?',('c',)).fetchone()[0]==200
assert conn.execute('SELECT last_read_at FROM books WHERE id=?',('b',)).fetchone()[0]==100
assert conn.execute('SELECT * FROM progress WHERE id=?',('b',)).fetchone()==old
assert conn.execute('SELECT COUNT(*) FROM books').fetchone()[0]==4
print('PASS: migration preserves books/progress; legacy reading fallback, unread ordering and monotonic reading time.')
