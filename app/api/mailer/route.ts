import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phoneNumber, message } = await request.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !phoneNumber || !message) {
      return NextResponse.json(
        { error: 'Alle velden zijn verplicht' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ongeldig e-mailadres' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Groepspraktijk Het Huis <noreply@groepspraktijkhethuis.be>',
      to: ['info@groepspraktijkhethuis.be'],
      subject: `Nieuwe aanvraag van ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #416a7b; border-bottom: 2px solid #f15e2c; padding-bottom: 10px;">
            Nieuwe contactaanvraag
          </h2>
          
          <div style="background-color: #f7efe1; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #416a7b; margin-top: 0;">Contactgegevens</h3>
            <p><strong>Naam:</strong> ${firstName} ${lastName}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Telefoon:</strong> ${phoneNumber}</p>
          </div>
          
          <div style="background-color: #c4e2f7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #416a7b; margin-top: 0;">Bericht</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>Dit bericht werd verzonden via het contactformulier op groepspraktijkhethuis.be</p>
            <p>Verzonden op: ${new Date().toLocaleString('nl-BE', { 
              timeZone: 'Europe/Brussels',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Er is een fout opgetreden bij het versturen van het bericht' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json(
      { message: 'Bericht succesvol verzonden!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Er is een serverfout opgetreden' },
      { status: 500 }
    );
  }
}