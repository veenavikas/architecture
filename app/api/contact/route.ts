import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  projectType: z.string().min(1),
  location: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(20),
  referral: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || 'hello@rupasri.design';

    if (apiKey) {
      const { Resend } = await import('resend');
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: contactEmail,
        subject: `New Project Enquiry: ${data.projectType} — ${data.name}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; padding: 40px; background: #0A0A0A; color: #F5F0E8;">
            <h1 style="font-size: 28px; font-weight: 300; color: #C84B31; margin-bottom: 8px;">New Project Enquiry</h1>
            <p style="font-size: 12px; color: rgba(245,240,232,0.4); letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 32px;">via rupasri.design</p>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(245,240,232,0.1); font-size: 11px; color: #C84B31; text-transform: uppercase; letter-spacing: 0.15em; width: 140px;">Name</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(245,240,232,0.1);">${data.name}</td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(245,240,232,0.1); font-size: 11px; color: #C84B31; text-transform: uppercase; letter-spacing: 0.15em;">Email</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(245,240,232,0.1);"><a href="mailto:${data.email}" style="color: #F5F0E8;">${data.email}</a></td></tr>
              ${data.phone ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(245,240,232,0.1); font-size: 11px; color: #C84B31; text-transform: uppercase; letter-spacing: 0.15em;">Phone</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(245,240,232,0.1);">${data.phone}</td></tr>` : ''}
              <tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(245,240,232,0.1); font-size: 11px; color: #C84B31; text-transform: uppercase; letter-spacing: 0.15em;">Project Type</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(245,240,232,0.1);">${data.projectType}</td></tr>
              ${data.location ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(245,240,232,0.1); font-size: 11px; color: #C84B31; text-transform: uppercase; letter-spacing: 0.15em;">Location</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(245,240,232,0.1);">${data.location}</td></tr>` : ''}
              ${data.budget ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(245,240,232,0.1); font-size: 11px; color: #C84B31; text-transform: uppercase; letter-spacing: 0.15em;">Budget</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(245,240,232,0.1);">${data.budget}</td></tr>` : ''}
              ${data.referral ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(245,240,232,0.1); font-size: 11px; color: #C84B31; text-transform: uppercase; letter-spacing: 0.15em;">Referral</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(245,240,232,0.1);">${data.referral}</td></tr>` : ''}
            </table>

            <div style="margin-top: 32px; padding: 24px; border: 1px solid rgba(245,240,232,0.1); background: rgba(245,240,232,0.03);">
              <p style="font-size: 11px; color: #C84B31; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 12px;">Project Description</p>
              <p style="color: rgba(245,240,232,0.7); font-size: 15px; line-height: 1.8;">${data.message}</p>
            </div>
          </div>
        `,
      });
    } else {
      // Log if no API key – still return 200 for development
      console.log('Contact form submission (no Resend key configured):', data);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data', details: error.issues }, { status: 400 });
    }
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
