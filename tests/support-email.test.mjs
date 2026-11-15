import { test } from "node:test";
import assert from "node:assert/strict";
import { buildSupportEmail, escapeHtml } from "../lib/support-email.ts";

test("escapeHtml neutralises every HTML-significant character", () => {
  assert.equal(
    escapeHtml(`<a href="x" onclick='y'>&</a>`),
    "&lt;a href=&quot;x&quot; onclick=&#39;y&#39;&gt;&amp;&lt;/a&gt;",
  );
  assert.equal(escapeHtml("plain text"), "plain text");
});

test("visitor input cannot inject markup or links into the body", () => {
  const { html } = buildSupportEmail({
    name: `<img src=x onerror=alert(1)>Eve`,
    email: `"><script>x</script>@example.com`,
    message: `Please <a href="https://evil.example">reset your password here</a>.`,
  });
  assert.doesNotMatch(html, /<img|<script|<a /);
  assert.match(html, /&lt;img src=x onerror=alert\(1\)&gt;Eve/);
  assert.match(html, /&lt;a href=&quot;https:\/\/evil\.example&quot;&gt;/);
  assert.match(html, /&quot;&gt;&lt;script&gt;x&lt;\/script&gt;@example\.com/);
});

test("subject drops CR/LF and other control characters", () => {
  const { subject } = buildSupportEmail({
    name: "Eve\r\nBcc: victim@example.com\u0000",
    email: "eve@example.com",
    message: "Hello there, this is long enough.",
  });
  assert.doesNotMatch(subject, /[\r\n\u0000]/);
  assert.equal(subject, "[IshRize Support] from Eve Bcc: victim@example.com");
});

test("lengths stay bounded after trimming", () => {
  const { html } = buildSupportEmail({
    name: "n".repeat(500),
    email: "a@b.co",
    message: "m".repeat(6000),
  });
  assert.ok(!html.includes("n".repeat(201)));
  assert.ok(!html.includes("m".repeat(5001)));
});
