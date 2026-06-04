import { getSupabase } from '@/lib/supabase'
import { Resend } from 'resend'

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await request.json()
    const { name, email, revenue, tier, message } = body

    const { error: dbError } = await getSupabase()
      .from('leads')
      .insert({ name, email, revenue, tier, message })

    if (dbError) console.error('[Contact] DB error:', dbError)

    const { error: emailError } = await resend.emails.send({
      from: 'HC Enterprises <onboarding@resend.dev>',
      to: process.env.NOTIFICATION_EMAIL!,
      subject: `🔔 New Lead: ${name} — ${tier || 'No tier selected'}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
          <h2 style="color:#D4AF6A;margin-bottom:4px;">New Lead Submitted</h2>
          <p style="color:#888;margin-top:0;font-size:14px;">${new Date().toLocaleString('en-CA')}</p>
          <hr style="border:1px solid #222;margin:20px 0;" />
          <table style="width:100%;border-collapse:collapse;font-size:15px;">
            <tr><td style="padding:8px 0;color:#888;width:140px;">Name</td><td style="color:#fff;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#888;">Email</td><td><a href="mailto:${email}" style="color:#D4AF6A;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#888;">Revenue</td><td style="color:#fff;">${revenue || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#888;">Tier Interest</td><td style="color:#fff;">${tier || 'Not sure yet'}</td></tr>
          </table>
          <hr style="border:1px solid #222;margin:20px 0;" />
          <p style="color:#888;margin-bottom:8px;font-size:14px;">Message</p>
          <p style="color:#fff;line-height:1.6;background:#111;padding:16px;border-radius:8px;">${message}</p>
          <hr style="border:1px solid #222;margin:20px 0;" />
          <a href="https://hc-enterprises.vercel.app/admin" style="display:inline-block;background:#D4AF6A;color:#000;font-weight:600;padding:12px 24px;text-decoration:none;border-radius:6px;">View in CRM →</a>
        </div>
      `,
    })

    if (emailError) console.error('[Contact] Email error:', emailError)

    return Response.json({ success: true })
  } catch (err) {
    console.error('[Contact] Error:', err)
    return Response.json({ success: false })
  }
}
