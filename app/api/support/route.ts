/**
 * Module: Support API Route
 * Context: Forwards support form submissions to support@ishverse.com via
 * Resend. The form lives at rize.ishverse.com/support.
 *
 * Validates name, email, and message; the email body is built by
 * lib/support-email.ts, which escapes all visitor input. Rate-limited by
 * Resend's own limits.
 *
 * Exports:
 *   POST — route handler
 */

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildSupportEmail } from "@/lib/support-email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let name: unknown, email: unknown, message: unknown;
  try {
    ({ name, email, message } = await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (typeof name !== "string" || name.trim().length < 1) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }
  if (typeof message !== "string" || message.trim().length < 10) {
    return NextResponse.json({ error: "Message must be at least 10 characters" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY not configured");
    return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  // Visitor input is escaped inside buildSupportEmail; never interpolate it here.
  const { subject, html } = buildSupportEmail({ name, email, message });

  try {
    const { error } = await resend.emails.send({
      from: "IshRize Support <noreply@mail.ishverse.com>",
      to: "support@ishverse.com",
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Support email exception:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
  }
}
