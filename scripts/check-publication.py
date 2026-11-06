#!/usr/bin/env python3
"""Check the Git publication set, never scan ignored runtime datasets. Stdlib only."""
import argparse
import hashlib
import re
import subprocess
from pathlib import Path
from urllib.parse import urlsplit

# Only authored regression fixtures, pinned to reviewed bytes; no customer files.
FIXTURES = {'tests/fixtures/model-inputs.xlsx': '40000693e338e66fb976f8a62c39f43ab0565cdc69a271461811beec4cc749a4', 'tests/fixtures/pdf/native.pdf': 'd191c78a20daa238e484be2f36b5a0e61366c5324e38b7b84c206a2bca963ffd', 'tests/fixtures/pdf/scanned.pdf': '9990cb54e014a5ce29f6dddc65b12dc85fe9dafdb9a8cdb34b13ab8ecb3479aa'}
ROOT_DATA = {'var', 'data', 'raw', 'backups', 'uploads', 'exports', 'reports', 'datasets', 'customer-research', 'local-data', '.data', 'artifacts', 'secrets', 'private-exports'}
GENERATED = {'node_modules', '.next', 'out', 'dist', 'build', 'coverage', '__pycache__', '.venv', 'venv', '.cache', '.pytest_cache', '.mypy_cache', '.ruff_cache', '.tox', '.nox', '.aws', '.ssh', '.vercel', '.turbo'}
DATA_EXT = {'.dump', '.db', '.sqlite', '.sqlite3', '.parquet', '.arrow', '.feather', '.jsonl', '.ndjson', '.csv', '.tsv', '.xlsx', '.xls', '.pdf', '.zip', '.gz', '.tar', '.tgz', '.7z', '.pyc', '.pyo', '.key', '.pem', '.p12', '.pfx', '.jks', '.keystore', '.tsbuildinfo'}
PATTERNS = {
    'private key material': re.compile(r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----'),
    'GitHub token shape': re.compile(r'\b(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,})\b'),
    'AWS access key shape': re.compile(r'\bAKIA[A-Z0-9]{16}\b'),
}

def violations(root, name, blob=None, mode=None):
    p = Path(name)
    parts = p.parts
    path = root / p
    findings = []
    if p.is_absolute() or '..' in parts or not parts:
        return ['unsafe path']
    if mode == '120000' or path.is_symlink():
        return ['symlink requires explicit review; not published by this guard']
    if blob is None and not path.is_file():
        return []  # A staged deletion is not a new file.
    raw = path.read_bytes() if blob is None else blob
    if name in FIXTURES:
        return [] if hashlib.sha256(raw).hexdigest() == FIXTURES[name] else ['synthetic fixture bytes changed; review provenance and update the pin']
    if parts[0] in ROOT_DATA or any(x in GENERATED or x.endswith('.egg-info') for x in parts) or p.suffix.lower() in DATA_EXT or p.name == 'next-env.d.ts' or p.name == '.DS_Store' or p.name.startswith(('id_rsa', 'id_ed25519')):
        findings.append('data, secret or generated artifact path')
    if p.name.startswith('.env') and not (p.name == '.env.example' or p.name.endswith('.example')):
        findings.append('local environment file')
    if len(raw) > 10 * 1024 * 1024:
        findings.append('file exceeds 10 MiB review limit')
    try:
        body = raw.decode('utf-8')
    except UnicodeError:
        return findings  # Intentional brand/image assets are checked by path/provenance review.
    for label, pattern in PATTERNS.items():
        if pattern.search(body):
            findings.append(label)
    for match in re.finditer(r'(?:postgres(?:ql)?|https?)://[^\s<>\"\'`]+', body):
        try:
            u = urlsplit(match.group())
            if u.password and u.hostname not in {'localhost', '127.0.0.1', '::1'}:
                findings.append('credential-bearing nonlocal URL')
        except ValueError:
            pass  # Examples/regex fragments are not credentials by themselves.
    return sorted(set(findings))

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--repo', type=Path, default=Path('.'))
    parser.add_argument('--candidates', action='store_true', help='include nonignored untracked files before staging')
    args = parser.parse_args()
    root = args.repo.resolve()
    entries = subprocess.check_output(['git','-C',str(root),'ls-files','--stage','-z']).split(b'\0')
    indexed = []
    for entry in entries:
        if not entry: continue
        metadata, name = entry.split(b'\t',1)
        mode, oid, stage = metadata.decode().split()
        if stage != '0':
            print('Unresolved Git index conflict; publication refused.')
            return 1
        indexed.append((name.decode(), mode, oid))
    bad = []
    if indexed:
        result = subprocess.check_output(['git','-C',str(root),'cat-file','--batch'], input=('\n'.join(oid for _,_,oid in indexed)+'\n').encode())
        offset = 0
        for name, mode, oid in indexed:
            end = result.index(b'\n', offset)
            header = result[offset:end].decode().split()
            if len(header) != 3 or header[1] != 'blob':
                raise RuntimeError('Invalid index object; publication refused')
            size = int(header[2]); start = end + 1
            reasons = violations(root, name, result[start:start+size], mode)
            offset = start + size + 1
            if reasons: bad.append((name+' [index]',reasons))
    names = {name for name,_,_ in indexed}
    if args.candidates:
        others = subprocess.check_output(['git','-C',str(root),'ls-files','--others','--exclude-standard','-z']).decode().split('\0')
        names.update(name for name in others if name)
        for name in sorted(names):
            reasons = violations(root, name)
            if reasons: bad.append((name+' [working]',reasons))
    for name, reasons in bad:
        print(name + ': ' + '; '.join(reasons))  # Never echo matching secret values or private file contents.
    print(f'Publication set: {len(names)} files; {len(bad)} findings. Pattern checks are not a complete secret or asset-rights audit.')
    return 1 if bad else 0

if __name__ == '__main__':
    raise SystemExit(main())
