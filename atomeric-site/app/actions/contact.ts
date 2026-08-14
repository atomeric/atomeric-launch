'use server'

import { Resend } from 'resend'
import { contactSchema, type ContactFormValues } from '@/app/contact/schema'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(
  data: ContactFormValues
): Promise<{ success: boolean; error?: string }> {
  const parsed = contactSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: 'Invalid form data.' }
  }

  const { name, company, email, track, budget, message } = parsed.data

  try {
    await resend.emails.send({
      from: 'Atomeric <noreply@atomeric.com>',
      to: 'atomeric14@gmail.com',
      replyTo: email,
      subject: `New strategy call request from ${name}${company ? ` — ${company}` : ''}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#060C18;color:#E8F0FA;border-radius:8px;">
          <h2 style="color:#0DBFAD;margin:0 0 24px;font-size:20px;letter-spacing:-0.5px;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#7B9CC0;font-size:13px;width:120px;">Name</td><td style="padding:8px 0;font-size:15px;">${name}</td></tr>
            ${company ? `<tr><td style="padding:8px 0;color:#7B9CC0;font-size:13px;">Company</td><td style="padding:8px 0;font-size:15px;">${company}</td></tr>` : ''}
            <tr><td style="padding:8px 0;color:#7B9CC0;font-size:13px;">Email</td><td style="padding:8px 0;font-size:15px;"><a href="mailto:${email}" style="color:#0DBFAD;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#7B9CC0;font-size:13px;">Track</td><td style="padding:8px 0;font-size:15px;">${track}</td></tr>
            <tr><td style="padding:8px 0;color:#7B9CC0;font-size:13px;">Budget</td><td style="padding:8px 0;font-size:15px;">${budget}</td></tr>
          </table>
          <div style="margin-top:24px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.07);">
            <p style="color:#7B9CC0;font-size:13px;margin:0 0 8px;">Message</p>
            <p style="font-size:15px;line-height:1.7;margin:0;white-space:pre-wrap;">${message}</p>
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
