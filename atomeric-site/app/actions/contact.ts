'use server'

import { Resend } from 'resend'
import { headers } from 'next/headers'
import { contactSchema, type ContactFormValues } from '@/app/contact/schema'

// IP-based rate limiting: max 5 requests per IP per 10 minutes
const rateLimit = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimit.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return true
  }
  if (entry.count >= RATE_LIMIT_MAX) return false
  entry.count++
  return true
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

  if (!checkRateLimit(ip)) {
    return { success: false, error: 'Too many requests. Please wait a few minutes before trying again.' }
  }

  const parsed = contactSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: 'Invalid form data.' }
  }

  const { name, company, email, track, budget, message } = parsed.data

  const sName = sanitize(name)
  const sCompany = company ? sanitize(company) : ''
  const sEmail = sanitize(email)
  const sTrack = sanitize(track)
  const sBudget = sanitize(budget)
  const sMessage = sanitize(message)

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Atomeric <noreply@atomeric.com>',
      to: 'atomeric14@gmail.com',
      replyTo: email,
      subject: `New strategy call request from ${sName}${sCompany ? ` — ${sCompany}` : ''}`,
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
        </div>
      `,
    })
    return { success: true }
  } catch (err) {
    console.error('Resend error:', err)
    return { success: false, error: 'Failed to send — please email us directly at connect@atomeric.com.' }
  }
}
