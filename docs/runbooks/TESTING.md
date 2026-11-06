# Testing Strategy — IshVerse Web

Test the behavior closest to risk. Maintain a pyramid of fast deterministic checks plus targeted integration/end-to-end coverage for critical user paths.

CI stages should be introduced only when the repository has the matching commands/tests. The intended progression is: dependency install → formatting/lint → type/static checks → unit/domain tests → integration tests → security/dependency checks → production build/package validation.

UI changes require responsive and accessibility review. Security/permission changes require negative-path testing. Data migrations require recovery/rollback evidence. Never equate "build passes" with full product correctness.
