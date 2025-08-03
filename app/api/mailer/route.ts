import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phoneNumber, message } = await request.json()

    // Create transporter - configured for Gmail by default
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Gmail SMTP
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use App Password for Gmail
      },
    })

    // Verify transporter configuration
    await transporter.verify()

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@groepspraktijkhethuis.be', // Updated to match your business email
      subject: `Nieuw contactformulier bericht van ${firstName} ${lastName}`,
      html: `
        <h2>Nieuw bericht van het contactformulier</h2>
        <p><strong>Naam:</strong> ${firstName} ${lastName}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefoon:</strong> ${phoneNumber}</p>
        <p><strong>Bericht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    
    // More detailed error logging
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
      },
      { status: 500 }
    )
  }
}
