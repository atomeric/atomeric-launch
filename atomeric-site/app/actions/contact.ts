'use server'

import { Resend } from 'resend'
import { headers } from 'next/headers'
import { contactSchema, type ContactFormValues } from '@/app/contact/schema'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// Lazy init — Redis.fromEnv() throws at module level if env vars are absent.
// Initialise on first use so missing Upstash config degrades gracefully
// instead of crashing every request with a 500.
let _ratelimit: Ratelimit | null | undefined = undefined
function getRatelimit(): Ratelimit | null {
  if (_ratelimit !== undefined) return _ratelimit
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    console.warn('Upstash env vars not set — rate limiting disabled')
    _ratelimit = null
    return null
  }
  _ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, '10 m'),
    analytics: true,
  })
  return _ratelimit
}

function sanitize(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

export async function sendContactEmail(
  data: ContactFormValues
): Promise<{ success: boolean; error?: string }> {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured')
    return { success: false, error: 'Email service is not configured.' }
  }

  const headersList = await headers()
  const ip = headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'

  const rl = getRatelimit()
  if (rl) {
    try {
      const { success } = await rl.limit(ip)
      if (!success) return { success: false, error: 'Too many requests. Please wait a few minutes.' }
    } catch (rlErr) {
      console.error('Rate limit check failed — skipping:', rlErr)
      // Degrade gracefully: allow the request through rather than 500ing
    }
  }

  const parsed = contactSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: 'Invalid form data.' }
  }

  const { name, company, email, track, budget, message, utmSource, utmMedium, utmCampaign, utmTerm, utmContent } = parsed.data

  const sName = sanitize(name)
  const sCompany = company ? sanitize(company) : ''
  const sEmail = sanitize(email)
  const sTrack = sanitize(track)
  const sBudget = sanitize(budget)
  const sMessage = sanitize(message)
  const sUtmSource   = utmSource   ? sanitize(utmSource)   : ''
  const sUtmMedium   = utmMedium   ? sanitize(utmMedium)   : ''
  const sUtmCampaign = utmCampaign ? sanitize(utmCampaign) : ''
  const sUtmTerm     = utmTerm     ? sanitize(utmTerm)     : ''
  const sUtmContent  = utmContent  ? sanitize(utmContent)  : ''

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Atomeric <noreply@atomeric.com>',
      to: process.env.CONTACT_TO_EMAIL ?? 'atomeric14@gmail.com',
      replyTo: email,
      subject: `New strategy call request from ${name}${company ? ` — ${company}` : ''}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#060C18;color:#E8F0FA;border-radius:8px;">
          <h2 style="color:#0DBFAD;margin:0 0 24px;font-size:20px;letter-spacing:-0.5px;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#7B9CC0;font-size:13px;width:120px;">Name</td><td style="padding:8px 0;font-size:15px;">${sName}</td></tr>
            ${sCompany ? `<tr><td style="padding:8px 0;color:#7B9CC0;font-size:13px;">Company</td><td style="padding:8px 0;font-size:15px;">${sCompany}</td></tr>` : ''}
            <tr><td style="padding:8px 0;color:#7B9CC0;font-size:13px;">Email</td><td style="padding:8px 0;font-size:15px;"><a href="mailto:${sEmail}" style="color:#0DBFAD;">${sEmail}</a></td></tr>
            <tr><td style="padding:8px 0;color:#7B9CC0;font-size:13px;">Track</td><td style="padding:8px 0;font-size:15px;">${sTrack}</td></tr>
            <tr><td style="padding:8px 0;color:#7B9CC0;font-size:13px;">Budget</td><td style="padding:8px 0;font-size:15px;">${sBudget}</td></tr>
          </table>
          <div style="margin-top:24px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.07);">
            <p style="color:#7B9CC0;font-size:13px;margin:0 0 8px;">Message</p>
            <p style="font-size:15px;line-height:1.7;margin:0;white-space:pre-wrap;">${sMessage}</p>
          </div>
          ${sUtmSource || sUtmMedium || sUtmCampaign ? `
          <table style="width:100%;border-collapse:collapse;margin-top:24px;">
            <tr><td colspan="2" style="padding:16px 0 8px;color:#7B9CC0;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;border-top:1px solid rgba(255,255,255,0.07);">UTM Attribution</td></tr>
            <tr>
              <td style="padding:4px 0;color:#7B9CC0;font-size:13px;width:120px;">Source / Medium</td>
              <td style="padding:4px 0;font-size:15px;">${sUtmSource||'—'} / ${sUtmMedium||'—'}</td>
            </tr>
            <tr>
              <td style="padding:4px 0;color:#7B9CC0;font-size:13px;">Campaign</td>
              <td style="padding:4px 0;font-size:15px;">${sUtmCampaign||'—'}</td>
            </tr>
            ${sUtmTerm ? `<tr><td style="padding:4px 0;color:#7B9CC0;font-size:13px;">Term</td><td style="padding:4px 0;font-size:15px;">${sUtmTerm}</td></tr>` : ''}
            ${sUtmContent ? `<tr><td style="padding:4px 0;color:#7B9CC0;font-size:13px;">Content</td><td style="padding:4px 0;font-size:15px;">${sUtmContent}</td></tr>` : ''}
          </table>` : ''}
        </div>
      `,
    })
    return { success: true }
  } catch (err) {
    console.error('Resend error:', err)
    return { success: false, error: `Failed to send — please email us directly at ${process.env.CONTACT_TO_EMAIL ?? 'connect@atomeric.com'}.` }
  }
}
