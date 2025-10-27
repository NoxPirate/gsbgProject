import sqlite3, os
p = os.path.join(os.path.dirname(__file__), '..', 'gsbg_dev.db')
print('path:', p)
print('exists:', os.path.exists(p))
con = sqlite3.connect(p)
c = con.cursor()
try:
    c.execute('SELECT count(*) FROM leads')
    print('leads count:', c.fetchone()[0])
    c.execute('SELECT id,name,email,phone,source,message,score,classification,created_at FROM leads LIMIT 20')
    rows = c.fetchall()
    print('sample rows:')
    for r in rows:
        print(r)
except Exception as e:
    print('error:', e)
finally:
    con.close()
