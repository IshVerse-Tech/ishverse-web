# Contributing to IshVerse

## Scope and ownership

Work in the repository that owns the capability. Keep runtime datasets, customer research, account records, uploads, backups and secrets outside Git, including private repositories. Commit application source, migrations, configuration definitions, API schemas, lockfiles, reviewed docs and intentional brand assets. Small synthetic regression fixtures are explicitly allowlisted; they are not production evidence.

Read the local `AGENTS.md`, relevant feature/security contract and testing runbook. Shared workspace routing explains cross-repository checks. Preserve working code, immutable migrations and unrelated work. Source publication is separate from deployment, customer contact, live email, billing and external AI activation.

## Branches and issues

Use the repository's actual integration branch: **dev** for **ishverse-web**. Check `gh repo view --json defaultBranchRef` before starting; do not invent an integration branch or assume branch protection is configured. `ishverse-web` uses `dev`; the foundation repositories use `main`.

Create or reference an issue with the problem, intended behavior, acceptance criteria, exclusions and affected repositories. Use one fresh disposable branch per coherent PR: `feature/`, `fix/`, `docs/`, `refactor/`, `security/` or `chore/`, followed by a kebab-case description. Never reuse a merged branch. Start from an up-to-date integration branch without discarding local changes.

An entirely empty remote needs a base before GitHub can compare a PR. Its initial base may contain **one empty bootstrap commit only**; all source, policy and profile changes then go through a feature PR. Record that exception in the PR. Never use it to bypass review of real code. Never force-push integration/shared branches.

## Commits and review

Use focused conventional messages: `<type>(<optional-scope>): <specific change>`. Types include `feat`, `fix`, `docs`, `refactor`, `test`, `perf`, `security` and `chore`. Keep related source, tests and contracts together; separate governance-only changes where practical. Add `Refs: #N` for the issue. Put `Closes #N` in the PR description when that PR actually completes the issue; do not add a misleading closing footer to every intermediate commit. GitHub issue closing depends on the repository's default-branch behavior, not a blanket promise about every merge.

Stage explicit reviewed paths. Inspect staged names, sizes, diff and secret/data checks before committing; `.gitignore` does not remove files already tracked. Do not add AI co-author attribution. Never rewrite existing history simply to remove generated files from the next commit; review exposure separately if sensitive material was previously published.

Open a PR into **dev**, with concrete behavior, scope, actual validation results/skips/failures, compatibility/migration and recovery implications, security/privacy impact, and linked companion PRs. Identify integration dependencies and a sensible merge order. Use a focused follow-up comment for material new results rather than repeated status noise. Draft PRs are appropriate for honest incomplete validation or decisions. Do not claim hosted/customer acceptance from local tests.

The founder reviews and chooses when to approve, squash-merge and delete branches. Leave PRs open: no self-approval, auto-merge, release tag, deployment or branch deletion is implied by creating them. Repository protection/ruleset and merge settings are separate reviewed administration; do not silently alter them. Independent approval is useful when a reviewer exists; do not invent approval or install hooks/dependencies merely for appearance.

## Checks and API changes

Run the smallest checks that cover the actual failure boundary; use full suites and combined recovery for a coordinated release where justified. Keep authorization, privacy, concurrency, missing-data and failure/recovery coverage. Run test files explicitly when using focused runners; missing DB configuration/skipped tests are not passing integration evidence. UI work needs responsive/keyboard/accessibility acceptance in addition to builds. Use dedicated test databases, never founder or customer databases.

Document only scripts that exist. Node repositories use npm and committed lockfiles; Data uses its declared Python environment and dependency lock. CI profiles state their scope and prerequisites. Cross-repository/native/recovery checks need the documented workspace and tools; a standalone build is not a substitute. Update Swagger/schema inventories with API behavior and never modify applied migrations. Do not suppress failures or label incomplete work finished.

## Documentation and confidentiality

Keep one owner for each contract; link related repositories instead of copying divergent specifications. Current state belongs in current status/handoff documents; history remains historical evidence. Explain public, internal and confidential boundaries. Company HQ and shared workspace remain private; organization-profile text must contain only intentionally public, accurate statements. Do not copy internal strategy, research observations or security diagnostics to public PRs.

Use meaningful headings, language-tagged code blocks and working local links. Preserve exact financial units, periods, evidence identity and known limits. Report source rights and licensing constraints rather than implying that an accessible URL grants redistribution rights.

## Repository verification

`npm ci`, `npm run test:scope`, `npm run typecheck`, `npm run lint`, `npm run build`. The existing required CI job remains present; unknown/code changes take the code path. Existing Husky checks remain in force. A documentation-only classification must not hide runtime/configuration changes.
