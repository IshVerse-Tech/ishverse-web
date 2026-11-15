/**
 * Module: Support Email Builder
 * Context: See docs/architecture/SECURITY.md — visitor input is untrusted.
 *
 * Builds the subject and HTML body for a support form submission. Every
 * visitor-supplied value is HTML-escaped before it enters the body, and the
 * subject has control characters (including CR/LF) removed, so a submission
 * cannot inject markup, links or extra headers into the email support reads.
 *
 * Exports:
 *   escapeHtml         — escape &, <, >, ", ' for HTML text and attributes
 *   buildSupportEmail  — { subject, html } for one submission
 */

const HTML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (ch) => HTML_ESCAPES[ch]);
}

// C0 controls (incl. CR/LF and tab) and DEL — never wanted in a subject line.
const CONTROL_CHARS = /[\u0000-\u001f\u007f]+/g;

export function buildSupportEmail(input: { name: string; email: string; message: string }): {
  subject: string;
  html: string;
} {
  const name = input.name.trim().slice(0, 200);
  const subjectName = name.replace(CONTROL_CHARS, " ").trim();
  const message = input.message.trim().slice(0, 5000);

  return {
    subject: `[IshRize Support] from ${subjectName}`,
    html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px;">
          <h2 style="margin: 0 0 16px;">Support request from ${escapeHtml(name)}</h2>
          <p style="margin: 0 0 8px; color: #666;"><strong>Email:</strong> ${escapeHtml(input.email)}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <p style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</p>
        </div>
      `,
  };
}
