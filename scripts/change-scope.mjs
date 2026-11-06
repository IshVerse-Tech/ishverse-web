import { appendFileSync } from "node:fs";
import { execFileSync, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const rootDocs = new Set([
  "README.md",
  "CHANGELOG.md",
  "AGENTS.md",
  "CLAUDE.md",
  "CONTRIBUTION_GUIDE.md",
  "DESIGN.md",
  "implementation_plan.md",
  "CONTINUATION.md",
]);

export function classifyPaths(paths) {
  // Empty/unknown diffs are conservative; docs outside the reviewed routes may be runtime inputs.
  const documentationOnly =
    paths.length > 0 &&
    paths.every(
      (name) =>
        rootDocs.has(name) ||
        (/^docs\/(?:[A-Za-z0-9_.-]+\/)*[A-Za-z0-9_.-]+\.md$/.test(name) &&
          !name.split("/").some((part) => part === "." || part === "..")),
    );
  return { code: !documentationOnly, changedFiles: paths.length };
}

export function readScope({ staged = false, base, head, git = execFileSync } = {}) {
  try {
    if (
      !staged &&
      (!/^[a-f0-9]{40}$/.test(base ?? "") ||
        !/^[a-f0-9]{40}$/.test(head ?? "") ||
        /^0+$/.test(base))
    )
      return { code: true, reason: "unavailable comparison base" };
    const args = staged
      ? ["diff", "--cached", "--no-renames", "--name-only", "-z"]
      : ["diff", "--no-renames", "--name-only", "-z", base, head];
    const output = git("git", args, {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    return classifyPaths(output.split("\0").filter(Boolean));
  } catch {
    return { code: true, reason: "comparison could not be read" };
  }
}

export function main(args = process.argv.slice(2)) {
  if (
    args.some((arg) => !["--ci", "--staged", "--check-types"].includes(arg)) ||
    (args.includes("--check-types") && !args.includes("--staged")) ||
    (args.includes("--ci") && args.includes("--staged"))
  ) {
    console.error("Use --ci, or --staged [--check-types].");
    return 1;
  }
  const scope = readScope({
    staged: args.includes("--staged"),
    base: process.env.GITHUB_BASE_SHA,
    head: process.env.GITHUB_HEAD_SHA,
  });
  if (args.includes("--ci")) {
    if (!process.env.GITHUB_OUTPUT) {
      console.error("Missing CI output channel.");
      return 1;
    }
    appendFileSync(process.env.GITHUB_OUTPUT, `code=${scope.code}\n`);
  }
  console.log(
    scope.code
      ? "Application checks required."
      : "Only reviewed documentation changed; application checks do not apply.",
  );
  if (args.includes("--check-types") && scope.code) {
    const result = spawnSync("npm", ["run", "typecheck"], { cwd: root, stdio: "inherit" });
    return result.status ?? 1;
  }
  return 0;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url))
  process.exitCode = main();
