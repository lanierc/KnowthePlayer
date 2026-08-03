import re
from pathlib import Path

for fn in ['server.js','js/data.js']:
    text = Path(fn).read_text()
    arr = []
    m = re.search(r'FOOTBALLERS\s*=\s*\[', text)
    if not m:
        print('FILE', fn, 'NO FOOTBALLERS')
        continue
    start = m.end()
    depth = 1
    i = start
    while i < len(text) and depth > 0:
        if text[i] == '[':
            depth += 1
        elif text[i] == ']':
            depth -= 1
        i += 1
    body = text[start:i-1]
    objs = re.findall(r'\{[^}]*?\}', body, re.DOTALL)
    for idx, obj in enumerate(objs, start=1):
        idm = re.search(r"id\s*:\s*'([^']+)'", obj)
        name = re.search(r"name\s*:\s*'([^']+)'", obj)
        if idm and name:
            arr.append((idx, idm.group(1), name.group(1)))
    ids = {}
    names = {}
    for idx, pid, name in arr:
        ids.setdefault(pid, []).append(idx)
        names.setdefault(name, []).append(idx)
    print('FILE', fn, 'OBJECTS', len(arr))
    print(' duplicate ids', {k:v for k,v in ids.items() if len(v)>1})
    print(' duplicate names', {k:v for k,v in names.items() if len(v)>1})
    print()