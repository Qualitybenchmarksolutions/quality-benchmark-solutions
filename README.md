# Quality Benchmark Solutions — Email-Ready Website

This package is a Next.js App Router website prepared for Vercel deployment.

## Included

- Premium animated homepage
- Shared navigation
- Home, Services, Experience, About and Contact pages
- Privacy Policy and Terms & Conditions
- Resend-powered consultation form
- Server-side validation
- Honeypot anti-spam field
- HTML notification email to the business
- Automatic acknowledgement email to the visitor
- Environment-variable based configuration

## 1. Install

```bash
npm install
```

## 2. Configure environment variables

Copy `.env.example` to `.env.local` and add your real values.

Required:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `EMAIL_FROM`

Example:

```text
RESEND_API_KEY=re_your_real_key
CONTACT_TO_EMAIL=info@qualitybenchmarksolutions.com
EMAIL_FROM=Quality Benchmark Solutions <consultations@qualitybenchmarksolutions.com>
NEXT_PUBLIC_SITE_URL=https://www.qualitybenchmarksolutions.com
```

## 3. Important sender-domain setup

The `EMAIL_FROM` address must use a domain/sender that is verified in Resend.

Recommended production sender:

```text
Quality Benchmark Solutions <consultations@qualitybenchmarksolutions.com>
```

Add the DNS records requested by Resend to your domain DNS provider. Keep the existing website DNS records used by Vercel; add the email authentication records in addition to them.

## 4. Run locally

```bash
npm run dev
```

## 5. Deploy to Vercel

Push this project to GitHub and import it into Vercel.

In Vercel:

Project → Settings → Environment Variables

Add the same values from `.env.local`.

After adding or changing environment variables, trigger a new deployment.

## Email flow

Visitor form
→ POST /api/contact
→ server-side validation
→ honeypot check
→ notification sent to CONTACT_TO_EMAIL
→ automatic acknowledgement sent to visitor
→ success message shown on website

## Notes

The privacy policy and terms pages are starter business copy and should be reviewed for your specific legal and regulatory requirements before production use.
