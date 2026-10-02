import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Malformed request. Please provide valid form data.",
        },
        { status: 400 }
      );
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    let projectCategory = "";
    if (Array.isArray(body.projectCategories) && body.projectCategories.length > 0) {
      projectCategory = body.projectCategories
        .map((c) => String(c).trim())
        .filter(Boolean)
        .join(", ");
    } else if (typeof body.projectCategory === "string") {
      projectCategory = body.projectCategory.trim();
    }

    const budget = typeof body.budget === "string" ? body.budget.trim() : "";
    const timeline = typeof body.timeline === "string" ? body.timeline.trim() : "";
    const details = typeof body.details === "string" ? body.details.trim() : "";

    // ── 1. Validate required fields ──────────────────────────────────────────
    if (!name || !email || !phone || !projectCategory) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields: Name, Contact Number, Work Email, and Project Category are mandatory.",
        },
        { status: 400 }
      );
    }

    // ── 2. Validate email format ─────────────────────────────────────────────
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid work email address.",
        },
        { status: 400 }
      );
    }

    // ── 3. Validate contact phone format ─────────────────────────────────────
    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid contact number (at least 10 digits).",
        },
        { status: 400 }
      );
    }

    // ── 4. Verify Server-Side SMTP Configuration ─────────────────────────────
    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || "465", 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASSWORD;
    const to = process.env.CONTACT_TO || "hello@zevats.com";

    if (!host || !user || !pass) {
      // Log server-side warning without leaking credentials
      console.error(
        "[API/Contact] Missing SMTP environment variables (SMTP_HOST, SMTP_USER, or SMTP_PASSWORD is not set)."
      );
      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your enquiry. Please try again or contact us directly at hello@zevats.com.",
        },
        { status: 500 }
      );
    }

    // Determine secure connection (port 465 is SSL/TLS; port 587/25 uses STARTTLS)
    const isSecure =
      process.env.SMTP_SECURE !== undefined
        ? process.env.SMTP_SECURE === "true"
        : port === 465;

    // Sender must be the authenticated Zevats mailbox
    const fromAddress =
      process.env.SMTP_FROM || `Zevats Enquiries <${user}>`;

    // ── 5. Build Email Content ───────────────────────────────────────────────
    const companyDisplay = company || "Not provided";
    const budgetDisplay = budget || "Not provided";
    const timelineDisplay = timeline || "Not provided";
    const detailsDisplay = details || "Not provided";

    // Plain text version
    const textContent = `
New Project Enquiry — Zevats
A prospective client has requested a conversation with Zevats.

CONTACT
Name: ${name}
Contact Number: ${phone}
Work Email: ${email}
Company / Organization: ${companyDisplay}

PROJECT
Category: ${projectCategory}
Approximate Budget: ${budgetDisplay}
Expected Timeline: ${timelineDisplay}

PROJECT DETAILS
${detailsDisplay}

---
Submitted via zevats.com/contact
Direct response within 24 business hours.
`.trim();

    // Responsive HTML version
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Project Enquiry — Zevats</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F4F1EA; margin: 0; padding: 24px 12px; color: #111111; -webkit-font-smoothing: antialiased; }
    .card { background-color: #FFFFFF; max-width: 600px; margin: 0 auto; border-radius: 4px; overflow: hidden; border: 1px solid rgba(17,17,17,0.12); box-shadow: 0 4px 20px rgba(0,0,0,0.03); }
    .header { background-color: #111111; padding: 28px 32px; border-bottom: 2px solid #7B2CF6; }
    .header h1 { color: #F4F1EA; font-size: 19px; font-weight: 600; margin: 0; letter-spacing: -0.02em; }
    .header p { color: #8E8A82; font-size: 13px; margin: 6px 0 0; }
    .body { padding: 32px; }
    .section-label { font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #7B2CF6; font-weight: 700; margin: 0 0 14px 0; }
    .field-row { margin-bottom: 14px; }
    .field-label { font-size: 12px; color: #686868; font-weight: 500; margin-bottom: 2px; }
    .field-value { font-size: 15px; color: #111111; font-weight: 500; word-break: break-word; }
    .divider { border: none; border-top: 1px solid rgba(17,17,17,0.08); margin: 22px 0; }
    .details-box { background-color: #FAF9F6; border: 1px solid rgba(17,17,17,0.10); border-radius: 3px; padding: 16px; font-size: 14px; color: #333333; line-height: 1.6; white-space: pre-wrap; word-break: break-word; }
    .footer { padding: 18px 32px; border-top: 1px solid rgba(17,17,17,0.08); background-color: #FAF9F6; text-align: center; }
    .footer p { font-size: 12px; color: #8E8A82; margin: 0; }
    .link { color: #7B2CF6; text-decoration: none; font-weight: 500; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>New Project Enquiry &mdash; <span style="color:#7B2CF6;">Zevats</span></h1>
      <p>A prospective client has requested a conversation with Zevats.</p>
    </div>
    <div class="body">

      <p class="section-label">Contact</p>
      <div class="field-row">
        <div class="field-label">Name</div>
        <div class="field-value">${name}</div>
      </div>
      <div class="field-row">
        <div class="field-label">Contact Number</div>
        <div class="field-value"><a href="tel:${phone}" class="link">${phone}</a></div>
      </div>
      <div class="field-row">
        <div class="field-label">Work Email</div>
        <div class="field-value"><a href="mailto:${email}" class="link">${email}</a></div>
      </div>
      <div class="field-row">
        <div class="field-label">Company / Organization</div>
        <div class="field-value">${companyDisplay}</div>
      </div>

      <hr class="divider" />

      <p class="section-label">Project</p>
      <div class="field-row">
        <div class="field-label">Category</div>
        <div class="field-value">${projectCategory}</div>
      </div>
      <div class="field-row">
        <div class="field-label">Approximate Budget</div>
        <div class="field-value">${budgetDisplay}</div>
      </div>
      <div class="field-row">
        <div class="field-label">Expected Timeline</div>
        <div class="field-value">${timelineDisplay}</div>
      </div>

      <hr class="divider" />

      <p class="section-label">Project Details</p>
      <div class="details-box">${detailsDisplay}</div>

    </div>
    <div class="footer">
      <p>Submitted via zevats.com/contact &nbsp;&middot;&nbsp; Reply directly to this email to respond to the client</p>
    </div>
  </div>
</body>
</html>
`.trim();

    // ── 6. Create Nodemailer SMTP Transporter ────────────────────────────────
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: isSecure,
      auth: {
        user,
        pass,
      },
      connectionTimeout: 15000,
      greetingTimeout: 10000,
    });

    // ── 7. Send Mail over SMTP ───────────────────────────────────────────────
    // From: Zevats mailbox
    // To: hello@zevats.com (or CONTACT_TO)
    // Reply-To: visitor's submitted email
    await transporter.sendMail({
      from: fromAddress,
      to,
      replyTo: email,
      subject: `New Project Enquiry: ${projectCategory} — ${name}`,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry sent successfully.",
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    // Log safe error message server-side without leaking credentials or passwords
    const safeMsg =
      err instanceof Error ? err.message : "Unknown error occurred";
    console.error("[API/Contact] SMTP delivery error:", safeMsg);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send your enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}
