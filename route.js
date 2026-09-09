import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function emailShell(content) {
  return `
    <div style="background:#f3f6f9;padding:32px;font-family:Arial,Helvetica,sans-serif;color:#15273a">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden">
        <div style="padding:26px 32px;background:#10253a;color:#ffffff">
          <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#8ec7ef;font-weight:700">Quality Benchmark Solutions</div>
          <h1 style="margin:10px 0 0;font-size:26px">Consultation Request</h1>
        </div>
        <div style="padding:32px">${content}</div>
      </div>
    </div>
  `;
}

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        {
          success: false,
          message: "Email service is not configured yet. Please try again later."
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const company = String(body.company || "").trim();
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim();
    const website = String(body.website || "").trim();

    // Honeypot: silently accept bot submissions but do not send email.
    if (website) {
      return Response.json({ success: true });
    }

    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          message: "Please complete all required fields."
        },
        { status: 400 }
      );
    }

    if (name.length > 120 || company.length > 160 || service.length > 120 || message.length > 5000) {
      return Response.json(
        {
          success: false,
          message: "One or more fields are too long."
        },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return Response.json(
        {
          success: false,
          message: "Please enter a valid email address."
        },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL || "info@qualitybenchmarksolutions.com";
    const from =
      process.env.EMAIL_FROM ||
      "Quality Benchmark Solutions <onboarding@resend.dev>";

    const notificationHtml = emailShell(`
      <p style="font-size:16px;margin-top:0">A new consultation request has been submitted through your website.</p>
      <table style="width:100%;border-collapse:collapse;font-size:15px">
        <tr><td style="padding:10px 0;color:#64748b;width:160px"><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:10px 0;color:#64748b"><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td style="padding:10px 0;color:#64748b"><strong>Company</strong></td><td>${escapeHtml(company || "Not provided")}</td></tr>
        <tr><td style="padding:10px 0;color:#64748b"><strong>Service</strong></td><td>${escapeHtml(service || "Not specified")}</td></tr>
      </table>
      <div style="margin-top:24px;padding:20px;background:#f5f8fb;border-left:4px solid #3f9bd3;border-radius:6px">
        <strong>Message</strong>
        <p style="margin:10px 0 0;white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</p>
      </div>
    `);

    const { error: notificationError } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New consultation request from ${name}`,
      html: notificationHtml
    });

    if (notificationError) {
      console.error("Resend notification error:", notificationError);
      return Response.json(
        {
          success: false,
          message: "We could not send your request right now. Please try again shortly."
        },
        { status: 502 }
      );
    }

    // Best-effort acknowledgement. A failure here should not make the main form fail.
    try {
      const acknowledgementHtml = emailShell(`
        <p style="font-size:17px">Hi ${escapeHtml(name)},</p>
        <p>Thank you for contacting <strong>Quality Benchmark Solutions</strong>.</p>
        <p>We have received your consultation request and will review the details. A member of our team will get back to you shortly.</p>
        <div style="margin-top:24px;padding:18px;background:#f5f8fb;border-radius:8px">
          <strong>Your area of interest</strong>
          <p style="margin:8px 0 0">${escapeHtml(service || "Quality Engineering Consultation")}</p>
        </div>
        <p style="margin-top:28px">Regards,<br/><strong>Quality Benchmark Solutions</strong></p>
      `);

      await resend.emails.send({
        from,
        to: [email],
        subject: "We received your consultation request",
        html: acknowledgementHtml
      });
    } catch (acknowledgementError) {
      console.error("Acknowledgement email error:", acknowledgementError);
    }

    return Response.json({
      success: true,
      message: "Your consultation request has been sent successfully."
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong. Please try again."
      },
      { status: 500 }
    );
  }
}
