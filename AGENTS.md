# IshVerse Web — agent context

## Read only what the task needs

1. For a continuation, read `CONTINUATION.md`; otherwise use `docs/README.md` to locate only the relevant feature contract.
2. Read architecture for boundary changes; design for UI; security for identity/private data/permissions.
3. Inspect the affected implementation. Historical checkpoints and generated OpenAPI are reference material; query selected sections/paths instead of loading them wholesale.
4. Choose checks with [the workspace validation matrix](../VALIDATION.md). Keep required security, database and recovery checks; do not repeat unrelated suites or completed checks without a new reason. If this repo is checked out alone, use its own testing runbook.

## Repository purpose

Corporate website and public front door for IshVerse. It explains the company, routes visitors to products, and provides stable public company/legal/contact surfaces.

## Stack constraints

Next.js + React + TypeScript + Tailwind CSS + npm.

Do not introduce unapproved framework/database/infrastructure dependencies. npm only for JavaScript/TypeScript repositories. Roadmap entries are not implementation permission.

## Git

Use short-lived branches (`feature/`, `fix/`, `docs/`, `refactor/`, `security/`, `chore/`). Do not use AI assistant names as branch prefixes. Never add Claude, Codex, OpenAI, or other AI assistants as commit co-authors.

## Working agreement

Keep changes focused. Preserve unrelated edits. Never expose secrets or private customer/source data in logs, fixtures, screenshots, issues, or PRs. Report checks run and remaining uncertainty. Update specifications when behavior changes.
