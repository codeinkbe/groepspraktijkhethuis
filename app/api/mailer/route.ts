import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phoneNumber, message } = await request.json()

    // Create transporter (you'll need to configure this with your email provider)
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com', // Change this to your email provider
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, // Add this to your .env file
        pass: process.env.EMAIL_PASS, // Add this to your .env file
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'jeroen@codeink.be',
      subject: `Nieuw contactformulier bericht van ${firstName} ${lastName}`,
      html: `
        <h2>Nieuw bericht van het contactformulier</h2>
        <p><strong>Naam:</strong> ${firstName} ${lastName}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefoon:</strong> ${phoneNumber}</p>
        <p><strong>Bericht:</strong></p>
        <p>${message}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    )
  }
}
