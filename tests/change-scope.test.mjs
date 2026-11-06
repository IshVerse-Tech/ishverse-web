import { test } from "node:test";
import assert from "node:assert/strict";
import { classifyPaths, readScope } from "../scripts/change-scope.mjs";

test("only reviewed root and documentation Markdown routes bypass app checks", () => {
  assert.equal(classifyPaths(["README.md", "docs/design/DESIGN-SYSTEM.md"]).code, false);
  for (const path of [
    "public/readme.md",
    "app/page.md",
    "docs/openapi.json",
    "package.json",
    ".github/workflows/ci.yml",
    "scripts/change-scope.mjs",
    "docs/../app/page.md",
    "docs//file.md",
    "unknown.md",
  ])
    assert.equal(classifyPaths([path]).code, true, path);
  assert.equal(classifyPaths([]).code, true);
  assert.equal(classifyPaths(["README.md", "app/page.tsx"]).code, true);
});

test("missing/initial/invalid bases and failed diffs require app checks", () => {
  const head = "a".repeat(40);
  for (const base of [undefined, "0".repeat(40), "untrusted;command", "b".repeat(39)]) {
    assert.equal(
      readScope({
        base,
        head,
        git() {
          throw new Error("must not call");
        },
      }).code,
      true,
    );
  }
  assert.equal(
    readScope({
      base: "b".repeat(40),
      head,
      git() {
        throw new Error("missing object");
      },
    }).code,
    true,
  );
});

test("NUL parsing and no-renames retain deleted/moved code in classification", () => {
  const git = (command, args) => {
    assert.equal(command, "git");
    assert(args.includes("--no-renames"));
    assert(args.includes("-z"));
    return "app/deleted.tsx\0docs/moved.md\0";
  };
  assert.equal(readScope({ base: "b".repeat(40), head: "a".repeat(40), git }).code, true);
  assert.equal(readScope({ staged: true, git }).code, true);
});

test("staged documentation paths use the staged index without a commit base", () => {
  assert.equal(
    readScope({
      staged: true,
      git(command, args) {
        assert(args.includes("--cached"));
        return "docs/design/DESIGN-SYSTEM.md\0";
      },
    }).code,
    false,
  );
});
